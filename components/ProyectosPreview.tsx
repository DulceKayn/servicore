'use client';
import { useState } from 'react';
import ProyectoCard from './ProyectoCard';
import ProyectoModal from './ProyectoModal';
import Link from 'next/link';
import { obtenerProyectosDestacados, type Proyecto } from '@/data/proyectos';

export default function ProyectosPreview() {
  const proyectosDestacados = obtenerProyectosDestacados();
  const [proyectoSeleccionado, setProyectoSeleccionado] = useState<Proyecto | null>(null);

  return (
    <>
      <section id="proyectos" className="section-padding bg-gray-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-12 pt-8">
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-darker mb-4">
              NUESTROS PROYECTOS
            </h2>
            <div className="w-24 h-1 bg-brand-red" />
            <p className="text-gray-medium mt-4 text-lg">
              Haz clic en cualquier proyecto para ver más detalles
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosDestacados.map((proyecto) => (
              <ProyectoCard 
                key={proyecto.id} 
                proyecto={proyecto}
                onClickProyecto={() => setProyectoSeleccionado(proyecto)}
              />
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <Link href="/proyectos" className="btn-primary inline-block">
              VER TODOS LOS PROYECTOS
            </Link>
          </div>
        </div>
      </section>

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