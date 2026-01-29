import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative h-screen w-full bg-gray-darker">
      {/* Imagen de fondo */}
      <Image
        src="/hero-image.jpg"
        alt="Servicios profesionales de pintura"
        fill
        className="object-cover"
        priority
      />
      
      {/* Overlay oscuro */}
      <div className="absolute inset-0 bg-black/60" />
      
      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container-custom text-center px-6">
          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-extrabold mb-6 tracking-tight">
            SERVICIO PROFESIONAL
            <span className="block text-brand-red mt-2">DE PINTURA</span>
          </h1>
          
          <p className="text-gray-light text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-12 font-medium tracking-wide">
            TRANSFORMAMOS HOGARES, CONSTRUIMOS CONFIANZA.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#proyectos" className="bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase px-8 py-4 transition-colors duration-300 tracking-wider">
              VER PROYECTOS
            </a>
            <a href="#contacto" className="bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase px-8 py-4 transition-colors duration-300 tracking-wider">
              CONTACTAR
            </a>
          </div>
        </div>
      </div>
      
      {/* Línea decorativa roja */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-brand-red" />
    </section>
  );
}