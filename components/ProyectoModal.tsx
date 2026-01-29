'use client';
import Image from 'next/image';
import { useEffect } from 'react';

interface ProyectoModalProps {
  proyecto: {
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
  };
  onClose: () => void;
}

export default function ProyectoModal({ proyecto, onClose }: ProyectoModalProps) {
  // Cerrar con ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  // Prevenir scroll del body
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header del modal */}
        <div className="sticky top-0 bg-gray-darker text-white p-6 flex justify-between items-start z-10">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2 uppercase">
              {proyecto.titulo}
            </h2>
            <p className="text-gray-light text-lg">
              {proyecto.descripcion}
            </p>
          </div>
          <button
            onClick={onClose}
            className="ml-4 text-gray-light hover:text-white text-3xl font-bold leading-none"
            aria-label="Cerrar"
          >
            ×
          </button>
        </div>

        {/* Contenido del modal */}
        <div className="p-6 md:p-8">
          {/* Comparación Antes/Después */}
          <div className="mb-8">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Antes */}
              <div>
                <div className="relative aspect-video mb-2">
                  <Image
                    src={proyecto.imagenAntes}
                    alt={`${proyecto.titulo} - Antes`}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-gray-darker text-white px-4 py-2 font-bold uppercase text-sm">
                    ANTES
                  </div>
                </div>
              </div>

              {/* Después */}
              <div>
                <div className="relative aspect-video mb-2">
                  <Image
                    src={proyecto.imagenDespues}
                    alt={`${proyecto.titulo} - Después`}
                    fill
                    className="object-cover rounded-lg"
                  />
                  <div className="absolute top-4 left-4 bg-brand-red text-white px-4 py-2 font-bold uppercase text-sm">
                    DESPUÉS
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Información técnica */}
          <div className="grid grid-cols-2 gap-2 mb-8">
            

            <div className="bg-gray-light p-4 text-center">
              <h3 className="text-xs font-bold text-brand-red mb-1 uppercase tracking-wide">
                Tiempo en Obra
              </h3>
              <p className="text-lg font-bold text-gray-darker">
                {proyecto.duracion}
              </p>
            </div>

            <div className="bg-gray-light p-4 text-center">
              <h3 className="text-xs font-bold text-brand-red mb-1 uppercase tracking-wide">
                Superficie
              </h3>
              <p className="text-lg font-bold text-gray-darker">
                {proyecto.superficie}
              </p>
            </div>
          </div>

          {/* Descripción completa */}
          <div className="mb-8">
            <h3 className="text-2xl font-extrabold text-gray-darker mb-4 uppercase">
              Descripción del Proyecto
            </h3>
            <div className="w-24 h-1 bg-brand-red mb-4" />
            <p className="text-gray-dark text-base leading-relaxed whitespace-pre-line">
              {proyecto.descripcionCompleta}
            </p>
          </div>

          {/* Galería adicional */}
          {proyecto.galeria && proyecto.galeria.length > 0 && (
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold text-gray-darker mb-4 uppercase">
                Galería de Detalles
              </h3>
              <div className="w-24 h-1 bg-brand-red mb-6" />
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {proyecto.galeria.map((imagen, index) => (
                  <div key={index} className="relative aspect-video">
                    <Image
                      src={imagen}
                      alt={`${proyecto.titulo} - Detalle ${index + 1}`}
                      fill
                      className="object-cover rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Botón de contacto */}
          <div className="text-center">
            <a 
              href="/#contacto" 
              className="inline-block bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase px-8 py-4 transition-colors duration-300 tracking-wider"
            >
              SOLICITAR PRESUPUESTO
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}