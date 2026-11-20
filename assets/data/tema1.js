window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.analisis = [
  // === 1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf ===
  {
    id: "t1-01",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.1, p. 5)",
    difficulty: "basica",
    question: "Según la presentación sobre Análisis para Aplicaciones Web, ¿cuál de las siguientes características diferencia a una WebApp de los programas tradicionales?",
    options: [
      "Tienen disponibilidad 24/7, sensibilidad al contenido (calidad y estética), inmediatez de actualizaciones y una arquitectura de dos lados (cliente y servidor).",
      "Se ejecutan exclusivamente en el sistema operativo local sin depender de un navegador ni de conexión a Internet.",
      "El servidor queda aislado de ataques externos porque toda la lógica crítica reside en HTML y CSS.",
      "Requieren reinstalación manual por parte de cada usuario ante cada cambio de versión."
    ],
    answer: 0,
    explanation: "El apunte 1.1 destaca que las WebApps no funcionan sin Internet, tienen disponibilidad 24/7, fuerte componente social, sensibilidad al contenido, inmediatez de actualizaciones y dos lados: cliente (restringido al navegador: HTML, CSS, JS, SVG) y servidor (expuesto a ataques: PHP, Java, Python, C#, etc.)."
  },
  {
    id: "t1-02",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.1, p. 6)",
    difficulty: "basica",
    question: "¿Cómo se distinguen las dos categorías principales de aplicaciones web presentadas en el material de Valarezo y Luján Mora?",
    options: [
      "Aplicaciones estáticas (solo HTML) y aplicaciones móviles nativas.",
      "SPA (Single Page Application), orientada a la presentación y ejecutada mayormente en el cliente, frente a aplicaciones del lado del servidor, orientadas a servicios.",
      "WebApps síncronas orientadas a bases de datos y WebApps asíncronas orientadas a gráficos vectoriales.",
      "Aplicaciones monolíticas de escritorio y micrositios de contenido informativo."
    ],
    answer: 1,
    explanation: "El material distingue dos categorías: SPA (Single Page Application), donde la mayor parte se ejecuta en el cliente usando JavaScript, AJAX, JSON y DOM con orientación a la presentación; y las aplicaciones del Lado del Servidor, orientadas a servicios."
  },
  {
    id: "t1-03",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.1, pp. 7-8)",
    difficulty: "intermedia",
    question: "De acuerdo con las mejores prácticas para el modelado de análisis de WebApps, ¿cuándo se recomienda realizar dicho modelado y cuáles son sus requisitos base?",
    options: [
      "Debe realizarse obligatoriamente en toda página web, sin importar su tamaño, partiendo únicamente de la base de datos.",
      "Solo debe realizarse si la aplicación web es compleja o si el número de usuarios es elevado, tomando como requisitos base los casos de uso y la jerarquía de usuarios.",
      "Solo se realiza después de programar la interfaz gráfica, tomando como base el código fuente HTML.",
      "Se aplica únicamente a aplicaciones SPA y sus requisitos base son el presupuesto y el servidor de hosting."
    ],
    answer: 1,
    explanation: "Entre las mejores prácticas se indica realizar el modelado de análisis solo cuando la WebApp es compleja o tiene un número elevado de usuarios, partiendo de los requisitos base: casos de uso y jerarquía de usuarios (además de definir formalmente el alcance y el plan de proyecto)."
  },
  {
    id: "t1-04",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.2, pp. 10-13)",
    difficulty: "intermedia",
    question: "En el modelo de contenido para WebApps, ¿de dónde se extraen los objetos de contenido y cómo se representan sus relaciones y jerarquía?",
    options: [
      "Se extraen del código CSS del cliente y se representan mediante diagramas de despliegue.",
      "Se extraen de los casos de uso y pueden representarse mediante una lista con descripciones breves, diagramas de entidad-relación, árboles de datos o clases de análisis.",
      "Se extraen únicamente de las pruebas de rendimiento y se representan en diagramas de secuencia.",
      "Se generan automáticamente al configurar el servidor web y no pueden desarrollarse antes de la implementación."
    ],
    answer: 1,
    explanation: "Los objetos de contenido se extraen de los casos de uso (y pueden desarrollarse antes de implementar la WebApp). Sus relaciones y jerarquía se modelan con listas descriptivas, diagramas entidad-relación, árboles de datos y clases de análisis."
  },
  {
    id: "t1-05",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.3, p. 14)",
    difficulty: "basica",
    question: "¿Cuáles son los cuatro elementos que componen el Modelo de Interacción de una WebApp?",
    options: [
      "Diagramas de clases, diagramas de despliegue, árboles de datos y scripts SQL.",
      "Casos de uso, diagramas de secuencia, diagramas de estado y prototipo de interfaz de usuario.",
      "Lista de servidores, ancho de banda, tipos de navegadores y protocolos de seguridad.",
      "Análisis de participantes, análisis de elementos, análisis de relaciones y análisis de evaluación."
    ],
    answer: 1,
    explanation: "El modelo de interacción describe cómo el usuario interactúa con la WebApp y se compone de cuatro elementos: casos de uso, diagramas de secuencia, diagramas de estado y prototipo de interfaz de usuario."
  },
  {
    id: "t1-06",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.4, pp. 16-17)",
    difficulty: "intermedia",
    question: "¿Qué dos elementos de procesamiento aborda el Modelo Funcional de una WebApp?",
    options: [
      "El diseño estético de las pantallas y la configuración del sistema operativo del servidor.",
      "La funcionalidad observable respecto al usuario y las operaciones dentro de las clases de análisis que implementan comportamientos asociados a la clase.",
      "Los nombres de dominio DNS y los certificados SSL de la aplicación.",
      "Los estilos tipográficos y la jerarquía de enlaces de navegación."
    ],
    answer: 1,
    explanation: "El modelo funcional aborda dos grados de abstracción de procedimiento: (1) la funcionalidad observable respecto al usuario y (2) las operaciones internas de las clases de análisis que implementan los comportamientos de cada clase (frecuentemente ilustrados con diagramas de actividad)."
  },
  {
    id: "t1-07",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.5, p. 18)",
    difficulty: "basica",
    question: "¿En qué consiste habitualmente el Modelo de Configuración en el análisis para WebApps?",
    options: [
      "En un diagrama de estados que modela cada clic del usuario en la interfaz.",
      "En una lista de atributos que describe el entorno tanto del lado del servidor como del lado del cliente.",
      "En el catálogo completo de clases de dominio con sus atributos y métodos.",
      "En la definición de los colores, tipografías e identidad de marca del sitio."
    ],
    answer: 1,
    explanation: "Por lo general, el modelo de configuración es una lista de atributos que especifica el ambiente y la infraestructura donde residirá y se ejecutará la WebApp, tanto del lado del servidor como del lado del cliente."
  },
  {
    id: "t1-08",
    topic: "analisis",
    source: "1.1. Aplicaciones Web - Análisis para aplicaciones web.pdf (Cap. 3.6, pp. 19-20)",
    difficulty: "intermedia",
    question: "En el Análisis Relación-Navegación (ARN), la navegación se entiende como «moverse a través de un espacio de información». ¿Cuál es la secuencia correcta de sus cinco pasos?",
    options: [
      "1. Análisis de navegación, 2. Análisis de diseño visual, 3. Análisis de código, 4. Análisis de pruebas, 5. Análisis de despliegue.",
      "1. Análisis de los participantes, 2. Análisis de elementos, 3. Análisis de relaciones, 4. Análisis de navegación, 5. Análisis de evaluación.",
      "1. Análisis de elementos, 2. Análisis de participantes, 3. Análisis de configuración, 4. Análisis de seguridad, 5. Análisis de navegación.",
      "1. Análisis de requisitos, 2. Análisis de arquitectura, 3. Análisis de componentes, 4. Análisis de interfaz, 5. Análisis de mantenimiento."
    ],
    answer: 1,
    explanation: "El enfoque ARN busca identificar relaciones entre los elementos del modelo de análisis y se organiza exactamente en cinco pasos: (1) Análisis de los participantes, (2) Análisis de elementos, (3) Análisis de relaciones, (4) Análisis de navegación y (5) Análisis de evaluación."
  },

  // === 1.2 Presentación.pdf (Sommerville Cap. 5 - Modelado del sistema) ===
  {
    id: "t1-09",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, p. 5)",
    difficulty: "basica",
    question: "¿Cuáles son las cuatro perspectivas principales desde las cuales se modela un sistema según la presentación de Modelado del Sistema?",
    options: [
      "Perspectiva externa (contexto), perspectiva de interacción, perspectiva estructural y perspectiva de comportamiento.",
      "Perspectiva económica, perspectiva estética, perspectiva legal y perspectiva de marketing.",
      "Perspectiva de hardware, perspectiva de red, perspectiva de compilación y perspectiva de pruebas.",
      "Perspectiva de cliente, perspectiva de servidor, perspectiva de nube y perspectiva de navegador."
    ],
    answer: 0,
    explanation: "Un sistema se modela desde cuatro perspectivas complementarias: externa (contexto/entorno), de interacción (entre sistema y entorno o entre componentes), estructural (organización del sistema o estructura de datos) y de comportamiento (dinámica y respuesta a eventos)."
  },
  {
    id: "t1-10",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, p. 6)",
    difficulty: "intermedia",
    question: "Respecto a los distintos usos de los modelos gráficos, ¿qué nivel de corrección y completitud se exige según el propósito del modelo?",
    options: [
      "Incluso en etapas de debate inicial, todo modelo gráfico debe ser 100 % completo y formalmente correcto.",
      "Para facilitar el debate pueden ser incompletos e incorrectos; para documentar un sistema existente deben ser exactos aunque no completos; para generar una implementación deben ser correctos y completos.",
      "Para documentar un sistema existente no importa si son inexactos, siempre que sean muy detallados.",
      "Para generar una implementación alcanza con un boceto incompleto, ya que el compilador infiere el resto."
    ],
    answer: 1,
    explanation: "El material distingue tres usos: (1) debate: incompletos e incorrectos están bien; (2) documentación: representación exacta, aunque no necesariamente completa; (3) generación de implementación: obligatoriamente correctos y completos."
  },
  {
    id: "t1-11",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, pp. 8 y 10)",
    difficulty: "intermedia",
    question: "En los modelos de contexto, ¿por qué se afirma que definir los límites del sistema es en parte un «juicio político» y qué aportan los modelos de proceso?",
    options: [
      "Porque los límites los fija siempre una ley nacional, y los modelos de proceso reemplazan por completo a los diagramas de clases.",
      "Porque existen presiones organizacionales sobre influencia o carga de trabajo al decidir qué queda dentro o fuera; además, los modelos de proceso (diagramas de actividad UML) muestran cómo se usa el sistema en procesos empresariales más amplios.",
      "Porque solo se pueden definir después de programar el sistema, y los modelos de proceso solo muestran qué servidores existen en la red.",
      "Porque los límites no influyen en los requisitos, y los modelos de proceso describen únicamente la memoria RAM del equipo."
    ],
    answer: 1,
    explanation: "La posición de los límites tiene un efecto profundo en los requisitos y suele involucrar presiones organizacionales (influencia o carga de trabajo). Como el modelo de contexto solo muestra sistemas vecinos, los modelos de proceso (diagramas de actividad UML) revelan cómo se usa el sistema dentro de procesos de negocio más amplios."
  },
  {
    id: "t1-12",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, pp. 13-17)",
    difficulty: "basica",
    question: "¿Qué relación existe entre los diagramas de casos de uso y los diagramas de secuencia dentro de los modelos de interacción?",
    options: [
      "Son excluyentes: si un proyecto utiliza casos de uso, no debe elaborar diagramas de secuencia.",
      "Los casos de uso describen interacciones discretas entre actores externos (personas u otros sistemas) y el sistema; los diagramas de secuencia detallan la secuencia temporal de mensajes intercambiados entre actores y objetos durante un caso de uso.",
      "Los diagramas de secuencia capturan requisitos iniciales con el cliente y los casos de uso muestran el código compilado.",
      "Los actores en un caso de uso solo pueden ser personas humanas, nunca otros sistemas externos."
    ],
    answer: 1,
    explanation: "Los casos de uso modelan tareas discretas de interacción externa (donde los actores pueden ser personas u otros sistemas, como el PRS en Mentcare). Los diagramas de secuencia amplían esa vista mostrando las interacciones ordenadas en el tiempo entre actores y objetos con líneas verticales punteadas y flechas anotadas."
  },
  {
    id: "t1-13",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, pp. 24-27)",
    difficulty: "basica",
    question: "En los modelos estructurales (diagramas de clases), ¿qué diferencian la generalización y la agregación?",
    options: [
      "La generalización representa una relación «parte-de» y la agregación modela llamadas por red.",
      "La generalización agrupa entidades en clases más generales para gestionar complejidad compartiendo características comunes, mientras que la agregación muestra cómo una clase colección se compone de otras clases (relación «parte-de»).",
      "La generalización se usa únicamente en bases de datos SQL y la agregación solo en sistemas en tiempo real.",
      "Ambas son sinónimos exactos que representan herencia múltiple."
    ],
    answer: 1,
    explanation: "La generalización permite ubicar entidades en clases más generales e inferir características comunes (herencia). La agregación expresa cómo una clase que actúa como colección está compuesta por otras clases, de forma análoga a la relación «parte-de»."
  },
  {
    id: "t1-14",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, pp. 30-34)",
    difficulty: "aplicada",
    question: "Debés modelar dos sistemas: (A) un procesamiento administrativo de pedidos controlado por la entrada de datos y (B) el controlador de un horno microondas en tiempo real que responde a botones y al sensor de puerta. ¿Qué enfoque de modelado de comportamiento corresponde a cada uno?",
    options: [
      "Modelado basado en eventos (máquina de estados) para el sistema A y modelado basado en datos (diagrama de actividad) para el sistema B.",
      "Modelado basado en datos (diagrama de actividad) para el sistema A y modelado basado en eventos (máquina de estados / Statechart) para el sistema B.",
      "Diagrama de despliegue para el sistema A y modelo de configuración para el sistema B.",
      "Ambos deben modelarse exclusivamente con diagramas entidad-relación."
    ],
    answer: 1,
    explanation: "Los sistemas de negocio impulsados por datos (como procesamiento de pedidos o la bomba de insulina) se modelan con enfoques basados en datos (diagramas de actividad). Los sistemas en tiempo real que responden a estímulos y tienen un número finito de estados (como el horno microondas) se modelan con máquinas de estado (Statecharts UML)."
  },
  {
    id: "t1-15",
    topic: "analisis",
    source: "1.2 Presentación.pdf (Cap. 5 Modelado del sistema, pp. 40-43)",
    difficulty: "intermedia",
    question: "Respecto a la Ingeniería Dirigida por Modelos (MDE/MDA), ¿cuál de las siguientes afirmaciones refleja con precisión sus ventajas, desventajas y relación con los métodos ágiles según el material?",
    options: [
      "Permite trabajar a mayores niveles de abstracción y generar código para múltiples plataformas (PIM → PSM → código), pero el costo de desarrollar traductores puede superar el ahorro y el modelado extenso por adelantado entra en tensión con el manifiesto ágil.",
      "Elimina por completo los problemas de ingeniería de requisitos, seguridad, pruebas e integración con sistemas heredados.",
      "Es el enfoque preferido por la mayoría de los desarrolladores ágiles porque evita escribir código fuente.",
      "Garantiza que las abstracciones útiles para debatir con el cliente sean siempre óptimas para la implementación."
    ],
    answer: 0,
    explanation: "El material señala como pros el mayor nivel de abstracción y la adaptación más barata a nuevas plataformas (transformando un PIM en distintos PSM como J2EE o .NET). Como contras: las abstracciones útiles para debate pueden no servir para implementación, crear traductores es costoso, choca con la filosofía ágil de evitar modelado extenso previo, y los mayores desafíos en sistemas complejos siguen siendo requisitos, seguridad, integración heredada y pruebas."
  },

  // === 1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf ===
  {
    id: "t1-16",
    topic: "analisis",
    source: "1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf (Sec. 2.3, p. 3)",
    difficulty: "intermedia",
    question: "Según el Manual de Modelado de Sistemas, ¿qué diferencia a la agregación de la composición en un diagrama de clases UML?",
    options: [
      "En la agregación las partes pueden existir independientemente del «todo», mientras que en la composición las partes no pueden existir sin el «todo».",
      "En la composición las partes existen por separado y en la agregación se destruyen juntas.",
      "La agregación indica herencia («es un tipo de») y la composición indica dependencia débil.",
      "No existe diferencia semántica; solo cambia el color de la línea en el diagrama."
    ],
    answer: 0,
    explanation: "El manual define la agregación como una relación todo-parte donde las partes pueden existir independientemente del todo, mientras que la composición es una forma más fuerte de agregación donde las partes no pueden existir sin el todo."
  },
  {
    id: "t1-17",
    topic: "analisis",
    source: "1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf (Sec. 2.2, p. 3)",
    difficulty: "intermedia",
    question: "¿Qué diferencia a un Diagrama de Secuencia de un Diagrama de Comunicación dentro de la perspectiva de interacción y comportamiento?",
    options: [
      "El diagrama de secuencia muestra la topología de servidores y el de comunicación modela tablas SQL.",
      "El diagrama de secuencia enfatiza el orden temporal de los mensajes intercambiados entre objetos, mientras que el diagrama de comunicación se enfoca en las relaciones y conexiones entre objetos sin enfatizar la secuencia temporal.",
      "El diagrama de comunicación solo sirve para actores humanos y el de secuencia solo para microservicios.",
      "El diagrama de secuencia pertenece a la perspectiva estructural y el de comunicación a la de datos."
    ],
    answer: 1,
    explanation: "Ambos modelan interacciones entre objetos, pero el diagrama de secuencia pone el foco en el orden temporal de los mensajes a lo largo del tiempo, mientras que el diagrama de comunicación resalta las relaciones y enlaces entre los objetos que intercambian mensajes."
  },
  {
    id: "t1-18",
    topic: "analisis",
    source: "1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf (Sec. 2.3, p. 3)",
    difficulty: "basica",
    question: "Necesitás representar en qué servidores, computadoras y dispositivos móviles se instalarán y ejecutarán los distintos módulos del software. ¿Qué diagrama UML corresponde utilizar?",
    options: [
      "Diagrama de Casos de Uso.",
      "Diagrama de Componentes.",
      "Diagrama de Despliegue.",
      "Diagrama de Máquina de Estados."
    ],
    answer: 2,
    explanation: "El Diagrama de Despliegue representa la topología de hardware y software mostrando dónde se despliegan los componentes en los nodos de hardware (servidores, computadoras, móviles). El Diagrama de Componentes, en cambio, muestra la organización física de módulos, librerías y ejecutables y sus dependencias."
  },
  {
    id: "t1-19",
    topic: "analisis",
    source: "1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf (Sec. 2.4 y Sec. 3, pp. 3-4)",
    difficulty: "intermedia",
    question: "¿Cuál de las siguientes afirmaciones es correcta respecto a UML, los Modelos Entidad-Relación (ER) y el rol del modelado en metodologías ágiles?",
    options: [
      "UML es una metodología rígida de desarrollo y los modelos ER son su diagrama oficial más importante.",
      "UML es un lenguaje de notación (no una metodología); los modelos ER no forman parte del estándar UML; y en enfoques ágiles se aplica un modelado ligero («just-enough-modeling») para planificar sprints y comunicar decisiones.",
      "En metodologías ágiles está prohibido utilizar diagramas UML porque solo sirven para enfoques en cascada.",
      "Los diagramas de clases no sirven para modelar la perspectiva de datos."
    ],
    answer: 1,
    explanation: "El manual aclara tres puntos clave: UML es un lenguaje de notación (no una metodología), los modelos ER se usan mucho para diseño de bases de datos pero no pertenecen al estándar UML, y en ágiles se emplea el modelado ligero («just-enough-modeling»)."
  },
  {
    id: "t1-20",
    topic: "analisis",
    source: "1.3. Manual de Modelado de Sistemas - Complemento Parte I.pdf (Sec. 5, pp. 4-5)",
    difficulty: "aplicada",
    question: "Al modelar una WebApp según el Manual de Modelado de Sistemas, ¿qué combinación de diagramas UML se sugiere para flujos de navegación, interfaz de usuario y comunicación con servicios web/APIs?",
    options: [
      "Diagramas de actividad para flujos de navegación; diagramas de clases para objetos de UI y su comportamiento; diagramas de componentes y de secuencia para servicios web y APIs.",
      "Diagramas de despliegue para flujos de navegación; modelos ER para la UI; diagramas de casos de uso para APIs.",
      "Exclusivamente diagramas de estado para las tres dimensiones.",
      "Diagramas de comunicación para la navegación y hojas de cálculo para las APIs."
    ],
    answer: 0,
    explanation: "La sección 5 del manual indica que en WebApps se usan diagramas de actividad para modelar flujos de navegación, diagramas de clases para objetos de interfaz y su comportamiento, y diagramas de componentes y de secuencia para detallar la comunicación entre front-end, back-end y servicios/APIs."
  },

  // === 1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf ===
  {
    id: "t1-21",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 2, pp. 1-4)",
    difficulty: "basica",
    question: "¿Qué distingue fundamentalmente a un wireframe de un mockup y de un prototipo en el proceso moderno de diseño UX/UI?",
    options: [
      "El wireframe es de alta fidelidad visual y el mockup es un boceto a lápiz sin colores.",
      "El wireframe define la estructura, layout y jerarquía en baja/media fidelidad (escala de grises); el mockup es una maqueta estática de alta fidelidad visual (color, tipografía, marca); y el prototipo agrega interactividad para simular flujos y validar con usuarios.",
      "El prototipo siempre es estático y el mockup incluye pruebas automatizadas de backend.",
      "Los tres términos son sinónimos y se diferencian solo por la herramienta utilizada."
    ],
    answer: 1,
    explanation: "El continuo va de sketch (muy baja fidelidad, ideación rápida con bajo costo de descarte) → wireframe (baja/media fidelidad, esqueleto estructural y layout sin distracciones estéticas) → mockup (alta fidelidad visual, estático, contrato estético) → prototipo (media/alta fidelidad e interactivo para validar flujos con usuarios)."
  },
  {
    id: "t1-22",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 2.1-2.5, pp. 2-5)",
    difficulty: "intermedia",
    question: "Según el relevamiento de herramientas modernas de la monografía UX/UI, ¿qué afirmación describe correctamente a las herramientas mencionadas?",
    options: [
      "Balsamiq se especializa en prototipos React listos para producción, mientras que Excalidraw es el referente para lógica condicional enterprise.",
      "Penpot es una alternativa open source basada en estándares web (SVG, CSS Grid/Flexbox); Balsamiq enfatiza wireframes de baja fidelidad; ProtoPie permite prototipos con sensores y entradas reales; y Maze se usa para pruebas de usabilidad remotas con métricas.",
      "InVision sigue siendo la herramienta líder de prototipado desde 2024 y reemplazó por completo a Figma.",
      "Axure RP solo sirve para bocetos informales a mano alzada y no admite lógica condicional."
    ],
    answer: 1,
    explanation: "La monografía destaca: Excalidraw/FigJam/Miro para sketches; Balsamiq/Whimsical para wireframes; Figma y Penpot (open source con CSS Grid/Flexbox y design tokens) para wireframe/mockup/prototipo; ProtoPie (sensores/microinteracciones), Framer (React), Axure RP (lógica enterprise) y Maze/Useberry (validación remota). También aclara que InVision fue discontinuada en 2024."
  },
  {
    id: "t1-23",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 1 y 3.1, pp. 1 y 5-7)",
    difficulty: "intermedia",
    question: "Contrastando sketches, wireframes, mockups y prototipos con la Pirámide del Diseño de WebApps de Pressman (Cap. 13), ¿qué aspecto crítico NO cubren estos artefactos UX/UI?",
    options: [
      "El diseño estético, la selección tipográfica y la distribución visual de los botones.",
      "La mitad inferior técnica e ingenieril de la pirámide: arquitectura técnica (como CVM/MVC), diseño de componentes funcionales, modelado formal de objetos de contenido (UML/MDHOO), semántica formal de navegación (USN/FdN) y atributos técnicos como seguridad y escalabilidad.",
      "La exploración temprana de ideas y la validación de flujos de interfaz con usuarios.",
      "La organización espacial del layout y la identidad visual de marca."
    ],
    answer: 1,
    explanation: "Los artefactos UX/UI cubren muy bien la cúspide orientada al usuario (interfaz, estética y sintaxis de navegación), pero dejan fuera la base tecnológica de la pirámide de Pressman: arquitectura CVM/MVC, diseño de componentes, modelado formal UML/MDHOO, semántica de navegación (USN/FdN) y atributos no funcionales de infraestructura."
  },
  {
    id: "t1-24",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 3.1 y 3.2, pp. 6-7)",
    difficulty: "intermedia",
    question: "En el Capítulo 13 de Pressman citado por la monografía, ¿qué diferencia existe entre la sintaxis de navegación y la semántica de navegación?",
    options: [
      "La sintaxis define las bases de datos y la semántica define los colores de los enlaces.",
      "La sintaxis se refiere a los mecanismos visibles (menús, botones, pestañas, enlaces), mientras que la semántica formaliza cómo navegan los distintos roles de usuario según casos de uso mediante Unidades Semánticas de Navegación (USN) y Formas de Navegar (FdN).",
      "La sintaxis solo existe en aplicaciones móviles y la semántica solo en aplicaciones de escritorio.",
      "Son exactamente lo mismo y se resuelven completamente con un mockup estático."
    ],
    answer: 1,
    explanation: "Los prototipos muestran bien la sintaxis (menús, botones, pestañas), pero Pressman exige formalizar además la semántica de navegación vinculada a roles y casos de uso mediante Unidades Semánticas de Navegación (USN) y Formas de Navegar (FdN), eligiendo la arquitectura de contenido adecuada (lineal, jerárquica, de malla, red o compuesta)."
  },
  {
    id: "t1-25",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 3.2, pp. 7-8)",
    difficulty: "aplicada",
    question: "Para integrar los conceptos ingenieriles de Pressman con un flujo moderno de UX/UI en Figma/Penpot, ¿cuál de las siguientes prácticas propone la monografía?",
    options: [
      "Mantener al equipo de UX aislado hasta terminar todos los mockups con «Lorem ipsum» y recién después entregárselos a backend.",
      "Vincular cada bloque de wireframes y mockups con objetos de contenido reales del modelo UML (respetando multiplicidades 0..1, 1, 1..*), ubicar mockups como la capa Vista de CVM/MVC acompañados de contratos de API/estados de error, y realizar revisiones técnicas multidisciplinarias tempranas.",
      "Eliminar los wireframes y prototipos para programar directamente desde diagramas de clases.",
      "Reemplazar el patrón CVM/MVC por un Design System visual sin lógica de capas."
    ],
    answer: 1,
    explanation: "La monografía propone cuatro mecanismos de integración: (1) trazabilidad desde UML/MDHOO hacia wireframes/mockups con datos reales y multiplicidades; (2) derivar flujos desde USN/FdN; (3) ubicar mockups/prototipos como la Vista en CVM/MVC o Frontend+API con contratos técnicos (endpoints, validaciones, estados de error/carga, permisos); y (4) revisiones multidisciplinarias y Design Systems sincronizados con el código."
  },
  {
    id: "t1-26",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 3.3, pp. 8-9)",
    difficulty: "intermedia",
    question: "En las siete metas del diseño de Jean Kaiser recogidas por Pressman (Sec. 13.2), ¿a qué se refiere específicamente la meta de «Robustez» y en qué artefacto UX se valida principalmente?",
    options: [
      "A resistir ataques DDoS en el servidor, validándose en los sketches a mano alzada.",
      "A cumplir la «promesa» implícita de contenido y funciones relevantes que la webapp hace al usuario, validándose principalmente en prototipos interactivos con usuarios reales (incluyendo validaciones y casos borde).",
      "A utilizar colores intensos y tipografías en negrita en los mockups.",
      "A tener código HTML estrictamente válido sin advertencias sintácticas."
    ],
    answer: 1,
    explanation: "En el Cap. 13 de Pressman (Sec. 13.2), las siete metas son: Simplicidad, Consistencia, Identidad, Robustez, Navegabilidad, Atractivo visual y Compatibilidad. Allí, Robustez significa cumplir la promesa implícita de contenido y funciones relevantes al usuario, cobrando su máxima validación en prototipos."
  },
  {
    id: "t1-27",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 3.4, pp. 9-12)",
    difficulty: "intermedia",
    question: "Al analizar si el concepto de calidad según Pressman (Olsina et al., Offutt y Tillman) aplica directamente a sketches, wireframes, mockups y prototipos, ¿cuál de los siguientes grupos reúne atributos de aplicación DIRECTA?",
    options: [
      "Seguridad, escalabilidad y disponibilidad técnica (uptime 24/365).",
      "Usabilidad, funcionalidad percibida/navegación y tiempo para llegar al mercado (time-to-market).",
      "Criptografía del servidor, balanceo de carga y tolerancia a particiones de red.",
      "Eficiencia del motor de base de datos, mantenibilidad del código backend y replicación multirregión."
    ],
    answer: 1,
    explanation: "La monografía concluye que la aplicación es parcial: es DIRECTA en usabilidad (Olsina), funcionalidad percibida/navegación (Olsina), tiempo para llegar al mercado (Offutt, al evitar retrabajos costosos antes de codificar) y organización del contenido (Tillman). En cambio, seguridad, escalabilidad y uptime (Offutt) NO tienen aplicación directa en artefactos UX."
  },
  {
    id: "t1-28",
    topic: "analisis",
    source: "1.4. Monografia_Diseno_UX_Pressman_Cap13.pdf (Sec. 1 y 3.1, pp. 1 y 7)",
    difficulty: "basica",
    question: "Citando a Jakob Nielsen al inicio del Capítulo 13, Pressman contrapone dos enfoques fundamentales del diseño web. ¿Cuáles son?",
    options: [
      "El ideal artístico de expresarse a sí mismo frente al ideal de la ingeniería de resolver un problema para un cliente.",
      "El enfoque orientado a objetos frente al enfoque de programación funcional.",
      "El diseño móvil nativo frente al diseño de aplicaciones de escritorio.",
      "El modelo en cascada frente a la ingeniería dirigida por modelos."
    ],
    answer: 0,
    explanation: "Pressman cita a Jakob Nielsen para advertir que el diseño de webapps complejas no puede quedarse solo en «el ideal artístico de expresarse a sí mismo», sino que debe responder al «ideal de la ingeniería de resolver un problema para un cliente»."
  }
];
