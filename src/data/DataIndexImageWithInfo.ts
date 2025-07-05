import type { ImageWithInfoProps } from "../types";


export const homeImageWithInfoData: ImageWithInfoProps[] = [
  {
    imageSrc: "https://tse2.mm.bing.net/th/id/OIP.Zh9QYd8gRoGokhDuBc0SDQHaDX?w=1922&h=873&rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Lifting de pestañas en Puerto Beauty",
    title: "Lifting de Pestañas",
    description: "Realza tu mirada con nuestro servicio de lifting de pestañas. Resultados naturales, duraderos y sin mantenimiento diario.",
    reverse: false
  },
  {
    imageSrc: "https://tse1.mm.bing.net/th/id/OIP.gtkTrDtrIIW1wws2e6T4WQHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    imageAlt: "Diseño de cejas en Puerto Beauty",
    title: "Diseño de Cejas",
    description: "Logra unas cejas perfectas con nuestro servicio profesional de diseño y perfilado. Realzamos tu belleza natural con precisión y cuidado.",
    reverse: true 
  },
  {
    imageSrc: "https://d3g9jhyjo6tiod.cloudfront.net/revistaamigapl/wp-content/uploads/2021/03/250431.jpg",
    imageAlt: "Manicura y uñas en Puerto Beauty",
    title: "Manicura y Uñas",
    description: "Luce unas manos impecables con nuestros servicios de manicura, esmaltado y cuidado de uñas. Calidad, higiene y los mejores productos para ti.",
    reverse: false
  }
];

export const welcomeSection = homeImageWithInfoData[0];
export const lashLiftSection = homeImageWithInfoData[1];
export const eyebrowDesignSection = homeImageWithInfoData[2];
export const manicureSection = homeImageWithInfoData[3];