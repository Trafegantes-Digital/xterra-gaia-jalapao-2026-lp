# QA · XTerra Gaia Jalapão 2026

STATUS: Implementação local validada; preview e review pendentes.

## Oferta, imagens e layout

- [x] Oferta e copy conferidas com o brief aprovado; arte 06–13/11 descartada.
- [x] Fotografias reais conferidas na origem; autores e licenças CC BY-SA informados em `credits.html`.
- [x] Hero, CTA, timeline e preço inspecionados em 390 e 375px; sem overflow em 390, 375 e 320px. CTA do hero no primeiro viewport 375×667.
- [x] Desktop editorial inspecionado em 1440×900; imagens abaixo do hero com lazy loading.
- [ ] Homologação visual da marca e das fotografias pelo owner.

## Conversão e tracking

- [x] Link `wa.me/5527993174747` e mensagem conferidos; UTMs e `fbclid` preservados no texto, com `cta_position` separado.
- [x] `PageView` e `ViewContent` no acesso real; `Contact` em clique simulado sem navegação. `Lead` e `Purchase` ausentes do código.
- [x] Nenhum GTM, GA4 ou Meta Pixel conectado no preview, pois os IDs e a política de consentimento não foram identificados.
- [ ] Confirmação comercial do número antes de produção.
- [ ] Recebimento remoto de eventos após configuração aprovada de tags.
- [ ] Review independente do diff de tracking em SHA fixo.

## SEO, desempenho e publicação

- [x] Title, description, Open Graph, `noindex` de preview, um H1, headings e alt text.
- [ ] Canonical após definição de domínio.
- [x] `npm run check`, `npm run build` e `git diff --check` sem erro; `npm install` sem vulnerabilidades reportadas.
- [ ] Console, network, LCP, CLS e INP na URL de preview.
- [ ] Preview Vercel funcional e aprovado.
- [ ] Produção somente após aceite do owner.
