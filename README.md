
# 🪑 Casa Interiores — Projeto desenvolvido pela HeinSoft
<div id="inicio"></div>

![🟢 Status](https://img.shields.io/badge/🟢_Status-Finalizado-43A047?style=for-the-badge&labelColor=1E1E2F)

![🏷️ Selo HeinSoft](https://img.shields.io/badge/🏷️_HeinSoft_Seal-Quality_2025-1565C0?style=for-the-badge&labelColor=1E1E2F)

![🔒 Licença](https://img.shields.io/badge/🔒_Licença-Privado-9C27B0?style=for-the-badge&labelColor=1E1E2F)

---

<h2 id="sumario">🔗 Sumário - Clique no artigo desejado 🙂</h2>

- [🧱 Cabeçalho e Identificação do Projeto](#cabecalho)
- [📖 Visão Geral e Objetivos](#visao)
- [🛠️ Tecnologias e Ferramentas](#tecnologias)
- [⚙️ Instalação e Execução](#instalacao)
- [🗂️ Estrutura de Pastas](#estrutura)
- [🎨 Identidade Visual](#identidade-visual)
- [🧾 Documentos Oficiais](#documentos)
- [📦 Entregáveis e Resultado](#entregaveis)
- [📊 Análise de Performance](#performance)
- [👤 Créditos e Contatos](#creditos)
- [📅 Roadmap de Desenvolvimento](#roadmap)
- [📈 Histórico de Versões (Changelog)](#changelog)
- [⚖️ Direitos Autorais](#licenca)
- [🔝 Voltar ao Início](#inicio)
---

<h2 id="cabecalho">🧱 Cabeçalho e Identificação do Projeto</h2>

**Cliente:** Casa Interiores  
**Empresa Desenvolvedora:** HeinSoft Company  
**Responsável Técnico:** Pedro Henrique — CEO & Fundador  
**Status do Projeto:** ✅ Finalizado e publicado  
**Repositório Oficial:** [github.com/heinsoft/casa-interiores](https://github.com/HeinSoftCompany/casa_interiores_project_priv)  
**Website Oficial:** [casainteriorespe.com.br](https://casainteriorespe.com.br)

#### 📜 Descrição Executiva
O projeto **Casa Interiores** foi desenvolvido pela **HeinSoft Company** com o objetivo de traduzir a essência do design rústico e contemporâneo da marca em uma presença digital elegante, funcional e de alto desempenho.  
Cada detalhe foi planejado para refletir o estilo natural dos produtos, criar uma experiência fluida para o visitante e posicionar a marca como **referência regional em decoração e móveis personalizados.**

[🔝 Voltar ao Sumário](#sumario)

<h2 id="visao">📖 Visão Geral e Objetivos</h2>

A **Casa Interiores** é uma marca dedicada à criação de ambientes acolhedores, com foco em móveis e decorações que unem **artesanato e design contemporâneo**.  
A HeinSoft desenvolveu um **blog que funciona como catálogo digital** para representar fielmente o estilo e o valor estético da marca no ambiente online.

🎯 Objetivos Principais
- **Posicionamento Digital Profissional**  
- **Catálogo Interativo e Visual**  
- **SEO e Desempenho**  
- **Experiência do Usuário (UX)**  
- **Credibilidade e Autoridade**

🧭 Propósito Estratégico
O site da **Casa Interiores** não é apenas um catálogo — é um **ambiente digital de experiência**, que conecta estética, funcionalidade e propósito de marca.

[🔝 Voltar ao Sumário](#sumario)

---

<h2 id="tecnologias">🛠️ Tecnologias e Ferramentas</h2>

| Categoria | Tecnologia | Função |
|-----------|-----------|--------|
| **Build Tool** | 🧩 Vite | Build rápido, bundling e ambiente de desenvolvimento com HMR |
| **Linguagem Base** | 🧠 JavaScript Vanilla | Lógica de interação leve, sem frameworks pesados |
| **Framework CSS** | 🎨 Bootstrap 5.3 | Sistema de grid responsivo e componentes prontos |
| **Pré-processador** | 💅 Sass (SCSS) | Organização modular dos estilos e design system do projeto |
| **Ícones** | 🧭 Line Awesome | Ícones vetoriais consistentes usados na interface |
| **Hospedagem** | ☁️ Vercel + Hostinger | Vercel para deploy do front-end + Hostinger para domínio/infra complementar |
| **Formatação de Código** | 🧹 Prettier | Padronização de estilo de código via `npm run format` |
| **Auditoria de Performance (planejada)** | 📊 GTmetrix / SpeedVitals | Ferramentas previstas para avaliação e monitoramento contínuo de desempenho |

[🔝 Voltar ao Sumário](#sumario)

---

<h2 id="instalacao">⚙️ Instalação e Execução</h2>


### 💻 Pré-requisitos
- Node.js v20+  
- NPM v10+  
- Git v2.40+  
- Visual Studio Code  
-  **Sistema Windows ou Linux**

### 🧩 Instalação

```bash
git clone https://github.com/casainteriores/casa_interiores.git
cd casa_interiores
npm install
npm run dev
```

🔗 Acesse: **http://localhost:5173**

🏗️ Build de Produção:

```bash
npm run build
```
---

[🔝 Voltar ao Sumário](#sumario)

<h2 id="estrutura">🗂️ Estrutura de Pastas</h2>

Abaixo, um resumo da estrutura atual do projeto **Casa Interiores** com Vite + Sass:

| 📁 Pasta / Arquivo | 🧩 Tipo | 🧠 Descrição |
|---------------------|---------|--------------|
| **index.html** | 🪶 HTML raiz | Ponto de entrada HTML usado pelo Vite. |
| **vite.config.js** | ⚙️ Configuração | Ajustes de build e servidor de desenvolvimento. |
| **package.json** | 📦 Dependências | Scripts (`dev`, `build`, `format`) e bibliotecas do projeto. |
|---------------------|---------|--------------|
| **/public** | Diretório estático | Arquivos servidos diretamente sem passar pelo bundler. |
| ├── `robots.txt` | 🔍 SEO | Instruções para mecanismos de busca. |
| └── `sitemap.xml` | 🗺️ SEO | Mapa do site para indexação. |
|---------------------|---------|--------------|
| **/src** | Código-fonte | Onde fica toda a lógica e estilos principais. |
| └── **/styles** | Sass (SCSS) | Camada de estilos do projeto. |
| &nbsp;&nbsp;&nbsp;├── `_base.scss` | 🎨 Estilos base | Reset, tipografia e regras globais. |
| &nbsp;&nbsp;&nbsp;├── `variables.scss` | 🎯 Design tokens | Paleta de cores, espaçamentos etc. |
| &nbsp;&nbsp;&nbsp;├── `main.scss` | 🧩 Entrada global | Arquivo principal que importa todos os parciais. |
| &nbsp;&nbsp;&nbsp;├── **/components** | Componentes visuais | Partials Sass para elementos reutilizáveis. |
| &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└── `_product-card.scss`, `_utilities.scss` | 🪑 Cards de produto, utilitários e helpers. |
| &nbsp;&nbsp;&nbsp;├── **/layout** | Estrutura de página | Partials focados em estrutura e seções do layout. |
| &nbsp;&nbsp;&nbsp;│&nbsp;&nbsp;└── `_header-search.scss`, `_cat-bar.scss`, `_promo-bar.scss`, `_page-head.scss`, `_sidebar.scss`, `_offcanvas.scss`, `_images.scss`, `_contact.scss`, `_page-about.scss`, `_aside-image.scss` | 🧱 Cabeçalho, barras, sidebars, imagens e sessões internas. |
| &nbsp;&nbsp;&nbsp;└── **/pages** | Páginas específicas | Estilos por página. |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── `_catalog.scss`, `_about.scss` | 📄 Catálogo de produtos e página “Sobre”. |
|---------------------|---------|--------------|
| **/dist** | 📦 Build de produção | Arquivos otimizados gerados pelo `npm run build`. |
| **/node_modules** | 📚 Dependências | Pacotes instalados via NPM. |

> 🔎 Observação: pastas de imagens ainda serão organizadas em `/public/assets` conforme o projeto evoluir.

---

[🔝 Voltar ao Sumário](#sumario)

---

<h2 id="identidade-visual">🎨 Identidade Visual</h2>

| Elemento | Padrão | Descrição |
|----------|--------|-----------|
| **Cores** | `#f7f7f7`, `#ffffff`, `#1E1E2F`, `#2A2A2A`, `#737888`, `#8F929F`, `#E9E9E9`, `#F6F7F8`, `#E9E2D8`, `#F5F2EF`, `#4A2714`, `#FFD166`, `#F7B500`, `#7AC673`, `#111111`, `#7A9E7E` | Paleta neutra e terrosa com acentos em verde e dourado, focada em aconchego e sofisticação. |
| **Tipografia** | Plus Jakarta Sans / Onest / system-ui | Fonte moderna, legível e com bom equilíbrio entre títulos e textos longos. |
| **Ícones** | Line Awesome | Ícones vetoriais leves e consistentes com o estilo do layout. |
| **Layout** | Grid Bootstrap 5.3 | Estrutura responsiva baseada em colunas. |
| **Moodboard** | *Acolhedor, sofisticado, natural, moderno* | Ambientes claros, madeira, tons neutros e detalhes elegantes. |

---

[🔝 Voltar ao Sumário](#sumario)

### 🎨 Documentação de Cores (Root SCSS)

| Variável | Cor | Hexadecimal | Função |
|----------|-----|-------------|--------|
| `--bg` | ![#f7f7f7](https://via.placeholder.com/12/f7f7f7?text=+) | `#f7f7f7` | Fundo geral do site. |
| `--paper` | ![#ffffff](https://via.placeholder.com/12/ffffff?text=+) | `#ffffff` | Cartões, seções claras e áreas de conteúdo. |
| `--ink` | ![#2a2a2a](https://via.placeholder.com/12/2a2a2a?text=+) | `#2a2a2a` | Texto principal. |
| `--muted` | ![#737888](https://via.placeholder.com/12/737888?text=+) | `#737888` | Texto secundário, descrições e meta-informações. |
| `--stroke` | ![#e9e9e9](https://via.placeholder.com/12/e9e9e9?text=+) | `#e9e9e9` | Bordas suaves, divisórias e linhas de contorno. |
| `--beige` | ![#e9e2d8](https://via.placeholder.com/12/e9e2d8?text=+) | `#e9e2d8` | Fundos com referência à madeira clara / clima aconchegante. |
| `--promo` | ![#f5f2ef](https://via.placeholder.com/12/f5f2ef?text=+) | `#f5f2ef` | Blocos de destaque, sessões promocionais e banners. |
| `--brand` | ![#1e1e2f](https://via.placeholder.com/12/1e1e2f?text=+) | `#1e1e2f` | Cor principal de marca (títulos, cabeçalho, elementos-chave). |
| `--dark-brown` | ![#4a2714](https://via.placeholder.com/12/4a2714?text=+) | `#4a2714` | Detalhes que remetem à madeira escura, contraste e profundidade. |
| `--accent` | ![#7a9e7e](https://via.placeholder.com/12/7a9e7e?text=+) | `#7a9e7e` | Acentos visuais (links, badges, elementos em foco). |
| `--golden` | ![#ffd166](https://via.placeholder.com/12/ffd166?text=+) | `#ffd166` | Destaques premium, selos e elementos de ênfase. |
| `--rating` | ![#f7b500](https://via.placeholder.com/12/f7b500?text=+) | `#f7b500` | Estrelas de avaliação e indicadores de nota. |
| `--whatsapp` | ![#7ac673](https://via.placeholder.com/12/7ac673?text=+) | `#7ac673` | Botão/CTA de WhatsApp. |
| `--heart` | ![#111111](https://via.placeholder.com/12/111111?text=+) | `#111111` | Ícones sólidos (ex.: favoritos) e detalhes escuros. |
| `--gray` | ![#8f929f](https://via.placeholder.com/12/8f929f?text=+) | `#8f929f` | Tons neutros para bordas, textos auxiliares e placeholders. |
| `--bg-soft` | ![#f6f7f8](https://via.placeholder.com/12/f6f7f8?text=+) | `#f6f7f8` | Fundos suaves em seções alternadas e cards discretos. |
| `--radius-2xl` | — | `18px` | Raio de borda de elementos principais (cards e botões maiores). |
| `--radius-xl` | — | `14px` | Raio de borda para componentes secundários. |
| `--radius` | — | `1.25rem` | Raio de borda genérico para componentes globais. |
| `--shadow` | — | `0 6px 22px rgba(0, 0, 0, 0.06)` | Sombra suave aplicada em cards e elementos elevados. |

> ✨ A identidade visual une paleta neutra, tipografia atual e detalhes em verde e dourado para reforçar a proposta da Casa Interiores: ambientes acolhedores, elegantes e com foco em detalhes.

---

[🔝 Voltar ao Sumário](#sumario)

---

<h2 id="documentos">🧾 Documentos Oficiais</h2>

| Documento                  | Arquivo / Canal                                 | Descrição                                              |
|----------------------------|--------------------------------------------------|--------------------------------------------------------|
| Contrato de Desenvolvimento | Contrato_Desenvolvimento_v1.3_assinado.pdf      | Formaliza escopo, prazos e suporte *(aguardando assinatura final).* |
| Proposta Comercial         | Proposta_Comercial.pdf                          | Apresentação executiva, escopo e valores comerciais.   |
| Política de Privacidade    | `/politica-e-privacidade` (versão web)          | Regras de tratamento de dados, conforme LGPD.          |
| Termos de Uso              | `/termos-de-uso` (versão web)                   | Condições de uso do site e seus conteúdos.             |

> 📌 **Certificado de Qualidade HeinSoft:**  
> Certificado digital ainda **não emitido** para este projeto. Poderá ser gerado em uma etapa futura, como item opcional de branding e comprovação técnica.

[🔝 Voltar ao Sumário](#sumario)

<h2 id="entregaveis">📦 Entregáveis e Resultado</h2>

| Item                        | Status | Descrição                                                                 |
|----------------------------|--------|---------------------------------------------------------------------------|
| Site Responsivo            | ✅     | Layout fluido e moderno, adaptado para mobile, tablet e desktop.          |
| SEO Técnico (Básico)       | ✅     | Implementação inicial de SEO: meta tags principais, `robots.txt` e `sitemap.xml`. |
| Performance                | 🧪     | Estrutura preparada para boa performance; testes em GTmetrix/SpeedVitals serão realizados na etapa de monitoramento. |
| Documentação               | ✅     | README Enterprise do projeto + Proposta Comercial em PDF + Contrato em PDF (aguardando assinatura). |
| Versão Oficial do Projeto  | ✅     | Código hospedado em repositórios oficiais (GitHub Casa Interiores e HeinSoft). Alterações feitas por terceiros, sem acompanhamento da HeinSoft, não são de responsabilidade da empresa. |

---

[🔝 Voltar ao Sumário](#sumario)

<h2 id="performance">📊 Análise de Performance</h2>

> ⚠️ Os testes de performance ainda não foram registrados oficialmente para este projeto.  
> Esta seção funciona como lembrete do que precisa ser feito e onde anotar os resultados.

| Plataforma             | Status    | O que falta fazer                                          | Data do último teste |
|------------------------|-----------|------------------------------------------------------------|----------------------|
| **GTmetrix**           | ⏳ Pendente | Rodar teste da Home e do Catálogo e registrar nota + LCP.  | —                    |
| **SpeedVitals**        | ⏳ Pendente | Rodar teste de Core Web Vitals (FCP, LCP, CLS, INP).       | —                    |
| **Lighthouse (Local)** | ⏳ Pendente | Rodar auditoria no navegador (modo Desktop e Mobile).      | —                    |

#### ✅ Checklist de ações futuras

- [ ] Rodar **GTmetrix** na página inicial (`/`) e na página de catálogo.  
- [ ] Anotar no README a **nota final**, **LCP** e **tamanho total da página** (se quiser).  
- [ ] Rodar **SpeedVitals** para o domínio publicado e salvar os resultados principais (LCP, CLS, INP).  
- [ ] Rodar **Lighthouse** no Chrome (Desktop e Mobile) e registrar as notas de Performance.  
- [ ] Atualizar a tabela acima com **pontuações reais e datas**.  

> 💡 Quando você fizer os testes, é só substituir os "⏳ Pendente" e os "—" pelos valores reais.

---

[🔝 Voltar ao Sumário](#sumario)

<h2 id="creditos">👤 Créditos e Contatos</h2>

Desenvolvido por: HeinSoft Company - *Acesse:* [🌐 heinsoft.com.br](https://www.heinsoft.com.br/)

- Email: 📧 contato@heinsoft.com.br

- 📱 [Whatsapp](https://api.whatsapp.com/send/?phone=5581993193905&text=Ol%C3%A1%21+Quero+conversar+sobre+construir+minha+presen%C3%A7a+online+com+um+site+otimizado.&type=phone_number&app_absent=0) - *Fale comigo*

-  📍 Gravatá — *Pernambuco, Brasil*

Responsável Técnico: *Pedro Henrique — CEO & Fundador*


[🔝 Voltar ao Sumário](#sumario)

<h2 id="roadmap">📅 Roadmap de Desenvolvimento</h2>

| Fase                          | Descrição                                                      | Status        | Responsável       |
|-------------------------------|----------------------------------------------------------------|---------------|-------------------|
| Planejamento & Briefing       | Coleta de informações, objetivos e definição de escopo.        | ✅            | Pedro Henrique    |
| Design & Identidade Visual    | Criação da linha visual, layout base e direcionamento estético.| ✅            | Designer HeinSoft |
| Desenvolvimento Técnico       | Implementação do front-end, estruturação Sass e SEO básico.   | ✅            | Pedro Henrique    |
| Testes & Publicação           | Testes manuais, ajustes visuais finais e deploy em produção.   | ✅            | Pedro Henrique    |
| Monitoramento de Performance  | Rodar GTmetrix, SpeedVitals e Lighthouse e registrar resultados.| ⏳ Pendente   | Pedro Henrique    |
| Manutenção & Evolução de Conteúdo | Manutenção contínua **não incluída neste projeto**, mas é recomendada para ajustes futuros, correções e atualização de catálogo. | Opcional      | Casa Interiores & HeinSoft (mediante novo acordo) |

[🔝 Voltar ao Sumário](#sumario)


<h2 id="changelog">📈 Histórico de Versões (Changelog)</h2>

> 🗓️ O desenvolvimento do projeto Casa Interiores foi iniciado em **24/10/2025**.

| Versão     | Descrição                                                                                       | Data       |
|------------|--------------------------------------------------------------------------------------------------|------------|
| **v1.0.0** | Primeira versão publicada do site: estrutura com Vite + Bootstrap + Sass, layout responsivo      | 02 - Nov/2025   |
| **v1.1.0** *(planejada)* | Ajustes de conteúdo, pequenos refinamentos visuais e melhorias pontuais no catálogo. | 11 - Nov/2025  |
| **v1.2.0** *(planejada)* | Otimização de imagens, rodada de testes de performance (GTmetrix / SpeedVitals / Lighthouse) e ajustes de SEO. | A definir  |

> ✏️ Quando você fizer uma nova rodada de melhorias (ex.: performance, catálogo, conteúdo), é só:
> - adicionar a data real na coluna **Data**  
> - atualizar a descrição com o que foi feito de fato.

[🔝 Voltar ao Sumário](#sumario)


<h2 id="licenca">⚖️ Direitos Autorais</h2>

© 2025 HeinSoft Company. Todos os direitos reservados.  
Este projeto é de uso autorizado apenas pela Casa Interiores e pela HeinSoft.  
Reprodução, redistribuição ou uso comercial não autorizado do código ou do layout é expressamente proibido.


