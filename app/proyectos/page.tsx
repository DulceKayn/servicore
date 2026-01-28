'use client';
import { useState } from 'react';
import ProyectoCard from '@/components/ProyectoCard';
import ProyectoModal from '@/components/ProyectoModal';
import Link from 'next/link';
import { proyectos, type Proyecto } from '@/data/proyectos';

export default function ProyectosPage() {
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

  return (
    <>
      <main className="pt-16">
        {/* Hero de la página */}
        <section className="bg-gray-darker text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-6">
            <Link 
              href="/" 
              className="inline-flex items-center text-gray-light hover:text-brand-red mb-8 uppercase text-sm font-bold tracking-wide transition-colors"
            >
              ← VOLVER AL INICIO
            </Link>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">
              TODOS LOS <span className="text-brand-red">PROYECTOS</span>
            </h1>
            <div className="w-24 h-1 bg-brand-red mb-6" />
            <p className="text-gray-light text-lg max-w-3xl leading-relaxed">
              Explora nuestra galería completa de trabajos realizados. Haz clic en cualquier proyecto para ver más detalles.
            </p>
          </div>
        </section>

        {/* Grid de proyectos */}
        <section className="section-padding bg-gray-light pb-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12 pt-8">
              <h2 className="text-4xl md:text-5xl font-extrabold text-gray-darker mb-4">
                GALERÍA COMPLETA
              </h2>
              <div className="w-24 h-1 bg-brand-red" />
              <p className="text-gray-medium mt-4 text-lg">
                Cada proyecto refleja nuestro compromiso con la excelencia
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectos.map((proyecto) => (
                <ProyectoCard 
                  key={proyecto.id} 
                  proyecto={proyecto}
                  onClickProyecto={() => setProyectoSeleccionado(proyecto)}
                />
              ))}
            </div>

            {/* Botón de contacto */}
            <div className="mt-12 text-center">
              <Link 
                href="/#contacto" 
                className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase px-8 py-4 transition-colors duration-300 tracking-wider"
              >
                SOLICITAR PRESUPUESTO
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Modal */}
      {proyectoSeleccionado && (
        <ProyectoModal 
          proyecto={proyectoSeleccionado}
          onClose={() => setProyectoSeleccionado(null)}
        />
      )}
    </>
  );
}