import type { Metadata } from "next";
import StyledComponentsRegistry from "@/lib/registry";
import GlobalStyles from "@/lib/GlobalStyles";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Lacrei Saúde",
  description: "Desafio Lacrei Saúde",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyles />
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
