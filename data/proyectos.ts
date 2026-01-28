export interface Proyecto {
  id: number;
  titulo: string;
  descripcion: string;
  descripcionCompleta: string;
  imagenAntes: string;
  imagenDespues: string;
  galeria?: string[];
  fecha: string;
  duracion: string;
  superficie: string;
  destacado: boolean;
}

export const proyectos: Proyecto[] = [
  {
    id: 1,
    titulo: "Renovación de Fachada",
    descripcion: "Pintura Exterior Completa",
    descripcionCompleta: "Proyecto de renovación completa de fachada exterior. Se realizó limpieza, reparación de grietas, aplicación de impermeabilizante y dos capas de pintura acrílica de alta calidad resistente a la intemperie. El resultado transformó completamente el aspecto del edificio, mejorando su estética y protección.",
    imagenAntes: "/proyectos/proyecto-1/antes.jpg",
    imagenDespues: "/proyectos/proyecto-1/despues.jpg",
    galeria: [
      "/proyectos/proyecto-1/detalle-1.jpg",
      "/proyectos/proyecto-1/detalle-2.jpg",
      "/proyectos/proyecto-1/detalle-3.jpg"
    ],
    fecha: "Enero 2024",
    duracion: "2 semanas",
    superficie: "250 m²",
    destacado: true
  },
  {
    id: 2,
    titulo: "Interior Residencial",
    descripcion: "Sala y Comedor",
    descripcionCompleta: "Renovación integral de espacios interiores incluyendo sala y comedor. Trabajo de preparación de superficies, enduido, lijado y aplicación de pintura látex premium en tonos neutros modernos. Se logró un ambiente luminoso y elegante que transformó completamente los espacios de convivencia.",
    imagenAntes: "/proyectos/proyecto-2/antes.jpg",
    imagenDespues: "/proyectos/proyecto-2/despues.jpg",
    galeria: [
      "/proyectos/proyecto-2/detalle-1.jpg",
      "/proyectos/proyecto-2/detalle-2.jpg"
    ],
    fecha: "Diciembre 2023",
    duracion: "1 semana",
    superficie: "80 m²",
    destacado: true
  },
  {
    id: 3,
    titulo: "Oficina Corporativa",
    descripcion: "Espacios de Trabajo",
    descripcionCompleta: "Proyecto corporativo de pintura para oficinas modernas. Se utilizaron colores institucionales de la empresa combinados con tonos neutros para crear un ambiente profesional y productivo. Incluye pintura de paredes, techos y detalles en diferentes acabados.",
    imagenAntes: "/proyectos/proyecto-3/antes.jpg",
    imagenDespues: "/proyectos/proyecto-3/despues.jpg",
    galeria: [
      "/proyectos/proyecto-3/detalle-1.jpg"
    ],
    fecha: "Noviembre 2023",
    duracion: "3 semanas",
    superficie: "400 m²",
    destacado: true
  },
  {
    id: 4,
    titulo: "Departamento Moderno",
    descripcion: "Renovación Integral",
    descripcionCompleta: "Renovación completa de departamento moderno con acabados premium. Trabajo meticuloso en todas las habitaciones, incluyendo cocina, baños, dormitorios y áreas comunes. Se aplicaron técnicas especiales para lograr acabados perfectos.",
    imagenAntes: "/proyectos/proyecto-4/antes.jpg",
    imagenDespues: "/proyectos/proyecto-4/despues.jpg",
    fecha: "Octubre 2023",
    duracion: "2 semanas",
    superficie: "120 m²",
    destacado: false
  },
  {
    id: 5,
    titulo: "Casa de Campo",
    descripcion: "Exterior e Interior",
    descripcionCompleta: "Proyecto completo de casa de campo, abarcando tanto exteriores como interiores. Pintura especial resistente para exteriores expuestos al clima y pintura de interiores con acabados cálidos y acogedores perfectos para un ambiente campestre.",
    imagenAntes: "/proyectos/proyecto-5/antes.jpg",
    imagenDespues: "/proyectos/proyecto-5/despues.jpg",
    fecha: "Septiembre 2023",
    duracion: "4 semanas",
    superficie: "350 m²",
    destacado: false
  },
  {
    id: 6,
    titulo: "Local Comercial",
    descripcion: "Remodelación Total",
    descripcionCompleta: "Remodelación completa de local comercial para nueva apertura. Trabajo intensivo que incluyó preparación de superficies, pintura de paredes, techos, y detalles especiales. Se logró un ambiente atractivo y moderno para atraer clientes.",
    imagenAntes: "/proyectos/proyecto-6/antes.jpg",
    imagenDespues: "/proyectos/proyecto-6/despues.jpg",
    fecha: "Agosto 2023",
    duracion: "2 semanas",
    superficie: "200 m²",
    destacado: false
  }
];

export function obtenerProyecto(id: number): Proyecto | undefined {
  return proyectos.find(p => p.id === id);
}

export function obtenerProyectosDestacados(): Proyecto[] {
  return proyectos.filter(p => p.destacado);
}