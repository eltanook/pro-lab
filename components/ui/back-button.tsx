"use client"

import { useRouter } from "next/navigation"
import { ArrowLeft } from "lucide-react"

export default function BackButton() {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <div className="fixed top-16 sm:top-20 left-4 sm:left-6 z-50">
      <button
        onClick={handleGoBack}
        className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-600 transition-all duration-300 hover:scale-110 group shadow-lg"
      >
        <ArrowLeft className="w-6 h-6 sm:w-7 sm:h-7 text-[#023a5d] dark:text-white group-hover:scale-110 transition-transform" />
      </button>
    </div>
  )
}
