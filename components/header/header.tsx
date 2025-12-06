"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const toggleMenu = () => setIsMenuOpen((prev) => !prev)

  return (
    <header
      className="relative bg-linear-to-b from-green-10 to-gray-10 flex items-center justify-between px-6 md:px-10 lg:px-30 py-8"
      aria-label="Cabeçalho principal"
      role="banner"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3">
        <Image
          src="/logo-header.svg"
          alt="Logo da Lacrei Saúde"
          width={250}
          height={52}
          priority
        />
      </Link>

      {/* Botão de Menu Mobile */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-60"
        aria-label={isMenuOpen ? "Fechar Menu" : "Abrir Menu"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-nav"
      >
        <Image
          src="/menu.svg"
          alt=""
          width={24}
          height={24}
          className="text-gray-80"
          aria-hidden
        />
      </button>

      {/* Navegação Desktop */}
      <nav
        className="hidden md:flex items-center gap-6"
        role="navigation"
        aria-label="Menu Principal (Desktop)"
      >
        <Link
          href="/sobre"
          className="rounded-md px-4 py-3 text-gray-80 text-text-xl focus:outline-none focus:ring-2 focus:ring-green-60 hover:bg-green-20 transition duration-100"
        >
          Sobre Nós
        </Link>
        <Link href="/contato" className="rounded-md px-4 py-3 text-gray-80 text-text-xl focus:outline-none focus:ring-2 focus:ring-green-60 hover:bg-green-20 transition duration-100">
          Contato
        </Link>
      </nav>

      {/* Dropdown Mobile */}
      <nav
        id="mobile-nav"
        role="navigation"
        aria-label="Menu principal (Mobile)"
        className={`
          absolute left-0 top-full w-full md:hidden bg-white shadow-lg border-t border-gray-20
          overflow-hidden
          transition-all duration-300 ease-out
          ${isMenuOpen ? "opacity-100 translate-y-0 max-h-96" : "opacity-0 -translate-y-2 max-h-0 pointer-events-none"}
        `}
      >
        <div className="flex flex-col gap-2 px-6 py-4">
          <Link
            href="/sobre"
            className="inline-flex rounded-md px-4 py-3 font-semibold text-emerald-70 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-60"
          >
            Sobre Nós
          </Link>
          <span className="block h-px bg-gray-20" />
          <Link
            href="/contato"
            className="inline-flex rounded-md px-4 py-3 font-semibold text-emerald-70 hover:bg-emerald-50 focus:outline-none focus:ring-2 focus:ring-emerald-60"
          >
            Contato
          </Link>
        </div>
      </nav>
    </header>
  )
}