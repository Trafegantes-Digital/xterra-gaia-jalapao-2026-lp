# QA · XTerra Gaia Jalapão 2026

STATUS: Produção pública verificada; homologação visual/comercial em uso real pendente.

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
- [x] Canonical para o domínio padrão Vercel validado publicamente; atualizar se houver domínio próprio.
- [x] Open Graph com URL absoluta e JPEG de compartilhamento 1440 × 960 validado em HTTP 200.
- [x] `npm run check`, `npm run build` e `git diff --check` sem erro; `npm install` sem vulnerabilidades reportadas.
- [x] Console local sem erros após navegação; HTML, créditos, JS e quatro fotos respondem HTTP 200 na URL de preview via `vercel curl` autenticado.
- [ ] LCP, CLS e INP medidos em navegação representativa; preview protegido por Vercel Authentication.
- [x] Preview Vercel funcional em `https://xterra-gaia-jalapao-2026-n8e242mbs-trafegantes-digital.vercel.app` (target preview, READY, `noindex`), com HTML, créditos, favicon e foto principal em HTTP 200 por acesso autenticado da CLI.
- [x] Owner pediu em 03/10/2026 a remoção do topo e dos rótulos, o motion e a publicação da LP atual.
- [x] `noindex` removido da produção; canonical e domínio padrão Vercel validados. O preview permanece protegido com `X-Robots-Tag: noindex` da Vercel.
- [x] Produção publicada após o pedido do owner.

## Revisão independente

Claude LP Reviewer examinou o diff `3bb95f6..351316f` em leitura, com veredito `CHANGES_REQUESTED` por duas frases de copy. A primeira (“sem experiência avançada”) está expressamente no perfil 1 do brief e foi classificada como **NÃO PROCEDENTE**; o brief não cria um requisito de técnica avançada. A segunda (“Cada participante leva seu próprio 4x4”) foi classificada **CORRIGIDA**, pois a oferta é por veículo com até três participantes. Ajustamos também rótulo acessível sem a seta decorativa, dimensão real das fotos, descrição das adaptações de imagem e removemos a transição de cores do CTA após a checagem visual. A atribuição vazia descarta a campanha anterior para impedir mistura entre visitas. A arte do favicon permanece sujeita à homologação visual. O reviewer não executou o preview protegido, build ou browser; essas provas são do Operator.

## Incidente de deploy inicial

O primeiro `vercel deploy --target preview` num projeto recém-criado foi classificado como production e atribuiu aliases automáticos. Os dois aliases do projeto foram removidos imediatamente; `vercel alias ls` não lista alias XTerra. Um segundo deploy com `vercel deploy` foi classificado e inspecionado como preview. O primeiro deployment imutável ainda existe por URL única; não há domínio de produção associado a ele.

## Ajuste final e publicação autorizada

- [x] Pedido de 03/10/2026: remover o cabeçalho mostrado pelo owner, retirar os rótulos de fotografia, tornar o movimento perceptível e publicar.
- [x] Inspeção local em 320×667, 375×667 e 1440×900: sem cabeçalho, sem rótulos, sem overflow; CTA do hero dentro do primeiro viewport mobile e CTA fixo após o hero.
- [x] Hero com entrada breve e zoom lento; abertura com reveal; experiência e roteiro mantêm troca de imagens pelo scroll. Aba oculta e `prefers-reduced-motion` não deixam conteúdo invisível.
- [x] `npm run check`, `npm run build` e `git diff --check` passaram. Nenhuma nova dependência.
- [x] Preview `https://xterra-gaia-jalapao-2026-vnv8rbqc4-trafegantes-digital.vercel.app` em target `preview`, READY e HTTP 200 via CLI autenticada; a proteção do preview acrescenta `X-Robots-Tag: noindex`.
- [x] Reviewer aprovou `7d066bb6e43fc8295ff22576082f68f3b8e79bf4`; findings de replay ao voltar à aba, OG WebP e texto de prévia corrigidos em `61fc915dfb453c24c8d2dd89c207f3a8e36d4db3` e segunda rodada aprovada. O aviso de origem das fotos permanece na página de créditos conforme pedido de retirar rótulos visíveis.
- [x] Produção `https://xterra-gaia-jalapao-2026-lp.vercel.app/` READY, sem autenticação e sem `noindex`: `/`, `/images/hero-dunas-og.jpg`, `/credits.html` e `/images/estrada-4x4.webp` em HTTP 200. Browser 375×667 sem overflow, CTA do hero no primeiro viewport, `PageView`/`ViewContent` locais e WhatsApp com a mensagem prevista.
- [ ] Homologação visual/comercial em uso real pelo owner; tags de terceiros, medição remota e métricas de campo de LCP/CLS/INP aguardam dados/configuração futura.

## Motion visível no mobile · 03/10/2026

- [x] O hero alterna suavemente entre dunas e estrada 4x4 reais, sem vídeo. A fotografia de estrada foi refeita a partir do original 4000 × 2250 de Alexandre Marino no Wikimedia Commons como WebP 1920 × 1080, 319 KB, com prioridade baixa no hero; autor e licença CC BY-SA 2.0 permanecem em `credits.html`.
- [x] Duas imagens editoriais surgem no fluxo da experiência mobile; o dia ativo ganha realce no roteiro. Nenhuma nova biblioteca, mudança de copy/oferta ou alteração de tracking.
- [x] `npm run check`, `npm run build`, `git diff --check`; portal 320/375/1440 sem overflow, CTA do hero dentro do primeiro viewport mobile, troca de hero inspecionada e imagens inline visíveis.
- [x] Claude LP Reviewer aprovou `4f2edd0338cffb51b4ea0e2d7988aaadccd10669` sem bloqueadores. Finding de alt decorativo e nitidez da foto corrigidos em `7e0d6e1aaafc543acc900a02c30c43a1ee62825a`; segunda rodada aprovada. Reviewer não executou build ou browser.
- [x] Preview final `https://xterra-gaia-jalapao-2026-ljfny8vii-trafegantes-digital.vercel.app` READY, `preview`, HTTP 200 autenticado. Produção `https://xterra-gaia-jalapao-2026-lp.vercel.app/` READY, HTTP 200 público para página, estrada 4x4 e créditos; browser 375×667 sem overflow e sem erro de console.
- [ ] Origem/autorização das seis imagens de marca enviadas em 03/10/2026. Não foram publicadas nem descritas como registros reais.

## Motion upgrade · validação local

- [x] A LP e a oferta não foram redesenhadas nem reescritas; alteração limitada a hero, abertura, experiência, roteiro e microinterações.
- [x] Fotografia real de veículo 4x4 no Jalapão, com autoria, licença e adaptação registradas em `credits.html`.
- [x] Em 320, 375 e 390 px, sem overflow horizontal; CTA do hero dentro do primeiro viewport em 320×667 e 390×844.
- [x] Em 1440×900, experiência muda a fotografia do estado ativo e roteiro destaca a data, atualiza a mídia sticky e progride a linha. Mobile oculta a mídia sticky e mantém a timeline fluida.
- [x] `PageView`, `ViewContent` e `Contact` preservados em clique simulado; sem erro de console observado.
- [x] `npm run check`, `npm run build` e `git diff --check` passam; JS do motion implementado no arquivo existente, sem dependências adicionais.
- [ ] Vídeo definitivo do hero e confirmação de proveniência dos seis PNGs da pasta do cliente.
- [ ] Homologação visual do motion no preview atualizado.
- [x] Preview do motion `https://xterra-gaia-jalapao-2026-28q6bc7sz-trafegantes-digital.vercel.app` inspecionado como target `preview`, READY; HTML e `estrada-4x4.webp` responderam 200 via `vercel curl` autenticado, com `noindex`.
