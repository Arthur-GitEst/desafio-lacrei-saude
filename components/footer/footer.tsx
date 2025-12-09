"use client"

import Link from "next/link"
import Image from "next/image"
import styled from "styled-components"

const FooterContainer = styled.footer`
  background: linear-gradient(to bottom, var(--color-gray-10), var(--color-green-10));
  padding: 2rem 1.5rem;
  border-top: 1px solid var(--color-gray-20);

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;
  }

  @media (min-width: 1024px) {
    padding: 2rem 7.5rem;
  }
`

const ContentWrapper = styled.div`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`

const BrandingSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    text-align: left;
  }
`

const SocialLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  @media (min-width: 768px) {
    justify-content: flex-start;
  }
`

const SocialLink = styled(Link)`
  display: inline-flex;
  padding: 0.5rem;
  border-radius: 0.375rem;
  
  &:hover {
    background-color: var(--color-green-20);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }
`

const FooterNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  @media (min-width: 768px) {
    align-self: center;
  }
`

const FooterNavLink = styled(Link)`
  border-radius: 0.375rem;
  padding: 0.5rem 1rem;
  color: var(--color-gray-80);
  font-size: var(--text-text-xl);
  transition: background-color 100ms;

  &:hover {
    background-color: var(--color-green-20);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }
`

const Copyright = styled.div`
  max-width: 80rem;
  margin: 1.5rem auto 0;
  text-align: center;
  color: var(--color-gray-80);
  font-size: 1.125rem; /* text-xl */
`

export default function Footer() {
  return (
    <FooterContainer aria-label="Rodapé" role="contentinfo">
      <ContentWrapper>
        {/* Branding + Redes sociais */}
        <BrandingSection>
          {/* Logo */}
          <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
            <Image
              src="/logo-header.svg"
              alt="Logo da Lacrei Saúde"
              width={250}
              height={52}
              priority={false}
            />
          </Link>

          {/* Social (abaixo da logo) */}
          <SocialLinks aria-label="Redes sociais">
            <SocialLink
              href="https://www.instagram.com/lacreisaude/"
              aria-label="Instagram da Lacrei Saúde"
            >
              <Image src="/instagram.svg" alt="" width={30} height={30} aria-hidden />
            </SocialLink>

            <SocialLink
              href="https://www.linkedin.com/company/lacreisaude/?originalSubdomain=br"
              aria-label="LinkedIn da Lacrei Saúde"
            >
              <Image src="/linkedin.svg" alt="" width={30} height={30} aria-hidden />
            </SocialLink>

            <SocialLink
              href="https://www.facebook.com/lacrei.saude/"
              aria-label="Facebook da Lacrei Saúde"
            >
              <Image src="/facebook.svg" alt="" width={30} height={30} aria-hidden />
            </SocialLink>
          </SocialLinks>
        </BrandingSection>

        {/* Navegação */}
        <FooterNav aria-label="Links do rodapé">
          <FooterNavLink href="/sobre">
            Sobre Nós
          </FooterNavLink>
          <FooterNavLink href="/contato">
            Contato
          </FooterNavLink>
        </FooterNav>
      </ContentWrapper>
      {/* Direitos autorais */}
      <Copyright>
        © {new Date().getFullYear()} Lacrei Saúde. Todos os direitos reservados. CNPJ:  51.265.351/0001-65
      </Copyright>
    </FooterContainer>
  )
}