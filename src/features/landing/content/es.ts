import type { LandingContent } from "../types";

export const es: LandingContent = {
  meta: {
    title: "Veinshot — Una dosis. Sin relleno.",
    description:
      "Veinshot es un estudio de software que entrega soluciones directo a la vena: alcance preciso, ejecución senior, cero relleno.",
    ogImage: "/og-es.png",
    ogAlt: "Veinshot — estudio de software. Una dosis. Sin relleno.",
  },
  brand: {
    contact: {
      label: "hello@veinshot.com",
      href: "mailto:hello@veinshot.com",
    },
    homeAriaLabel: "Inicio de Veinshot",
    logoAriaLabel: "Veinshot: el nombre de la marca dentro del barril de una jeringa",
  },
  hero: {
    eyebrow: "Estudio de software",
    headline: {
      lead: "Una dosis.",
      accent: "Sin relleno.",
    },
    subline:
      "Veinshot construye software que va directo a la vena: alcance preciso, ejecución senior y nada que no hayas pedido.",
    cta: {
      label: "Inicia tu proyecto",
      href: "mailto:hello@veinshot.com",
    },
    veinAriaLabel:
      "Una vena en forma de circuito lleva íconos de herramientas hacia un producto en wireframe, encendiéndolo sección por sección",
  },
  services: {
    eyebrow: "Servicios",
    headline: {
      lead: "Elige el",
      accent: "tratamiento.",
    },
    subline:
      "Cada proyecto se define como una receta: dosis clara, resultado claro y nada que no hayas pedido.",
    items: [
      {
        tag: "Construcción completa",
        title: "Ingeniería de producto",
        description:
          "Diseño y construcción de productos web de punta a punta, con el stack que el problema pida. Manos senior desde la arquitectura hasta el deploy — sin traspasos ni juniors aprendiendo a tu costa.",
      },
      {
        tag: "Sprint",
        title: "MVP en semanas",
        description:
          "Una dosis de alcance fijo: tu idea convertida en un producto funcionando en cuatro a seis semanas. Un objetivo, una fecha, cero desvíos de alcance.",
      },
      {
        tag: "Integración",
        title: "IA que llega a producción",
        description:
          "Funcionalidades con LLMs conectadas a tu producto existente — agentes, retrieval, automatización. Ingeniería pragmática por encima del hype.",
      },
      {
        tag: "Diagnóstico",
        title: "Auditoría y rescate de código",
        description:
          "Una lectura clínica de tu código: arquitectura, rendimiento, deuda técnica. Recibes el informe de laboratorio y un plan de tratamiento — y podemos operar.",
      },
    ],
  },
  process: {
    eyebrow: "Proceso",
    headline: {
      lead: "Del ingreso al",
      accent: "alta.",
    },
    subline:
      "Cuatro pasos, sin misterio. Sabes dónde estás parado en cada punto del tratamiento.",
    steps: [
      {
        number: "01",
        name: "Ingreso",
        description:
          "Describes el problema. Hacemos las preguntas incómodas desde el inicio — objetivos, restricciones, presupuesto — para que nada sorprenda después.",
      },
      {
        number: "02",
        name: "Receta",
        description:
          "Recibes un alcance por escrito: qué construiremos, cuánto tarda y cuánto cuesta. Fijo, no difuso. Apruebas antes de que empiece nada.",
      },
      {
        number: "03",
        name: "Tratamiento",
        description:
          "Construimos en ciclos cortos con software funcionando cada semana. Ves avances que puedes usar, no reportes de estado.",
      },
      {
        number: "04",
        name: "Alta",
        description:
          "Te llevas las llaves: código, documentación y una entrega limpia. Sin lock-in ni retainers forzados — y aquí estamos si nos necesitas de nuevo.",
      },
    ],
  },
  faq: {
    eyebrow: "Preguntas",
    headline: {
      lead: "Respuestas",
      accent: "directas.",
    },
    subline:
      "Lo que un prospecto realmente quiere saber, respondido como te lo diríamos en una llamada.",
    items: [
      {
        question: "¿Cómo cotizan los proyectos?",
        answer:
          "Precio fijo, atado a un alcance por escrito — conoces el costo antes de que empiece nada. No publicamos tarifas porque no hay dos tratamientos iguales: describe tu problema y recibirás un número, no un rango.",
      },
      {
        question: "¿Qué pasa si el alcance cambia a mitad del proyecto?",
        answer:
          "La receta es fija: lo acordado es lo que entregamos, al precio acordado. Las ideas nuevas son bienvenidas — se definen y cotizan como adiciones, nunca se absorben como desvíos silenciosos. Esa disciplina es lo que mantiene honestas las fechas.",
      },
      {
        question: "¿Trabajan con equipos existentes?",
        answer:
          "De las dos formas. Podemos hacernos cargo de la construcción completa, o sumar manos senior a tu equipo — tu repositorio, tu proceso, nuestra ejecución.",
      },
      {
        question: "¿Qué pasa después de la entrega?",
        answer:
          "Toda entrega incluye un mes de soporte: si algo que escribimos se rompe, lo arreglamos. El mantenimiento continuo posterior está disponible como un contrato aparte.",
      },
      {
        question: "¿Desde dónde trabajan?",
        answer:
          "100% remoto, en inglés y español. Async primero, con solapamiento en tiempo real para las conversaciones que importan.",
      },
      {
        question: "¿Hay un tamaño mínimo de proyecto?",
        answer:
          "No. Si el problema es real, merece una dosis precisa — algunos de los mejores proyectos empiezan pequeños.",
      },
    ],
  },
  contact: {
    eyebrow: "Contacto",
    headline: {
      lead: "Cuéntanos dónde",
      accent: "duele.",
    },
    subline:
      "Describe el problema en un correo. Recibirás una respuesta con alcance definido — qué haríamos, cuánto tarda y cuánto cuesta. Sin llamada de ventas.",
    cta: {
      label: "Inicia tu proyecto",
      href: "mailto:hello@veinshot.com",
    },
  },
  notFound: {
    eyebrow: "404",
    headline: {
      lead: "Línea",
      accent: "plana.",
    },
    subline: "Esta página no existe — o no entró en el alcance.",
    cta: {
      label: "Volver a los vivos",
      href: "/es",
    },
  },
};
