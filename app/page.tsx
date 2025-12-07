import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import HomeHero from "@/components/hero/homeHero";
import Hero from "@/components/hero/homeHero";

export const metadata = {
  title: "Lacrei Saúde",
};

export default function Home() {
  return (
    <>
      <Header />

      <HomeHero />
      
      <Footer />
    </>
  );
}
