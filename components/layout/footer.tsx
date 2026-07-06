"use client"

import Link from "next/link"
import { Instagram, Facebook, Phone, Mail, MapPin } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa"
import Image from "next/image"
import type { SanitySiteSettings } from "@/lib/sanity-queries"

export default function Footer({ settings }: { settings?: SanitySiteSettings | null }) {
  return (
    <footer className="bg-black text-white relative z-10">
      <div className="container mx-auto px-4 py-10 lg:py-12">
        
        {/* Contenedor principal flex row con justify-between para igual distancia */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-10 w-full">
          
          {/* 1. Logo a la izquierda */}
          <div className="flex-shrink-0">
            <Link href="/" className="inline-flex items-center">
              <Image
                src="/logo2.png"
                alt="Pro-Lab Educativa"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* 2. Teléfono */}
          <div className="flex items-center space-x-2 text-gray-300 flex-shrink-0">
            <Phone className="w-5 h-5 text-prolab-violet flex-shrink-0" />
            <a href={`tel:+${settings?.contact?.phoneRaw || '5493425030140'}`} className="font-body hover:text-white transition-colors">
              {settings?.contact?.phone || '+54 342 503-0140'}
            </a>
          </div>

          {/* 3. Email */}
          <div className="flex items-center space-x-2 text-gray-300 flex-shrink-0">
            <Mail className="w-5 h-5 text-prolab-violet flex-shrink-0" />
            <a href={`mailto:${settings?.contact?.email || 'direccion@prolab.com.ar'}`} className="font-body hover:text-white transition-colors">
              {settings?.contact?.email || 'direccion@prolab.com.ar'}
            </a>
          </div>

          {/* 4. Dirección (con más ancho) */}
          <div className="flex items-center space-x-2 text-gray-300 max-w-[300px] text-left flex-shrink-0">
            <MapPin className="w-5 h-5 text-prolab-violet flex-shrink-0 mt-0.5" />
            <span className="font-body leading-tight text-sm">
              {settings?.contact?.address || 'Av. Ejercito Argentino 2515, Primer Piso, Santo Tomé, Santa Fe'}
            </span>
          </div>

          {/* 5. Redes sociales */}
          <div className="flex items-center justify-center space-x-4 flex-shrink-0">
            {settings?.social?.whatsapp && (
              <a
                href={settings.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-prolab-violet hover:text-prolab-violet transition-all duration-200"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
            )}
            {settings?.social?.instagram && (
              <a
                href={settings.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-prolab-violet hover:text-prolab-violet transition-all duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
            )}
            {settings?.social?.facebook && (
              <a
                href={settings.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 text-white hover:border-prolab-violet hover:text-prolab-violet transition-all duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
            )}
          </div>
        </div>

        {/* Divisor */}
        <div className="border-t border-white/10 pt-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-2 text-xs text-gray-500 font-body">
            <p>{settings?.footer?.copyrightText || `© ${new Date().getFullYear()} Pro-Lab Educativa. Todos los derechos reservados.`}</p>
            <p>
              Desarrollado por{" "}
              <a
                href="https://nexiumsolutions.online/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                Nexium Solutions
              </a>{" "}
              y{" "}
              <a
                href="https://ditiero.shop/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors underline"
              >
                DiTiero
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
