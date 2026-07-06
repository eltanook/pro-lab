"use client"

import type { SanitySiteSettings } from "@/lib/sanity-queries"

export default function MapSection({ settings }: { settings?: SanitySiteSettings | null }) {
  return (
    <section className="w-full relative z-10 border-t border-gray-200 dark:border-gray-800">
      <iframe
        title="Ubicación Pro-Lab Educativa"
        src={settings?.contact?.mapUrl || "https://maps.google.com/maps?q=Av.%20Ejercito%20Argentino%202515,%20Santo%20Tom%C3%A9,%20Santa%20Fe&t=&z=15&ie=UTF8&iwloc=&output=embed"}
        className="w-full h-80 sm:h-96"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </section>
  )
}
