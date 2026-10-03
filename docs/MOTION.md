# Motion upgrade · Jalapão 2026

## Escopo deste diff

Preserva a LP, a copy, a oferta, o tracking e os CTAs existentes. Acrescenta movimento discreto ao hero, deslocamento editorial das linhas da seção de abertura, troca de fotografias na experiência e mídia sticky com progresso no roteiro desktop. O roteiro mobile continua em fluxo vertical, sem prender o scroll. Não há nova biblioteca de animação, React, Tailwind ou runtime externo.

O arquivo `/Users/Delsinho/Downloads/PROMPTS CODS Animacao.md` contém exemplos React/Next/Framer Motion com captura de roda e toque. Foram usados como referência de comportamento; o código não foi copiado porque a LP é Vite com HTML, CSS e JavaScript, e o brief proíbe scroll hijacking e bibliotecas pesadas sem necessidade.

## Fotografia 4x4

`public/images/estrada-4x4.webp` é adaptação de “Nós na poeira do Jalapão (1)”, fotografia de Alexandre Marino, [arquivo no Wikimedia Commons](https://commons.wikimedia.org/wiki/File:N%C3%B3s_na_poeira_do_Jalap%C3%A3o_(1)_(53037649568).jpg), [CC BY-SA 2.0](https://creativecommons.org/licenses/by-sa/2.0/). Redimensionada para 960 × 540 e convertida para WebP; autoria e adaptação constam em `public/credits.html`. Não representa uma expedição anterior da XTerra Gaia.

Os seis PNGs fornecidos na pasta `Desktop/Claude/clientes/xterragaia` não foram publicados: a origem documental e o direito de uso ainda precisam de confirmação. O vídeo definitivo do hero também não foi entregue. O hero usa a fotografia real já aprovada na LP, com movimento leve de câmera e parallax ao scroll.

## Comportamento e prova necessária

- `prefers-reduced-motion` desliga deslocamentos, zooms e transições.
- Imagens abaixo do hero continuam em lazy loading; a nova fotografia pesa cerca de 108 KB.
- O JavaScript usa um único loop com `requestAnimationFrame` para as cenas visíveis e não intercepta scroll nem altera eventos de tracking.
- Validar no preview: 320/375/390 px sem overflow, CTA do hero no primeiro viewport, experiência e roteiro desktop, texto e preço legíveis, FAQ e WhatsApp intactos.
