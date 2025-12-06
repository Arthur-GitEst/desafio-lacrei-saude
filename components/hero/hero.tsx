import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      aria-label="Seção Principal da Tela Inicial"
      className="w-full flex items-center justify-center gap-12 px-8 md:px-8 lg:px-20 py-16 flex-col lg:flex-row"
    >
      <div className="flex flex-col items-center lg:items-start gap-4 max-w-lg">
        <h2 className="text-gray-80 text-headline-base lg:text-headline-xl font-bold text-center lg:text-start">Conheça nossa comunidade</h2>
        <span className="block w-full lg:w-2/5 bg-emerald-70 h-0.5"
        aria-hidden
        />
        <p className="text-gray-70 text-text-xl lg:text-headline-base text-center md:text-start">Saiba mais sobre a Lacrei Saúde e conheça o nosso trabalho.</p>
        <Link
          href="/sobre"
        >
          <button
            className="mt-4 inline-block rounded-md bg-emerald-60 px-6 py-3 text-white text-text-xl font-medium hover:bg-emerald-70 focus:outline-none focus:ring-2 focus:ring-emerald-60 transition duration-100 hover:cursor-pointer"
          >
            Conhecer
          </button>
        </Link>
      </div>
      <Image
      src="/hero-image.jpg"
      alt="Imagem do Hero"
      width={700}
      height={200}
      priority
      className="rounded-2xl"
      />
    </section>
  )
}