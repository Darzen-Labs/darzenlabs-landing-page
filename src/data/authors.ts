export interface Author {
  slug: string;
  name: string;
  image?: string;
  bio?: string;
  twitter?: string;
  linkedin?: string;
  website?: string;
}

export const authors: Author[] = [
  {
    slug: "daniel-martinez",
    name: "Daniel Martínez",
    image: "/src/assets/authors/erika.webp",
    bio: "Desarrollador Full Stack especializado en tecnologías web modernas. Apasionado por crear soluciones innovadoras.",
    twitter: "https://twitter.com/danielmartinez",
    linkedin: "https://linkedin.com/in/danielmartinez",
    website: "https://danielmartinez.dev"
  },
  {
    slug: "maria-garcia",
    name: "María García",
    image: "/src/assets/authors/mario.webp",
    bio: "Diseñadora UX/UI con más de 5 años de experiencia creando interfaces intuitivas y atractivas.",
    twitter: "https://twitter.com/mariagarcia",
    linkedin: "https://linkedin.com/in/mariagarcia"
  },
  {
    slug: "carlos-rodriguez",
    name: "Carlos Rodríguez",
    image: "/src/assets/authors/joshua.webp", 
    bio: "Especialista en DevOps y arquitectura de sistemas. Enfocado en la optimización y escalabilidad.",
    linkedin: "https://linkedin.com/in/carlosrodriguez",
    website: "https://carlosrodriguez.tech"
  }
];
