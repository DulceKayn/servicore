import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-darker text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y descripción */}
          <div>
            <Image
              src="/logo.png"
              alt="Logo Pintura Pro"
              width={200}
              height={70}
              className="h-16 w-auto mb-4"
            />
            <p className="text-gray-light text-sm">
              Servicios profesionales de pintura con calidad y dedicación.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">
              Navegación
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-light hover:text-brand-red transition-colors text-sm">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-gray-light hover:text-brand-red transition-colors text-sm">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-light hover:text-brand-red transition-colors text-sm">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-bold uppercase mb-4">
              Contacto
            </h3>
            <ul className="space-y-2 text-sm text-gray-light">
              <li>
                <span className="font-bold text-white">Teléfono:</span><br />
                +54 9 358 430 6965
              </li>
              <li>
                <span className="font-bold text-white">Email:</span><br />
                contacto@pintura.com
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-medium pt-6">
          <p className="text-center text-gray-medium text-sm">
            © {new Date().getFullYear()} Servicore. Servicio de calidad.
          </p>
        </div>
      </div>
    </footer>
  );
}