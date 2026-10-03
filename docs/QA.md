# QA · XTerra Gaia Jalapão 2026

STATUS: Preview funcional verificado; review e homologação pendentes.

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
- [x] Console local sem erros após navegação; HTML, créditos, JS e quatro fotos respondem HTTP 200 na URL de preview via `vercel curl` autenticado.
- [ ] LCP, CLS e INP medidos em navegação representativa; preview protegido por Vercel Authentication.
- [x] Preview Vercel funcional em `https://xterra-gaia-jalapao-2026-414cf8hrl-trafegantes-digital.vercel.app` (target preview, READY, `noindex`).
- [ ] Preview aprovado pelo owner.
- [ ] Produção somente após aceite do owner.

## Incidente de deploy inicial

O primeiro `vercel deploy --target preview` num projeto recém-criado foi classificado como production e atribuiu aliases automáticos. Os dois aliases do projeto foram removidos imediatamente; `vercel alias ls` não lista alias XTerra. Um segundo deploy com `vercel deploy` foi classificado e inspecionado como preview. O primeiro deployment imutável ainda existe por URL única; não há domínio de produção associado a ele.
