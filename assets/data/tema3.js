window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.arquitectura = [
  {
    id: "t3-01",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 2, pp. 2-4)",
    difficulty: "basica",
    question: "¿Cómo define el apunte de cátedra la arquitectura de software y cuál es la clave de esa definición?",
    options: [
      "Un diagrama visual estético que se dibuja una sola vez al finalizar el proyecto.",
      "El conjunto de decisiones estructurales difíciles de revertir que condicionan cómo un sistema cumple sus requerimientos; la clave es el costo de cambiarlas más adelante.",
      "La elección de nombres de variables y convenciones de indentación del código fuente.",
      "Exclusivamente la selección de microservicios en la nube."
    ],
    answer: 1,
    explanation: "La arquitectura no es un diagrama lindo ni el código en sí, sino las decisiones estructurales difíciles de revertir (como mover una columna de una casa frente a pintar una pared, o cambiar de BD relacional a documental frente a renombrar una variable)."
  },
  {
    id: "t3-02",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 2.3 y 2.4, pp. 3-4)",
    difficulty: "basica",
    question: "¿Qué relación existe entre requerimientos funcionales, atributos de calidad y niveles de decisión (código, patrón de diseño, arquitectura)?",
    options: [
      "Los requerimientos funcionales dicen «qué hace» el sistema y la arquitectura/atributos de calidad deciden «qué tan bien lo hace»; el costo de cambio es bajo en código, medio en patrones de diseño y alto en arquitectura.",
      "Los atributos de calidad reemplazan a los requerimientos funcionales y tienen bajo costo de cambio.",
      "Dos sistemas que cumplen los mismos requerimientos funcionales siempre tienen el mismo rendimiento y disponibilidad.",
      "El costo de cambiar un patrón de diseño es siempre mayor que cambiar la arquitectura completa."
    ],
    answer: 0,
    explanation: "Dos sistemas pueden hacer exactamente lo mismo (requerimientos funcionales), pero uno ser rápido y estable y otro lento y frágil debido a su arquitectura. Los niveles ordenados por costo de cambio son: Código (bajo), Patrón de diseño (medio) y Arquitectura (alto)."
  },
  {
    id: "t3-03",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 3.1, p. 5)",
    difficulty: "basica",
    question: "¿Cuáles son los seis atributos de calidad estudiados en la clase de Arquitecturas de Software?",
    options: [
      "Usabilidad, estética, portabilidad, accesibilidad, SEO y compatibilidad.",
      "Disponibilidad, escalabilidad, rendimiento, seguridad, mantenibilidad y costo.",
      "Consistencia, partición, latencia, concurrencia, persistencia y red.",
      "Cohesión, acoplamiento, herencia, polimorfismo, encapsulamiento y abstracción."
    ],
    answer: 1,
    explanation: "Los seis atributos centrales de la clase son: Disponibilidad (responda cuando se necesita), Escalabilidad (aguante más usuarios sin rediseñarse), Rendimiento (tiempo de respuesta y uso de recursos), Seguridad (proteger datos y accesos), Mantenibilidad (que cambiar no duela) y Costo (construir y operar)."
  },
  {
    id: "t3-04",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 3.2, pp. 5-6)",
    difficulty: "intermedia",
    question: "Según el principio «no existe la mejor arquitectura, existen compromisos (trade-offs)», ¿qué se gana y qué se sacrifica respectivamente al (1) agregar una caché y (2) replicar en dos regiones?",
    options: [
      "(1) Gana seguridad, sacrifica costo; (2) gana simplicidad, sacrifica disponibilidad.",
      "(1) Gana rendimiento, sacrifica frescura de los datos (pueden estar desactualizados) y suma una pieza más para mantener; (2) gana disponibilidad, sacrifica costo y complejidad.",
      "(1) Gana escalabilidad sin costo alguno; (2) gana rendimiento sin afectar el presupuesto.",
      "(1) Gana mantenibilidad, sacrifica seguridad; (2) gana costo bajo, sacrifica disponibilidad."
    ],
    answer: 1,
    explanation: "El apunte detalla estos trade-offs concretos: agregar caché gana rendimiento pero puede mostrar datos desactualizados y añade una pieza que mantener; replicar en dos regiones gana disponibilidad a cambio de costo y complejidad; cifrar todo el tráfico gana seguridad sacrificando rendimiento y gestión de claves."
  },
  {
    id: "t3-05",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 3.2 y 3.4, pp. 6-7)",
    difficulty: "aplicada",
    question: "En el ejemplo trabajado de una app de telemedicina usada en emergencias con presupuesto acotado, ¿qué significa la máxima «si no sabés qué estás sacrificando, todavía no decidiste»?",
    options: [
      "Que en telemedicina siempre hay que elegir minimizar el costo antes que la disponibilidad.",
      "Que toda decisión arquitectónica exige explicitar tanto el atributo prioritario que se gana (por ej., disponibilidad en una emergencia) como lo que se cede o paga por lograrlo (por ej., mayor costo y complejidad al replicar).",
      "Que existe una única arquitectura perfecta que optimiza los seis atributos a la vez.",
      "Que la disponibilidad no se relaciona con la replicación ni con el presupuesto."
    ],
    answer: 1,
    explanation: "Lo que se evalúa al razonar un trade-off es identificar qué atributo importa más al negocio, anotar qué mejora y anotar explícitamente qué empeora o complica, dejando asentada la decisión."
  },
  {
    id: "t3-06",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 4.1-4.4, pp. 7-8)",
    difficulty: "basica",
    question: "¿Qué se gana y qué se paga respectivamente en los estilos arquitectónicos de Capas, Cliente-Servidor y Monolito?",
    options: [
      "Capas: gana separación de responsabilidades / paga que cada pedido atraviesa todas las capas. Cliente-servidor: gana control central / paga cuello de botella y punto único de falla. Monolito: gana simplicidad para empezar / paga que escala y cambia todo junto.",
      "Capas: gana cero latencia / paga acoplamiento total. Cliente-servidor: gana tolerancia a fallos sin servidor / paga falta de control. Monolito: gana escalar por partes / paga complejidad de red.",
      "Los tres estilos tienen exactamente las mismas ventajas y el mismo costo operativo.",
      "Monolito gana control central; Cliente-servidor paga que cada pedido cruza capas; Capas es un punto único de falla."
    ],
    answer: 0,
    explanation: "Cada estilo responde a una dimensión y tiene su trade-off: Capas (orden vs. atravesar todas las capas), Cliente-servidor (control en un solo lugar vs. cuello de botella y punto único de falla) y Monolito (simple para empezar vs. escalar y cambiar todo junto)."
  },
  {
    id: "t3-07",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 4.5, p. 8)",
    difficulty: "intermedia",
    question: "¿Por qué afirma el apunte que los estilos de Capas, Cliente-Servidor y Monolito NO son excluyentes?",
    options: [
      "Porque los tres son nombres distintos para los microservicios.",
      "Porque responden a preguntas distintas: un mismo sistema puede desplegarse como monolito, estar organizado internamente en capas (presentación, lógica, datos) y operar como cliente-servidor frente a los celulares de los usuarios.",
      "Porque todo sistema moderno está obligado por ley a combinar los tres.",
      "Porque un monolito nunca puede tener clientes externos."
    ],
    answer: 1,
    explanation: "Cada estilo aborda una vista distinta: organización interna (capas), cómo se conectan los clientes (cliente-servidor) y unidad de construcción/despliegue (monolito). Por eso se combinan con total naturalidad."
  },
  {
    id: "t3-08",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 5.1 y 5.2, p. 9)",
    difficulty: "intermedia",
    question: "En el espectro de distribución (Monolito → Monolito modular → Microservicios), ¿con qué se paga cada punto del espectro?",
    options: [
      "Monolito: con red; Monolito modular: con licencias; Microservicios: con falta de independencia.",
      "Monolito: todo escala y cambia junto; Monolito modular: disciplina para respetar fronteras internas; Microservicios: complejidad de red, coordinación de versiones y necesidad de observabilidad.",
      "Monolito modular no tiene ningún costo y resuelve todos los problemas sin disciplina.",
      "Microservicios solo se pagan con un poco más de memoria RAM, sin afectar red ni versiones."
    ],
    answer: 1,
    explanation: "Distribuir es un espectro donde a mayor independencia hay mayor complejidad: Monolito paga escalando/cambiando todo junto; Monolito modular exige disciplina para no acoplar sus módulos; Microservicios paga con red (que falla), coordinación de versiones y observabilidad."
  },
  {
    id: "t3-09",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 5.3-5.4 y 16.2-16.4, pp. 9-10 y 32-35)",
    difficulty: "intermedia",
    question: "En el debate entre Martin Fowler («Monolith First») y Stefan Tilkov («Don't start with a monolith»), ¿cuál es el argumento central de cada uno y en qué coinciden?",
    options: [
      "Fowler sostiene que conviene descubrir las fronteras dentro de un monolito antes de «congelarlas» en servicios (evitando el Microservice Premium y YAGNI); Tilkov replica que el monolito tiende a acoplarse fuertemente haciendo muy difícil partirlo después; ambos coinciden en que distribuir agrega complejidad que debe justificarse y que no hay receta universal.",
      "Fowler exige empezar siempre con microservicios; Tilkov defiende que los microservicios nunca sirven.",
      "Fowler asegura que cualquier monolito se divide sin esfuerzo después; Tilkov sostiene que los equipos pequeños deben usar 50 microservicios desde el día uno.",
      "Ambos concluyen que la decisión no depende del equipo, ni del dominio, ni del momento."
    ],
    answer: 0,
    explanation: "Fowler observa que casi todos los casos exitosos de microservicios nacieron de un monolito donde se descubrieron las fronteras correctas (aunque advierte que un monolito modular exige disciplina). Tilkov replica que el monolito se acopla por definición y que límites duros favorecen desarrollo paralelo cuando el sistema es grande y el dominio bien conocido. Ambos coinciden en que depende del equipo, el dominio y el momento."
  },
  {
    id: "t3-10",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 6, pp. 10-12)",
    difficulty: "intermedia",
    question: "Según el Teorema CAP (Eric Brewer; demostrado por Gilbert y Lynch), ¿por qué la decisión real en un sistema distribuido es entre Consistencia y Disponibilidad?",
    options: [
      "Porque la tolerancia a particiones (P) es opcional y puede desactivarse por configuración.",
      "Porque en un sistema con varios servidores la partición de red (corte de comunicación) tarde o temprano ocurre inevitablemente; ante ese corte hay que elegir entre consistencia (no responder antes que mostrar un dato erróneo) o disponibilidad (responder siempre aunque el dato esté algo desactualizado).",
      "Porque un sistema distribuido puede garantizar consistencia, disponibilidad y tolerancia a particiones simultáneamente durante un corte de red.",
      "Porque CAP significa Capas, Arquitectura y Persistencia."
    ],
    answer: 1,
    explanation: "La partición de red no se elige: sucede. Por eso, cuando se corta la red entre servidores, el negocio debe elegir entre Consistencia (todos ven el mismo dato, aunque toque rechazar/no responder) y Disponibilidad (siempre responde, aunque con dato algo viejo)."
  },
  {
    id: "t3-11",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 6.2, p. 11)",
    difficulty: "aplicada",
    question: "Aplicando el Teorema CAP ante una partición de red, ¿qué propiedad prioriza típicamente una transferencia bancaria y cuál prioriza el contador de «me gusta» de una red social?",
    options: [
      "Ambos priorizan disponibilidad porque nunca se debe bloquear una operación.",
      "La transferencia bancaria prioriza consistencia (mejor esperar o no responder que mostrar un saldo equivocado); los «me gusta» priorizan disponibilidad (si un conteo aparece unos segundos después, no es grave).",
      "La transferencia bancaria prioriza disponibilidad y los «me gusta» priorizan consistencia estricta.",
      "Ninguno de los dos ejemplos se ve afectado por una partición de red."
    ],
    answer: 1,
    explanation: "Son los dos ejemplos exactos del apunte: en una transferencia bancaria un saldo erróneo es inaceptable (Consistencia), mientras que en los «me gusta» de una red social conviene seguir respondiendo aunque haya una leve desactualización temporal (Disponibilidad)."
  },
  {
    id: "t3-12",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 7.1 y 7.2, p. 12)",
    difficulty: "basica",
    question: "¿Cómo se comparan la comunicación síncrona y la comunicación asíncrona entre partes de un sistema?",
    options: [
      "Síncrona (como llamar por teléfono): se pide y se espera; es simple de razonar, pero si el otro cae, caés vos. Asíncrona (como dejar un mensaje en un grupo de chat): se avisa y se sigue; da más desacople, pero es más difícil de seguir y depurar.",
      "Síncrona ofrece máximo desacople y es difícil de depurar; asíncrona bloquea siempre al emisor hasta recibir respuesta.",
      "En la comunicación asíncrona, si un receptor está caído, el emisor se cae inmediatamente.",
      "La comunicación síncrona siempre utiliza un broker de eventos."
    ],
    answer: 0,
    explanation: "Síncrona = pedido/respuesta (teléfono): simple de razonar, pero propaga caídas (como en el escenario del Black Friday). Asíncrona = eventos (mensaje en un grupo): desacopla emisor y receptores a cambio de mayor complejidad para rastrear y depurar el flujo."
  },
  {
    id: "t3-13",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 7.3, pp. 12-13)",
    difficulty: "intermedia",
    question: "¿Cuáles son los cuatro elementos del patrón Publicación/Suscripción (pub/sub) y los tres tipos de desacople que proporciona?",
    options: [
      "Elementos: cliente, servidor, DNS y base de datos. Desacoples: de red, de memoria y de disco.",
      "Elementos: publicadores, broker, temas (topics) y suscriptores. Desacoples: de espacio (no se conocen), de tiempo (no necesitan estar activos a la vez) y de sincronía (quien publica no se queda esperando).",
      "Elementos: productores, colas, tablas y cachés. Desacoples: de costo, de seguridad y de idioma.",
      "Elementos: emisor, receptor, router y API. Desacoples: de capas, de clases y de funciones."
    ],
    answer: 1,
    explanation: "Pub/sub consta de Publicadores, Broker, Temas (topics) y Suscriptores. Logra tres desacoples: espacio (no se conocen entre sí), tiempo (el suscriptor puede recibir más tarde) y sincronía (el publicador no bloquea esperando). Su costo es mantener el broker (que puede afectar a todos si cae)."
  },
  {
    id: "t3-14",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 7.6, p. 15)",
    difficulty: "intermedia",
    question: "¿Qué diferencia funcional existe entre una cola de mensajes y el patrón publicación/suscripción (pub/sub)?",
    options: [
      "En una cola de mensajes, cada mensaje lo procesa un solo receptor (sirve para repartir trabajo); en pub/sub, cada suscriptor recibe su propia copia del mensaje (sirve para avisar a muchos).",
      "En una cola de mensajes todos los receptores reciben copia y en pub/sub solo uno.",
      "La cola de mensajes es siempre síncrona y pub/sub es siempre por polling.",
      "No existe diferencia; las nubes venden exactamente lo mismo con nombres distintos."
    ],
    answer: 0,
    explanation: "La cola de mensajes reparte carga entregando cada mensaje a un único consumidor (como SQS), mientras que pub/sub difunde eventos entregando una copia a cada suscriptor interesado (como SNS)."
  },
  {
    id: "t3-15",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 7.4, pp. 13-14)",
    difficulty: "aplicada",
    question: "En MQTT (pub/sub para IoT), ¿qué mensajes recibe un suscriptor de `casa/+/temperatura` frente a uno de `casa/#`, y quién puede utilizar estos comodines?",
    code: `casa/living/temperatura
casa/cocina/temperatura
casa/living/humedad
casa/patio/riego/estado`,
    codeLang: "mqtt",
    options: [
      "`casa/+/temperatura` recibe la temperatura de todas las habitaciones (un solo nivel intermedio); `casa/#` recibe todo lo que cuelga de `casa/` en cualquier profundidad; los comodines solo los usa quien se suscribe, nunca quien publica.",
      "`casa/+/temperatura` recibe todos los niveles posibles incluyendo `riego/estado`; `casa/#` reemplaza solo un nivel; los comodines los usan tanto publicadores como suscriptores.",
      "`casa/+/temperatura` solo recibe `casa/living/humedad` y los comodines los usa exclusivamente el publicador.",
      "En MQTT no existen jerarquías de temas ni comodines."
    ],
    answer: 0,
    explanation: "En MQTT, `+` reemplaza exactamente un nivel de la jerarquía (captura `casa/living/temperatura` y `casa/cocina/temperatura`, no `humedad` ni niveles extra) y `#` captura todo lo que sigue desde ese punto. Regla clave: los comodines solo los usa el suscriptor, nunca el publicador."
  },
  {
    id: "t3-16",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 7.4 y 16.6, pp. 14 y 36)",
    difficulty: "intermedia",
    question: "En la ampliación sobre MQTT (documentación de EMQX), ¿qué representan los tres niveles de Calidad de Servicio (QoS 0, 1 y 2) y el «mensaje retenido»?",
    options: [
      "QoS 0: exactamente una vez; QoS 2: puede perderse; mensaje retenido: mensaje borrado al desconectar.",
      "QoS 0: como máximo una vez (puede perderse); QoS 1: al menos una vez (puede duplicarse); QoS 2: exactamente una vez (más costoso); y el mensaje retenido hace que el broker guarde el último mensaje de un tema para entregarlo de inmediato a nuevos suscriptores.",
      "QoS mide la velocidad en megabits del sensor Wi-Fi y el mensaje retenido es el mensaje de última voluntad (will).",
      "QoS solo aplica a conexiones síncronas HTTP."
    ],
    answer: 1,
    explanation: "En MQTT: QoS 0 (a lo sumo una vez), QoS 1 (al menos una vez), QoS 2 (exactamente una vez, mayor intercambio de mensajes). El mensaje retenido guarda el último valor del tema para quien se suscriba después (mientras que el mensaje `will` o de última voluntad se publica si un cliente se desconecta inesperadamente)."
  },
  {
    id: "t3-17",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 7.5 y 11.5, pp. 14 y 22)",
    difficulty: "aplicada",
    question: "Para el ranking en vivo de la clase (~70 celulares), ¿por qué se eligió Polling cada 2 o 3 segundos en lugar de Push (pub/sub) y qué se sacrificó?",
    options: [
      "Porque polling garantiza cero demora en milisegundos; se sacrificó la seguridad de los datos.",
      "Porque el servidor no estaba pensado para sostener muchas conexiones abiertas simultáneas y 23–35 consultas/s resultaban muy livianas; se ganó simplicidad sacrificando consultas repetidas sin cambios y una demora de unos segundos.",
      "Porque los celulares modernos no soportan conexiones push ni WebSockets.",
      "Porque polling consume cero ancho de banda y nunca consulta cuando no hay cambios."
    ],
    answer: 1,
    explanation: "El ejemplo del ranking (también redactado como ADR-001) muestra una decisión consciente: Push exige conexiones abiertas sostenidas por cada celular, mientras Polling cada 2–3s genera 23–35 req/s (muy liviano), ganando simplicidad a cambio de consultas repetidas y unos segundos de demora."
  },
  {
    id: "t3-18",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 8.1 y 8.2, pp. 15-16)",
    difficulty: "basica",
    question: "Dentro de la arquitectura cloud-native, ¿qué afirmación es correcta sobre contenedores, orquestadores y funciones serverless?",
    options: [
      "Serverless significa que el código se ejecuta mágicamente sin ningún servidor físico en el mundo.",
      "Un contenedor empaqueta un servicio con todo lo necesario y un orquestador lo ubica, escala y reinicia si falla; en serverless sí hay servidores, pero los maneja y escala el proveedor y se paga por uso.",
      "Los servicios gestionados obligan al equipo de desarrollo a instalar y parchear manualmente cada servidor de base de datos.",
      "Delegar infraestructura en un proveedor cloud elimina cualquier dependencia hacia él."
    ],
    answer: 1,
    explanation: "Las tres ideas cloud-native son: Contenedores + orquestador (ubica, escala, reinicia), Funciones serverless (sí hay servidores, los opera el proveedor y se paga por uso) y Servicios gestionados (BD, colas, brokers operados por el proveedor). Delegar gana tiempo, pero genera dependencia del proveedor."
  },
  {
    id: "t3-19",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 8.3 y 8.4, p. 16)",
    difficulty: "intermedia",
    question: "Según la tabla «Mismo patrón, distinto nombre» de la arquitectura en la nube, ¿qué par de servicios corresponde correctamente al mismo patrón en dos proveedores diferentes?",
    options: [
      "Pub/sub: Amazon SNS (AWS) y Pub/Sub (Google Cloud) — o Service Bus topics (Azure) / ApsaraMQ for RocketMQ (Alibaba Cloud).",
      "Funciones serverless: Amazon SQS (AWS) y Cloud Load Balancing (Google Cloud).",
      "Contenedores: AWS Lambda (AWS) y API Gateway (Google Cloud).",
      "Cola de mensajes: Amazon EKS (AWS) y Azure Functions (Azure)."
    ],
    answer: 0,
    explanation: "Lo transferible es el patrón, no la marca comercial: Pub/sub es Amazon SNS (AWS), Pub/Sub (GCP), Service Bus topics (Azure), ApsaraMQ for RocketMQ (Alibaba). Cola de mensajes es SQS (AWS); Funciones es AWS Lambda / Cloud Run functions / Azure Functions; Contenedores es EKS / GKE / AKS / ACK."
  },
  {
    id: "t3-20",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 9, pp. 17-18)",
    difficulty: "intermedia",
    question: "¿Qué diferencia a la «soberanía de datos» del «vendor lock-in» y cómo se puede mitigar el segundo riesgo?",
    options: [
      "Soberanía de datos pregunta en qué país viven los datos y qué leyes los alcanzan; vendor lock-in se refiere a quedar atado a un proveedor por usar servicios propietarios (encareciendo migrar) y se mitiga prefiriendo estándares abiertos y aislando servicios propietarios detrás de una interfaz propia.",
      "Soberanía de datos es quedar atado a un proveedor y vendor lock-in es la ley de privacidad de un país.",
      "Vendor lock-in solo ocurre cuando se usa software de código abierto en servidores propios.",
      "La soberanía de datos se resuelve usando únicamente serverless."
    ],
    answer: 0,
    explanation: "Las dos preguntas clave para la arquitectura son «¿dónde viven los datos?» (soberanía de datos / jurisdicción legal) y «¿cuánto costaría migrar?» (vendor lock-in). Para reducir el lock-in conviene usar estándares abiertos, aislar el servicio propietario tras una interfaz propia y documentar el riesgo en un ADR."
  },
  {
    id: "t3-21",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 10.1, p. 19)",
    difficulty: "basica",
    question: "¿Cuál es la secuencia exacta de los cuatro pasos del patrón RAG (Generación Aumentada por Recuperación)?",
    options: [
      "1. Entrenamiento del modelo → 2. Compilación → 3. Despliegue → 4. Caché.",
      "1. Pregunta (en lenguaje natural) → 2. Recuperación (búsqueda de fragmentos en documentos propios) → 3. Modelo (modelo de lenguaje genera la respuesta usando esos fragmentos) → 4. Respuesta (se entrega y se registra).",
      "1. Modelo → 2. Pregunta → 3. Base de datos SQL → 4. Reentrenamiento.",
      "1. Publicador → 2. Broker → 3. Tema → 4. Suscriptor."
    ],
    answer: 1,
    explanation: "En RAG (Retrieval-Augmented Generation), antes de responder el sistema busca fragmentos relevantes en documentos propios de la organización y se los pasa al modelo de lenguaje para redactar la respuesta: Pregunta → Recuperación → Modelo → Respuesta."
  },
  {
    id: "t3-22",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 10.2, pp. 19-20)",
    difficulty: "intermedia",
    question: "¿Cuáles son las preocupaciones de arquitectura del patrón RAG y qué atributo de calidad (o riesgo) afecta cada una según el apunte?",
    options: [
      "Latencia (afecta Rendimiento), Costo por consulta (afecta Costo), No determinismo (ninguno de los 6 atributos lo cubre del todo: hay que decidir cómo controlarlo), Fuga de datos al enviar info sensible a un proveedor externo (afecta Seguridad) y Dependencia del proveedor de modelos (Vendor lock-in).",
      "RAG solo afecta la estética de la interfaz y garantiza respuestas 100 % deterministas y gratuitas.",
      "Fuga de datos afecta únicamente a la mantenibilidad y el no determinismo mejora la seguridad.",
      "Latencia mejora el rendimiento porque añade más pasos antes de responder."
    ],
    answer: 0,
    explanation: "El apunte remarca que en IA importa sobre todo la arquitectura que rodea al modelo: latencia (Rendimiento), costo por consulta (Costo), no determinismo (requiere mecanismos propios de control), fuga de datos (Seguridad) y dependencia del proveedor del modelo (Vendor lock-in)."
  },
  {
    id: "t3-23",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 11, pp. 20-22)",
    difficulty: "basica",
    question: "¿Cuáles son las cinco partes del ADR (Architecture Decision Record) propuestas por la cátedra y por qué se agregó específicamente la cuarta parte?",
    options: [
      "Portada, índice, diagramas UML, código fuente y presupuesto.",
      "Título, Contexto, Decisión, Alternativas y Consecuencias; la parte de Alternativas fue agregada por la cátedra para obligar a dejar constancia de qué opciones se consideraron y se descartaron.",
      "Escena, Decisión, Culpable, Multa y Solución.",
      "Contexto, API, Proveedor, Precio y Latencia."
    ],
    answer: 1,
    explanation: "Un ADR es un registro corto (~1 página) con Título, Contexto, Decisión, Alternativas (agregada por la cátedra, equivalente a opciones consideradas de MADR) y Consecuencias (qué se gana y qué se sacrifica). Tres preguntas lo resumen: ¿qué elegiste, por qué y qué sacrificás?"
  },
  {
    id: "t3-24",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 16.5, p. 35)",
    difficulty: "intermedia",
    question: "Además de la plantilla clásica de Nygard (2011) y MADR, el apunte presenta el formato «Y-Statement» para documentar decisiones. ¿Qué es un Y-Statement?",
    options: [
      "Un informe extenso de más de 50 páginas requerido por la norma ISO 42010.",
      "Una frase estructurada corta que une el contexto/caso de uso, la preocupación, la opción elegida (y descartadas), la calidad buscada y el inconveniente aceptado.",
      "Un diagrama de flujo exclusivo para bases de datos en la nube.",
      "Una herramienta automatizada para medir cobertura de pruebas unitarias."
    ],
    answer: 1,
    explanation: "El Y-Statement resume una decisión arquitectónica en una sola frase estructurada (por ejemplo: «En el contexto de..., frente a..., decidimos usar... y descartamos..., para lograr..., aceptando...»)."
  },
  {
    id: "t3-25",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 12, pp. 22-25)",
    difficulty: "basica",
    question: "En la actividad «Sobreviví al sistema» y su cierre mediante Postmortem, ¿cuáles son los cuatro pasos del postmortem y cuál es su espíritu fundamental?",
    options: [
      "Los pasos son Culpa, Sanción, Despido y Reemplazo; busca encontrar al desarrollador responsable.",
      "Los cuatro pasos son Escena (cuándo se rompió), Decisión (qué eligieron), Atributo sacrificado (qué descuidaron) y Concepto (qué idea teórica lo explica); su espíritu es buscar aprendizajes sin buscar culpables.",
      "Los pasos son Presupuesto, Código, Pruebas y Despliegue; solo se aplica si el sistema sobrevivió.",
      "Los pasos son Título, Contexto, Alternativas y Costo; reemplaza a los cuatro indicadores del juego."
    ],
    answer: 1,
    explanation: "En el juego los 4 indicadores son disponibilidad, presupuesto, simplicidad y seguridad (si alguno llega a 0, el sistema colapsa). El postmortem analiza fallas sin buscar culpables sino aprendizajes, en 4 pasos: Escena → Decisión → Atributo sacrificado → Concepto."
  },
  {
    id: "t3-26",
    topic: "arquitectura",
    source: "3.2. Apunte de cátedra — Arquitecturas de software.pdf (Cap. 16.7, pp. 37-38)",
    difficulty: "intermedia",
    question: "En el AWS Well-Architected Framework (Lectura 5), ¿cuáles son sus seis pilares y cuáles dos indica el documento que generalmente NO se negocian contra los otros?",
    options: [
      "Excelencia operativa, Seguridad, Fiabilidad, Eficiencia de rendimiento, Optimización de costos y Sostenibilidad; generalmente Seguridad y Excelencia operativa no se negocian.",
      "Monolito, Microservicios, Serverless, Contenedores, MQTT y RAG; generalmente Serverless y RAG no se negocian.",
      "Disponibilidad, Escalabilidad, Consistencia, Partición, Costo y Latencia; generalmente Optimización de costos nunca se negocia.",
      "Solo tiene tres pilares: Seguridad, Costo y Sostenibilidad."
    ],
    answer: 0,
    explanation: "El AWS Well-Architected Framework organiza la evaluación en 6 pilares: Excelencia operativa, Seguridad, Fiabilidad, Eficiencia de rendimiento, Optimización de costos y Sostenibilidad. Aunque existen trade-offs entre pilares según el contexto (ej. desarrollo vs. producción), el documento afirma que seguridad y excelencia operativa generalmente no se negocian."
  }
];
