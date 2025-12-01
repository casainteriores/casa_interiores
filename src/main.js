// src/main.js — mantém layout/classe/id originais
import './styles/main.scss';

// =========================
// Utils
// =========================
function getParam(name) {
  const params = new URLSearchParams(window.location.search);
  return params.get(name);
}

const norm = (s) =>
  (s || '')
    .toString()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '');

// Recalcula se a coluna deve ficar oculta (aplica .d-none baseado nas flags)
function recomputeVisibility(scope = document) {
  $('#grid [class*="col-"]', scope).each(function () {
    const $col = $(this);
    const hide = $col.hasClass('ci-hide-cat') || $col.hasClass('ci-hide-text');
    $col.toggleClass('d-none', hide);
  });
}

// Debounce
const debounce = (fn, d = 180) => {
  let t;
  return (...a) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...a), d);
  };
};

// =========================
// Estado
// =========================
let currentCat = null;

// =========================
// Título dinâmico (Móveis ↔ Voltar ao início)
// =========================
function updatePageTitle(cat) {
  const $titleLink = $('.page-title .reset-home');
  if ($titleLink.length === 0) return;
  if (cat) {
    $titleLink.text('Voltar ao início');
  } else {
    $titleLink.text('Móveis');
  }
}

// =========================
// Categoria
// =========================
function applyCategory(cat) {
  currentCat = cat;

  $('.cat-link').removeClass('active');
  $(`.cat-link[data-cat="${cat}"]`).addClass('active');

  const $grid = $('#grid');
  const $cols = $grid.find('[class*="col-"]');

  $cols.removeClass('ci-hide-cat');
  $grid.find('.product-card').each(function () {
    const c = $(this).data('cat');
    if (c !== cat) $(this).closest('[class*="col-"]').addClass('ci-hide-cat');
  });

  recomputeVisibility();

  const $first = $grid.find(`.product-card[data-cat="${cat}"]`).first();
  if ($first.length) {
    const y = $first.offset().top - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }

  const term = $('.search-input').val() || '';
  if (term.trim()) applyTextFilter(term);

  updatePageTitle(cat);
}

// =========================
// Reset
// =========================
function resetHome() {
  currentCat = null;
  $('.cat-link').removeClass('active');

  const $grid = $('#grid');
  $grid.find('[class*="col-"]').removeClass('ci-hide-cat');
  recomputeVisibility();

  window.scrollTo({ top: 0, behavior: 'smooth' });

  const term = $('.search-input').val() || '';
  if (term.trim()) applyTextFilter(term);

  updatePageTitle(null);
}

// =========================
// Filtro de texto
// =========================
function applyTextFilter(termRaw) {
  const term = norm(termRaw);
  const $grid = $('#grid');

  $grid.find('[class*="col-"]').each(function () {
    const $col = $(this);
    const $card = $col.find('.product-card');
    if (!term) {
      $col.removeClass('ci-hide-text');
      return;
    }

    const title = norm($card.find('.product-title').text());
    const matchesText = title.includes(term);
    $col.toggleClass('ci-hide-text', !matchesText);
  });

  recomputeVisibility();
}

// =========================
// WhatsApp links (produtos)
// =========================
function setupWhatsAppLinks() {
  const PHONE = ['5581', '9932', '01501'].join('');
  $('#grid .product-card .pix').each(function () {
    const $pix = $(this);
    const name = $pix.closest('.product-card').find('.product-title').text().trim();
    const url = new URL('https://wa.me/' + PHONE);
    url.searchParams.set(
      'text',
      `Olá! Tenho interesse no produto: ${name}. Pode me enviar mais detalhes?`
    );
    $pix.html(
      `<a class="text-success-emphasis text-decoration-none" target="_blank" rel="noopener" href="${url}">Falar no whatsapp</a>`
    );
  });
}

// =========================
// Contato → WhatsApp
// =========================
function setupContactFormWhatsApp() {
  const PHONE = ['5581', '9932', '01501'].join('');
  const $form = $('.contact-form');
  if ($form.length === 0) return;

  $form.on('submit', function (e) {
    e.preventDefault();
    const fd = new FormData(this);
    const first = (fd.get('firstName') || '').trim();
    const last = (fd.get('lastName') || '').trim();
    const msg = (fd.get('message') || '').trim();
    const phone = (fd.get('phone') || '').trim();

    if (!first || !msg) {
      alert('Por favor, preencha seu nome e a mensagem antes de enviar.');
      return;
    }

    const fullName = [first, last].filter(Boolean).join(' ');
    const text = `Olá, Sou o(a) ${fullName}!\n${phone ? `Telefone: ${phone}\n` : ''}\n${msg}\n\nMensagem enviada pelo site da Casa Interiores.`;

    const url = new URL('https://wa.me/' + PHONE);
    url.searchParams.set('text', text);
    window.open(url.toString(), '_blank', 'noopener');

    const $btn = $(this).find('.contact-btn');
    $btn.prop('disabled', true).text('Abrindo WhatsApp...');
    setTimeout(() => $btn.prop('disabled', false).text('Enviar no WhatsApp'), 1500);
  });
}

// =========================
// Máscara de telefone
// =========================
function setupPhoneMask() {
  const input = document.querySelector('input[name="phone"]');
  if (!input) return;

  input.addEventListener('input', (e) => {
    let v = e.target.value.replace(/\D/g, '');
    if (v.length > 11) v = v.substring(0, 11);
    if (v.length > 6) {
      v = `(${v.slice(0, 2)}) ${v.slice(2, 7)}-${v.slice(7)}`;
    } else if (v.length > 2) {
      v = `(${v.slice(0, 2)}) ${v.slice(2)}`;
    } else if (v.length > 0) {
      v = `(${v}`;
    }
    e.target.value = v;
  });

  input.addEventListener('keypress', (e) => {
    if (!/[0-9]/.test(e.key)) e.preventDefault();
  });

  input.addEventListener('paste', (e) => {
    const pasted = (e.clipboardData || window.clipboardData).getData('text');
    if (/\D/.test(pasted)) e.preventDefault();
  });
}

// =========================
// Aside de produto (medidas + descrição)
// =========================
function setupProductAside() {
  const aside = document.getElementById('productAside');
  if (!aside) return;

  const imgEl = aside.querySelector('#productAsideImage');
  const titleEl = aside.querySelector('#productAsideTitle');
  const catEl = aside.querySelector('#productAsideCategory');
  const measuresEl = aside.querySelector('#productAsideMeasures');
  const descEl = aside.querySelector('#productAsideDescription');
  const waEl = aside.querySelector('#productAsideWhatsapp');
  const backdrop = aside.querySelector('.product-aside__backdrop');
  const closeBtn = aside.querySelector('.product-aside__close');

  const PHONE = ['5581', '9932', '01501'].join('');

  function renderMeasures(str) {
    measuresEl.innerHTML = '';
    if (!str) return;
    // "Altura: 80cm|Largura: 120cm|Profundidade: 40cm"
    str.split('|').forEach((item) => {
      const txt = item.trim();
      if (!txt) return;
      const li = document.createElement('li');
      li.textContent = txt;
      measuresEl.appendChild(li);
    });
  }

  function openFromCard(card) {
    const $card = $(card);
    const title = $card.find('.product-title').text().trim();
    const cat = $card.data('cat');
    const $img = $card.find('.product-media img');
    const imgSrc = $img.attr('src');
    const descData = $card.data('desc');
    const measuresData = $card.data('measures');

    imgEl.src = imgSrc || '';
    imgEl.alt = title || 'Produto';

    titleEl.textContent = title || 'Produto';
    catEl.textContent = cat ? `Categoria: ${cat}` : '';

    renderMeasures(measuresData);

    descEl.textContent =
      descData ||
      'Produto em madeira de alta qualidade, feito sob medida. Entre em contato para personalizar medidas, acabamento e prazo.';

    const url = new URL('https://wa.me/' + PHONE);
    url.searchParams.set(
      'text',
      `Olá! Tenho interesse no produto: ${title}. Pode me enviar mais detalhes?`
    );
    waEl.href = url.toString();

    aside.classList.add('is-open');
    document.body.classList.add('overflow-hidden');
  }

  function closeAside() {
    aside.classList.remove('is-open');
    document.body.classList.remove('overflow-hidden');
  }

  // Clique na imagem abre o aside
  $(document).on('click', '#grid .product-media img', function (e) {
    e.preventDefault();
    const card = $(this).closest('.product-card');
    if (!card.length) return;
    openFromCard(card);
  });

  // Clique no coração também abre o aside
  $(document).on('click', '#grid .wishlist', function (e) {
    e.preventDefault();
    e.stopPropagation();
    const card = $(this).closest('.product-card');
    if (!card.length) return;
    openFromCard(card);
  });

  // Fechar: fundo, botão e ESC
  backdrop.addEventListener('click', closeAside);
  closeBtn.addEventListener('click', closeAside);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && aside.classList.contains('is-open')) {
      closeAside();
    }
  });
}

// =========================
// SPA leve (sem reload)
// =========================
function enableSpaNav() {
  const CACHE = new Map();

  const valid = (href) => ['/', '/sobre', '/contato'].includes(href);

  async function fetchPage(href) {
    // corrige rotas /sobre → sobre.html
    let path = href;
    if (href === '/sobre') path = '/sobre.html';
    if (href === '/contato') path = '/contato.html';
    if (href === '/') path = '/index.html';

    if (CACHE.has(path)) return CACHE.get(path);
    const res = await fetch(path);
    if (!res.ok) throw new Error('Falha ao carregar ' + path);
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, 'text/html');
    CACHE.set(path, doc);
    return doc;
  }

  async function loadPage(href, push = true) {
    try {
      const doc = await fetchPage(href);
      const newMain = doc.querySelector('main');
      if (!newMain) return (window.location.href = href);
      const currentMain = document.querySelector('main');

      // Fade suave
      currentMain.style.transition = 'opacity .25s ease';
      currentMain.style.opacity = '0';
      setTimeout(() => {
        currentMain.replaceWith(newMain);
        newMain.style.opacity = '0';
        newMain.style.transition = 'opacity .25s ease';
        requestAnimationFrame(() => (newMain.style.opacity = '1'));
      }, 250);

      document.title = doc.title || document.title;
      if (push) history.pushState({ spa: true, href }, '', href);

      setupContactFormWhatsApp();
      setupPhoneMask();

      // ativa nav
      document
        .querySelectorAll('.cats-bar .nav-link')
        .forEach((el) => el.classList.remove('active'));
      const nav = document.querySelector(`.cats-bar .nav-link[href="${href}"]`);
      if (nav) nav.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (err) {
      console.error(err);
      window.location.href = href;
    }
  }

  document.addEventListener('click', (e) => {
    const a = e.target.closest('a');
    if (!a || !valid(a.getAttribute('href'))) return;
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || a.target === '_blank') return;
    e.preventDefault();
    loadPage(a.getAttribute('href'), true);
  });

  window.addEventListener('popstate', (e) => {
    if (e.state && e.state.spa && e.state.href) {
      loadPage(e.state.href, false);
    }
  });
}

// =========================
// Boot
// =========================
document.addEventListener('DOMContentLoaded', () => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Sidebar toggle
  $(document).on('click', '.sidebar-toggle', function (e) {
    e.preventDefault();
    const $btn = $(this);
    const targetId = $btn.attr('aria-controls');
    const $box = $('#' + targetId);
    const isOpen = $btn.attr('aria-expanded') === 'true';
    $btn.attr('aria-expanded', String(!isOpen));
    $box.toggleClass('is-open', !isOpen);
    $btn.find('span').text(!isOpen ? 'Ver menos' : 'Ver mais');
    if (!isOpen) {
      setTimeout(() => {
        const top = $btn.offset().top - 120;
        window.scrollTo({ top, behavior: 'smooth' });
      }, 50);
    }
  });

  // Categoria
  $(document).on('click', '.cat-link', function (e) {
    const cat = $(this).data('cat');
    if (!cat) return;
    e.preventDefault();
    const url = new URL(window.location.href);
    url.searchParams.set('cat', cat);
    history.pushState({ cat }, '', url);
    applyCategory(cat);
    const offcanvasEl = document.getElementById('mobileFilters');
    if (offcanvasEl && window.bootstrap) {
      const off = bootstrap.Offcanvas.getOrCreateInstance(offcanvasEl);
      off.hide();
    }
  });

  // listener atual da .reset-home:
  $(document)
    .off('click', '.reset-home')
    .on('click', '.reset-home', function (e) {
      const path = window.location.pathname.replace(/\/+$/, '');
      const onHome = path === '' || path === '/' || path.endsWith('/index.html');

      if (onHome) {
        // Estamos no index: só reseta o estado (como antes)
        e.preventDefault();
        const url = new URL(window.location.href);
        url.search = '';
        history.pushState({}, '', url);
        resetHome();
      } else {
        // Estamos em /sobre ou /contato: ir para a home
        // (se o SPA não interceptar, o navegador carrega / normalmente)
        e.preventDefault();
        window.location.href = '/';
      }
    });

  window.addEventListener('popstate', () => {
    const cat = getParam('cat');
    if (cat) applyCategory(cat);
    else resetHome();
    const term = $('.search-input').val() || '';
    applyTextFilter(term);
    updatePageTitle(cat || null);
  });

  const initialCat = getParam('cat');
  if (initialCat) applyCategory(initialCat);
  else updatePageTitle(null);
  recomputeVisibility();

  const $desk = $('#sidebarDesktop nav').clone(true, true);
  $desk.find('#catList').attr('id', 'catListMobile');
  $desk.find('.sidebar-toggle').attr('aria-controls', 'catListMobile');
  $('#mobileFiltersBody').empty().append($desk);

  const runSearch = debounce(() => {
    const term = $('.search-input').val() || '';
    applyTextFilter(term);
  }, 180);

  $(document).on('input', '.search-input', runSearch);
  $(document).on('keydown', '.search-input', function (e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      runSearch();
    }
  });
  $(document).on('click', '.search-wrap .btn', function (e) {
    e.preventDefault();
    runSearch();
  });

  setupWhatsAppLinks();
  setupContactFormWhatsApp();
  setupPhoneMask();
  enableSpaNav();
  setupProductAside();
});
