import './style.css';

const whatsappNumber = '5527993174747';
const message = 'Olá! Quero consultar disponibilidade para a Expedição Jalapão 2026, de 5 a 14 de novembro. Meu veículo é 4x4.';
const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'];
const currentParams = new URLSearchParams(window.location.search);
const attribution = {};
const hasCurrentAttribution = attributionKeys.some((key) => currentParams.has(key));

for (const key of attributionKeys) {
  const value = currentParams.get(key);
  if (value) attribution[key] = value.slice(0, 512);
}

try {
  if (!hasCurrentAttribution) {
    const saved = JSON.parse(sessionStorage.getItem('xterraAttribution') || '{}');
    for (const key of attributionKeys) {
      if (typeof saved[key] === 'string') attribution[key] = saved[key];
    }
  }
  sessionStorage.setItem('xterraAttribution', JSON.stringify(attribution));
} catch {
  // Links and events still work if the browser blocks storage.
}

window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ event: 'PageView', page_type: 'landing_page', expedition: 'jalapao_2026' });
window.dataLayer.push({ event: 'ViewContent', content_name: 'Expedição Jalapão 2026', content_type: 'expedition' });

function whatsappUrl(position) {
  const source = new URLSearchParams();
  for (const key of attributionKeys) {
    if (attribution[key]) source.set(key, attribution[key]);
  }
  source.set('cta_position', position);
  const text = `${message}\n\nOrigem: ${source.toString()}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

let lastContactAt = 0;
function recordContact(event, position) {
  const now = Date.now();
  if (now - lastContactAt < 800) {
    event.preventDefault();
    return;
  }
  lastContactAt = now;
  window.dataLayer.push({
    event: 'Contact',
    method: 'WhatsApp',
    ...attribution,
    cta_position: position,
  });
}

for (const link of document.querySelectorAll('.whatsapp-link')) {
  const position = link.dataset.cta || 'unknown';
  link.href = whatsappUrl(position);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', `${link.textContent.replace(/↗/g, "").trim()} (abre WhatsApp em nova aba)`);
  link.addEventListener('click', (event) => recordContact(event, position));
  link.addEventListener('auxclick', (event) => {
    if (event.button === 1) recordContact(event, position);
  });
}

const sticky = document.querySelector('.sticky-cta');
const hero = document.querySelector('#hero');
const footer = document.querySelector('.footer');
if (sticky && hero && footer && 'IntersectionObserver' in window) {
  let heroVisible = true;
  let footerVisible = false;
  const update = () => {
    const visible = !heroVisible && !footerVisible;
    sticky.classList.toggle('is-visible', visible);
    sticky.toggleAttribute('inert', !visible);
    sticky.setAttribute('aria-hidden', String(!visible));
  };
  new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; update(); }).observe(hero);
  new IntersectionObserver(([entry]) => { footerVisible = entry.isIntersecting; update(); }).observe(footer);
}
