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
    descripcion: "Pintura Exterior",
    descripcionCompleta: `En cada trabajo seguimos un proceso profesional, sin atajos:
✔ Reparación de roturas y revoques desprendidos
✔ Aplicación de imprimación
✔ Pintura con materiales de buena calidad

🎯 El resultado es claro: paredes y techos totalmente renovados, con un acabado prolijo y duradero.`,

    imagenAntes: "/proyectos/proyecto-1/antes.jpg",
    imagenDespues: "/proyectos/proyecto-1/despues.jpg",
    galeria: [
      "/proyectos/proyecto-1/detalle-1.jpg",
      "/proyectos/proyecto-1/detalle-2.jpg",
      "/proyectos/proyecto-1/detalle-3.jpg",
      "/proyectos/proyecto-1/detalle-4.jpg"
    ],
    fecha: "Enero 2024",
    duracion: "3 dias",
    superficie: "150 m²",
    destacado: true
  },
  {
    id: 2,
    titulo: "Departamento a Estrenar",
    descripcion: "Pintura Exterior e Interior Completa",
    descripcionCompleta: `En este trabajo realizamos un servicio de pintura sintética 3 en 1, ideal para proteger y lograr un acabado duradero y prolijo.

🔧 Proceso de trabajo:
✔ Limpieza completa de la superficie
✔ Lijado de asperezas para una terminación uniforme
✔ Aplicación de 2 manos de pintura sintética 3 en 1
El resultado es un acabado perfecto, con excelente nivelación y protección garantizada frente al uso y las condiciones externas.`,

    imagenAntes: "/proyectos/proyecto-2/antes.jpg",
    imagenDespues: "/proyectos/proyecto-2/despues.jpg",
    galeria: [
      "/proyectos/proyecto-2/detalle-1.jpg",
      "/proyectos/proyecto-2/detalle-2.jpg",
      "/proyectos/proyecto-2/detalle-3.jpg",
      "/proyectos/proyecto-2/detalle-4.jpg",
      "/proyectos/proyecto-2/detalle-5.jpg",
      "/proyectos/proyecto-2/detalle-6.jpg",
    ],
    fecha: "Diciembre 2023",
    duracion: "3 dias",
    superficie: "200 m²",
    destacado: true
  },
  {
    id: 3,
    titulo: "Restauración Total",
    descripcion: "Pintura Exterior Completa",
    descripcionCompleta: `Esta casa estaba muy abandonada, con paredes llenas de hongos y pintura vieja deteriorada.

🔧 Qué hicimos:
✔ Reparación de superficies.
✔ Aplicación de ácido.
✔ Hidro lavado profundo para eliminar hongos.
✔ Preparación correcta de paredes.
✔ Pintura con acabado profesional.`,

    imagenAntes: "/proyectos/proyecto-3/antes.jpg",
    imagenDespues: "/proyectos/proyecto-3/despues.jpg",
    galeria: [
      "/proyectos/proyecto-3/detalle-1.jpg",
      "/proyectos/proyecto-3/detalle-2.jpg",
      "/proyectos/proyecto-3/detalle-3.jpg",
      "/proyectos/proyecto-3/detalle-4.jpg",
      "/proyectos/proyecto-3/detalle-5.jpg",
      "/proyectos/proyecto-3/detalle-6.jpg",
    ],
    fecha: "Noviembre 2023",
    duracion: "4 dias",
    superficie: "250 m²",
    destacado: true
  },
  {
    id: 4,
    titulo: "Duplex a Estrenar",
    descripcion: "Pintura Exterior e Interior Completa",
    descripcionCompleta: `En el exterior realizamos impermeabilización completa, aplicando membrana de alta calidad en frentes y muros (2 manos) para máxima protección.

En el interior:
✔ Corrección de imperfecciones en paredes y techos
✔ Aplicación de imprimación
✔ 3 manos de pintura para un acabado parejo y duradero

Para el cierre del trabajo, pintamos puertas y marcos con sintético blanco, logrando una terminación prolija y elegante.

🎯 Resultado: obra nueva con terminaciones de primera calidad.`,
    imagenAntes: "/proyectos/proyecto-4/antes.jpg",
    imagenDespues: "/proyectos/proyecto-4/despues.jpg",
    galeria: [
      "/proyectos/proyecto-4/detalle-1.jpg",
      "/proyectos/proyecto-4/detalle-2.jpg",
      "/proyectos/proyecto-4/detalle-3.jpg",
      "/proyectos/proyecto-4/detalle-4.jpg",
      "/proyectos/proyecto-4/detalle-5.jpg"
    ],
    fecha: "Octubre 2023",
    duracion: "1 semana",
    superficie: "400 m²",
    destacado: false
  },
  {
    id: 5,
    titulo: "Pintamos Pileta de Material",
    descripcion: "Reparación e Impermeabilización",
    descripcionCompleta: `En este trabajo realizamos una puesta a punto integral de la pileta, siguiendo un proceso técnico para garantizar durabilidad, impermeabilidad y un acabado impecable.

🔧 Proceso de trabajo:
✔ Retiro de pintura vieja y partes desprendidas
✔ Hidrolavado profundo para limpieza total
✔ Reparación de superficies, detección y sellado de filtraciones
✔ Segundo hidrolavado general para eliminar polvo y residuos
✔ Aplicación de imprimación
✔ 3 manos de pintura para piscinas de primera calidad, en el color elegido por el cliente

El resultado es una pileta renovada, protegida y con excelente terminación, lista para disfrutar por mucho tiempo.`,
    imagenAntes: "/proyectos/proyecto-5/antes.jpg",
    imagenDespues: "/proyectos/proyecto-5/despues.jpg",
    galeria: [
      "/proyectos/proyecto-5/detalle-1.jpg",
      "/proyectos/proyecto-5/detalle-2.jpg",
  
    ],
    fecha: "Septiembre 2023",
    duracion: "2 dias",
    superficie: "-",
    destacado: false
  },
  {
    id: 6,
    titulo: "Renovacion de Interiores",
    descripcion: "Adaptado a tu Necesidad",
    descripcionCompleta: `En estos trabajos de pintura interior seguimos un proceso ordenado y eficiente, pensado para realizar la obra en el menor tiempo posible y que la familia pueda rehabitar el espacio rápidamente, sin molestias innecesarias.

🔧 Nuestro enfoque de trabajo:
✔ Protección de pisos, aberturas y mobiliario
✔ Reparación y preparación de superficies
✔ Aplicación de pinturas de calidad
✔ Terminaciones prolijas y cuidadas

Nos adaptamos a las necesidades y tiempos de cada cliente, priorizando siempre un trabajo limpio, organizado y bien terminado, sin descuidar la calidad ni los detalles.`,
    imagenAntes: "/proyectos/proyecto-6/antes.jpg",
    imagenDespues: "/proyectos/proyecto-6/despues.jpg",
   
    fecha: "Agosto 2023",
    duracion: "3 ambientes por dia",
    superficie: "-",
    destacado: false
  },
  {
    id: 7,
    titulo: "Casa Exterior Completa",
    descripcion: "Protección Garantizada",
    descripcionCompleta: `Pintura exterior – Protección y terminación de calidad

En esta vivienda realizamos un servicio completo de pintura exterior, trabajando sobre superficies con varios años de desgaste.

🔧 Trabajos realizados:
✔ Reparación de paredes y revoques
✔ Preparación correcta de las superficies
✔ Enmascarado prolijo de pisos y azulejos
✔ Aplicación de membrana para frentes y muros de alta calidad

La utilización de esta membrana específica nos permite sellar y proteger el exterior de la vivienda, brindando una barrera efectiva contra el desgaste, la humedad y las filtraciones, y asegurando una mayor durabilidad en el tiempo.

El resultado es un exterior renovado, protegido y con una terminación uniforme, pensado para resistir las condiciones climáticas y cuidar cada detalle del trabajo.`,
    imagenAntes: "/proyectos/proyecto-7/antes.jpg",
    imagenDespues: "/proyectos/proyecto-7/despues.jpg",
    galeria: [
      "/proyectos/proyecto-7/detalle-1.jpg",
      "/proyectos/proyecto-7/detalle-2.jpg",
      "/proyectos/proyecto-7/detalle-3.jpg",

    ],
    fecha: "Agosto 2023",
    duracion: "4 dias",
    superficie: "300 m²",
    destacado: false
  },
  {
    id: 8,
    titulo: "Impearmeabilización de Techos",
    descripcion: "Protección y Durabilidad",
    descripcionCompleta: `En este trabajo realizamos la impermeabilización completa de un techo con más de 5 años sin mantenimiento, devolviéndole protección y prolongando su vida útil.

🔧 Proceso de trabajo:
✔ Retiro de pintura suelta y barrido general
✔ Hidrolavado profundo para eliminar suciedad y residuos
✔ Aplicación de 1° mano de membrana poliuretánica diluida al 30%, para una correcta penetración
✔ Aplicación de 2 manos adicionales sin diluir, logrando una película continua y resistente
✔ Secado durante 48 horas sin tránsito ni agua acumulada

Como parte del mantenimiento, recomendamos revisiones periódicas, especialmente en temporadas de lluvia, para asegurar un correcto desempeño del tratamiento.`,
    imagenAntes: "/proyectos/proyecto-8/antes.jpg",
    imagenDespues: "/proyectos/proyecto-8/despues.jpg",
 
    fecha: "Agosto 2023",
    duracion: "1 dia",
    superficie: "50 m²",
    destacado: false
  },
  {
    id: 9,
    titulo: "Trabajo con Pintura Sintetica",
    descripcion: "Terminación y Protección",
    descripcionCompleta: `n este trabajo realizamos un servicio de pintura sintética 3 en 1, ideal para proteger y lograr un acabado duradero y prolijo.

🔧 Proceso de trabajo:
✔ Limpieza completa de la superficie
✔ Lijado de asperezas para una terminación uniforme
✔ Aplicación de 2 manos de pintura sintética 3 en 1

El resultado es un acabado perfecto, con excelente nivelación y protección garantizada frente al uso y las condiciones externas.`,
    imagenAntes: "/proyectos/proyecto-9/antes.jpg",
    imagenDespues: "/proyectos/proyecto-9/despues.jpg",
    galeria: [
      "/proyectos/proyecto-9/detalle-1.jpg",
      "/proyectos/proyecto-9/detalle-2.jpg",
      "/proyectos/proyecto-9/detalle-3.jpg",
      "/proyectos/proyecto-9/detalle-4.jpg",
      "/proyectos/proyecto-9/detalle-5.jpg",
      "/proyectos/proyecto-9/detalle-6.jpg",
    ],
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