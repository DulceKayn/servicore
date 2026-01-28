'use client';
import { useState } from 'react';
import Image from 'next/image';

interface ProyectoCardProps {
  proyecto: {
    id: number;
    titulo: string;
    descripcion: string;
    imagenAntes: string;
    imagenDespues: string;
  };
  onClickProyecto: () => void;
}

export default function ProyectoCard({ proyecto, onClickProyecto }: ProyectoCardProps) {
  const [mostrarDespues, setMostrarDespues] = useState(false);

  return (
    <div 
      onClick={onClickProyecto}
      className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group cursor-pointer"
    >
      {/* Imagen con efecto hover */}
      <div 
        className="relative aspect-video overflow-hidden"
        onMouseEnter={() => setMostrarDespues(true)}
        onMouseLeave={() => setMostrarDespues(false)}
      >
        <Image
          src={mostrarDespues ? proyecto.imagenDespues : proyecto.imagenAntes}
          alt={`${proyecto.titulo} - ${mostrarDespues ? 'Después' : 'Antes'}`}
          fill
          className="object-cover transition-all duration-500"
        />
        
        {/* Badge de ANTES/DESPUÉS */}
        <div className="absolute top-4 right-4 bg-brand-red text-white px-4 py-2 font-bold uppercase text-xs tracking-wider">
          {mostrarDespues ? 'DESPUÉS' : 'ANTES'}
        </div>

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
      </div>
      
      {/* Información */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-darker mb-2 uppercase group-hover:text-brand-red transition-colors">
          {proyecto.titulo}
        </h3>
        <p className="text-gray-medium text-sm tracking-wide uppercase">
          {proyecto.descripcion}
        </p>
        <p className="text-brand-red text-sm font-bold mt-3 uppercase">
          Ver detalles →
        </p>
      </div>
    </div>
  );
}