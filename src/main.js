import './style.css';

const whatsappNumber = '5527993174747';
const message = 'Olá! Quero consultar disponibilidade para a Expedição Jalapão 2026, de 5 a 14 de novembro. Meu veículo é 4x4.';
const attributionKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term', 'fbclid'];
const currentParams = new URLSearchParams(window.location.search);
const attribution = {};

for (const key of attributionKeys) {
  const value = currentParams.get(key);
  if (value) attribution[key] = value;
}

try {
  const saved = JSON.parse(sessionStorage.getItem('xterraAttribution') || '{}');
  for (const key of attributionKeys) {
    if (!attribution[key] && typeof saved[key] === 'string') attribution[key] = saved[key];
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
  if (!source.has('utm_content')) source.set('utm_content', position);
  source.set('cta_position', position);
  const text = `${message}\n\nOrigem: ${source.toString()}`;
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
}

for (const link of document.querySelectorAll('.whatsapp-link')) {
  const position = link.dataset.cta || 'unknown';
  link.href = whatsappUrl(position);
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.addEventListener('click', () => {
    window.dataLayer.push({
      event: 'Contact',
      method: 'WhatsApp',
      ...attribution,
      utm_content: attribution.utm_content || position,
      cta_position: position,
    });
  });
}

const sticky = document.querySelector('.sticky-cta');
const hero = document.querySelector('#hero');
const footer = document.querySelector('.footer');
if (sticky && hero && footer && 'IntersectionObserver' in window) {
  let heroVisible = true;
  let footerVisible = false;
  const update = () => sticky.classList.toggle('is-visible', !heroVisible && !footerVisible);
  new IntersectionObserver(([entry]) => { heroVisible = entry.isIntersecting; update(); }).observe(hero);
  new IntersectionObserver(([entry]) => { footerVisible = entry.isIntersecting; update(); }).observe(footer);
}
