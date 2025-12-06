import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import Hero from "@/components/hero/hero";

export const metadata = {
  title: "Lacrei Saúde",
};

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Footer />
    </>
  );
}
