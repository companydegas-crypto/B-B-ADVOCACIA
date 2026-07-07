# UI COMPONENTS
**Biffe & Barzagui Advocacia e Consultoria**

Este documento detalha o comportamento visual, estados e acessibilidade dos componentes do site, priorizando a abordagem **Mobile First**.

---

## 1. NAVBAR
**Mobile:**
*   **Logo:** Alinhada à esquerda.
*   **Menu (Hamburger):** Alinhado à direita. Área de toque (touch target) de no mínimo 44x44px.
*   **Painel de Navegação:** Abre em *fullscreen* (ou quase *fullscreen*).
*   **Fundo do Painel:** Preto profundo (`#070707`).
*   **Links:** Tipografia grande (ex: 24px a 32px), com espaçamento vertical generoso.
*   **CTA:** Posicionado no final do painel.
*   **Fechamento:** Ícone de 'X' claro e acessível.

**Desktop:**
*   **Logo:** Alinhada à esquerda.
*   **Links:** Centralizados ou alinhados à direita, com espaçamento equilibrado.
*   **CTA:** Discreto, posicionado na extrema direita.
*   **Altura:** Entre 76px e 92px.
*   **Fundo:** Escuro translúcido (com `backdrop-filter: blur`) ou sólido.
*   **Borda:** Inferior, sutil e dourada, com baixa opacidade (`rgba(184, 149, 77, 0.22)`).

---

## 2. BOTÕES
**Primário:**
*   **Fundo:** Dourado escuro (`#8E7139`) ou dourado principal (`#B8954D`).
*   **Texto:** Preto profundo (`#070707`), utilizando IBM Plex Sans Condensed.
*   **Padding:** Confortável (ex: `12px 24px` ou `16px 32px`).
*   **Radius:** Discreto (8px a 14px). Proibido arredondamento estilo "pílula".
*   **Hover/Focus:** Transição para dourado claro (`#D6BC78`) ou leve elevação no eixo Y (`-2px`).
*   **Sombra:** Proibido uso de sombra forte.

**Secundário:**
*   **Fundo:** Transparente.
*   **Texto:** Off-white (`#F6F3EC`) ou preto, dependendo do fundo da seção.
*   **Borda:** Fina (1px), na mesma cor do texto.
*   **Hover/Focus:** Fundo translúcido sutil ou inversão de cores.

---

## 3. HERO
**Mobile:**
*   **Altura:** Altura natural do conteúdo (não precisa forçar `100vh`).
*   **Padding Superior:** Generoso para compensar a navbar.
*   **Layout:** Coluna única. Texto flui naturalmente.
*   **CTAs:** Empilhados verticalmente (full width) ou lado a lado, se o espaço permitir leitura confortável.
*   **Visual:** Imagem ou textura discreta abaixo do texto ou atuando como *overlay* de fundo.
*   **Headline:** Tipografia grande, elegante, com serif (Cormorant Garamond).

**Desktop:**
*   **Grid:** 12 colunas.
*   **Texto:** Ocupa 6 a 7 colunas (para evitar linhas muito longas e difíceis de ler).
*   **Elemento Visual:** Ocupa as colunas restantes.
*   **Espaçamento:** Muito espaço em branco (respiro).
*   **Fundo:** Preto principal (`#101010`) ou preto profundo (`#070707`).

---

## 4. CARDS DE ATUAÇÃO
**Mobile:**
*   **Layout:** Empilhados (uma coluna).
*   **Fundo:** Grafite (`#1A1A1A`).
*   **Borda:** Sutil dourada (opacidade baixa).
*   **Ícone:** Pequeno e fino (Lucide icons).
*   **Título:** Serifado ou semi-serifado.
*   **Texto:** Curto, fonte menor (16px).
*   **CTA:** Link em texto discreto ("Ver área").

**Desktop:**
*   **Layout:** Dois cards lado a lado na Home (ocupando 6 colunas cada).
*   **Dimensão:** Cards maiores, com *padding* interno generoso (ex: 48px).

---

## 5. CARDS DE PRINCÍPIOS
**Mobile:**
*   **Layout:** Lista vertical simples.
*   **Número:** Pequeno e dourado, servindo como marcador.
*   **Título:** Tamanho intermediário.
*   **Texto:** Curto e objetivo.

**Desktop:**
*   **Layout:** Grid de 3 colunas ou alinhamento elegante que preencha as 12 colunas (ex: 4 colunas cada).

---

## 6. TIMELINE DE PROCESSO
**Mobile:**
*   **Layout:** Etapas verticais.
*   **Marcador:** Linha sutil à esquerda ou pequenos separadores. Números em dourado.
*   **Tipografia:** Título e texto claros, alinhados à esquerda.

**Desktop:**
*   **Layout:** Linha horizontal (se couber no grid) ou um grid de 4/5 etapas distribuídas proporcionalmente.
*   **Foco:** Manter a legibilidade sem espremer o texto.

---

## 7. FAQ ACCORDION
**Mobile:**
*   **Área de toque:** Toda a barra da pergunta deve ser clicável (mínimo 48px de altura).
*   **Ícone:** `+` e `-` (ou chevron) à direita.
*   **Animação:** Abertura da resposta com transição suave de altura e *fade-in*.
*   **Restrição:** Evitar blocos de resposta excessivamente longos.

**Desktop:**
*   **Layout:** Container estreito e centralizado (ex: 8 colunas) para facilitar a leitura.
*   **Divisão:** Linhas inferiores sutis separando as perguntas.

---

## 8. FORMULÁRIO
**Mobile:**
*   **Campos:** 100% de largura (full width).
*   **Labels:** Claros, acima dos *inputs*.
*   **Inputs:** Altura confortável (min 44px) para digitação no celular. Fundo escuro ou borda fina.
*   **Espaçamento:** Generoso entre os campos.
*   **Botão:** 100% de largura.

**Desktop:**
*   **Layout:** Acomodado em um card ou seção com limitação de largura.
*   **Colunas:** Possibilidade de organizar campos lado a lado (ex: Nome e E-mail dividindo a mesma linha).

---

## 9. FOOTER
**Mobile:**
*   **Layout:** Coluna única.
*   **Logo e Texto:** No topo.
*   **Links:** Empilhados verticalmente com boa área de clique.
*   **Informações Legais:** No rodapé extremo, com fonte menor (Microcopy).

**Desktop:**
*   **Layout:** Grid com 3 ou 4 colunas.
*   **Fundo:** Preto profundo (`#070707`).
*   **Borda Superior:** Sutil e fina.

---

## 10. BREADCRUMB
**Páginas Internas (Ambos):**
*   **Estilo:** Pequeno, discreto (ex: 13px), na cor cinza texto (`#AFAAA1`).
*   **Objetivo:** Auxiliar a navegação sem roubar a atenção do Hero da página interna.
*   **Exemplo:** `Início / Tributário`
