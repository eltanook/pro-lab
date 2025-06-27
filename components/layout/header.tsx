"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { Menu, X, GraduationCap } from "lucide-react"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isActive = (path: string) => {
    return pathname === path
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-gray-700"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-[#023a5d] dark:bg-[#011d2e] flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                isScrolled ? "text-[#023a5d] dark:text-white" : "text-white"
              }`}
            >
              Pro-Lab Educativa
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors ${
                isActive("/")
                  ? isScrolled
                    ? "text-[#023a5d] dark:text-white font-semibold border-b-2 border-[#009c48] pb-1"
                    : "text-white font-semibold border-b-2 border-[#009c48] pb-1"
                  : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#023a5d] dark:hover:text-white"
                    : "text-white/90 hover:text-white"
              }`}
            >
              Inicio
            </Link>
            <Link
              href="/cursos"
              className={`transition-colors ${
                isActive("/cursos")
                  ? isScrolled
                    ? "text-[#023a5d] dark:text-white font-semibold border-b-2 border-[#009c48] pb-1"
                    : "text-white font-semibold border-b-2 border-[#009c48] pb-1"
                  : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#023a5d] dark:hover:text-white"
                    : "text-white/90 hover:text-white"
              }`}
            >
              Cursos
            </Link>
            <Link
              href="/contacto"
              className={`transition-colors ${
                isActive("/contacto")
                  ? isScrolled
                    ? "text-[#023a5d] dark:text-white font-semibold border-b-2 border-[#009c48] pb-1"
                    : "text-white font-semibold border-b-2 border-[#009c48] pb-1"
                  : isScrolled
                    ? "text-gray-700 dark:text-gray-300 hover:text-[#023a5d] dark:hover:text-white"
                    : "text-white/90 hover:text-white"
              }`}
            >
              Contacto
            </Link>
            <ThemeToggle isScrolled={isScrolled} />
            <Button
              className="bg-[#009c48] hover:bg-[#007a38] text-white"
              onClick={() => window.open("https://campus.prolabeducativa.com", "_blank")}
            >
              Campus Virtual
            </Button>
          </nav>

          <button
            className={`md:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                : "text-white hover:bg-white/10"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 absolute top-full left-0 right-0 shadow-lg">
            <div className="px-4 pt-4 pb-6 space-y-3">
              <Link
                href="/"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/")
                    ? "text-[#023a5d] dark:text-white bg-gray-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/cursos"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/cursos")
                    ? "text-[#023a5d] dark:text-white bg-gray-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Cursos
              </Link>
              <Link
                href="/contacto"
                className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                  isActive("/contacto")
                    ? "text-[#023a5d] dark:text-white bg-gray-50 dark:bg-gray-800"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
                onClick={() => setIsOpen(false)}
              >
                Contacto
              </Link>
              <div className="px-4 py-2 flex items-center justify-between">
                <span className="text-sm text-gray-600 dark:text-gray-400">Tema</span>
                <ThemeToggle isScrolled={true} />
              </div>
              <Button
                className="w-full mt-4 bg-[#009c48] hover:bg-[#007a38] text-white py-3 text-base"
                onClick={() => {
                  window.open("https://campus.prolabeducativa.com", "_blank")
                  setIsOpen(false)
                }}
              >
                Campus Virtual
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
