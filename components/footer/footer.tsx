import Link from "next/link"
import Image from "next/image"

export default function Footer() {
  return (
    <footer
      className="bg-linear-to-b from-gray-10 to-green-10 px-6 md:px-10 lg:px-30 py-8 border-t border-gray-20"
      aria-label="Rodapé"
      role="contentinfo"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
        {/* Branding + Redes sociais */}
        <div className="flex flex-col gap-4 items-center text-center md:items-start md:text-left">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 justify-center">
            <Image
              src="/logo-header.svg"
              alt="Logo da Lacrei Saúde"
              width={250}
              height={52}
              priority={false}
            />
          </Link>

          {/* Social (abaixo da logo) */}
          <div className="flex items-center justify-center gap-3 md:justify-start" aria-label="Redes sociais">
            <Link
              href="https://www.instagram.com/lacreisaude/"
              aria-label="Instagram da Lacrei Saúde"
              className="inline-flex p-2 rounded-md hover:bg-green-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
            >
              <Image src="/instagram.svg" alt="" width={30} height={30} aria-hidden />
            </Link>

            <Link
              href="https://www.linkedin.com/company/lacreisaude/?originalSubdomain=br"
              aria-label="LinkedIn da Lacrei Saúde"
              className="inline-flex p-2 rounded-md hover:bg-green-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
            >
              <Image src="/linkedin.svg" alt="" width={30} height={30} aria-hidden />
            </Link>

            <Link
              href="https://www.facebook.com/lacrei.saude/"
              aria-label="Facebook da Lacrei Saúde"
              className="inline-flex p-2 rounded-md hover:bg-green-20 focus:outline-none focus:ring-2 focus:ring-emerald-60"
            >
              <Image src="/facebook.svg" alt="" width={30} height={30} aria-hidden />
            </Link>
          </div>
        </div>

        {/* Navegação */}
        <nav aria-label="Links do rodapé" className="flex flex-wrap items-center gap-4 md:self-center">
          <Link
            href="/sobre"
            className="rounded-md px-4 py-2 text-gray-80 text-text-xl focus:outline-none focus:ring-2 focus:ring-emerald-60 hover:bg-green-20 transition duration-100"
          >
            Sobre Nós
          </Link>
          <Link
            href="/contato"
            className="rounded-md px-4 py-2 text-gray-80 text-text-xl focus:outline-none focus:ring-2 focus:ring-emerald-60 hover:bg-green-20 transition duration-100"
          >
            Contato
          </Link>
        </nav>
      </div>
      {/* Direitos autorais */}
      <div className="max-w-7xl mx-auto mt-6 text-center text-gray-80 text-text-xl">
        © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados. CNPJ:  51.265.351/0001-65
      </div>
    </footer>
  )
}