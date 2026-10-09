import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';

const html = readFileSync(new URL('../index.html', import.meta.url), 'utf8');
const js = readFileSync(new URL('../src/main.js', import.meta.url), 'utf8');

for (const phrase of ['05–14 NOV', 'R$ 2.000', 'R$ 500', 'R$ 1.000', '30/10/2026', 'inclui 2 pessoas', 'Somente 10 veículos', 'Até 4 pessoas']) {
  assert(html.includes(phrase), `Missing approved offer: ${phrase}`);
}
for (const forbidden of ['Pablo Escobar', 'maiores rios de água potável', '6 a 13 de novembro', 'Até 3 pessoas', 'ATÉ 3 PESSOAS', 'R$ 1.500']) {
  assert(!html.includes(forbidden), `Unapproved claim found: ${forbidden}`);
}
assert(js.includes("event: 'Contact'"));
assert(!js.includes("event: 'Lead'"));
assert(!js.includes("event: 'Purchase'"));
assert(js.includes('5527993174747'));
console.log('Approved offer and event boundaries: OK');
