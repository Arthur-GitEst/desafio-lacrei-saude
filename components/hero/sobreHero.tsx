import Image from "next/image";

export default function SobreHero() {
  return (
    <>
      {/* Hero da Seção Sobre */}
      <section 
        aria-label="Sobre a Lacrei Saúde" 
        className="max-w-7xl mx-auto flex flex-col gap-8 md:flex-row md:items-center px-8">
        <div className="flex-1">
          <h1 className="text-headline-sm md:text-headline-lg font-bold text-emerald-70 text-center md:text-start">
            Sobre a Lacrei Saúde
          </h1>
            <p className="text-text-base mt-4 text-gray-60">
            Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
            Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+
            </p>
          <p className="text-text-base mt-3 text-gray-60">
            Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
          </p>
        </div>

        <div className="relative w-full h-64 md:h-80 rounded-lg md:flex-1 overflow-hidden">
          <Image
            src="/sobre-hero-image.jpg"
            alt="Coração Pride"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>
      </section>
  
      {/* Seção Missão, Visão e Valores */}
      <section 
      aria-label="Missão, Visão e Valores" 
      className="max-w-7xl mx-auto mt-20 md:mt-30 mb-16 px-8 flex flex-wrap gap-6">
      <h2 className="w-full text-headline-base font-bold text-emerald-70 text-center mb-6">Missão, Visão e Valores</h2>
      <div 
        role="article" 
        aria-label="Card Missão" 
        className="w-full md:flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-20 hover:shadow-lg transition-shadow">
        <h2 className="text-headline-sm font-bold text-emerald-70 mb-3">Missão</h2>
        <p className="text-text-base text-gray-50 leading-relaxed">
          Proporcionar a inclusão da comunidade ao atendimento clínico.
        </p>
      </div>
      <div 
        role="article" 
        aria-label="Card Visão" 
        className="w-full md:flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-20 hover:shadow-lg transition-shadow">
        <h2 className="text-headline-sm font-bold text-emerald-70 mb-3">Visão</h2>
        <p className="text-text-base text-gray-50 leading-relaxed">
          Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+ no Brasil.
        </p>
      </div>
        <div 
          role="article" 
          aria-label="Card Confiança" 
          className="w-full md:flex-1 bg-white rounded-lg p-6 shadow-md border border-gray-20 hover:shadow-lg transition-shadow">
          <h2 className="text-headline-sm font-bold text-emerald-70 mb-3">Valores</h2>
          <p className="text-text-base text-gray-50 leading-relaxed">
            Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+.
          </p>
        </div>
      </section>
    </>
  )
}