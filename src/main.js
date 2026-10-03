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

// One small scroll loop drives the editorial motion; it never intercepts scrolling.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const desktopMotion = window.matchMedia('(min-width: 901px)');
const intro = document.querySelector('.intro');
const introLines = [...document.querySelectorAll('[data-motion-line]')];
const experience = document.querySelector('.experience');
const experienceItems = [...document.querySelectorAll('[data-scene-target]')];
const experienceScenes = [...document.querySelectorAll('[data-scene]')];
const timeline = document.querySelector('.timeline');
const routeItems = [...document.querySelectorAll('[data-route-scene]')];
const routeImages = [...document.querySelectorAll('[data-route-image]')];
const supportPhoto = document.querySelector('.support-photo');
const introPhoto = document.querySelector('.intro-road-photo');

if ('IntersectionObserver' in window && !reducedMotion.matches) {
  document.documentElement.classList.add('motion-ready');
  const reveal = new IntersectionObserver((entries, observer) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-revealed');
        observer.unobserve(entry.target);
      }
    }
  }, { threshold: 0.12 });
  if (supportPhoto) reveal.observe(supportPhoto);
  if (introPhoto) reveal.observe(introPhoto);
  if (intro) reveal.observe(intro);
}

const clamp = (value) => Math.min(1, Math.max(0, value));
const closestToViewportCenter = (items) => {
  const targetY = window.innerHeight * 0.55;
  return items.reduce((best, item, index) => {
    const rect = item.getBoundingClientRect();
    const distance = Math.abs(rect.top + rect.height / 2 - targetY);
    return distance < best.distance ? { index, distance } : best;
  }, { index: 0, distance: Infinity }).index;
};

let motionFrame = 0;
function updateEditorialMotion() {
  motionFrame = 0;
  if (reducedMotion.matches) return;

  if (hero) {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const progress = clamp(-rect.top / rect.height);
      hero.style.setProperty('--hero-image-y', `${Math.round(progress * 24)}px`);
      hero.style.setProperty('--hero-copy-y', `${Math.round(progress * -18)}px`);
    }
  }

  if (intro && introLines.length && desktopMotion.matches) {
    const rect = intro.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const progress = clamp((window.innerHeight - rect.top) / (window.innerHeight + rect.height)) - .5;
      introLines.forEach((line, index) => {
        const direction = index % 2 ? -1 : 1;
        line.style.setProperty('--line-shift', `${Math.round(progress * direction * (index + 1) * 15)}px`);
      });
    }
  }

  if (experience && experienceItems.length && desktopMotion.matches) {
    const rect = experience.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const active = experienceItems[closestToViewportCenter(experienceItems)];
      const scene = active.dataset.sceneTarget;
      experienceItems.forEach((item) => item.classList.toggle('is-active', item === active));
      experienceScenes.forEach((image) => image.classList.toggle('is-active', image.dataset.scene === scene));
    }
  }

  if (timeline && routeItems.length) {
    const rect = timeline.getBoundingClientRect();
    if (rect.bottom > 0 && rect.top < window.innerHeight) {
      const active = routeItems[closestToViewportCenter(routeItems)];
      const scene = active.dataset.routeScene;
      routeItems.forEach((item) => item.classList.toggle('is-active', item === active));
      routeImages.forEach((image) => image.classList.toggle('is-active', image.dataset.routeImage === scene));
      const progress = clamp((window.innerHeight * .55 - rect.top) / rect.height);
      timeline.style.setProperty('--route-progress', `${Math.round(progress * 100)}%`);
    }
  }
}
function scheduleEditorialMotion() {
  document.documentElement.classList.toggle('motion-hidden', document.visibilityState === 'hidden');
  if (document.visibilityState === 'hidden') {
    updateEditorialMotion();
    return;
  }
  if (!motionFrame) motionFrame = window.requestAnimationFrame(updateEditorialMotion);
}
window.addEventListener('scroll', scheduleEditorialMotion, { passive: true });
window.addEventListener('resize', scheduleEditorialMotion, { passive: true });
document.addEventListener('visibilitychange', scheduleEditorialMotion);
reducedMotion.addEventListener('change', scheduleEditorialMotion);
scheduleEditorialMotion();
