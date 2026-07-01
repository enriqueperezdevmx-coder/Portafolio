import { es } from './es';
import { en } from './en';
import cvFile from './cv-enrique.pdf'; // <-- 1. Importas el PDF aquí arriba

export const commonData = {
  email: "enrique.perez.dev.mx@gmail.com",
  whatsapp: "https://wa.me/525528529994",
  github: "https://github.com/enriqueperezdevmx-coder",
  linkedin: "https://linkedin.com/in/enrique-perez-sanchez-dev-cdmx",
  cvLink: cvFile, // <-- 2. Asignas la variable aquí, sin comillas
  skills: {
    frontend: ["React", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS"],
    backend: ["Java", "Spring Boot", "Node.js", "SQL"],
    cloud: ["AWS (EC2, S3, RDS)", "IAM Amazon"],
    tools: ["Git", "GitHub", "IntelliJ IDEA", "Visual Studio Code", "MySQL", "Postman"]
  }
};

export const dictionary = {
  es,
  en
};