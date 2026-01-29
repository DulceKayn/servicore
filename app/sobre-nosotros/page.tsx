import Image from 'next/image';
import Link from 'next/link';

export default function SobreNosotrosPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="bg-gray-darker text-white py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
            SOBRE <span className="text-brand-red">NOSOTROS</span>
          </h1>
          <div className="w-24 h-1 bg-brand-red mb-6" />
          <p className="text-gray-light text-lg max-w-3xl leading-relaxed">
            Conoce nuestra historia, valores y el equipo que hace posible cada proyecto
          </p>
        </div>
      </section>

      {/* Nuestra Historia */}
      <section className="section-padding bg-white p-6">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-darker mb-6">
                NUESTRA HISTORIA
              </h2>
              <div className="w-24 h-1 bg-brand-red mb-6" />
              <div className="space-y-4 text-gray-dark text-lg leading-relaxed ">
                <p>
                  Servicore es un emprendimiento que está dando sus primeros pasos, pero con una visión clara: brindar soluciones reales y de calidad para los hogares.
                </p>
                <p>
                  Nacimos con el objetivo de transformar y renovar espacios, ayudando a que cada persona pueda vivir su casa como siempre la soñó. Creemos que un buen trabajo no solo se ve, se siente, y por eso cuidamos cada detalle en cada proyecto.
                </p>
                <p>
                  Hoy comenzamos este camino con muchas ganas de crecer, proyectando a largo plazo y apostando a la confianza, la responsabilidad y el compromiso con cada cliente.
                </p>
              </div>
            </div>
            
            <div className="relative aspect-square">
              <Image
                src="/proyectos/equipo.jpg"
                alt="Nuestro equipo"
                fill
                className="object-cover rounded-lg shadow-xl "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Nuestros Valores */}
      <section className="section-padding bg-gray-light pb-4">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 pt-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-darker mb-4">
              NUESTROS VALORES
            </h2>
            <div className="w-24 h-1 bg-brand-red" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Calidad */}
            <div className="bg-white p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-red rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">★</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-darker mb-4 uppercase">
                Calidad
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Utilizamos solo materiales de primera calidad y aplicamos técnicas profesionales en cada proyecto para garantizar resultados duraderos.
              </p>
            </div>

            {/* Compromiso */}
            <div className="bg-white p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-red rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">✓</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-darker mb-4 uppercase">
                Compromiso
              </h3>
              <p className="text-gray-dark leading-relaxed">
                Cumplimos con los plazos acordados y mantenemos una comunicación constante con nuestros clientes durante todo el proceso.
              </p>
            </div>

            {/* Profesionalismo */}
            <div className="bg-white p-8 shadow-lg">
              <div className="w-16 h-16 bg-brand-red rounded-lg flex items-center justify-center mb-6">
                <span className="text-white text-3xl font-bold">◆</span>
              </div>
              <h3 className="text-2xl font-extrabold text-gray-darker mb-4 uppercase">
                Confianza
              </h3>
              <p className="text-gray-dark leading-relaxed">
                entendemos que abrir las puertas de tu hogar es un acto de confianza. Por eso cuidamos cada espacio y cada proyecto como si fuera propio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Por qué elegirnos */}
      <section className="section-padding bg-white pb-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 pt-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-darker mb-4">
              ¿POR QUÉ ELEGIRNOS?
            </h2>
            <div className="w-24 h-1 bg-brand-red" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase">
                    Experiencia Comprobada
                  </h3>
                  <p className="text-gray-dark">
                    Cada uno de nuestros clientes puede dar fé de la calidad de nuestro trabajo.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase">
                    Equipo Profesional
                  </h3>
                  <p className="text-gray-dark">
                    Personal capacitado y con amplia experiencia en todo tipo de proyectos de pintura.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase">
                    Materiales de Calidad
                  </h3>
                  <p className="text-gray-dark">
                    Trabajamos con las mejores marcas del mercado para garantizar acabados impecables.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase">
                    Presupuestos Sin Cargo
                  </h3>
                  <p className="text-gray-dark">
                    Realizamos presupuestos detallados sin compromiso para que tomes la mejor decisión.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">5</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase">
                    Garantía de Satisfacción
                  </h3>
                  <p className="text-gray-dark">
                    No termina hasta que estés completamente satisfecho con el resultado.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-brand-red rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">6</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase">
                    Atención Personalizada
                  </h3>
                  <p className="text-gray-dark">
                    Cada proyecto recibe nuestra atención completa y asesoramiento especializado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section-padding bg-gray-darker text-white pt-6">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            ¿LISTO PARA TRANSFORMAR TU ESPACIO?
          </h2>
          <p className="text-gray-light text-lg mb-8">
            Contáctanos hoy y recibe un presupuesto personalizado sin compromiso
          </p>
          <Link 
            href="/#contacto" 
            className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase px-8 py-4 transition-colors duration-300 tracking-wider"
          >
            SOLICITAR PRESUPUESTO
          </Link>
        </div>
      </section>
    </main>
  );
}