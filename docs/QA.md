# QA · XTerra Gaia Jalapão 2026

STATUS: Preview funcional verificado; segunda rodada de review e homologação pendentes.

## Oferta, imagens e layout

- [x] Oferta e copy conferidas com o brief aprovado; arte 06–13/11 descartada.
- [x] Fotografias reais conferidas na origem; autores e licenças CC BY-SA informados em `credits.html`.
- [x] Hero, CTA, timeline e preço inspecionados em 390 e 375px; sem overflow em 390, 375 e 320px. CTA do hero no primeiro viewport 375×667.
- [x] Desktop editorial inspecionado em 1440×900; imagens abaixo do hero com lazy loading.
- [ ] Homologação visual da marca e das fotografias pelo owner.

## Conversão e tracking

- [x] Link `wa.me/5527993174747` e mensagem conferidos; UTMs e `fbclid` preservados no texto, com `cta_position` separado.
- [x] `PageView` e `ViewContent` no acesso real; `Contact` em clique simulado sem navegação. `Lead` e `Purchase` ausentes do código.
- [x] Correções da primeira revisão: atribuição substituída por campanha corrente, sem `utm_content` fabricado, dados limitados a 512 caracteres por parâmetro; `Contact` distingue `cta_position` e evita disparos repetidos imediatos.
- [x] Nenhum GTM, GA4 ou Meta Pixel conectado no preview, pois os IDs e a política de consentimento não foram identificados.
- [ ] Confirmação comercial do número antes de produção.
- [ ] Recebimento remoto de eventos após configuração aprovada de tags.
- [x] Segunda revisão independente feita em `351316f1c22f41107ec2ebed2ada579ed008575d`; findings e resolução abaixo.

## SEO, desempenho e publicação

- [x] Title, description, Open Graph, `noindex` de preview, um H1, headings e alt text.
- [x] Correções da primeira revisão: CTA fixo fora do foco quando oculto, movimento desligado em `prefers-reduced-motion`, contraste de texto e foco reforçado, fallback estático do WhatsApp, créditos de fotografia visíveis e favicon próprio.
- [ ] Canonical após definição de domínio.
- [ ] Open Graph com URL absoluta e imagem de compartilhamento apropriada após definição de domínio.
- [x] `npm run check`, `npm run build` e `git diff --check` sem erro; `npm install` sem vulnerabilidades reportadas.
- [x] Console local sem erros após navegação; HTML, créditos, JS e quatro fotos respondem HTTP 200 na URL de preview via `vercel curl` autenticado.
- [ ] LCP, CLS e INP medidos em navegação representativa; preview protegido por Vercel Authentication.
- [x] Preview Vercel funcional em `https://xterra-gaia-jalapao-2026-n8e242mbs-trafegantes-digital.vercel.app` (target preview, READY, `noindex`), com HTML, créditos, favicon e foto principal em HTTP 200 por acesso autenticado da CLI.
- [ ] Preview aprovado pelo owner.
- [ ] Remover `noindex`, definir canonical e validar domínio somente no deploy de produção aprovado pelo owner.
- [ ] Produção somente após aceite do owner.

## Revisão independente

Claude LP Reviewer examinou o diff `3bb95f6..351316f` em leitura, com veredito `CHANGES_REQUESTED` por duas frases de copy. A primeira (“sem experiência avançada”) está expressamente no perfil 1 do brief e foi classificada como **NÃO PROCEDENTE**; o brief não cria um requisito de técnica avançada. A segunda (“Cada participante leva seu próprio 4x4”) foi classificada **CORRIGIDA**, pois a oferta é por veículo com até três participantes. Ajustamos também rótulo acessível sem a seta decorativa, dimensão real das fotos, descrição das adaptações de imagem e removemos a transição de cores do CTA após a checagem visual. A atribuição vazia descarta a campanha anterior para impedir mistura entre visitas. A arte do favicon permanece sujeita à homologação visual. O reviewer não executou o preview protegido, build ou browser; essas provas são do Operator.

## Incidente de deploy inicial

O primeiro `vercel deploy --target preview` num projeto recém-criado foi classificado como production e atribuiu aliases automáticos. Os dois aliases do projeto foram removidos imediatamente; `vercel alias ls` não lista alias XTerra. Um segundo deploy com `vercel deploy` foi classificado e inspecionado como preview. O primeiro deployment imutável ainda existe por URL única; não há domínio de produção associado a ele.

## Motion upgrade · validação local

- [x] A LP e a oferta não foram redesenhadas nem reescritas; alteração limitada a hero, abertura, experiência, roteiro e microinterações.
- [x] Fotografia real de veículo 4x4 no Jalapão, com autoria, licença e adaptação registradas em `credits.html`.
- [x] Em 320, 375 e 390 px, sem overflow horizontal; CTA do hero dentro do primeiro viewport em 320×667 e 390×844.
- [x] Em 1440×900, experiência muda a fotografia do estado ativo e roteiro destaca a data, atualiza a mídia sticky e progride a linha. Mobile oculta a mídia sticky e mantém a timeline fluida.
- [x] `PageView`, `ViewContent` e `Contact` preservados em clique simulado; sem erro de console observado.
- [x] `npm run check`, `npm run build` e `git diff --check` passam; JS do motion implementado no arquivo existente, sem dependências adicionais.
- [ ] Vídeo definitivo do hero e confirmação de proveniência dos seis PNGs da pasta do cliente.
- [ ] Homologação visual do motion no preview atualizado.
