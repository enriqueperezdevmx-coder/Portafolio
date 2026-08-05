export const es = {
  nav: {
    home: "Inicio",
    about: "Sobre Mí",
    skills: "Habilidades",
    projects: "Proyectos",
    certifications: "Certificaciones",
    contact: "Contacto",
    downloadCV: "Descargar CV",
    language: "Idioma"
  },
  sections: {
    aboutTitle: "Sobre Mí",
    skillsTitle: "Habilidades Técnicas",
    projectsTitle: "Mis Proyectos",
    certsTitle: "Mis Certificaciones",
    contactTitle: "Contáctame",
    code: "Código", // Agregado para el botón
    liveDemo: "Demo en vivo" // Agregado para el botón
  },
 hero: {
    greeting: "Hola, soy",
    name: "Enrique Pérez Sánchez",
    badge: "Disponible para nuevos proyectos",
    role: "Desarrollador Java Full Stack",
    description: "Desarrollador Junior enfocado en la creación de aplicaciones web escalables y soluciones en la nube. Desarrollo el backend con Java y construyo infraestructura en el ecosistema de AWS.",
    cta: "Ver Proyectos",
    contact: "Hablemos"
  },
  about: {
    paragraphs: [
      "Soy Enrique Pérez Sánchez, un desarrollador de la Ciudad de México enfocado en aprender lógica de programación pura y diseñar arquitecturas estables.",
      "Actualmente estudio la Licenciatura en Tecnologías de la Información y la Comunicación en la Universidad Nacional Rosario Castellanos y me especializo en Java, Spring Boot y bases de datos relacionales, complementado con React y Tailwind CSS en el frontend.",
      "Mi objetivo es consolidar mi carrera en tecnologías de la nube (AWS) para crear soluciones eficientes, seguras y directas."
    ]
  },
  projects: [
    {
      title: "Mensajería Total - Syntax Logistics",
      description: "Plataforma digital para la gestión automatizada de envíos express y logística local de última milla. Conecta negocios con mensajeros locales, permitiendo cotizaciones instantáneas y rastreo dinámico.",
      image:"./videos/mensajeria_total.gif",
      tech: ["Java", "Spring Boot", "HTML5", "MySQL", "CSS", "JavaScript", ], // Corregido a 'tech'
      repoLink: "https://github.com/enriqueperezdevmx-coder/Equipo_Syntax_Error.git", // Corregido
      demoLink: "./videos/mensajeria_total.mp4" // Corregido
    },
    {
      title: "JavaSport - Tienda de E-commerce ",
      description: "Sistema de gestión de inventarios desarrollado como proyecto académico. Implementa funciones CRUD completas y manejo de archivos para la persistencia de datos.",
      image: "./videos/javaSport.gif",
      tech: ["HTML5", "CSS3", "JavaScrip", "Bootstrap 5"], // Corregido a 'tech'
      repoLink: "https://github.com/joseisraelmanriquer-dev/Javasport.git", // Corregido
      demoLink: "#" // Corregido
    },
    {
      title: " Agenda Java  ",
      description: "Sistema de gestión de inventarios desarrollado como proyecto académico. Implementa funciones CRUD completas y manejo de archivos para la persistencia de datos.",
      tech: ["C++", "Estructuras de Datos", "POO"], // Corregido a 'tech'
      repoLink: "https://github.com/enriqueperezdevmx-coder/simti", // Corregido
      demoLink: "#" // Corregido
    }
  ],
  certifications: [
    {
      title: "Java Full Stack Developer Bootcamp",
      issuer: "Generation México",
      status: "Concluido",
      date: "2026"
    },
    {
      title: "Cloud Operations on AWS",
      issuer: "Netec",
      status: "Completado",
      date: "Feb 2026"
    },
    {
      title: "Abriendo Puertas Cloud",
      issuer: "Accenture",
      status: "Completado",
      date: "Ene 2026"
    },
    {
      title: "Introducción a la Programación",
      issuer: "Accenture (Learning to Earning)",
      status: "Completado",
      date: "Abr 2026"
    },
    {
      title: "Desarrollo Personal y Soft Skills",
      issuer: "IBM SkillsBuild",
      status: "Completado",
      date: "Mar 2026"
    }
  ],
  contact: {
    subtitle: "¿Tienes un proyecto en mente o una oportunidad laboral?",
    description: "Estoy abierto a nuevas oportunidades como Desarrollador Junior. Contáctame y platiquemos.",
    emailText: "Envíame un correo",
    whatsappText: "Mensaje por WhatsApp",
    githubText: "Mi GitHub",
    linkedinText: "Mi Perfil"
  },
  footer: {
    text: "Desarrollado por Enrique Pérez Sánchez"
  }
};