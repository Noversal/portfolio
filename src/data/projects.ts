export interface Project {
  title: string;
  content: string;
  tecnologies: string[];
  img: string
}

export const projects: Project[] = [
  {
    title: "QUERIDA ALERGIA",
    content: "Colaboré en el desarrollo frontend aplicando buenas prácticas con Prettier y ESLint. Coordiné el trabajo en equipo y optimicé la experiencia de usuario junto a UX/UI.",
    tecnologies: ["prettier", "eslint", "react", "react-router","css", "material_ui", "Axios"],
    img: "/querida-alergia.webp"
  },
  {
    title: "APP DE CAMBIO DE MONEDA",
    content: "Diseñé una interfaz clara y funcional. Automatizé la obtención de datos con Playwright y GitHub Actions, almacenando la info en MongoDB.",
    tecnologies: ["Playwright","nodejs", "GitHub_Actions", "mongo", "react", "sass"],
    img: "/change-money.webp"
  },
  {
    title: "BOT DE CONSULTORÍA",
    content: "Automatizé atención al cliente con un bot de WhatsApp. Lo desplegué en una plataforma robusta, asegurando rendimiento y organización de los datos.",
    tecnologies: ["ec2", "mysql", "nodejs"],
    img: "/bot-whatsapp.webp"
  }
];
