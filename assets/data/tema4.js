window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.accesibilidad = [
  {
    id: "t4-01",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 1, pp. 1-2)",
    difficulty: "basica",
    question: "Según el enfoque del apunte de Accesibilidad Web, ¿por qué se afirma que la falta de accesibilidad es una «barrera de diseño» y qué tipos de situaciones abarca la discapacidad?",
    options: [
      "Porque el problema no está en la persona sino en decisiones de diseño excluyentes; además la discapacidad puede ser permanente, temporal (un brazo enyesado) o de contexto (el celular al sol o un ambiente ruidoso).",
      "Porque la accesibilidad solo beneficia a personas con discapacidad visual permanente.",
      "Porque las barreras existen únicamente en computadoras antiguas sin mouse.",
      "Porque los subtítulos y el alto contraste empeoran la experiencia de los usuarios sin discapacidad."
    ],
    answer: 0,
    explanation: "Una web accesible puede ser usada por personas con distintas capacidades y condiciones. La falta de accesibilidad es una barrera de diseño, y diseñar de forma accesible mejora el uso para todos (discapacidades permanentes, temporales y de contexto; los subtítulos son el ejemplo clásico)."
  },
  {
    id: "t4-02",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 1, pp. 1-2)",
    difficulty: "basica",
    question: "¿Qué correspondencia es correcta entre tipo de barrera, ejemplo de falla y tecnología/soporte de apoyo?",
    options: [
      "Visual: video sin subtítulos / teclado; Motriz: texto con poco contraste / lector de pantalla.",
      "Visual (baja visión, ceguera, daltonismo): poco contraste o imagen sin descripción / lector de pantalla y ampliación. Motriz (temblores, parálisis, brazo enyesado): menú que solo abre con mouse / teclado, conmutadores, voz. Cognitiva: formulario que vence en pocos segundos o texto confuso / lenguaje simple y más tiempo.",
      "Auditiva: menú que solo funciona con mouse / ampliación de pantalla.",
      "Cognitiva: imagen sin `alt` / subtítulos en vivo."
    ],
    answer: 1,
    explanation: "El cuadro de la sección 1 clasifica cuatro barreras: Visual (lector de pantalla, ampliación), Auditiva (subtítulos, transcripciones), Motriz (teclado, conmutadores, voz) y Cognitiva (lenguaje simple, más tiempo)."
  },
  {
    id: "t4-03",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 2, p. 2)",
    difficulty: "basica",
    question: "¿Qué significan las siglas POUR correspondientes a los cuatro principios de las pautas WCAG del W3C?",
    options: [
      "Portable, Optimizable, Usable y Rápido.",
      "Perceptible, Operable, Comprensible y Robusto.",
      "Público, Ordenado, Universal y Responsivo.",
      "Predecible, Organizado, Uniforme y Reutilizable."
    ],
    answer: 1,
    explanation: "Los cuatro principios WCAG son Perceptible (llega por al menos un sentido), Operable (se maneja sin mouse y sin trampas de tiempo), Comprensible (se entiende y comporta como se espera) y Robusto (funciona con tecnologías de apoyo hoy y mañana, con nombre, rol y valor)."
  },
  {
    id: "t4-04",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 2, pp. 2-3)",
    difficulty: "aplicada",
    question: "Clasificá respectivamente las siguientes tres fallas según el principio POUR principal que violan: (1) texto gris claro sobre fondo blanco, (2) un menú desplegable que solo funciona con mouse y no con Tab/Enter, y (3) un formulario que borra todos los campos al cometer un error.",
    options: [
      "(1) Perceptible, (2) Operable, (3) Comprensible.",
      "(1) Robusto, (2) Comprensible, (3) Perceptible.",
      "(1) Operable, (2) Perceptible, (3) Robusto.",
      "(1) Comprensible, (2) Robusto, (3) Operable."
    ],
    answer: 0,
    explanation: "Texto de bajo contraste impide percibir la información (Perceptible); no poder operar con teclado ni ver el foco viola Operable; comportamientos inesperados como borrar todo un formulario al equivocarse o no declarar el idioma violan Comprensible."
  },
  {
    id: "t4-05",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 2, p. 3)",
    difficulty: "intermedia",
    question: "¿Puede una misma falla de accesibilidad (por ejemplo, un botón sin nombre accesible) asociarse a más de un principio POUR?",
    options: [
      "No, cada falla viola estrictamente un único principio y cualquier otra clasificación es incorrecta.",
      "Sí: dependiendo de cómo se argumente, un botón sin nombre accesible puede clasificarse como violación de Perceptible (falta la alternativa de texto) o de Robusto (falta nombre, rol y valor para el lector de pantalla).",
      "Solo si el sitio aspira al nivel AAA.",
      "Únicamente cuando se detecta con WAVE pero no con pa11y."
    ],
    answer: 1,
    explanation: "El apunte aclara expresamente en la página 3 que una misma falla puede violar más de un principio según la argumentación (por ejemplo, botón sin nombre accesible → Perceptible o Robusto, siempre que se justifique)."
  },
  {
    id: "t4-06",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 3, p. 3)",
    difficulty: "basica",
    question: "¿Cómo se relacionan los niveles de conformidad A, AA y AAA de WCAG, cuál suelen exigir las normativas y por qué no se exige AAA a un sitio entero?",
    options: [
      "Son independientes entre sí; las normativas suelen exigir solo A y AAA no se exige por costo de servidor.",
      "Son acumulativos (cumplir AA implica cumplir A); las normativas suelen exigir nivel AA; y AAA no se pide como regla para un sitio completo porque existe contenido que no puede cumplirlo.",
      "AAA es el nivel mínimo básico y A el más exigente.",
      "Solo el nivel A incluye requisitos de texto alternativo y subtítulos."
    ],
    answer: 1,
    explanation: "Cada nivel incluye los criterios del anterior (AA incluye A; AAA incluye AA y A). AA es el estándar habitual de las normativas, mientras que AAA no se exige para un sitio entero porque hay tipos de contenido que no pueden satisfacer todos sus criterios."
  },
  {
    id: "t4-07",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 3, pp. 3-4)",
    difficulty: "aplicada",
    question: "Según la tabla de contraste de WCAG del apunte (y su pregunta de autoevaluación), un texto de 14 pt en negrita (considerado texto grande) tiene una relación de contraste de 3,5 a 1 contra el fondo. ¿Qué niveles cumple?",
    options: [
      "No cumple ni AA ni AAA.",
      "Cumple AA (requiere 3:1 en texto grande), pero NO cumple AAA (requiere 4,5:1 en texto grande).",
      "Cumple tanto AA como AAA.",
      "Solo cumple AAA pero no AA."
    ],
    answer: 1,
    explanation: "Las relaciones de contraste son: Nivel A (no fija relación), Nivel AA (4,5:1 en texto normal; 3:1 en texto grande), Nivel AAA (7:1 en texto normal; 4,5:1 en texto grande). Como 14 pt negrita es texto grande y 3,5:1 ≥ 3:1 pero < 4,5:1, cumple AA pero no AAA."
  },
  {
    id: "t4-08",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 3, p. 3)",
    difficulty: "intermedia",
    question: "Respecto a las versiones de WCAG (2.0, 2.1 y 2.2 publicada en octubre de 2023), ¿cómo funciona la compatibilidad hacia atrás y cuál es la única excepción mencionada?",
    options: [
      "Las versiones son incompatibles entre sí y cada una reemplaza todos los criterios anteriores.",
      "Cada versión agrega criterios manteniéndose compatible hacia atrás (cumplir 2.2 implica cumplir 2.1 y 2.0), con la única excepción del criterio 4.1.1 (Análisis sintáctico), que WCAG 2.2 declaró obsoleto.",
      "WCAG 2.2 eliminó los niveles A y AA dejando únicamente AAA.",
      "WCAG 2.2 derogó el requisito de texto alternativo en imágenes."
    ],
    answer: 1,
    explanation: "WCAG 2.0, 2.1 y 2.2 (W3C, octubre 2023) son compatibles hacia atrás, excepto por el criterio 4.1.1 (Análisis sintáctico / Parsing), que fue declarado obsoleto en la versión 2.2."
  },
  {
    id: "t4-09",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 4, pp. 4-5)",
    difficulty: "basica",
    question: "En el marco legal argentino de accesibilidad web, ¿qué organismo controla el cumplimiento de la Ley 26.653 y qué organismo aplica las sanciones según el Decreto 656/2019?",
    options: [
      "El W3C controla el cumplimiento y el Ministerio de Educación aplica las sanciones.",
      "La ONTI (Oficina Nacional de Tecnologías de Información) es la autoridad de aplicación que controla y monitorea los incumplimientos, y la Agencia Nacional de Discapacidad aplica las sanciones.",
      "La Agencia Nacional de Discapacidad redacta los criterios técnicos y cada navegador aplica las sanciones.",
      "La Ley 26.653 todavía no tiene decreto reglamentario ni autoridad de aplicación."
    ],
    answer: 1,
    explanation: "En Argentina rigen la Ley 26.653 (2010), el Decreto reglamentario 656/2019 (que derogó al 355/2013) y la Disposición ONTI 6/2019. La ONTI es la autoridad de aplicación que controla y monitorea; las sanciones las aplica la Agencia Nacional de Discapacidad."
  },
  {
    id: "t4-10",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 4, pp. 4-5)",
    difficulty: "intermedia",
    question: "¿Por qué los criterios técnicos de accesibilidad NO están escritos directamente en el texto de la Ley 26.653, y qué establece la Disposición ONTI 6/2019 sobre su cumplimiento inicial?",
    options: [
      "Porque la ley delega en la ONTI establecerlos y actualizarlos mediante disposiciones; la Disposición ONTI 6/2019 aprueba las Pautas WCAG 2.0 y establece un cumplimiento gradual de veinte criterios durante el primer año de vigencia.",
      "Porque en Argentina los criterios técnicos son voluntarios y no existe ninguna disposición de la ONTI.",
      "Porque la ley exige directamente WCAG 3.0 en el primer mes sin gradualidad.",
      "Porque la ONTI solo regula sitios privados y no entes estatales."
    ],
    answer: 0,
    explanation: "La ley manda a la ONTI a establecer y actualizar los criterios técnicos (por eso viven en disposiciones y no fijos en la ley). La Disposición ONTI 6/2019 aprueba las pautas WCAG 2.0 y su art. 4 prevé cumplimiento gradual (20 criterios el primer año). Además, entes no estatales que busquen los beneficios de la ley deben certificar cumplimiento ante la autoridad (art. 10 del anexo del decreto)."
  },
  {
    id: "t4-11",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 5, p. 5)",
    difficulty: "basica",
    question: "¿Cuáles son los tres modos de uso de herramientas automáticas de verificación de accesibilidad presentados en el apunte y su ejemplo correspondiente?",
    options: [
      "Por consola: `pa11y`; en el navegador: `WAVE`; como librería integrada al código: `HTML_CodeSniffer`.",
      "Por consola: `WAVE`; en el navegador: `pytest`; como librería: `MQTT`.",
      "Por consola: `HTML_CodeSniffer`; en el navegador: `pa11y`; como librería: `Figma`.",
      "Solo existen herramientas de consola; no hay herramientas de navegador ni librerías."
    ],
    answer: 0,
    explanation: "El apunte clasifica tres modos: consola (`pa11y`, instalado con npm), navegador (`WAVE`, que marca los problemas sobre la página) y librería (`HTML_CodeSniffer`, integrado al código)."
  },
  {
    id: "t4-12",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 5, p. 5)",
    difficulty: "intermedia",
    question: "Al ejecutar `pa11y`, ¿qué significan los tres tipos de mensajes de su salida y qué hace la opción `--ignore \"warning;notice\"`?",
    code: `pa11y https://www.unlar.edu.ar --ignore "warning;notice"`,
    codeLang: "bash",
    options: [
      "Error = problema crítico (corregirlo), Warning = posible problema (revisarlo), Notice = aviso general (verificarlo a mano); `--ignore \"warning;notice\"` filtra la salida para mostrar solo los errores al empezar.",
      "Error = aviso menor opcional; Warning = falla crítica obligatoria; Notice = página 100 % accesible.",
      "`--ignore \"warning;notice\"` corrige automáticamente el código HTML del sitio remoto.",
      "Error y Warning son sinónimos y Notice indica que la URL no existe."
    ],
    answer: 0,
    explanation: "`pa11y` clasifica hallazgos en Error (crítico → corregir), Warning (posible problema → revisar) y Notice (aviso general → verificar a mano). Usar `--ignore \"warning;notice\"` ayuda a enfocarse primero en los errores críticos."
  },
  {
    id: "t4-13",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 5, pp. 5-6)",
    difficulty: "intermedia",
    question: "Si `pa11y` o `WAVE` reportan 0 errores sobre una página web, ¿se puede concluir que la página es accesible?",
    options: [
      "Sí, porque las herramientas automáticas verifican el 100 % de los criterios de WCAG.",
      "No: ninguna herramienta automática puede afirmar que un sitio es accesible porque solo detectan una parte de las fallas (detectan si falta `alt`, pero no si tiene sentido ni si el orden de lectura es lógico); siempre requieren pruebas manuales (teclado, zoom al 200 % y lector de pantalla).",
      "Sí, siempre y cuando se haya ejecutado con la bandera `--ignore \"warning;notice\"`.",
      "No, únicamente porque `pa11y` no puede medir contrastes de color."
    ],
    answer: 1,
    explanation: "Es el límite fundamental de la verificación automática: las herramientas miden reglas comprobables por máquina (falta de `alt`, contraste), pero no calidad semántica ni usabilidad real. Deben complementarse con recorrido solo por teclado (Tab, Shift+Tab, Enter), ampliación al 200 % y lector de pantalla."
  },
  {
    id: "t4-14",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 6, pp. 6-7)",
    difficulty: "aplicada",
    question: "Cuidado con la trampa pedagógica de la pista 5 del apunte: ¿qué alternativa accesible corresponde ofrecer para un audiolibro o un podcast (solo audio) incrustado en un sitio web?",
    options: [
      "Audiodescripción, porque el usuario no puede ver el audiolibro.",
      "Transcripción en texto, porque quien queda afuera de un contenido de solo audio es la persona sorda o con hipoacusia (quien no ve ya puede escucharlo).",
      "Subtítulos en vivo sobre una pantalla en blanco.",
      "Ninguna alternativa, porque el audio ya es accesible por naturaleza."
    ],
    answer: 1,
    explanation: "La audiodescripción es para video (narra lo que se ve en pantalla para personas ciegas o con baja visión). Un audiolibro o podcast es solo audio: ya lo escucha quien no ve, y quien queda afuera es quien no oye, por lo que requiere una transcripción en texto."
  },
  {
    id: "t4-15",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 6, pp. 6-7)",
    difficulty: "aplicada",
    question: "¿Por qué un video con subtítulos puede igualmente resultar inaccesible para una persona ciega?",
    options: [
      "Porque los lectores de pantalla no funcionan cuando hay etiquetas `<video>`.",
      "Porque los subtítulos resuelven la barrera auditiva (transcriben el audio), pero si el video transmite información solo visual (gestos, gráficos, textos en pantalla no dichos en voz alta), una persona ciega necesita audiodescripción.",
      "Porque los subtítulos violan el principio Operable.",
      "Porque el nivel AA prohíbe incluir subtítulos en videos grabados."
    ],
    answer: 1,
    explanation: "Cada medio tiene su alternativa según quién queda afuera: video con audio → subtítulos (para personas sordas/hipoacúsicas); video con información solo visual → audiodescripción que narra lo que ocurre en pantalla (para personas ciegas o con baja visión)."
  },
  {
    id: "t4-16",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 7, p. 7)",
    difficulty: "intermedia",
    question: "¿Cómo debe redactarse el atributo `alt` de una imagen informativa y cuándo corresponde usar un atributo vacío (`alt=\"\"`)?",
    options: [
      "El `alt` describe los píxeles y colores exactos; `alt=\"\"` se usa cuando no tenemos ganas de escribir descripción.",
      "El `alt` describe lo que la imagen informa (no solo cómo se ve); si la imagen es puramente decorativa, corresponde usar `alt=\"\"` para que el lector de pantalla la ignore.",
      "Nunca se debe usar `alt=\"\"`; es mejor omitir por completo el atributo `alt` en imágenes decorativas.",
      "El `alt` debe contener siempre el nombre del archivo (por ejemplo `ventas.png`)."
    ],
    answer: 1,
    explanation: "El `alt` comunica la información que transmite la imagen (ej. `alt=\"Ventas por mes\"`). Si una imagen es puramente decorativa, se usa `alt=\"\"` (vacío, no ausente) para que el lector de pantalla la saltee sin ruido."
  },
  {
    id: "t4-17",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 7, p. 7)",
    difficulty: "aplicada",
    question: "¿Cuál es la forma accesible correcta de asociar una etiqueta a un campo de formulario en HTML y qué beneficio adicional aporta?",
    code: `<!-- Antes -->
<input type="text">`,
    codeLang: "html",
    options: [
      "Colocar un `<p>Nombre</p>` encima del `<input type=\"text\">`.",
      "Usar `<label for=\"n\">Nombre</label><input id=\"n\" type=\"text\">` vinculando `for` con `id`; así el lector de pantalla anuncia la etiqueta y además al tocarla se activa el campo.",
      "Agregar únicamente `placeholder=\"Nombre\"` sin `<label>`.",
      "Envolver el `<input>` en un `<div>` con `class=\"label\"`."
    ],
    answer: 1,
    explanation: "Sin `<label>`, el lector de pantalla solo dice «campo de texto». Asociar `<label for=\"...\">` con `<input id=\"...\">` le da nombre accesible al campo y amplía el área clicable (al tocar la etiqueta se enfoca el campo)."
  },
  {
    id: "t4-18",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 7, pp. 7-8)",
    difficulty: "aplicada",
    question: "En la autoevaluación de la sección 7 se pide corregir el siguiente botón que solo contiene una imagen de lupa sin descripción ni texto. ¿Cuál opción lo corrige correctamente?",
    code: `<button><img src="lupa.png"></button>`,
    codeLang: "html",
    options: [
      "`<button><img src=\"lupa.png\" title=\"lupa.png\"></button>`",
      "`<button aria-label=\"Buscar\"><img src=\"lupa.png\" alt=\"\"></button>` (o bien `<button><img src=\"lupa.png\" alt=\"Buscar\"></button>`), dotando al botón de un nombre accesible que describa la acción.",
      "`<div onclick=\"buscar()\"><img src=\"lupa.png\"></div>`",
      "`<button><i class=\"lupa\"></i></button>`"
    ],
    answer: 1,
    explanation: "Un botón con solo ícono/imagen carece de nombre accesible. Se corrige dándole `aria-label=\"Buscar\"` (con `alt=\"\"` en la imagen decorativa para evitar repetición), o bien un `alt=\"Buscar\"` claro en la imagen (o texto oculto visualmente) que anuncie la acción, nunca el nombre del archivo."
  },
  {
    id: "t4-19",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 7, pp. 7-8)",
    difficulty: "basica",
    question: "¿Por qué fallan en accesibilidad tanto `<a href=\"/informe\">Clic aquí</a>` como `<html>` sin atributo `lang`?",
    options: [
      "Porque los navegadores modernos rechazan abrir enlaces que digan «Clic aquí».",
      "Porque un lector de pantalla puede listar todos los enlaces fuera de contexto (y múltiples «Clic aquí» no se entienden; debe decir ej. «Ver el informe de ventas»), y sin `<html lang=\"es\">` el lector pronuncia el texto con las reglas fonéticas de otro idioma.",
      "Porque `lang=\"es\"` traduce automáticamente el sitio al español para usuarios extranjeros.",
      "Porque ambos son problemas exclusivos de rendimiento y SEO, no de accesibilidad."
    ],
    answer: 1,
    explanation: "Los usuarios de lectores de pantalla navegan frecuentemente por listas de enlaces (por eso deben tener texto descriptivo por sí mismos) y el atributo `<html lang=\"es\">` indica al sintetizador de voz qué idioma usar para pronunciar correctamente."
  },
  {
    id: "t4-20",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 8, p. 8)",
    difficulty: "intermedia",
    question: "Como requisito de ingeniería de software, ¿qué tipo de requisito es la accesibilidad y cómo cambió su ubicación en la norma de calidad ISO/IEC 25010 entre la edición 2011 y la 2023?",
    options: [
      "Es un requisito funcional que agrega un botón de accesibilidad; no aparece en ISO/IEC 25010.",
      "Es un requisito no funcional (cualidad del sistema): en ISO/IEC 25010:2011 es subcaracterística de «usabilidad», mientras que en la edición 2023 «usabilidad» pasa a llamarse «capacidad de interacción» y la accesibilidad se divide en «inclusividad» y «asistencia al usuario».",
      "Es un requisito no funcional que en 2023 fue eliminado de ISO/IEC 25010.",
      "En 2011 pertenecía a seguridad y en 2023 pasó a rendimiento."
    ],
    answer: 1,
    explanation: "La accesibilidad es un requisito no funcional (como rendimiento o seguridad). En ISO/IEC 25010:2011 está dentro de usabilidad; en ISO/IEC 25010:2023 usabilidad se renombra a «capacidad de interacción» y la accesibilidad se divide en «inclusividad» y «asistencia al usuario»."
  },
  {
    id: "t4-21",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 8, pp. 8-9)",
    difficulty: "aplicada",
    question: "¿Cuál de los siguientes enunciados está correctamente redactado como Requisito No Funcional (RNF) medible y verificable según el apunte?",
    options: [
      "«El sistema debe ser accesible y fácil de usar para todo tipo de personas».",
      "«La aplicación debe ser inclusiva y tener ayudas en los videos».",
      "«RNF-12: Todas las pantallas del sistema deben cumplir los criterios de nivel AA de WCAG 2.2; RNF-13: Todas las funciones deben poder completarse solo con teclado».",
      "«Los desarrolladores intentarán mejorar los colores cuando haya tiempo al final del proyecto»."
    ],
    answer: 2,
    explanation: "Un RNF mal escrito es vago («debe ser accesible», «fácil de usar»). Un RNF bien escrito es medible y verificable (criterios AA de WCAG 2.2, flujos completables solo con teclado, subtítulos en videos grabados y transcripción en audios) y se traduce en criterios de aceptación comprobables."
  },
  {
    id: "t4-22",
    topic: "accesibilidad",
    source: "4. Apunte de cátedra Accesibilidad Web.pdf (Sec. 8 y 9, pp. 8-9)",
    difficulty: "intermedia",
    question: "¿Cuándo debe verificarse la accesibilidad durante el ciclo de vida del software y por qué una herramienta automática en CI no alcanza como único criterio de aceptación?",
    options: [
      "Se verifica una única vez al terminar el proyecto, y con pasar `pa11y` en CI es suficiente.",
      "Se repite en cada versión combinando herramientas automáticas en integración continua (CI) con pruebas manuales (teclado y lector de pantalla) en el plan de pruebas, porque las herramientas automáticas solo cubren una fracción de las barreras reales.",
      "Solo se verifica si un usuario presenta un reclamo formal ante la ONTI.",
      "Se verifica únicamente en la fase de sketches en papel antes de escribir HTML."
    ],
    answer: 1,
    explanation: "La accesibilidad se piensa desde el inicio (pensarla al final es rehacer) y se verifica en cada versión: la herramienta automática puede correr en CI, pero el criterio de aceptación debe incluir también pruebas manuales como completar flujos clave solo con teclado y lector de pantalla."
  }
];
