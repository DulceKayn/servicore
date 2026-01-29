'use client';
import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    localidad: '',
    mensaje: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construir el mensaje para WhatsApp
    const mensajeWhatsApp = `Hola! Mi nombre es ${formData.nombre} %0A%0A${formData.mensaje}%0A%0A Vivo en la ciudad de: ${formData.localidad}`;
    
    // TU NÚMERO DE WHATSAPP (reemplaza con tu número real)
    // Formato: código de país + número sin espacios ni guiones
    // Ejemplo Argentina: 5491234567890
    const numeroWhatsApp = '5493584306965'; // ← CAMBIA ESTE NÚMERO
    
    // Abrir WhatsApp
    window.open(`https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contacto" className="section-padding bg-white pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 pt-8">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-darker mb-4">
            PEDÍ TU PRESUPUESTO
          </h2>
          <div className="w-24 h-1 bg-brand-red" />
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-gray-darker mb-3 uppercase">
                Información
              </h3>
              <div className="space-y-3">
                <p className="text-gray-medium">
                  <span className="font-bold text-gray-dark">Teléfono:</span> +54 9 358 430 6965
                </p>
                <p className="text-gray-medium">
                  <span className="font-bold text-gray-dark">Email:</span> Cordpint@gmail.com
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulario */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                placeholder="NOMBRE"
                required
                className="w-full px-4 py-3 bg-gray-light border-2 border-transparent focus:border-brand-red outline-none transition-colors uppercase text-sm font-semibold tracking-wide"
              />
              <input
                type="text"
                name="localidad"
                value={formData.localidad}
                onChange={handleChange}
                placeholder="LOCALIDAD"
                required
                className="w-full px-4 py-3 bg-gray-light border-2 border-transparent focus:border-brand-red outline-none transition-colors uppercase text-sm font-semibold tracking-wide"
              />
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="MENSAJE"
                rows={5}
                required
                className="w-full px-4 py-3 bg-gray-light border-2 border-transparent focus:border-brand-red outline-none transition-colors uppercase text-sm font-semibold tracking-wide resize-none"
              />
              
              <button 
                type="submit" 
                className="w-full bg-brand-red hover:bg-brand-red-dark text-white font-bold uppercase px-8 py-4 transition-colors duration-300 tracking-wider shadow-lg hover:shadow-xl"
              >
                ENVIAR POR WHATSAPP
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
