import Header from "@/components/header/header"
import Footer from "@/components/footer/footer"
import Image from "next/image"
import SobreHero from "@/components/hero/sobreHero"

export const metadata = {
  title: "Sobre | Lacrei Saúde"
}

export default function Sobre() {
  return (
    <>
      <Header />

      <SobreHero />

      <Footer />
    </>
  )
}