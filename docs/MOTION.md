# Motion upgrade · Jalapão 2026

## Escopo deste diff

Preserva a LP, a copy, a oferta, o tracking e os CTAs existentes. Acrescenta movimento discreto ao hero, deslocamento editorial das linhas da seção de abertura, troca de fotografias na experiência e mídia sticky com progresso no roteiro desktop. O roteiro mobile continua em fluxo vertical, sem prender o scroll. Não há nova biblioteca de animação, React, Tailwind ou runtime externo.

O arquivo `/Users/Delsinho/Downloads/PROMPTS CODS Animacao.md` contém exemplos React/Next/Framer Motion com captura de roda e toque. Foram usados como referência de comportamento; o código não foi copiado porque a LP é Vite com HTML, CSS e JavaScript, e o brief proíbe scroll hijacking e bibliotecas pesadas sem necessidade.

## Fotografia 4x4

`public/images/estrada-4x4.webp` é adaptação de “Nós na poeira do Jalapão (1)”, fotografia de Alexandre Marino, [arquivo no Wikimedia Commons](https://commons.wikimedia.org/wiki/File:N%C3%B3s_na_poeira_do_Jalap%C3%A3o_(1)_(53037649568).jpg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/). Redimensionada para 1920 × 1080 e convertida para WebP; autoria e adaptação constam em `public/credits.html`. Não representa uma expedição anterior da XTerra Gaia.

Os seis PNGs fornecidos na pasta `Desktop/Claude/clientes/xterragaia` não foram publicados: a origem documental e o direito de uso ainda precisam de confirmação. O owner decidiu seguir sem vídeo por enquanto. O hero usa a fotografia real já aprovada na LP, com movimento leve de câmera e parallax ao scroll.

## Comportamento e prova necessária

- `prefers-reduced-motion` desliga deslocamentos, zooms e transições.
- Imagens abaixo do hero continuam em lazy loading; a fotografia de estrada em resolução maior pesa cerca de 312 KB e usa prioridade baixa no hero.
- O JavaScript usa um único loop com `requestAnimationFrame` para as cenas visíveis e não intercepta scroll nem altera eventos de tracking.
- Validar no preview: 320/375/390 px sem overflow, CTA do hero no primeiro viewport, experiência e roteiro desktop, texto e preço legíveis, FAQ e WhatsApp intactos.

## Ajuste final autorizado em 03/10/2026

O cabeçalho superior foi removido sem alterar as seções da LP. Os rótulos de “foto documental” e “imagens de referência” saíram da interface; autoria e licença continuam na página de créditos. O hero ganhou entrada breve de texto e CTA, com zoom lento mais perceptível na foto real; a abertura editorial revela as linhas ao entrar no viewport. As trocas de cena na experiência e no roteiro permanecem. Uma aba oculta exibe o conteúdo de imediato, para que animações pausadas pelo navegador não ocultem texto ou CTA. `prefers-reduced-motion` preserva conteúdo estático.

O owner autorizou publicação da LP atual. O hero usa fotografia real animada; os PNGs de origem incerta continuam fora da página. Não há implementação de vídeo planejada para esta etapa.

## Revisão de visibilidade no mobile

A revisão do site público mostrou que a troca de cenas da experiência não era visível no celular: a fotografia ficava acima da lista, e a mídia do roteiro era ocultada no breakpoint mobile. O diff atual faz o hero alternar entre dunas e estrada 4x4 reais, mostra duas fotografias no fluxo editorial da experiência no celular e realça o dia ativo na timeline. As imagens usadas já têm origem e licença em `credits.html`; os seis anexos novos aguardam confirmação de origem antes de qualquer publicação como registro da XTerra Gaia. O motion segue em CSS e no JavaScript existente, sem vídeo nem biblioteca adicional, e respeita `prefers-reduced-motion`.
