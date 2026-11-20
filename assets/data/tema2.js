window.EXAM_DATA = window.EXAM_DATA || {};

window.EXAM_DATA.patrones = [
  {
    id: "t2-01",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 1 y 1.1, p. 4)",
    difficulty: "basica",
    question: "¿Qué es un patrón de diseño y por qué el elemento «Consecuencias» es imprescindible en su descripción?",
    options: [
      "Es un fragmento de código listo para copiar y pegar; las consecuencias solo sirven como documentación legal.",
      "Es una solución probada (roles y relaciones) a un problema recurrente en un contexto con fuerzas en tensión; las consecuencias explicitan lo que se gana y lo que se paga, permitiendo decidir en lugar de seguir una receta ciega.",
      "Es una librería oficial del lenguaje de programación; las consecuencias indican únicamente la versión del compilador.",
      "Es un diagrama de despliegue de servidores; las consecuencias describen el presupuesto en la nube."
    ],
    answer: 1,
    explanation: "Un patrón no es código para copiar, sino una descripción abstracta de roles y colaboraciones que equilibra fuerzas en tensión. Sus cuatro elementos son Nombre, Problema, Solución y Consecuencias: sin consecuencias explícitas (qué se gana y qué se paga) el patrón se vuelve una receta sin criterio de decisión."
  },
  {
    id: "t2-02",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 1.2, p. 4)",
    difficulty: "basica",
    question: "¿Cuál es la línea histórica correcta del origen de los patrones de diseño en ingeniería de software?",
    options: [
      "1977: Christopher Alexander (arquitectura de edificios) → 1987: Beck y Cunningham (OOPSLA, Smalltalk) → 1995: Gang of Four (Gamma, Helm, Johnson y Vlissides, catálogo de 23 patrones).",
      "1960: Alan Turing (GoF) → 1995: Martin Fowler (23 patrones en Python) → 2010: Christopher Alexander.",
      "1987: GoF publica 5 patrones → 1995: Christopher Alexander los adapta a edificios → 2004: Beck crea Smalltalk.",
      "1995: Peter Norvig crea el catálogo GoF → 2003: Eric Evans escribe el primer libro sobre arquitectura urbana."
    ],
    answer: 0,
    explanation: "El concepto nace en arquitectura con Christopher Alexander (A Pattern Language, 1977), pasa al software con Kent Beck y Ward Cunningham en OOPSLA 1987 (Smalltalk) y se consolida en 1995 con el catálogo de 23 patrones de la «banda de los cuatro» (GoF)."
  },
  {
    id: "t2-03",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 1.3, pp. 4-5)",
    difficulty: "basica",
    question: "¿A qué familias del catálogo GoF pertenecen respectivamente los cinco patrones estudiados en profundidad en el apunte (Strategy, Factory, Observer, Adapter y Decorator)?",
    options: [
      "Creacionales: Adapter y Decorator; Estructurales: Strategy y Observer; Comportamiento: Factory.",
      "Comportamiento: Strategy y Observer; Creacional: Factory; Estructurales: Adapter y Decorator.",
      "Creacionales: Factory y Strategy; Estructurales: Observer y Adapter; Comportamiento: Decorator.",
      "Todos pertenecen a la familia de comportamiento porque resuelven lógica de pedidos."
    ],
    answer: 1,
    explanation: "En el catálogo GoF: Factory (Method / Abstract Factory) es creacional (cómo se crean objetos); Adapter y Decorator son estructurales (cómo se componen clases/objetos); Strategy y Observer son de comportamiento (cómo se reparten responsabilidades y comunican los objetos)."
  },
  {
    id: "t2-04",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 2.1-2.3, p. 6)",
    difficulty: "intermedia",
    question: "¿Por qué se recomienda «preferir composición a herencia» al diseñar con patrones?",
    options: [
      "Porque la herencia está prohibida en Python y JavaScript modernos.",
      "Porque la herencia fija el comportamiento en tiempo de compilación y crea jerarquías rígidas, mientras que la composición arma comportamiento combinando objetos colaboradores y permite cambiarlo en tiempo de ejecución.",
      "Porque la composición elimina la necesidad de interfaces y pruebas unitarias.",
      "Porque la composición siempre requiere menos archivos y menos objetos en memoria."
    ],
    answer: 1,
    explanation: "La herencia define el comportamiento estáticamente y genera jerarquías profundas difíciles de mantener; la composición (aplicada en Decorator, Strategy y Adapter de objetos) combina colaboradores permitiendo variar el comportamiento dinámicamente en tiempo de ejecución."
  },
  {
    id: "t2-05",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 2.2 y 4.2, pp. 6 y 9)",
    difficulty: "intermedia",
    question: "En Python, ¿qué diferencia existe entre definir una interfaz mediante `typing.Protocol` (PEP 544) frente a usar `abc.ABC` con `@abstractmethod`?",
    options: [
      "`Protocol` obliga a heredar explícitamente de la clase base, mientras que `abc.ABC` no usa herencia.",
      "`Protocol` define una interfaz estructural (duck typing con verificación estática: basta cumplir el contrato sin heredar), mientras que `abc.ABC` define una interfaz nominal (requiere herencia explícita).",
      "`Protocol` solo funciona en tiempo de ejecución y no puede ser verificado por herramientas como mypy.",
      "Ambos impiden el uso de dobles de prueba en pytest."
    ],
    answer: 1,
    explanation: "En Python, `typing.Protocol` (PEP 544) implementa tipado estructural: una clase como `Tarjeta` cumple el contrato `MedioDePago` sin heredar de él, y mypy puede verificarlo estáticamente. En cambio, `abc.ABC` expresa una interfaz nominal."
  },
  {
    id: "t2-06",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 2.4 y 2.5, p. 6)",
    difficulty: "intermedia",
    question: "¿Cómo se relacionan los principios SOLID y los conceptos de cohesión/acoplamiento con los patrones estudiados?",
    options: [
      "Strategy, Decorator y Observer concretan Abierto/Cerrado (OCP); Adapter, Factory y Strategy concretan Inversión de Dependencias (DIP); y en general los patrones reducen el acoplamiento a cambio de un mayor número de piezas.",
      "Los patrones aumentan el acoplamiento para mejorar la cohesión y reemplazar por completo los principios SOLID.",
      "Decorator viola Responsabilidad Única (SRP) porque mezcla logging y caché dentro de la lógica de negocio.",
      "Inversión de Dependencias (DIP) significa que los módulos de alto nivel deben instanciar directamente las clases concretas de bajo nivel."
    ],
    answer: 0,
    explanation: "El apunte muestra que OCP se concreta con Strategy, Decorator y Observer; DIP con Adapter, Factory y Strategy; SRP con Decorator y Observer; ISP con protocolos pequeños como MedioDePago. Todos buscan alta cohesión y bajo acoplamiento, pagando generalmente con más piezas e indirección."
  },
  {
    id: "t2-07",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 3, p. 7)",
    difficulty: "basica",
    question: "¿Por qué la pregunta «¿uso Strategy o microservicios?» es una comparación sin sentido según el apunte?",
    options: [
      "Porque Strategy solo existe en C++ y los microservicios solo en Python.",
      "Porque pertenecen a escalas distintas de patrones: Strategy es un patrón de diseño (GoF, nivel de clases/objetos), mientras que microservicios pertenece a la escala de arquitectura / sistemas distribuidos.",
      "Porque los microservicios nunca utilizan patrones de diseño en su código interno.",
      "Porque Strategy es un idioma propio del lenguaje React."
    ],
    answer: 1,
    explanation: "El apunte distingue cuatro escalas: (1) Idiomas del lenguaje (`with`, hooks), (2) Patrones de diseño GoF (clases y objetos), (3) Patrones de arquitectura (capas, MVC, hexagonal, CQRS) y (4) Sistemas distribuidos (Circuit Breaker, API Gateway, Saga, Pub/Sub). Comparar escalas distintas carece de sentido."
  },
  {
    id: "t2-08",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 4.1 y 4.2, pp. 8-9)",
    difficulty: "intermedia",
    question: "¿Cuál es la señal principal para aplicar el patrón Strategy y en qué se diferencia del patrón State?",
    options: [
      "La señal es una clase con atributos globales; se diferencia de State porque Strategy solo puede usarse en bases de datos.",
      "La señal es un `if/elif` o `match` sobre un tipo que se repite y crece; se diferencia de State porque en State el objeto cambia de estrategia por sí mismo según su estado interno, mientras que en Strategy suele recibirla elegida desde afuera.",
      "La señal es la necesidad de convertir XML a JSON; State es un patrón creacional.",
      "No hay diferencia funcional: Strategy es simplemente el nombre moderno de State en Python."
    ],
    answer: 1,
    explanation: "Strategy encapsula una familia de algoritmos intercambiables ante un `if/elif` que crece (violando OCP). Aunque estructuralmente se parece a State, en State el propio objeto transiciona entre estados/estrategias según su estado interno."
  },
  {
    id: "t2-09",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 4.3, pp. 9-10)",
    difficulty: "intermedia",
    question: "En el apunte se muestra `crear_medio(nombre)` usando un diccionario `MEDIOS = {'tarjeta': Tarjeta, ...}`. ¿Qué precisión terminológica hace el texto frente a los patrones creacionales del GoF?",
    options: [
      "Ese diccionario es exactamente un Builder porque construye el diccionario paso a paso.",
      "El ejemplo es una fábrica simple (o registro); en GoF, Factory Method delega la creación en un método redefinido por subclases y Abstract Factory crea familias de objetos relacionados, aunque los tres comparten la intención de que el cliente no nombre la clase concreta.",
      "El ejemplo es un Singleton porque el diccionario solo tiene claves únicas.",
      "Una fábrica simple no puede combinarse nunca con Strategy."
    ],
    answer: 1,
    explanation: "El apunte distingue fábrica simple/registro (el diccionario en Python), Factory Method (subclases redefinen un método creador) y Abstract Factory (creación de familias de objetos relacionados). Todas evitan que el cliente dependa de la clase concreta."
  },
  {
    id: "t2-10",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 4.4, pp. 10-11)",
    difficulty: "intermedia",
    question: "Al aplicar el patrón Observer (como el bus de eventos para `pedido_pagado`), ¿qué se gana y qué se paga?",
    options: [
      "Se gana ejecución más rápida en CPU; se paga la imposibilidad de usar funciones en Python.",
      "Se gana desacoplar al emisor de los receptores (sumar una reacción no modifica el emisor); se paga que el flujo se vuelve implícito, cuesta depurar quién reaccionó y en qué orden, y un observador que falla puede afectar a los siguientes.",
      "Se gana un flujo estrictamente lineal y fácil de leer de arriba abajo; se paga un mayor acoplamiento entre módulos.",
      "Se gana convertir formatos incompatibles como XML; se paga tener que crear un broker distribuido."
    ],
    answer: 1,
    explanation: "Observer desacopla el sujeto de sus observadores (cumpliendo OCP y bajo acoplamiento), pero introduce costos claros: el flujo ya no se lee linealmente de arriba abajo, la depuración y el orden de ejecución se complican, y una excepción en un observador puede afectar al resto."
  },
  {
    id: "t2-11",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 4.5, pp. 11-12)",
    difficulty: "intermedia",
    question: "¿Qué diferencia clave distingue al patrón Adapter del patrón Facade, aunque ambos «envuelven» código existente?",
    options: [
      "Adapter convierte una interfaz incompatible que no controlamos en la interfaz que el cliente espera, mientras que Facade simplifica el uso de un subsistema complejo detrás de una interfaz más sencilla.",
      "Adapter es un patrón creacional y Facade es un patrón de comportamiento.",
      "Facade se usa solo para sistemas heredados con XML y Adapter solo para interfaces gráficas.",
      "Adapter usa siempre herencia múltiple y Facade nunca usa composición."
    ],
    answer: 0,
    explanation: "Tanto Adapter como Facade son estructurales y envuelven código, pero su intención es distinta: Adapter traduce una interfaz incompatible hacia el contrato que espera el cliente; Facade ofrece una interfaz simplificada para un subsistema complejo."
  },
  {
    id: "t2-12",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 4.6, pp. 12-13)",
    difficulty: "intermedia",
    question: "¿Qué diferencia hay entre el `@decorador` de Python y el patrón Decorator del catálogo GoF, y cómo se diferencia Decorator de Proxy?",
    options: [
      "Son idénticos en forma e intención; Proxy agrega logs y Decorator bloquea permisos.",
      "El `@decorador` de Python es un mecanismo del lenguaje que envuelve funciones (usando `@wraps` para conservar metadatos), mientras que Decorator GoF envuelve objetos con la misma interfaz (ej. streams de Java); además, Decorator agrega comportamiento dinámico mientras que Proxy controla el acceso.",
      "El `@decorador` de Python solo sirve para clases abstractas y el orden en que se apilan los decoradores nunca importa.",
      "Proxy pertenece a la familia de comportamiento y Decorator a la creacional."
    ],
    answer: 1,
    explanation: "La intención coincide (agregar responsabilidades transversales sin tocar la lógica), pero la forma cambia: `@decorador` en Python envuelve funciones (`@wraps` preserva `__name__` y docstring), mientras GoF Decorator envuelve objetos con la misma interfaz. Proxy también envuelve con la misma interfaz, pero para controlar acceso, no para agregar comportamiento. Además, el orden de apilado importa."
  },
  {
    id: "t2-13",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 4.7, p. 14)",
    difficulty: "intermedia",
    question: "En la versión refactorizada de `procesar_pedido(pedido, medio, facturador, bus)`, ¿qué técnica se aplica y cómo se llama el único lugar donde se instancian y conectan las clases concretas?",
    code: `@auditado
def procesar_pedido(pedido, medio: MedioDePago,
                    facturador: Facturador, bus: Eventos):
    comprobante = medio.cobrar(pedido.total)
    factura = facturador.facturar(pedido)
    bus.publicar("pedido_pagado", pedido)
    return comprobante, factura`,
    codeLang: "python",
    options: [
      "Se aplica herencia múltiple y el punto de armado se denomina Singleton.",
      "Se aplica inyección de dependencias y el lugar único donde se crean y conectan las clases concretas se llama composition root; esto facilita probar con dobles de prueba.",
      "Se aplica acoplamiento fuerte y el punto de armado se llama API Gateway.",
      "Se aplica abstracción anticipada y el punto de armado se llama broker."
    ],
    answer: 1,
    explanation: "Al recibir `medio`, `facturador` y `bus` por parámetro se aplica inyección de dependencias; el único sitio que conoce y arma las clases concretas es el `composition root`. Una ventaja directa es poder reemplazar cada dependencia por un doble de prueba (como `MedioFalso` o `FacturadorFalso`) en `pytest`."
  },
  {
    id: "t2-14",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 5, p. 16)",
    difficulty: "intermedia",
    question: "¿Qué significa la idea «el lenguaje cambia el patrón» (señalada por Peter Norvig en 1996) y cómo se ilustra en Python y JavaScript?",
    options: [
      "Que los patrones cambian de intención cada vez que sale una nueva versión de un lenguaje.",
      "Que la intención se mantiene pero la forma cambia: en Python una estrategia sin estado puede ser una simple función (sin clase), y en JavaScript un módulo ES ya cumple el rol de Singleton y los Hooks de React reemplazan a Mixins y HOC.",
      "Que en lenguajes dinámicos como Python o JavaScript nunca se necesitan patrones de diseño.",
      "Que para aplicar Strategy en Python siempre es obligatorio crear una clase abstracta y tres subclases."
    ],
    answer: 1,
    explanation: "Norvig observó que en lenguajes dinámicos con funciones de primera clase y módulos muchos patrones GoF (pensados para C++ y Smalltalk) se vuelven más simples o invisibles: en Python basta pasar una función si la estrategia no requiere estado ni configuración; en JS un módulo ES se evalúa una sola vez (Singleton) y en React los hooks reemplazan Mixins y HOC."
  },
  {
    id: "t2-15",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 6, p. 17)",
    difficulty: "intermedia",
    question: "¿Qué equivalencias correctas establece el apunte al pasar de patrones de diseño a patrones de sistemas distribuidos?",
    options: [
      "Observer → Publish/Subscribe con broker; Facade → API Gateway; Proxy → Circuit Breaker; Adapter → Capa anticorrupción y Strangler Fig.",
      "Observer → API Gateway; Facade → Circuit Breaker; Proxy → Strangler Fig; Adapter → Publish/Subscribe.",
      "Strategy → Kafka; Factory → Kubernetes; Singleton → RabbitMQ; Decorator → DNS.",
      "Adapter → API Gateway; Observer → Capa anticorrupción; Facade → Circuit Breaker."
    ],
    answer: 0,
    explanation: "El apunte traza estas cuatro correspondencias de intención (aclarando que la red suma latencia, fallas parciales y asincronía): Observer ↔ Pub/Sub con broker (Kafka, RabbitMQ); Facade ↔ API Gateway; Proxy ↔ Circuit Breaker (Nygard, Resilience4j/Polly); Adapter ↔ Capa anticorrupción (Evans, DDD) y Strangler Fig (Fowler)."
  },
  {
    id: "t2-16",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 6, p. 17)",
    difficulty: "intermedia",
    question: "¿Cuál es el propósito del patrón Circuit Breaker (popularizado por Michael Nygard) y cuál el de Strangler Fig (Martin Fowler)?",
    options: [
      "Circuit Breaker cifra las contraseñas en la base de datos y Strangler Fig comprime imágenes.",
      "Circuit Breaker deja de llamar temporalmente a un servicio que está fallando para evitar fallas en cascada; Strangler Fig migra un monolito construyendo servicios nuevos alrededor y redirigiendo el tráfico de a poco.",
      "Circuit Breaker migra monolitos de a partes y Strangler Fig reemplaza a RabbitMQ.",
      "Ambos sirven únicamente para reducir el número de clases dentro de un módulo de Python."
    ],
    answer: 1,
    explanation: "Circuit Breaker (Release It!, Nygard; Hystrix → Resilience4j / Polly) corta llamadas a un servicio degradado para evitar fallas en cascada. Strangler Fig (Fowler, 2004) permite reemplazar un monolito gradualmente construyendo servicios nuevos alrededor y derivando tráfico progresivamente."
  },
  {
    id: "t2-17",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 7.1, p. 18)",
    difficulty: "intermedia",
    question: "¿Por qué suele considerarse riesgoso o antipatrón usar Singleton como variable global, y qué alternativa propone el apunte?",
    options: [
      "Porque consume demasiada red; la alternativa es usar un Circuit Breaker.",
      "Porque oculta dependencias (no figuran en la firma), acopla las pruebas entre sí al persistir estado entre tests y dificulta usar dobles de prueba; la alternativa es crear una única instancia en el armado (composition root) y pasarla como parámetro.",
      "Porque impide usar programación orientada a objetos; la alternativa es usar variables globales sueltas.",
      "Porque crea demasiadas instancias simultáneas; la alternativa es usar Factory Method."
    ],
    answer: 1,
    explanation: "Singleton oculta dependencias fuera de las firmas, hace que el estado persista entre pruebas (haciéndolas fallar según el orden de ejecución) y complica inyectar dobles. La alternativa recomendada es instanciar una vez en el armado e inyectar como parámetro (además, en Python un módulo ya es único)."
  },
  {
    id: "t2-18",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 7.2-7.4, p. 18)",
    difficulty: "basica",
    question: "¿Qué son la «patronitis», la «regla de tres» y «refactorizar hacia patrones» (Kerievsky)?",
    options: [
      "Patronitis es aplicar patrones sin un problema real; la regla de tres propone refactorizar hacia un patrón recién cuando algo se repite por tercera vez (evitando YAGNI); y refactorizar hacia patrones significa llegar al patrón mediante un refactor respaldado por pruebas previas.",
      "Patronitis es no conocer los 23 patrones GoF; la regla de tres exige usar al menos tres patrones por clase; y refactorizar hacia patrones implica diseñar todos los patrones antes de escribir código.",
      "La regla de tres indica que cada patrón debe tener exactamente tres clases y tres métodos.",
      "Refactorizar hacia patrones prohíbe escribir pruebas unitarias antes de modificar el diseño."
    ],
    answer: 0,
    explanation: "El apunte advierte contra la patronitis (sobreingeniería sin problema real) y la abstracción anticipada (YAGNI). La regla de tres sugiere esperar a la tercera repetición para refactorizar hacia el patrón (Kerievsky, 2004), siempre con pruebas automatizadas previas (Fowler, 2018)."
  },
  {
    id: "t2-19",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 8, p. 19)",
    difficulty: "intermedia",
    question: "Al trabajar con asistentes de programación basados en IA, ¿para qué dos tareas resultan especialmente útiles los patrones de diseño según el apunte?",
    options: [
      "Para delegar por completo las decisiones de ingeniería a la IA y evitar escribir pruebas.",
      "Para pedir con precisión (un nombre de patrón comunica la estructura esperada) y para revisar críticamente lo generado (verificando si realmente varía, si hay más de una implementación real, si se puede probar con dobles y si una función bastaba).",
      "Para ocultar a la IA el lenguaje de programación utilizado.",
      "Únicamente para traducir diagramas UML a comentarios de código."
    ],
    answer: 1,
    explanation: "Los asistentes generan patrones con facilidad incluso cuando sobran. Conocer patrones sirve para pedir cambios precisos (ej. «Refactorizá aplicando Strategy y agregá pruebas con pytest») y para auditar lo generado, recordando que decidir si hace falta sigue siendo trabajo de ingeniería."
  },
  {
    id: "t2-20",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 10.2, Ejercicio 1 y 6, p. 21)",
    difficulty: "aplicada",
    question: "Caso práctico: La facultad cambia de proveedor de SMS y la nueva API tiene nombres de métodos y parámetros incompatibles con el resto del sistema. ¿Qué patrón corresponde aplicar y qué costo asumís?",
    options: [
      "Observer; costo: el flujo de envío se vuelve implícito.",
      "Adapter; costo: se agrega una capa de traducción más con su propio mantenimiento, pero el formato externo queda aislado en una sola clase.",
      "Singleton; costo: solo se puede enviar un SMS por ejecución.",
      "Decorator; costo: el orden de las envolturas cambia el número de teléfono."
    ],
    answer: 1,
    explanation: "La señal clara de Adapter es una interfaz que no controlamos (servicio externo, librería de terceros o sistema heredado). Adapter encierra la traducción en una sola clase (cumpliendo DIP) a cambio de mantener esa capa traductora."
  },
  {
    id: "t2-21",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 10.2, Ejercicio 2, p. 21)",
    difficulty: "aplicada",
    question: "Caso práctico: Al aprobarse una inscripción deben reaccionar el aula virtual, la biblioteca y tesorería, y pronto se sumará un nuevo módulo de bienestar estudiantil. ¿Qué patrón es el más adecuado?",
    options: [
      "Factory, porque hay que instanciar un alumno a partir de un texto.",
      "Adapter, porque tesorería usa una interfaz incompatible.",
      "Observer, porque hay varios componentes interesados en un mismo hecho y la lista de interesados crece con el tiempo.",
      "Decorator, porque se trata de medir el tiempo de ejecución de una función."
    ],
    answer: 2,
    explanation: "Cuando varios componentes deben reaccionar a un mismo evento y nuevos interesados pueden sumarse sin modificar el emisor, corresponde Observer (asumiendo el costo de un flujo más implícito y difícil de depurar)."
  },
  {
    id: "t2-22",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 10.2, Ejercicio 3 y 5, p. 21)",
    difficulty: "aplicada",
    question: "Caso práctico: Un sistema de reportes debe exportar a PDF, CSV o XLSX según la opción elegida por el usuario en un menú, y próximamente se agregará JSON. ¿Qué combinación de patrones resuelve mejor el problema?",
    options: [
      "Strategy (para encapsular cada algoritmo de exportación de forma intercambiable) combinado con Factory (para instanciar el exportador correcto a partir de la elección del menú).",
      "Singleton combinado con Proxy para evitar que dos usuarios exporten a la vez.",
      "Observer combinado con Facade para publicar eventos al sistema operativo.",
      "Solo Decorator, apilando PDF encima de CSV encima de XLSX."
    ],
    answer: 0,
    explanation: "Strategy encapsula las distintas variantes de exportación (cumpliendo OCP) y Factory centraliza en un solo lugar la conversión del texto elegido en el menú hacia la estrategia concreta correspondiente."
  },
  {
    id: "t2-23",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 10.2, Ejercicio 4 y 7, p. 21)",
    difficulty: "aplicada",
    question: "Caso práctico: Tenés veinte funciones que consultan servicios externos y necesitás agregarles medición de tiempo y hasta tres reintentos automáticos ante fallos de conexión, sin ensuciar la lógica interna de cada función. ¿Qué patrón aplicás?",
    options: [
      "Abstract Factory.",
      "Decorator (en Python, decoradores apilables como `@medir_tiempo` y `@reintentar`, cuidando su orden).",
      "State.",
      "Adapter de clases por herencia múltiple."
    ],
    answer: 1,
    explanation: "Medición de tiempos, registro (logging), caché, permisos y reintentos son aspectos transversales clásicos que se resuelven con Decorator, manteniendo limpia la lógica de negocio (SRP) y permitiendo combinar responsabilidades."
  },
  {
    id: "t2-24",
    topic: "patrones",
    source: "2. Apunte Patrones de Diseño.pdf (Sec. 10.3, p. 22)",
    difficulty: "aplicada",
    question: "Observá la función `notificar` del ejercicio del apunte. ¿Qué par de patrones aborda directamente los dos «dolores» principales que presenta?",
    code: `def notificar(alumno, mensaje):
    if alumno.preferencia == "email":
        smtp.send(alumno.email, mensaje)
    elif alumno.preferencia == "sms":
        proveedor_sms.enviar_texto(alumno.telefono, mensaje[:160])
    elif alumno.preferencia == "whatsapp":
        wa_client.post({"to": alumno.telefono, "body": mensaje})
    print(f"[{datetime.now()}] notificado {alumno.legajo}")`,
    codeLang: "python",
    options: [
      "Strategy (+ Factory / Adapter si se envuelven las APIs dispares de cada canal) para eliminar el `if/elif` de canales, y Decorator para separar el registro (`print`) de la lógica de notificación.",
      "Singleton para el parámetro `alumno` y Circuit Breaker para `datetime.now()`.",
      "Solo Observer, reemplazando el `if/elif` por un diccionario de fechas.",
      "Ninguno: la función cumple perfectamente OCP y SRP tal como está."
    ],
    answer: 0,
    explanation: "La función mezcla dos problemas claros: (1) un `if/elif` sobre el canal de notificación con interfaces distintas por proveedor (Strategy + Factory, y cada canal puede adaptar su cliente externo) y (2) el registro de auditoría mezclado con la lógica de negocio (Decorator)."
  }
];
