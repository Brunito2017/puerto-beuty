import type { TextSectionData } from "../types";

export const homeTextSections: TextSectionData [] = [
  {
    title: "Sobre Puerto Beauty",
    subtitle: "Tu belleza es nuestra pasión",
    content: "En Puerto Beauty, creemos que cada persona merece sentirse hermosa y confiada. Nuestro equipo de profesionales altamente capacitados se dedica a brindarte una experiencia única de belleza y bienestar, utilizando productos de la más alta calidad y las técnicas más innovadoras del mercado.",
    align: 'center',
    size: 'md',
    background: 'light'
  },

];

// Exportar secciones individuales
export const aboutSection = homeTextSections[0];
export const servicesSection = homeTextSections[1];
export const excellenceSection = homeTextSections[2];
