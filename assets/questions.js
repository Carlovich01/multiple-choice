(function () {
  const TOPICS = [
    {
      id: "analisis",
      title: "Análisis y modelado de aplicaciones web",
      shortTitle: "Análisis y Modelado Web",
      description:
        "Modelado de análisis para WebApps, perspectivas UML, diagramas estructurales y de comportamiento, MDE/MDA, artefactos UX/UI y Capítulo 13 de Pressman.",
      files: [
        "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf",
        "1.2 Presentación.pdf",
        "1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf",
        "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf"
      ]
    },
    {
      id: "patrones",
      title: "Patrones de diseño",
      shortTitle: "Patrones de Diseño",
      description:
        "Catálogo GoF, principios SOLID, escalas de patrones, Strategy, Factory, Observer, Adapter, Decorator, Python/JS, sistemas distribuidos, antipatrones e IA.",
      files: ["2. Apunte Patrones de Diseño.pdf"]
    },
    {
      id: "arquitectura",
      title: "Arquitecturas de software",
      shortTitle: "Arquitecturas de Software",
      description:
        "Atributos de calidad, trade-offs, estilos, monolito vs. microservicios (Fowler/Tilkov), Teorema CAP, pub/sub, MQTT, cloud-native, lock-in, RAG, ADR y postmortem.",
      files: ["3.2. Apunte de cátedra — Arquitecturas de software.pdf"]
    },
    {
      id: "accesibilidad",
      title: "Accesibilidad web",
      shortTitle: "Accesibilidad Web",
      description:
        "Barreras y tipos de discapacidad, principios POUR, niveles A/AA/AAA y contraste WCAG 2.2, marco legal argentino (Ley 26.653 / ONTI), pa11y/WAVE, multimedia, HTML e ISO 25010.",
      files: ["4. Apunte de cátedra Accesibilidad Web.pdf"]
    }
  ];

  const data = window.EXAM_DATA || {};
  const ALL_QUESTIONS = [
    ...(data.analisis || []),
    ...(data.patrones || []),
    ...(data.arquitectura || []),
    ...(data.accesibilidad || [])
  ];

  window.EXAM_BANK = {
    topics: TOPICS,
    topicMap: Object.fromEntries(TOPICS.map((t) => [t.id, t])),
    questions: ALL_QUESTIONS
  };
})();
