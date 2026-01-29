'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-darker shadow-lg">
      <nav className="max-w-6xl mx-auto px-6 py-1">
        <div className="flex items-center justify-between h-14">
          {/* Logo grande */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo Pintura Pro"
              width={300}
              height={100}
              className="h-24 w-auto"
              priority
            />
          </Link>

          {/* Menú Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link 
              href="/" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
            >
              Inicio
            </Link>
            <Link 
              href="/sobre-nosotros" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="/proyectos" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
            >
              Proyectos
            </Link>
            <Link 
              href="/#contacto" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
            >
              Contacto
            </Link>
          </div>

          {/* Botón Hamburguesa Mobile */}
          <button
            onClick={() => setMenuAbierto(!menuAbierto)}
            className="md:hidden flex flex-col gap-1.5 w-8"
            aria-label="Menú"
          >
            <span className={`h-0.5 bg-white transition-all ${menuAbierto ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 bg-white transition-all ${menuAbierto ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 bg-white transition-all ${menuAbierto ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Menú Mobile */}
        {menuAbierto && (
          <div className="md:hidden mt-4 pb-4 flex flex-col gap-4 border-t border-gray-medium pt-4">
            <Link 
              href="/" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Inicio
            </Link>
            <Link 
              href="/sobre-nosotros" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Sobre Nosotros
            </Link>
            <Link 
              href="/proyectos" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Proyectos
            </Link>
            <Link 
              href="/#contacto" 
              className="text-white font-bold uppercase text-sm tracking-wide hover:text-brand-red transition-colors"
              onClick={() => setMenuAbierto(false)}
            >
              Contacto
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}