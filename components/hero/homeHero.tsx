"use client"

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 2rem;

  @media (min-width: 1024px) {
    flex-direction: row;
    padding: 4rem 5rem;
  }
`

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 32rem; /* max-w-lg */

  @media (min-width: 1024px) {
    align-items: flex-start;
  }
`

const Title = styled.h2`
  color: var(--color-gray-80);
  font-size: var(--text-headline-base);
  font-weight: 700;
  text-align: center;

  @media (min-width: 1024px) {
    font-size: var(--text-headline-xl);
    text-align: left;
  }
`

const Divider = styled.span`
  display: block;
  width: 100%;
  height: 0.125rem; /* h-0.5 */
  background-color: var(--color-emerald-70);

  @media (min-width: 1024px) {
    width: 40%; /* w-2/5 */
  }
`

const Description = styled.p`
  color: var(--color-gray-70);
  font-size: var(--text-text-xl);
  text-align: center;

  @media (min-width: 768px) {
    text-align: left;
  }

  @media (min-width: 1024px) {
    font-size: var(--text-headline-base);
  }
`

const ConhecaButton = styled.button`
  margin-top: 1rem;
  display: inline-block;
  border-radius: 0.375rem;
  background-color: var(--color-emerald-60);
  padding: 0.75rem 1.5rem;
  color: white;
  font-size: var(--text-text-xl);
  font-weight: 500;
  transition: background-color 100ms;
  border: none;

  &:hover {
    background-color: var(--color-emerald-70);
    cursor: pointer;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px var(--color-emerald-60);
  }
`

const StyledImage = styled(Image)`
  border-radius: 1rem; /* rounded-2xl */
  max-width: 100%;
  height: auto;
`

export default function HomeHero() {
  return (
    <HeroSection aria-label="Seção Principal da Tela Inicial">
      <ContentWrapper>
        <Title>Conheça nossa comunidade</Title>
        <Divider aria-hidden />
        <Description>Saiba mais sobre a Lacrei Saúde e conheça o nosso trabalho.</Description>
        <Link href="/sobre">
          <ConhecaButton>
            Conhecer
          </ConhecaButton>
        </Link>
      </ContentWrapper>
      <StyledImage
        src="/hero-image.jpg"
        alt="Imagem do Hero"
        width={700}
        height={200}
        priority
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </HeroSection>
  )
}