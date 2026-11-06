// Demo only: no backend. Cart and orders live in localStorage so the admin page can show demo orders.
// shortcut: prices are computed in the browser for the demo, move to the backend when it is built.

export const BANK = { id: 'VCB', acc: '0123456789', name: 'TEN CHU SHOP' }; // replace with the shop's real account
export const DEPOSIT = 100000;

// shortcut: demo catalog with sample prices and borrowed photos ("fill đại"); real data comes from the admin later.
const R = (v, c) => `assets/objects/product-render/specs/stills/keyboard-75-${v}-${c}.webp`; // 3D stand-in
const P = (n) => `img/${n}.webp`;
export const BRANDS = ['Aula', 'Leobog', 'Akko', 'Xinmeng'];
export const CATALOG = [
  { id: 'aula-f75', brand: 'Aula', name: 'AULA F75', type: 'keyboard', price: 1290000, line: '75%, núm xoay, gasket',
    colors: [
      { id: 'blue', name: 'Xanh nhạt', hex: '#8fb8de', imgs: [R('three-quarter', 'blue'), R('top', 'blue'), R('detail-knob', 'blue')] },
      { id: 'black', name: 'Đen', hex: '#2b2c30', imgs: [R('three-quarter', 'black'), R('top', 'black'), R('detail-knob', 'black')] },
      { id: 'white', name: 'Trắng ngà', hex: '#e6e3dc', imgs: [R('three-quarter', 'white'), R('top', 'white'), R('detail-knob', 'white')] },
    ],
    specs: [['Layout', '75%, 80 phím + núm xoay'], ['Kết cấu', 'Gasket mount, 5 lớp tiêu âm'], ['Hotswap', '3 pin và 5 pin'], ['Kết nối', 'USB-C, Bluetooth 5.0, 2.4 GHz'], ['Pin', '4.000 mAh'], ['Keycap', 'PBT double-shot, profile Cherry'], ['Đèn', 'RGB từng phím']] },
  { id: 'aula-s75-pro', brand: 'Aula', name: 'AULA S75 Pro', type: 'keyboard', price: 1390000, line: '75%, vỏ nhôm, keycap theo chủ đề', imgs: [P('cathedral-keycaps'), P('black-knob-screen')] },
  { id: 'aula-hero68-he', brand: 'Aula', name: 'AULA Hero68 HE', type: 'keyboard', price: 1590000, line: '65%, switch từ (Hall Effect)', imgs: [P('red-translucent'), P('cathedral-keycaps')] },
  { id: 'aula-hero68-air', brand: 'Aula', name: 'AULA Hero68 Air', type: 'keyboard', price: 1290000, line: '65%, bản mỏng nhẹ', imgs: [R('three-quarter', 'white'), R('top', 'white')] },
  { id: 'aula-win68-he', brand: 'Aula', name: 'AULA Win68 HE', type: 'keyboard', price: 1190000, line: '65%, Hall Effect, rapid trigger', imgs: [R('three-quarter', 'black'), R('top', 'black')] },
  { id: 'aula-win60-he', brand: 'Aula', name: 'AULA Win60 HE', type: 'keyboard', price: 990000, line: '60%, Hall Effect', imgs: [R('top', 'blue'), R('three-quarter', 'blue')] },
  { id: 'aula-win60-he-max', brand: 'Aula', name: 'AULA Win60 HE Max', type: 'keyboard', price: 1290000, line: '60%, Hall Effect, bản nâng cấp', imgs: [R('top', 'black'), R('detail-knob', 'black')] },
  { id: 'aula-f99', brand: 'Aula', name: 'AULA F99', type: 'keyboard', price: 1490000, line: '96%, có phím số', imgs: [R('three-quarter', 'white'), R('detail-knob', 'white')] },
  { id: 'aula-f108', brand: 'Aula', name: 'AULA F108', type: 'keyboard', price: 1290000, line: 'Fullsize 108 phím', imgs: [R('top', 'white'), R('three-quarter', 'white')] },
  { id: 'aula-f108-pro', brand: 'Aula', name: 'AULA F108 Pro', type: 'keyboard', price: 1590000, line: 'Fullsize, núm xoay, 3 chế độ', imgs: [R('three-quarter', 'blue'), R('detail-knob', 'blue')] },
  { id: 'leobog-hi75c-pro', brand: 'Leobog', name: 'LEOBOG Hi75C Pro', type: 'keyboard', price: 1690000, line: '75%, màn hình, núm xoay', imgs: [P('black-knob-screen'), P('cathedral-keycaps')] },
  { id: 'akko-sample', brand: 'Akko', name: 'Akko (mẫu đang cập nhật)', type: 'keyboard', price: 1490000, line: 'Vỏ trắng, LED RGB viền', imgs: [P('akko-white-rgb')] },
  { id: 'xinmeng-sample', brand: 'Xinmeng', name: 'Xinmeng (mẫu đang cập nhật)', type: 'keyboard', price: 1190000, line: 'Keycap trong suốt', imgs: [P('red-translucent')] },
  { id: 'aula-sc620', brand: 'Aula', name: 'AULA SC620', type: 'mouse', price: 590000, line: 'Chuột không dây, vỏ khoét lỗ, LED RGB',
    colors: [
      { id: 'black', name: 'Đen', hex: '#1d1d1f', imgs: [P('aula-sc620')] },
      { id: 'white', name: 'Trắng', hex: '#ecebe8', imgs: [P('aula-sc620')] },
    ] },
];
export const isPhoto = (src) => src.startsWith('img/');
export const firstImg = (p) => (p.colors ? p.colors[0].imgs[0] : p.imgs[0]);

export const PRODUCT = {
  switches: [
    { id: 'graywood', name: 'LEOBOG Graywood V3', kind: 'Linear, tiếng trầm', add: 0, sound: { bp: 850, q: 1.2, thump: 120, decay: 0.07 } },
    { id: 'reaper', name: 'LEOBOG Reaper', kind: 'Linear, tiếng êm', add: 50000, sound: { bp: 1500, q: 1.5, thump: 170, decay: 0.05 } },
    { id: 'tactile', name: 'Tactile Brown', kind: 'Có khấc, tiếng vừa', add: 0, sound: { bp: 2300, q: 2, thump: 210, decay: 0.04, bump: true } },
  ],
};

export const vnd = (n) => n.toLocaleString('vi-VN') + 'đ';
const $ = (s, el = document) => el.querySelector(s);

/* ---------- cart ---------- */
export const cart = {
  get: () => JSON.parse(localStorage.getItem('kb-cart') || '[]'),
  set(items) { localStorage.setItem('kb-cart', JSON.stringify(items)); renderCart(); },
  add(item) {
    const items = cart.get();
    const same = items.find((i) => i.key === item.key);
    same ? (same.qty += item.qty) : items.push(item);
    cart.set(items);
  },
  total: () => cart.get().reduce((s, i) => s + i.price * i.qty, 0),
};

function renderCart() {
  const items = cart.get();
  document.querySelectorAll('.cart-btn__n').forEach((n) => { const c = items.reduce((s, i) => s + i.qty, 0); n.textContent = c || ''; n.dataset.n = c; });
  const body = $('.drawer__body');
  if (!body) return;
  body.innerHTML = items.length
    ? items.map((i, idx) => `<div class="line"><div><strong>${i.title}</strong><br><small>${i.variant} · SL ${i.qty}</small></div><span class="price">${vnd(i.price * i.qty)}</span><button class="line__rm" data-rm="${idx}">Xóa</button></div>`).join('')
    : '<p class="empty">Giỏ hàng đang trống.</p>';
  $('.drawer__total').textContent = vnd(cart.total());
  $('.drawer__foot .btn').toggleAttribute('aria-disabled', !items.length);
}

export function openCart() { document.documentElement.classList.add('cart-open'); $('.drawer')?.focus(); }
function closeCart() { document.documentElement.classList.remove('cart-open'); }

function mountDrawer() {
  document.body.insertAdjacentHTML('beforeend', `
    <div class="scrim" data-close></div>
    <aside class="drawer" tabindex="-1" aria-label="Giỏ hàng">
      <div class="drawer__head"><h2>Giỏ hàng</h2><button class="drawer__x" data-close aria-label="Đóng">✕</button></div>
      <div class="drawer__body"></div>
      <div class="drawer__foot">
        <div class="sum"><span>Tạm tính</span><span class="price drawer__total"></span></div>
        <a class="btn btn--primary" href="checkout.html">Thanh toán ngay</a>
      </div>
    </aside>`);
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-close]')) closeCart();
    if (e.target.closest('.cart-btn')) openCart();
    const rm = e.target.closest('[data-rm]');
    if (rm) { const items = cart.get(); items.splice(+rm.dataset.rm, 1); cart.set(items); }
  });
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeCart());
  renderCart();
}

/* ---------- switch sound: synthesised keystrokes, no audio file needed for the demo ---------- */
// shortcut: synthesised sound, swap for the real soundtest recording of each switch (soundtest_url) later.
let ctx, playing;
export function playSwitch(profile, onAmp, onEnd) {
  ctx ||= new AudioContext();
  playing?.stop();
  const an = ctx.createAnalyser(); an.fftSize = 256; an.connect(ctx.destination);
  const now = ctx.currentTime + 0.05;
  const rhythm = [0, 0.16, 0.29, 0.47, 0.58, 0.74, 0.86, 1.08, 1.2, 1.31];
  const srcs = [];
  for (const t of rhythm) srcs.push(...stroke(profile, now + t + Math.random() * 0.03, an, 0.8 + Math.random() * 0.4));
  const buf = new Uint8Array(an.frequencyBinCount);
  let raf;
  const tick = () => { an.getByteTimeDomainData(buf); let m = 0; for (const v of buf) m = Math.max(m, Math.abs(v - 128)); onAmp(Math.min(1, m / 50)); raf = requestAnimationFrame(tick); };
  tick();
  const end = setTimeout(() => stop(), 1700);
  function stop() { cancelAnimationFrame(raf); clearTimeout(end); srcs.forEach((s) => { try { s.stop(); } catch {} }); onAmp(0); onEnd(); playing = null; }
  playing = { stop };
}

function stroke(p, t, out, vel) {
  const len = 0.12, buf = ctx.createBuffer(1, ctx.sampleRate * len, ctx.sampleRate), d = buf.getChannelData(0);
  for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
  const n = ctx.createBufferSource(); n.buffer = buf;
  const bp = ctx.createBiquadFilter(); bp.type = 'bandpass'; bp.frequency.value = p.bp * (0.9 + Math.random() * 0.2); bp.Q.value = p.q;
  const g = ctx.createGain(); g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.9 * vel, t + 0.002); g.gain.exponentialRampToValueAtTime(0.0001, t + p.decay);
  n.connect(bp).connect(g).connect(out); n.start(t); n.stop(t + len);
  const o = ctx.createOscillator(); o.frequency.setValueAtTime(p.thump * 1.6, t); o.frequency.exponentialRampToValueAtTime(p.thump, t + 0.03);
  const og = ctx.createGain(); og.gain.setValueAtTime(0.0001, t); og.gain.exponentialRampToValueAtTime(0.6 * vel, t + 0.003); og.gain.exponentialRampToValueAtTime(0.0001, t + p.decay * 1.4);
  o.connect(og).connect(out); o.start(t); o.stop(t + 0.15);
  const srcs = [n, o];
  if (p.bump) { // the tactile bump: a faint early tick
    const n2 = ctx.createBufferSource(); n2.buffer = buf; const g2 = ctx.createGain();
    g2.gain.setValueAtTime(0.0001, t - 0.03); g2.gain.exponentialRampToValueAtTime(0.25 * vel, t - 0.028); g2.gain.exponentialRampToValueAtTime(0.0001, t - 0.015);
    n2.connect(bp); n2.connect(g2).connect(out); n2.start(t - 0.03); n2.stop(t); srcs.push(n2);
  }
  return srcs;
}

// a play button + bar wave: [data-sound="<switch id>"] inside a container that holds .wave
export function bindSoundButtons(root = document) {
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-sound]');
    if (!b) return;
    e.stopPropagation();
    const sw = PRODUCT.switches.find((s) => s.id === b.dataset.sound);
    const host = b.closest('[data-sound-host]') || b;
    const bars = host.querySelectorAll('.wave i');
    host.classList.add('is-playing');
    playSwitch(sw.sound, (a) => {
      host.style.setProperty('--amp', a.toFixed(2));
      bars.forEach((i, k) => (i.style.height = Math.max(12, a * 100 * (0.5 + 0.5 * Math.sin(k * 1.7 + performance.now() / 90))) + '%'));
    }, () => host.classList.remove('is-playing'));
  });
}

/* ---------- scroll reveal ---------- */
function reveal() {
  const els = document.querySelectorAll('[data-reveal]');
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('js-reveal');
  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  els.forEach((el) => io.observe(el));
}

export function toast(msg) {
  let t = $('.toast');
  if (!t) { t = document.createElement('div'); t.className = 'toast'; t.setAttribute('role', 'status'); document.body.append(t); }
  t.textContent = msg; t.classList.add('is-on'); clearTimeout(t._h); t._h = setTimeout(() => t.classList.remove('is-on'), 2200);
}

/* ---------- orders (demo store for the admin page) ---------- */
export const orders = {
  get: () => JSON.parse(localStorage.getItem('kb-orders') || '[]'),
  save: (list) => localStorage.setItem('kb-orders', JSON.stringify(list)),
};

if (!document.body.classList.contains('admin')) mountDrawer();
reveal();
