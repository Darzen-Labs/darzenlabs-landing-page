export interface Category {
  slug: string;
  title: string;
  color: string;
  description?: string;
}

export const categories: Category[] = [
  {
    slug: "tecnologia",
    title: "Tecnología",
    color: "blue",
    description: "Últimas tendencias y novedades en el mundo de la tecnología"
  },
  {
    slug: "desarrollo",
    title: "Desarrollo",
    color: "green",
    description: "Tutoriales, tips y mejores prácticas de desarrollo web"
  },
  {
    slug: "diseno",
    title: "Diseño",
    color: "purple",
    description: "Tendencias de diseño, UX/UI y creatividad digital"
  },
  {
    slug: "negocios",
    title: "Negocios",
    color: "orange",
    description: "Estrategias empresariales y emprendimiento digital"
  },
  {
    slug: "tutoriales",
    title: "Tutoriales",
    color: "red",
    description: "Guías paso a paso para aprender nuevas habilidades"
  }
];
