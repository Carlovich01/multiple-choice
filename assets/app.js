(function () {
  "use strict";

  const STORAGE_KEY = "ingsoft_mc_progress_v1";
  const THEME_KEY = "ingsoft_mc_theme_v1";
  const LETTERS = ["A", "B", "C", "D"];
  const DIFFICULTY_LABELS = {
    basica: "Básica",
    intermedia: "Intermedia",
    aplicada: "Aplicada"
  };

  const bank = window.EXAM_BANK;
  if (!bank || !bank.questions || !bank.questions.length) {
    console.error("No se pudo cargar el banco de preguntas.");
    return;
  }

  // Estado persistente
  function loadProgress() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { masteredIds: [], missedIds: [], history: [] };
      const parsed = JSON.parse(raw);
      return {
        masteredIds: Array.isArray(parsed.masteredIds) ? parsed.masteredIds : [],
        missedIds: Array.isArray(parsed.missedIds) ? parsed.missedIds : [],
        history: Array.isArray(parsed.history) ? parsed.history : []
      };
    } catch {
      return { masteredIds: [], missedIds: [], history: [] };
    }
  }

  function saveProgress(progress) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
    } catch {
      // Silencioso si localStorage está bloqueado
    }
  }

  const state = {
    progress: loadProgress(),
    session: null,
    lastConfig: null,
    reviewFilter: "all",
    timerInterval: null
  };

  // Utilidades
  const $ = (id) => document.getElementById(id);

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function formatRichText(str) {
    const escaped = escapeHtml(str);
    return escaped.replace(/`([^`]+)`/g, "<code>$1</code>");
  }

  function shuffle(array) {
    const arr = array.slice();
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function formatDuration(seconds) {
    const s = Math.max(0, Math.floor(seconds));
    const mins = Math.floor(s / 60);
    const secs = s % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  }

  function announce(message) {
    const el = $("live-announcer");
    el.textContent = "";
    setTimeout(() => {
      el.textContent = message;
    }, 30);
  }

  // Tema claro / oscuro
  function applyTheme(theme) {
    const isDark = theme === "dark";
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    $("btn-theme").setAttribute("aria-pressed", String(isDark));
    $("theme-label").textContent = isDark ? "Modo claro" : "Modo oscuro";
    try {
      localStorage.setItem(THEME_KEY, isDark ? "dark" : "light");
    } catch {
      // ignore
    }
  }

  function initTheme() {
    let saved = null;
    try {
      saved = localStorage.getItem(THEME_KEY);
    } catch {
      saved = null;
    }
    if (saved === "dark" || saved === "light") {
      applyTheme(saved);
    } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
      applyTheme("dark");
    } else {
      applyTheme("light");
    }
  }

  // Cambio de vistas
  function showView(viewId) {
    ["view-setup", "view-quiz", "view-results"].forEach((id) => {
      $(id).hidden = id !== viewId;
    });
    window.scrollTo({ top: 0, behavior: "auto" });
    $("main-content").focus();
  }

  // === VISTA 1: SETUP ===
  function getSelectedTopicIds() {
    return Array.from(document.querySelectorAll('input[name="topic"]:checked')).map((el) => el.value);
  }

  function getSelectedMode() {
    const checked = document.querySelector('input[name="mode"]:checked');
    return checked ? checked.value : "practice";
  }

  function getFilteredPool(topicIds, difficulty, mode) {
    let pool = bank.questions.filter((q) => topicIds.includes(q.topic));
    if (difficulty !== "all") {
      pool = pool.filter((q) => q.difficulty === difficulty);
    }
    if (mode === "mistakes") {
      const missedSet = new Set(state.progress.missedIds);
      pool = pool.filter((q) => missedSet.has(q.id));
    }
    return pool;
  }

  function renderSetupStats() {
    const total = bank.questions.length;
    const mastered = state.progress.masteredIds.length;
    const missed = state.progress.missedIds.length;

    $("total-bank-count").textContent = String(total);
    $("stat-mastered").textContent = `${mastered} / ${total}`;
    $("stat-missed").textContent = String(missed);
    $("mistakes-badge").textContent = String(missed);
    $("history-count").textContent = String(state.progress.history.length);

    if (state.progress.history.length > 0) {
      const best = Math.max(...state.progress.history.map((h) => h.percent));
      $("stat-best").textContent = `${best}%`;
    } else {
      $("stat-best").textContent = "—";
    }

    const mistakesInput = $("mode-mistakes-input");
    const mistakesLabel = $("mode-mistakes-label");
    mistakesInput.disabled = missed === 0;
    mistakesLabel.classList.toggle("disabled", missed === 0);
    if (missed === 0 && mistakesInput.checked) {
      document.querySelector('input[name="mode"][value="practice"]').checked = true;
    }
  }

  function renderTopics() {
    const container = $("topics-container");
    const prevChecked = new Set(getSelectedTopicIds());
    const initialLoad = container.children.length === 0;
    const masteredSet = new Set(state.progress.masteredIds);

    container.innerHTML = "";

    bank.topics.forEach((topic) => {
      const topicQs = bank.questions.filter((q) => q.topic === topic.id);
      const masteredCount = topicQs.filter((q) => masteredSet.has(q.id)).length;
      const pct = topicQs.length ? Math.round((masteredCount / topicQs.length) * 100) : 0;
      const isChecked = initialLoad ? true : prevChecked.has(topic.id);

      const label = document.createElement("label");
      label.className = `topic-card${isChecked ? " selected" : ""}`;

      const filesHtml = topic.files
        .map((f) => `<span class="file-chip" title="${escapeHtml(f)}">${escapeHtml(f)}</span>`)
        .join("");

      label.innerHTML = `
        <input type="checkbox" name="topic" value="${escapeHtml(topic.id)}" ${isChecked ? "checked" : ""}>
        <span class="topic-card-body">
          <span class="topic-card-top">
            <span class="topic-title">${escapeHtml(topic.title)}</span>
            <span class="topic-count">${topicQs.length} preguntas</span>
          </span>
          <p class="topic-desc">${escapeHtml(topic.description)}</p>
          <span class="topic-files">${filesHtml}</span>
          <span class="topic-mastery">
            <span>Dominio: ${masteredCount}/${topicQs.length} (${pct}%)</span>
            <span class="mini-bar" aria-hidden="true">
              <span class="mini-bar-fill" style="width: ${pct}%"></span>
            </span>
          </span>
        </span>
      `;

      const checkbox = label.querySelector("input");
      checkbox.addEventListener("change", () => {
        label.classList.toggle("selected", checkbox.checked);
        updateSetupAvailability();
      });

      container.appendChild(label);
    });
  }

  function updateSetupAvailability() {
    const topicIds = getSelectedTopicIds();
    const difficulty = $("select-difficulty").value;
    const mode = getSelectedMode();
    const pool = getFilteredPool(topicIds, difficulty, mode);

    $("timer-group").hidden = mode !== "exam";
    $("topic-error").hidden = topicIds.length > 0;

    const note = $("availability-note");
    if (topicIds.length === 0) {
      note.innerHTML = "Seleccioná al menos un tema para ver las preguntas disponibles.";
      $("btn-start").disabled = true;
    } else if (pool.length === 0) {
      note.innerHTML =
        mode === "mistakes"
          ? "No tenés errores pendientes en los temas y dificultad elegidos."
          : "No hay preguntas que coincidan con este filtro.";
      $("btn-start").disabled = true;
    } else {
      const requested = $("select-count").value;
      const effective = requested === "all" ? pool.length : Math.min(Number(requested), pool.length);
      note.innerHTML = `Disponibles según tu filtro: <strong>${pool.length}</strong> preguntas (se incluirán <strong>${effective}</strong>).`;
      $("btn-start").disabled = false;
    }
  }

  function renderHistory() {
    const list = $("history-list");
    const items = state.progress.history;
    if (!items.length) {
      list.innerHTML = '<p class="muted">Todavía no completaste ningún examen. ¡Empezá tu primer repaso!</p>';
      return;
    }

    const modeNames = {
      practice: "Práctica guiada",
      exam: "Simulacro de parcial",
      mistakes: "Repaso de errores"
    };

    list.innerHTML = items
      .slice()
      .reverse()
      .slice(0, 12)
      .map((entry) => {
        const dateStr = new Date(entry.date).toLocaleString("es-AR", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit"
        });
        return `
          <div class="history-item">
            <div>
              <strong>${escapeHtml(modeNames[entry.mode] || entry.mode)}</strong>
              <div class="history-meta">${escapeHtml(dateStr)} · ${entry.correct}/${entry.total} aciertos · ${formatDuration(entry.durationSec)}</div>
            </div>
            <div class="history-score">${entry.percent}% (Nota ${entry.grade})</div>
          </div>
        `;
      })
      .join("");
  }

  // === VISTA 2: MOTOR DEL EXAMEN ===
  function buildSession(config, customQuestionIds) {
    let pool;
    if (Array.isArray(customQuestionIds) && customQuestionIds.length > 0) {
      const idSet = new Set(customQuestionIds);
      pool = bank.questions.filter((q) => idSet.has(q.id));
    } else {
      pool = getFilteredPool(config.topicIds, config.difficulty, config.mode);
    }

    if (config.shuffleQuestions) {
      pool = shuffle(pool);
    }

    const limit = config.count === "all" ? pool.length : Math.min(Number(config.count), pool.length);
    const chosen = pool.slice(0, limit);

    const items = chosen.map((q) => {
      const indexedOptions = q.options.map((text, origIdx) => ({ text, origIdx }));
      const finalOptions = config.shuffleOptions ? shuffle(indexedOptions) : indexedOptions;
      const correctIndex = finalOptions.findIndex((o) => o.origIdx === q.answer);
      return {
        question: q,
        options: finalOptions.map((o) => o.text),
        correctIndex,
        selectedIndex: null,
        checked: false,
        flagged: false
      };
    });

    return {
      config,
      items,
      currentIndex: 0,
      startedAt: Date.now(),
      remainingSec: config.mode === "exam" && config.timerMinutes > 0 ? config.timerMinutes * 60 : null,
      finished: false
    };
  }

  function startSession(config, customQuestionIds) {
    stopTimer();
    const session = buildSession(config, customQuestionIds);
    if (!session.items.length) return;

    state.session = session;
    state.lastConfig = config;

    const modeLabels = {
      practice: "Práctica guiada",
      exam: "Simulacro de parcial",
      mistakes: "Repaso de errores"
    };
    $("quiz-mode-pill").textContent = modeLabels[config.mode] || "Examen";
    $("total-count").textContent = String(session.items.length);

    const isImmediate = config.mode !== "exam";
    $("legend-correct").hidden = !isImmediate;
    $("legend-wrong").hidden = !isImmediate;
    $("question-map-panel").hidden = true;
    $("btn-toggle-map").setAttribute("aria-expanded", "false");

    if (session.remainingSec !== null) {
      $("quiz-timer").hidden = false;
      updateTimerDisplay();
      state.timerInterval = setInterval(() => {
        if (!state.session || state.session.finished) {
          stopTimer();
          return;
        }
        state.session.remainingSec -= 1;
        updateTimerDisplay();
        if (state.session.remainingSec <= 0) {
          stopTimer();
          announce("Se terminó el tiempo del simulacro. Corrigiendo examen.");
          finishSession();
        }
      }, 1000);
    } else {
      $("quiz-timer").hidden = true;
    }

    showView("view-quiz");
    renderCurrentQuestion();
    announce(`Examen iniciado con ${session.items.length} preguntas.`);
  }

  function stopTimer() {
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
  }

  function updateTimerDisplay() {
    const sec = state.session.remainingSec;
    const el = $("quiz-timer");
    el.textContent = `⏱ ${formatDuration(sec)}`;
    el.classList.toggle("low", sec <= 120);
  }

  function renderQuestionMap() {
    const session = state.session;
    const grid = $("question-map-grid");
    const isImmediate = session.config.mode !== "exam";

    grid.innerHTML = "";
    session.items.forEach((item, idx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "map-btn";
      btn.textContent = String(idx + 1);

      const states = [];
      if (idx === session.currentIndex) {
        btn.classList.add("current");
        btn.setAttribute("aria-current", "step");
        states.push("actual");
      }
      if (item.flagged) {
        btn.classList.add("flagged");
        states.push("marcada para revisar");
      }
      if (isImmediate && item.checked) {
        const ok = item.selectedIndex === item.correctIndex;
        btn.classList.add(ok ? "correct" : "wrong");
        states.push(ok ? "correcta" : "incorrecta");
      } else if (item.selectedIndex !== null) {
        btn.classList.add("answered");
        states.push("respondida");
      } else {
        states.push("sin responder");
      }

      btn.setAttribute("aria-label", `Pregunta ${idx + 1}: ${states.join(", ")}`);
      btn.addEventListener("click", () => {
        session.currentIndex = idx;
        renderCurrentQuestion();
      });
      grid.appendChild(btn);
    });
  }

  function renderCurrentQuestion() {
    const session = state.session;
    const idx = session.currentIndex;
    const item = session.items[idx];
    const q = item.question;
    const total = session.items.length;
    const isImmediate = session.config.mode !== "exam";

    // Progreso
    const answeredCount = session.items.filter((it) => it.selectedIndex !== null).length;
    const pct = Math.round(((idx + 1) / total) * 100);
    $("quiz-progress-text").textContent = `Pregunta ${idx + 1} de ${total}`;
    $("answered-count").textContent = String(answeredCount);
    $("quiz-progressbar").setAttribute("aria-valuenow", String(pct));
    $("quiz-progress-fill").style.width = `${pct}%`;

    // Etiquetas
    const topicObj = bank.topicMap[q.topic];
    $("q-topic-badge").textContent = topicObj ? topicObj.shortTitle : q.topic;
    $("q-difficulty-badge").textContent = `Dificultad: ${DIFFICULTY_LABELS[q.difficulty] || q.difficulty}`;

    // Bandera
    $("btn-flag").setAttribute("aria-pressed", String(item.flagged));
    $("flag-label").textContent = item.flagged ? "Marcada para revisar" : "Marcar para revisar";

    // Enunciado y código
    $("quiz-question-heading").innerHTML = formatRichText(q.question);
    if (q.code) {
      $("q-code-wrapper").hidden = false;
      $("q-code-lang").textContent = q.codeLang || "código";
      $("q-code-content").textContent = q.code;
    } else {
      $("q-code-wrapper").hidden = true;
    }

    // Opciones
    const optionsContainer = $("q-options");
    optionsContainer.innerHTML = "";
    const locked = isImmediate && item.checked;

    item.options.forEach((optText, optIdx) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "option-btn";
      btn.setAttribute("role", "radio");
      btn.setAttribute("aria-checked", String(item.selectedIndex === optIdx));
      btn.disabled = locked;

      let statusSymbol = "";
      if (locked) {
        if (optIdx === item.correctIndex) {
          btn.classList.add("is-correct");
          statusSymbol = '<span class="option-status-icon" aria-label="Respuesta correcta">✓</span>';
        } else if (optIdx === item.selectedIndex) {
          btn.classList.add("is-wrong");
          statusSymbol = '<span class="option-status-icon" aria-label="Tu respuesta incorrecta">✗</span>';
        }
      } else if (item.selectedIndex === optIdx) {
        btn.classList.add("selected");
      }

      btn.innerHTML = `
        <span class="option-letter" aria-hidden="true">${LETTERS[optIdx]}</span>
        <span class="option-text">${formatRichText(optText)}</span>
        ${statusSymbol}
      `;

      btn.addEventListener("click", () => selectOption(optIdx));
      optionsContainer.appendChild(btn);
    });

    // Feedback inmediato
    const fb = $("q-feedback");
    if (isImmediate && item.checked) {
      const isRight = item.selectedIndex === item.correctIndex;
      fb.hidden = false;
      fb.className = `feedback-box ${isRight ? "correct" : "wrong"}`;
      $("feedback-status").textContent = isRight
        ? "✓ ¡Respuesta correcta!"
        : `✗ Respuesta incorrecta · La correcta es la opción ${LETTERS[item.correctIndex]}`;
      $("feedback-source").textContent = `Fuente: ${q.source}`;
      $("feedback-explanation").innerHTML = formatRichText(q.explanation);
    } else {
      fb.hidden = true;
    }

    // Navegación
    $("btn-prev").disabled = idx === 0;
    const isLast = idx === total - 1;
    $("btn-next").hidden = isLast;

    if (session.config.mode === "exam") {
      $("btn-finish").hidden = false;
      $("btn-finish").textContent = isLast ? "Finalizar y corregir" : "Entregar examen";
    } else {
      $("btn-finish").hidden = !isLast && answeredCount === 0;
      $("btn-finish").textContent = isLast ? "Ver resultados" : "Terminar y ver nota";
    }

    renderQuestionMap();
  }

  function selectOption(optIdx) {
    const session = state.session;
    if (!session || session.finished) return;
    const item = session.items[session.currentIndex];
    const isImmediate = session.config.mode !== "exam";

    if (isImmediate && item.checked) return;

    item.selectedIndex = optIdx;
    if (isImmediate) {
      item.checked = true;
      const isRight = optIdx === item.correctIndex;
      announce(
        isRight
          ? `Correcto. ${item.question.explanation}`
          : `Incorrecto. La respuesta correcta es la opción ${LETTERS[item.correctIndex]}.`
      );
    } else {
      announce(`Opción ${LETTERS[optIdx]} seleccionada.`);
    }

    renderCurrentQuestion();
  }

  function toggleFlag() {
    const session = state.session;
    if (!session || session.finished) return;
    const item = session.items[session.currentIndex];
    item.flagged = !item.flagged;
    renderCurrentQuestion();
    announce(item.flagged ? "Pregunta marcada para revisar." : "Marca removida.");
  }

  function goPrev() {
    if (!state.session || state.session.currentIndex <= 0) return;
    state.session.currentIndex -= 1;
    renderCurrentQuestion();
  }

  function goNext() {
    if (!state.session) return;
    if (state.session.currentIndex < state.session.items.length - 1) {
      state.session.currentIndex += 1;
      renderCurrentQuestion();
    }
  }

  function requestFinish() {
    const session = state.session;
    if (!session || session.finished) return;
    const unanswered = session.items.filter((it) => it.selectedIndex === null).length;
    const flagged = session.items.filter((it) => it.flagged).length;

    if (unanswered > 0 || (session.config.mode === "exam" && flagged > 0)) {
      const parts = [];
      if (unanswered > 0) parts.push(`${unanswered} pregunta(s) sin responder`);
      if (flagged > 0) parts.push(`${flagged} marcada(s) para revisar`);
      const ok = window.confirm(`Tenés ${parts.join(" y ")}. ¿Querés finalizar y corregir el examen ahora?`);
      if (!ok) return;
    }
    finishSession();
  }

  function finishSession() {
    stopTimer();
    const session = state.session;
    if (!session || session.finished) return;
    session.finished = true;

    const durationSec = Math.max(1, Math.round((Date.now() - session.startedAt) / 1000));
    const total = session.items.length;
    let correct = 0;
    let unanswered = 0;

    const masteredSet = new Set(state.progress.masteredIds);
    const missedSet = new Set(state.progress.missedIds);

    session.items.forEach((item) => {
      const qId = item.question.id;
      if (item.selectedIndex === null) {
        unanswered += 1;
        missedSet.add(qId);
        masteredSet.delete(qId);
      } else if (item.selectedIndex === item.correctIndex) {
        correct += 1;
        masteredSet.add(qId);
        missedSet.delete(qId);
      } else {
        missedSet.add(qId);
        masteredSet.delete(qId);
      }
    });

    const percent = Math.round((correct / total) * 100);
    const grade = ((correct / total) * 10).toFixed(1).replace(".", ",");

    state.progress.masteredIds = Array.from(masteredSet);
    state.progress.missedIds = Array.from(missedSet);
    state.progress.history.push({
      date: new Date().toISOString(),
      mode: session.config.mode,
      correct,
      total,
      percent,
      grade,
      durationSec
    });
    saveProgress(state.progress);

    renderResults(session, { correct, total, unanswered, percent, grade, durationSec });
    showView("view-results");
    announce(`Examen finalizado. Obtuviste ${correct} de ${total} respuestas correctas, equivalente a ${percent} por ciento.`);
  }

  // === VISTA 3: RESULTADOS ===
  function renderResults(session, stats) {
    const ring = $("results-ring");
    ring.className = "score-ring";
    let verdict = "";
    let summary = "";

    if (stats.percent >= 80) {
      ring.classList.add("pass");
      verdict = "Excelente dominio";
      summary = "Muy sólido en los contenidos de los apuntes. Podés repasar las excepciones o probar un simulacro más largo.";
    } else if (stats.percent >= 60) {
      ring.classList.add("warn");
      verdict = "Aprobado · con margen de mejora";
      summary = "Buena base general. Revisá abajo las explicaciones de las preguntas incorrectas para afianzar los detalles.";
    } else {
      ring.classList.add("fail");
      verdict = "Conviene reforzar";
      summary = "Usá el botón «Repasar solo los errores» y revisá las citas a cada PDF para consolidar estos temas.";
    }

    $("results-percent").textContent = `${stats.percent}%`;
    $("results-verdict").textContent = verdict;
    $("results-summary-text").textContent = summary;
    $("kpi-correct").textContent = `${stats.correct} / ${stats.total}`;
    $("kpi-grade").textContent = stats.grade;
    $("kpi-time").textContent = formatDuration(stats.durationSec);
    $("kpi-unanswered").textContent = String(stats.unanswered);

    const wrongItems = session.items.filter((it) => it.selectedIndex !== it.correctIndex);
    const retryBtn = $("btn-retry-mistakes");
    if (wrongItems.length > 0) {
      retryBtn.hidden = false;
      $("retry-mistakes-count").textContent = String(wrongItems.length);
    } else {
      retryBtn.hidden = true;
    }

    // Desglose por tema
    const breakdownContainer = $("topic-breakdown");
    breakdownContainer.innerHTML = "";
    bank.topics.forEach((topic) => {
      const items = session.items.filter((it) => it.question.topic === topic.id);
      if (!items.length) return;
      const ok = items.filter((it) => it.selectedIndex === it.correctIndex).length;
      const pct = Math.round((ok / items.length) * 100);
      const cls = pct >= 80 ? "pass" : pct >= 60 ? "warn" : "fail";

      const row = document.createElement("div");
      row.className = "breakdown-row";
      row.innerHTML = `
        <div class="breakdown-top">
          <strong>${escapeHtml(topic.title)}</strong>
          <span>${ok}/${items.length} (${pct}%)</span>
        </div>
        <div class="breakdown-bar" role="progressbar" aria-label="${escapeHtml(topic.title)}: ${pct}%" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}">
          <div class="breakdown-bar-fill ${cls}" style="width: ${pct}%"></div>
        </div>
      `;
      breakdownContainer.appendChild(row);
    });

    state.reviewFilter = "all";
    updateFilterTabUI();
    renderReviewList();
    renderSetupStats();
    renderTopics();
    renderHistory();
  }

  function updateFilterTabUI() {
    document.querySelectorAll(".filter-tab").forEach((btn) => {
      const active = btn.dataset.filter === state.reviewFilter;
      btn.classList.toggle("active", active);
      btn.setAttribute("aria-selected", String(active));
    });
  }

  function renderReviewList() {
    const session = state.session;
    if (!session) return;
    const container = $("review-list");

    const filtered = session.items
      .map((item, idx) => ({ item, idx }))
      .filter(({ item }) => {
        const isCorrect = item.selectedIndex === item.correctIndex;
        if (state.reviewFilter === "wrong") return !isCorrect;
        if (state.reviewFilter === "correct") return isCorrect;
        if (state.reviewFilter === "flagged") return item.flagged;
        return true;
      });

    if (!filtered.length) {
      container.innerHTML = '<p class="muted">No hay preguntas en esta categoría.</p>';
      return;
    }

    container.innerHTML = filtered
      .map(({ item, idx }) => {
        const q = item.question;
        const topicObj = bank.topicMap[q.topic];
        const isCorrect = item.selectedIndex === item.correctIndex;
        const statusText = isCorrect
          ? "✓ Correcta"
          : item.selectedIndex === null
          ? "✗ Sin responder"
          : "✗ Incorrecta";

        const codeHtml = q.code
          ? `<div class="code-block-wrapper"><div class="code-block-header"><span class="code-lang">${escapeHtml(q.codeLang || "código")}</span></div><pre class="code-block"><code>${escapeHtml(q.code)}</code></pre></div>`
          : "";

        const userAnswerHtml =
          !isCorrect && item.selectedIndex !== null
            ? `<div class="review-answer-line user-wrong"><strong>Tu respuesta (${LETTERS[item.selectedIndex]}):</strong> ${formatRichText(item.options[item.selectedIndex])}</div>`
            : "";

        const rightAnswerHtml = `<div class="review-answer-line right-ans"><strong>Respuesta correcta (${LETTERS[item.correctIndex]}):</strong> ${formatRichText(item.options[item.correctIndex])}</div>`;

        return `
          <article class="review-item ${isCorrect ? "correct" : "wrong"}">
            <div class="review-item-head">
              <div>
                <span class="pill pill-neutral">#${idx + 1} · ${escapeHtml(topicObj ? topicObj.shortTitle : q.topic)}</span>
                ${item.flagged ? '<span class="pill pill-outline">⚑ Marcada</span>' : ""}
              </div>
              <span class="review-status ${isCorrect ? "correct" : "wrong"}">${statusText}</span>
            </div>
            <p class="review-q">${formatRichText(q.question)}</p>
            ${codeHtml}
            <div class="review-answers">
              ${userAnswerHtml}
              ${rightAnswerHtml}
            </div>
            <p class="review-explanation"><strong>Explicación:</strong> ${formatRichText(q.explanation)}</p>
            <p class="review-source">Fuente: ${escapeHtml(q.source)}</p>
          </article>
        `;
      })
      .join("");
  }

  // === EVENTOS ===
  function bindEvents() {
    $("btn-theme").addEventListener("click", () => {
      const current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });

    $("btn-history").addEventListener("click", () => {
      const panel = $("history-panel");
      const open = panel.hidden;
      panel.hidden = !open;
      $("btn-history").setAttribute("aria-expanded", String(open));
      if (open) renderHistory();
    });

    $("btn-close-history").addEventListener("click", () => {
      $("history-panel").hidden = true;
      $("btn-history").setAttribute("aria-expanded", "false");
    });

    $("btn-reset-progress").addEventListener("click", () => {
      const ok = window.confirm("¿Seguro que querés borrar tu historial, estadísticas y registro de preguntas dominadas?");
      if (!ok) return;
      state.progress = { masteredIds: [], missedIds: [], history: [] };
      saveProgress(state.progress);
      renderSetupStats();
      renderTopics();
      renderHistory();
      updateSetupAvailability();
      announce("Progreso reiniciado.");
    });

    $("btn-select-all").addEventListener("click", () => {
      document.querySelectorAll('input[name="topic"]').forEach((cb) => {
        cb.checked = true;
        cb.closest(".topic-card").classList.add("selected");
      });
      updateSetupAvailability();
    });

    $("btn-select-none").addEventListener("click", () => {
      document.querySelectorAll('input[name="topic"]').forEach((cb) => {
        cb.checked = false;
        cb.closest(".topic-card").classList.remove("selected");
      });
      updateSetupAvailability();
    });

    document.querySelectorAll('input[name="mode"]').forEach((r) => {
      r.addEventListener("change", updateSetupAvailability);
    });
    $("select-count").addEventListener("change", updateSetupAvailability);
    $("select-difficulty").addEventListener("change", updateSetupAvailability);

    $("setup-form").addEventListener("submit", (e) => {
      e.preventDefault();
      const topicIds = getSelectedTopicIds();
      if (!topicIds.length) {
        $("topic-error").hidden = false;
        return;
      }
      const config = {
        topicIds,
        mode: getSelectedMode(),
        count: $("select-count").value,
        difficulty: $("select-difficulty").value,
        timerMinutes: Number($("select-timer").value),
        shuffleQuestions: $("chk-shuffle-questions").checked,
        shuffleOptions: $("chk-shuffle-options").checked
      };
      startSession(config);
    });

    // Controles del examen
    $("btn-toggle-map").addEventListener("click", () => {
      const panel = $("question-map-panel");
      const open = panel.hidden;
      panel.hidden = !open;
      $("btn-toggle-map").setAttribute("aria-expanded", String(open));
    });

    $("btn-exit-quiz").addEventListener("click", () => {
      const ok = window.confirm("¿Salir del examen en curso? Se perderá el progreso de este intento.");
      if (!ok) return;
      stopTimer();
      state.session = null;
      renderSetupStats();
      renderTopics();
      updateSetupAvailability();
      showView("view-setup");
    });

    $("btn-flag").addEventListener("click", toggleFlag);
    $("btn-prev").addEventListener("click", goPrev);
    $("btn-next").addEventListener("click", goNext);
    $("btn-finish").addEventListener("click", requestFinish);

    // Resultados
    $("btn-retry-mistakes").addEventListener("click", () => {
      if (!state.session) return;
      const wrongIds = state.session.items
        .filter((it) => it.selectedIndex !== it.correctIndex)
        .map((it) => it.question.id);
      if (!wrongIds.length) return;
      const cfg = {
        ...state.lastConfig,
        mode: "practice",
        count: "all",
        timerMinutes: 0
      };
      startSession(cfg, wrongIds);
    });

    $("btn-new-same").addEventListener("click", () => {
      if (!state.lastConfig) {
        showView("view-setup");
        return;
      }
      startSession(state.lastConfig);
    });

    $("btn-back-setup").addEventListener("click", () => {
      renderSetupStats();
      renderTopics();
      updateSetupAvailability();
      showView("view-setup");
    });

    document.querySelectorAll(".filter-tab").forEach((tab) => {
      tab.addEventListener("click", () => {
        state.reviewFilter = tab.dataset.filter;
        updateFilterTabUI();
        renderReviewList();
      });
    });

    // Atajos de teclado durante el examen
    document.addEventListener("keydown", (e) => {
      if ($("view-quiz").hidden || !state.session || state.session.finished) return;
      const tag = document.activeElement ? document.activeElement.tagName : "";
      if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA") return;

      const key = e.key.toLowerCase();
      const idxMap = { "1": 0, "2": 1, "3": 2, "4": 3, a: 0, b: 1, c: 2, d: 3 };
      if (key in idxMap) {
        const optIdx = idxMap[key];
        if (optIdx < state.session.items[state.session.currentIndex].options.length) {
          e.preventDefault();
          selectOption(optIdx);
        }
        return;
      }

      if (key === "f") {
        e.preventDefault();
        toggleFlag();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goNext();
      } else if (e.key === "Enter" && tag !== "BUTTON") {
        const item = state.session.items[state.session.currentIndex];
        const isLast = state.session.currentIndex === state.session.items.length - 1;
        if (item.selectedIndex !== null) {
          e.preventDefault();
          if (isLast) requestFinish();
          else goNext();
        }
      }
    });
  }

  // Inicialización
  initTheme();
  renderSetupStats();
  renderTopics();
  renderHistory();
  updateSetupAvailability();
  bindEvents();
})();
