"use client"

import Image from "next/image";
import styled from "styled-components";

const HeroSection = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 0 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

const HeroContent = styled.div`
  flex: 1;
`

const HeroTitle = styled.h1`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);
  text-align: center;

  @media (min-width: 768px) {
    font-size: var(--text-headline-lg);
    text-align: left;
  }
`

const HeroText = styled.p`
  font-size: var(--text-text-base);
  margin-top: 1rem;
  color: var(--color-gray-60);

  & + & {
    margin-top: 0.75rem;
  }
`

const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 16rem; /* h-64 */
  border-radius: 0.5rem;
  overflow: hidden;

  @media (min-width: 768px) {
    height: 20rem; /* h-80 */
    flex: 1;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
`

const CardsSection = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 5rem auto 4rem; /* mt-20 mb-16 */
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;

  @media (min-width: 768px) {
    margin-top: 7.5rem; /* mt-30 */
  }
`

const CardsSectionTitle = styled.h2`
  width: 100%;
  font-size: var(--text-headline-base);
  font-weight: 700;
  color: var(--color-emerald-70);
  text-align: center;
  margin-bottom: 1.5rem;
`

const Card = styled.div`
  width: 100%;
  background-color: white;
  border-radius: 0.5rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-gray-20);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 768px) {
    flex: 1;
  }
`

const CardTitle = styled.h2`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);
  margin-bottom: 0.75rem;
`

const CardText = styled.p`
  font-size: var(--text-text-base);
  color: var(--color-gray-50);
  line-height: 1.625;
`

export default function SobreHero() {
  return (
    <>
      {/* Hero da Seção Sobre */}
      <HeroSection aria-label="Sobre a Lacrei Saúde">
        <HeroContent>
          <HeroTitle>
            Sobre a Lacrei Saúde
          </HeroTitle>
            <HeroText>
            Acreditamos que, ao possibilitar a inclusão clínica da nossa comunidade, transformamos o mundo.
            Foi pensando nisso, que a Lacrei Saúde nasceu em 2020 com o propósito de oferecer a melhor experiência no acesso à profissionais da saúde para as pessoas LGBTQIAPN+
            </HeroText>
          <HeroText>
            Atuamos de forma ética e embasada nas regras e diretrizes estabelecidas pelos órgãos de classe e regulamentadores.
          </HeroText>
        </HeroContent>

        <ImageContainer>
          <StyledImage
            src="/sobre-hero-image.jpg"
            alt="Coração Pride"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </ImageContainer>
      </HeroSection>
  
      {/* Seção Missão, Visão e Valores */}
      <CardsSection aria-label="Missão, Visão e Valores">
      <CardsSectionTitle>Missão, Visão e Valores</CardsSectionTitle>
      <Card role="article" aria-label="Card Missão">
        <CardTitle>Missão</CardTitle>
        <CardText>
          Proporcionar a inclusão da comunidade ao atendimento clínico.
        </CardText>
      </Card>
      <Card role="article" aria-label="Card Visão">
        <CardTitle>Visão</CardTitle>
        <CardText>
          Ser a plataforma de serviços de saúde da comunidade LGBTQIAPN+ no Brasil.
        </CardText>
      </Card>
        <Card role="article" aria-label="Card Confiança">
          <CardTitle>Valores</CardTitle>
          <CardText>
            Representatividade, segurança e acessibilidade da comunidade LGBTQIAPN+.
          </CardText>
        </Card>
      </CardsSection>
    </>
  )
}