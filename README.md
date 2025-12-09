# Desafio Lacrei Saude

Este projeto e uma aplicacao web desenvolvida como parte do desafio tecnico da Lacrei Saude. O objetivo e criar uma interface acessivel, responsiva e performática.

## Tecnologias Utilizadas

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Styled Components
- **Otimização de Imagem:** Sharp
- **Qualidade de Código:** ESLint

## Instalação e Execução Local

Siga os passos abaixo para configurar o ambiente de desenvolvimento na sua máquina.

### Pré-requisitos

- **Node.js:** Versão 18 ou superior.
- **npm:** Gerenciador de pacotes (geralmente instalado com o Node.js).

### Passo a Passo

1. **Clone o repositório:**

   ```bash
   git clone https://github.com/Arthur-GitEst/desafio-lacrei-saude.git
   ```

2. **Acesse o diretório do projeto:**

   ```bash
   cd desafio-lacrei-saude
   ```

3. **Instale as dependências:**

   ```bash
   npm install
   ```

4. **Execute o servidor de desenvolvimento:**

   ```bash
   npm run dev
   ```

5. **Acesse a aplicação:**
   Abra o navegador e vá para [http://localhost:3000](http://localhost:3000).

## Verificação de Qualidade (Testes)

O projeto utiliza **ESLint** para análise estática e **Jest** com **React Testing Library** para testes unitários.

### Linting
Para verificar a qualidade do código e identificar erros estáticos:
```bash
npm run lint
```

### Testes Unitários
Para executar os testes dos componentes (Header, Footer, ContactSection, etc.):
```bash
npm test
```
Para rodar os testes em modo watch (observação):
```bash
npm run test:watch
```

## Build e Produção

Para simular o ambiente de produção localmente ou preparar a aplicação para deploy:

1. **Gere o build de produção:**
   Este comando cria uma versão otimizada da aplicação na pasta `.next`.

   ```bash
   npm run build
   ```

2. **Inicie o servidor de produção:**
   Este comando serve a aplicação construída anteriormente.
   ```bash
   npm start
   ```

## Deploy

O projeto foi configurado para deploy contínuo (CI/CD) na plataforma **Vercel**, que é a recomendada para aplicações Next.js.

### Processo Automático

1. O repositório GitHub está conectado à Vercel.
2. Qualquer **push** na branch `main` dispara automaticamente um novo processo de build e deploy.
3. A Vercel detecta automaticamente as configurações (`npm run build` e diretório de saída).

**Link do Deploy:** [desafio-lacrei-saude-two.vercel.app](https://desafio-lacrei-saude-two.vercel.app)

## Estratégia de Rollback

Caso uma nova versão apresente problemas em produção, existem duas estratégias principais para reverter as alterações.

### 1. Rollback Instantâneo (Recomendado - Via Vercel)

Esta é a forma mais rápida de restaurar o serviço, pois não requer novo build.

1. Acesse o dashboard do projeto na Vercel.
2. Vá até a aba **"Deployments"**.
3. Localize o deploy anterior que estava estável (marcado como "Ready").
4. Clique no menu de opções (três pontos) e selecione **"Instant Rollback"**.
5. A versão anterior será promovida a produção imediatamente.

### 2. Rollback via Código (Via Git)

Utilize este método se precisar corrigir o histórico do repositório.

1. Identifique o hash do commit estável anterior:
   ```bash
   git log --oneline
   ```
2. Crie um novo commit que reverte as alterações problemáticas:
   ```bash
   git revert <hash-do-commit-problematico>
   ```
3. Envie a alteração para a branch `main`:
   ```bash
   git push origin main
   ```
4. O pipeline da Vercel detectará o novo commit e fará o deploy da versão corrigida.

## Decisões de Projeto

### Escolhas Técnicas

- **Next.js 16 (App Router):** Escolhido pela performance, otimização de SEO nativa e arquitetura moderna baseada em Server Components.
- **Styled Components:** Adotado para estilização componentizada, permitindo CSS dinâmico e escopado, facilitando a manutenção e evitando conflitos de classes.
- **TypeScript:** Utilizado para garantir tipagem estática, reduzindo erros em tempo de execução e melhorando a experiência de desenvolvimento (IntelliSense).

### Escolhas Visuais

- **Paleta de Cores:** Tons de esmeralda e verde para transmitir confiança, saúde e acolhimento, alinhados à identidade da Lacrei Saúde.
- **Tipografia:** Uso de variáveis CSS (`--text-headline`, `--text-text`) para manter consistência nos tamanhos de fonte em toda a aplicação.
- **Acessibilidade:** Uso de tags semânticas (`main`, `section`, `nav`) e atributos `aria` para garantir que a aplicação seja navegável por leitores de tela.

## Otimização e Performance

Para garantir uma experiência de usuário fluida:

- **Next/Image:** Carregamento lazy, redimensionamento automático e formatos modernos (WebP).
- **Code Splitting:** Divisão automática de código por rota.
- **Server Components:** Renderização no servidor para reduzir o JavaScript enviado ao cliente.
- **Font Optimization:** Carregamento otimizado de fontes para evitar Layout Shift (CLS).

![Resultado do Teste Lighthouse](public/teste-lighthouse.png)

- **Desempenho:** 98
- **Acessibilidade:** 96
- **Best Practices:** 100
- **SEO:** 100

**Link do Resultado do Teste:** https://pagespeed.web.dev/analysis/https-desafio-lacrei-saude-two-vercel-app/ho8mc62j3p?hl=pt&form_factor=desktop

Esses resultados confirmam que a aplicação é rápida, acessível para leitores de tela e segue as melhores práticas de desenvolvimento web moderno.