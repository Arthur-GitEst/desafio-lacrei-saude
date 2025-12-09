"use client"

import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const Section = styled.section`
  max-width: 80rem; /* max-w-7xl */
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  padding: 4rem 2rem;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`

const InfoColumn = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

const Title = styled.h1`
  font-size: var(--text-headline-sm);
  font-weight: 700;
  color: var(--color-emerald-70);

  @media (min-width: 768px) {
    font-size: var(--text-headline-lg);
  }
`

const Description = styled.p`
  font-size: var(--text-text-base);
  color: var(--color-gray-60);
  max-width: 28rem; /* max-w-md */
  line-height: 1.625;
`

const SocialsContainer = styled.div`
  margin-top: 1rem;
`

const SocialsTitle = styled.h2`
  font-size: var(--text-headline-base);
  font-weight: 700;
  color: var(--color-emerald-70);
  margin-bottom: 1rem;
`

const SocialsList = styled.div`
  display: flex;
  gap: 1rem;
`

const SocialLink = styled(Link)`
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.8;
  }
`

const FormColumn = styled.div`
  flex: 1;
  width: 100%;
  background-color: white;
  padding: 1.5rem;
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  border: 1px solid var(--color-gray-20);

  @media (min-width: 768px) {
    padding: 2rem;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`

const Label = styled.label`
  display: block;
  font-size: var(--text-text-sm);
  font-weight: 700;
  color: var(--color-gray-70);
  margin-bottom: 0.5rem;
`

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--color-gray-30);
  color: var(--color-gray-70);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    border-color: var(--color-emerald-50);
    box-shadow: 0 0 0 1px var(--color-emerald-50);
  }
`

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border-radius: 0.375rem;
  border: 1px solid var(--color-gray-30);
  color: var(--color-gray-70);
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
  resize: none;

  &:focus {
    border-color: var(--color-emerald-50);
    box-shadow: 0 0 0 1px var(--color-emerald-50);
  }
`

const SubmitButton = styled.button`
  margin-top: 0.5rem;
  background-color: var(--color-emerald-60);
  color: white;
  font-weight: 700;
  padding: 0.75rem 1.5rem;
  border-radius: 0.375rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);

  &:hover {
    background-color: var(--color-emerald-70);
  }
`

export default function ContactSection() {
  return (
    <Section aria-label="Entre em contato">
      {/* Coluna Esquerda: Informação */}
      <InfoColumn>
        <Title>
          Entre em contato
        </Title>
        <Description>
          Queremos ouvir você! Se tiver dúvidas, sugestões ou quiser saber mais sobre nosso trabalho, preencha o formulário ou nos encontre nas redes sociais.
        </Description>
        
        <SocialsContainer>
          <SocialsTitle>
            Nossas Redes
          </SocialsTitle>
          <SocialsList>
            <SocialLink 
              href="https://www.instagram.com/lacreisaude/" 
              target="_blank" 
              aria-label="Instagram"
            >
              <Image src="/instagram.svg" alt="Instagram" width={32} height={32} />
            </SocialLink>
            <SocialLink 
              href="https://www.facebook.com/lacrei.saude/" 
              target="_blank" 
              aria-label="Facebook"
            >
              <Image src="/facebook.svg" alt="Facebook" width={32} height={32} />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/company/lacreisaude/?originalSubdomain=br" 
              target="_blank" 
              aria-label="LinkedIn"
            >
              <Image src="/linkedin.svg" alt="LinkedIn" width={32} height={32} />
            </SocialLink>
          </SocialsList>
        </SocialsContainer>
      </InfoColumn>

      {/* Coluna Direita: Formulário */}
      <FormColumn>
        <Form>
          <FormGroup>
            <Label htmlFor="name">
              Nome Completo
            </Label>
            <Input 
              type="text" 
              id="name" 
              placeholder="Digite seu nome"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="email">
              E-mail
            </Label>
            <Input 
              type="email" 
              id="email" 
              placeholder="seu@email.com"
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="message">
              Mensagem
            </Label>
            <TextArea 
              id="message" 
              rows={4}
              placeholder="Como podemos ajudar?"
            ></TextArea>
          </FormGroup>

          <SubmitButton type="submit">
            Enviar Mensagem
          </SubmitButton>
        </Form>
      </FormColumn>
    </Section>
  )
}