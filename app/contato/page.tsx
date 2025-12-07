import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Contato | Lacrei Saúde",
  description: "Entre em contato com a Lacrei Saúde. Estamos aqui para ouvir você.",
};

export default function Contato() {
  return (
    <>
      <Header />
      <main>
        <section 
          aria-label="Entre em contato" 
          className="max-w-7xl mx-auto flex flex-col gap-12 md:flex-row md:items-start px-8 py-16"
        >
          {/* Coluna Esquerda: Informação */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-headline-sm md:text-headline-lg font-bold text-emerald-70">
              Entre em contato
            </h1>
            <p className="text-text-base text-gray-60 max-w-md leading-relaxed">
              Queremos ouvir você! Se tiver dúvidas, sugestões ou quiser saber mais sobre nosso trabalho, preencha o formulário ou nos encontre nas redes sociais.
            </p>
            
            <div className="mt-4">
              <h2 className="text-headline-base font-bold text-emerald-70 mb-4">
                Nossas Redes
              </h2>
              <div className="flex gap-4">
                <Link 
                  href="https://www.instagram.com/lacreisaude/" 
                  target="_blank" 
                  aria-label="Instagram"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
                </Link>
                <Link 
                  href="https://www.facebook.com/lacrei.saude/" 
                  target="_blank" 
                  aria-label="Facebook"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
                </Link>
                <Link 
                  href="https://www.linkedin.com/company/lacreisaude/?originalSubdomain=br" 
                  target="_blank" 
                  aria-label="LinkedIn"
                  className="hover:opacity-80 transition-opacity"
                >
                  <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
                </Link>
              </div>
            </div>
          </div>

          {/* Coluna Direita: Formulário */}
          <div className="flex-1 w-full bg-white p-6 md:p-8 rounded-lg shadow-md border border-gray-20">
            <form className="flex flex-col gap-4">
              <div>
                <label htmlFor="name" className="block text-text-sm font-bold text-gray-70 mb-2">
                  Nome Completo
                </label>
                <input 
                  type="text" 
                  id="name" 
                  placeholder="Digite seu nome"
                  className="w-full p-3 rounded-md border border-gray-30 focus:border-emerald-50 focus:ring-1 focus:ring-emerald-50 outline-none transition-colors text-gray-70"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-sm font-bold text-gray-70 mb-2">
                  E-mail
                </label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="seu@email.com"
                  className="w-full p-3 rounded-md border border-gray-30 focus:border-emerald-50 focus:ring-1 focus:ring-emerald-50 outline-none transition-colors text-gray-70"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-sm font-bold text-gray-70 mb-2">
                  Mensagem
                </label>
                <textarea 
                  id="message" 
                  rows={4}
                  placeholder="Como podemos ajudar?"
                  className="w-full p-3 rounded-md border border-gray-30 focus:border-emerald-50 focus:ring-1 focus:ring-emerald-50 outline-none transition-colors text-gray-70 resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="mt-2 bg-emerald-60 text-white font-bold py-3 px-6 rounded-md hover:bg-emerald-70 transition-colors shadow-sm"
              >
                Enviar Mensagem
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
