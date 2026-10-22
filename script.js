/* Insight Co. · Mini Site (protótipo DERS)
   Conteúdo que muda fica aqui em cima: troque pelos dados reais sem mexer no design. */
var NEGOCIO = {
  nome: 'Insight Co.',
  whatsapp: '5511959787846',
  mensagem: 'Olá, Insight Co.! Vim pelo site e quero impulsionar o meu negócio no digital.',
  instagram: 'insightco.oficial',
  frase: 'A estratégia que você precisa para impulsionar o seu negócio no digital e ampliar seu alcance.'
};

var ACOES = [
  { tipo: 'whats', titulo: 'Chamar no WhatsApp', sub: 'Conte o seu negócio e receba uma ideia', principal: true },
  { tipo: 'insta', titulo: 'Ver o Instagram', sub: '@' + NEGOCIO.instagram },
  { tipo: 'servicos', titulo: 'O que a gente faz', sub: 'Sites e planejamento digital' },
  { tipo: 'compartilhar', titulo: 'Compartilhar este link', sub: 'Mande para quem precisa de um empurrão' }
];

// Destaques (fotos de banco de imagens, trocar pelas da Insight Co.)
var DESTAQUES = [
  { rotulo: 'Sites', titulo: 'Sites que vendem pelo WhatsApp', texto: 'Página rápida, bonita no celular e com o botão certo no lugar certo.', foto: 'sites.jpg', alt: 'Notebook com um site aberto numa mesa clara' },
  { rotulo: 'Planejamento', titulo: 'Planejamento para o digital', texto: 'Para onde ir, o que postar e o que medir, com um plano que cabe na sua rotina.', foto: 'planejamento.jpg', alt: 'Notebook mostrando gráficos de acompanhamento' },
  { rotulo: 'Estratégia', titulo: 'Estratégia que gera lucro', texto: 'Ideias pensadas para o seu público, não para todo mundo.', foto: 'estrategia.jpg', alt: 'Três pessoas conversando sobre um projeto com notebooks' },
  { rotulo: 'Alcance', titulo: 'Mais visibilidade no mercado', texto: 'Sua marca aparecendo para quem pode comprar de você.', foto: 'resultados.jpg', alt: 'Tela com painéis de acompanhamento de visitas' }
];

var INFO = [
  { rotulo: 'Atendimento', texto: 'Online, para todo o Brasil' },
  { rotulo: 'Base', texto: 'São Paulo · SP' },
  { rotulo: 'Horário', texto: 'Seu horário de atendimento aqui', exemplo: true, largo: false },
  { rotulo: 'Pagamento', texto: 'Formas de pagamento aqui', exemplo: true }
];

(function () {
  'use strict';
  var $ = function (s, el) { return (el || document).querySelector(s); };
  var $$ = function (s, el) { return Array.prototype.slice.call((el || document).querySelectorAll(s)); };
  var calmo = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  function esc(s) { return String(s).replace(/[&<>"']/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]; }); }
  function linkWhats(txt) { return 'https://wa.me/' + NEGOCIO.whatsapp + '?text=' + encodeURIComponent(txt || NEGOCIO.mensagem); }

  var ICONES = {
    whats: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4.1-.2 0-.3 0-.4l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.3-.2-.5-.3z"/></svg>',
    insta: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>',
    servicos: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2V17h5v-1.1c0-.8.4-1.5 1-2A6 6 0 0 0 12 3z"/></svg>',
    compartilhar: '<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><path d="M8.6 13.5l6.8 4M15.4 6.5l-6.8 4"/></svg>'
  };
  var SETA = '<svg class="seta" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

  /* ---------- Conteúdo ---------- */
  $('#frase').textContent = NEGOCIO.frase;
  $('#arroba').textContent = '@' + NEGOCIO.instagram;
  $('#arroba').href = 'https://instagram.com/' + NEGOCIO.instagram;
  $('#ano').textContent = new Date().getFullYear();

  $('#acoes').innerHTML = ACOES.map(function (a) {
    var href = a.tipo === 'whats' ? linkWhats() : a.tipo === 'insta' ? 'https://instagram.com/' + NEGOCIO.instagram : a.tipo === 'servicos' ? '#destaques' : '#';
    var ext = a.tipo === 'whats' || a.tipo === 'insta' ? ' target="_blank" rel="noopener"' : '';
    return '<a class="acao entra' + (a.principal ? ' principal' : '') + '" data-tipo="' + a.tipo + '" href="' + esc(href) + '"' + ext + '>' +
      '<span class="ic">' + ICONES[a.tipo] + '</span><span><b>' + esc(a.titulo) + '</b><small>' + esc(a.sub) + '</small></span>' + SETA + '</a>';
  }).join('');

  $('#trilho').innerHTML = DESTAQUES.map(function (d, i) {
    var msg = 'Olá, Insight Co.! Vi no site sobre "' + d.titulo + '" e quero saber mais.';
    return '<a class="card' + (i === 0 ? ' ativo' : '') + '" href="' + esc(linkWhats(msg)) + '" target="_blank" rel="noopener" draggable="false">' +
      '<img src="' + esc(d.foto) + '" alt="' + esc(d.alt) + '" loading="' + (i ? 'lazy' : 'eager') + '" draggable="false">' +
      '<div class="card-texto"><span>' + esc(d.rotulo) + '</span><h3>' + esc(d.titulo) + '</h3><p>' + esc(d.texto) + '</p><b>Quero isso ' + SETA.replace('class="seta" ', '') + '</b></div></a>';
  }).join('');

  $('#info').innerHTML = INFO.map(function (x) {
    return '<div class="entra' + (x.largo ? ' largo' : '') + '"><small>' + esc(x.rotulo) + '</small><p' + (x.exemplo ? ' class="exemplo"' : '') + '>' + esc(x.texto) + '</p></div>';
  }).join('');

  /* ---------- Intro (até 3 s, só na primeira visita da sessão) ---------- */
  var intro = $('#intro'), viu = false;
  try { viu = !!sessionStorage.getItem('insight-intro'); sessionStorage.setItem('insight-intro', '1'); } catch (e) {}
  function fimIntro() { if (!intro || intro.classList.contains('fora')) return; intro.classList.add('fora'); setTimeout(function () { intro.remove(); }, 500); entrar(); }
  if (viu || calmo) { intro.classList.add('fora'); setTimeout(function () { intro.remove(); }, 450); entrar(); }
  else {
    setTimeout(function () { intro.classList.add('acesa'); }, 1300);
    setTimeout(fimIntro, 2300);
    intro.addEventListener('click', fimIntro);
    setTimeout(fimIntro, 3000); // nunca trava
  }

  /* ---------- Entrada ao rolar ---------- */
  function entrar() {
    var els = $$('.entra');
    if (!('IntersectionObserver' in window)) { els.forEach(function (e) { e.classList.add('visivel'); }); return; }
    var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('visivel'); io.unobserve(e.target); } }); }, { threshold: .15 });
    els.forEach(function (e, i) { e.style.transitionDelay = Math.min(i * 70, 350) + 'ms'; io.observe(e); });
  }

  /* ---------- Cordinha: puxe para trocar entre dia e noite (assinatura) ---------- */
  var raiz = document.documentElement, cord = $('#cordinha'), pend = $('#pendente');
  function temaAtual() { return raiz.dataset.tema || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'noite' : 'dia'); }
  function trocarTema() {
    var novo = temaAtual() === 'noite' ? 'dia' : 'noite';
    raiz.dataset.tema = novo;
    try { localStorage.setItem('insight-tema', novo); } catch (e) {}
    pend.classList.add('puxou'); setTimeout(function () { pend.classList.remove('puxou'); }, 600);
    $('#dica-cordinha').classList.add('some');
    if (navigator.vibrate) navigator.vibrate(12);
    faiscas();
  }
  var y0 = null, puxou = false;
  cord.addEventListener('pointerdown', function (e) { y0 = e.clientY; puxou = false; cord.classList.add('puxando'); cord.setPointerCapture(e.pointerId); });
  cord.addEventListener('pointermove', function (e) {
    if (y0 == null) return;
    var d = Math.max(0, Math.min(60, e.clientY - y0));
    cord.style.height = (92 + d) + 'px';
    if (d > 36 && !puxou) { puxou = true; trocarTema(); }
  });
  function solta() { if (y0 == null) return; cord.classList.remove('puxando'); cord.style.height = ''; y0 = null; }
  cord.addEventListener('pointerup', function () { var foi = puxou; solta(); if (!foi) trocarTema(); });
  cord.addEventListener('pointercancel', solta);
  cord.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); trocarTema(); } });
  // A lâmpada também acende ao toque
  $('#lampada').addEventListener('click', function () { pend.classList.add('puxou'); faiscas(); setTimeout(function () { pend.classList.remove('puxou'); }, 600); });

  /* ---------- Luz no ponto do toque nos botões ---------- */
  $('#acoes').addEventListener('pointermove', function (e) {
    var a = e.target.closest('.acao'); if (!a) return;
    var r = a.getBoundingClientRect(); a.style.setProperty('--x', (e.clientX - r.left) + 'px'); a.style.setProperty('--y', (e.clientY - r.top) + 'px');
  });
  $('#acoes').addEventListener('pointerdown', function (e) {
    var a = e.target.closest('.acao'); if (!a) return;
    var r = a.getBoundingClientRect(); a.style.setProperty('--x', (e.clientX - r.left) + 'px'); a.style.setProperty('--y', (e.clientY - r.top) + 'px');
    a.classList.add('tocou'); setTimeout(function () { a.classList.remove('tocou'); }, 500);
  });
  $('#acoes').addEventListener('click', function (e) {
    var a = e.target.closest('.acao'); if (!a) return;
    if (a.dataset.tipo === 'servicos') { e.preventDefault(); $('#destaques').scrollIntoView({ behavior: calmo ? 'auto' : 'smooth', block: 'start' }); }
    if (a.dataset.tipo === 'compartilhar') {
      e.preventDefault();
      var dados = { title: NEGOCIO.nome, text: NEGOCIO.frase, url: location.href };
      if (navigator.share) navigator.share(dados).catch(function () {});
      else if (navigator.clipboard) navigator.clipboard.writeText(location.href).then(function () { a.querySelector('small').textContent = 'Link copiado!'; });
    }
  });

  /* ---------- Destaques: arrastar com o mouse, contador e cartão ativo ---------- */
  var trilho = $('#trilho'), cards = $$('.card', trilho);
  function atualizarAtivo() {
    var meio = trilho.scrollLeft + trilho.clientWidth / 2, melhor = 0, dist = 1e9;
    cards.forEach(function (c, i) { var d = Math.abs(c.offsetLeft + c.offsetWidth / 2 - meio); if (d < dist) { dist = d; melhor = i; } });
    cards.forEach(function (c, i) { c.classList.toggle('ativo', i === melhor); });
    $('#contador').textContent = (melhor + 1) + ' / ' + cards.length;
  }
  trilho.addEventListener('scroll', function () { cancelAnimationFrame(atualizarAtivo.r); atualizarAtivo.r = requestAnimationFrame(atualizarAtivo); }, { passive: true });
  atualizarAtivo();
  var arr = null, moveu = false;
  trilho.addEventListener('pointerdown', function (e) { if (e.pointerType !== 'mouse') return; arr = { x: e.clientX, s: trilho.scrollLeft }; moveu = false; });
  window.addEventListener('pointermove', function (e) { if (!arr) return; var d = e.clientX - arr.x; if (Math.abs(d) > 5) { moveu = true; trilho.classList.add('arrastando'); } trilho.scrollLeft = arr.s - d; });
  window.addEventListener('pointerup', function () {
    if (!arr) return; arr = null; trilho.classList.remove('arrastando');
    var c = $('.card.ativo', trilho); if (c) trilho.scrollTo({ left: c.offsetLeft - (trilho.clientWidth - c.offsetWidth) / 2, behavior: 'smooth' });
  });
  trilho.addEventListener('click', function (e) { if (moveu) { e.preventDefault(); moveu = false; } }, true);

  /* ---------- Poeira de luz no cone (movimento contínuo) ---------- */
  var cv = $('#poeira'), ctx = cv.getContext('2d'), graos = [], W, H, dpr = Math.min(window.devicePixelRatio || 1, 2), extras = [];
  function medir() { W = cv.clientWidth; H = cv.clientHeight; cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  medir(); window.addEventListener('resize', medir);
  for (var i = 0; i < 46; i++) graos.push({ x: Math.random(), y: Math.random(), r: .6 + Math.random() * 1.8, v: .02 + Math.random() * .05, f: Math.random() * 6.28 });
  function faiscas() {
    var l = $('#lampada').getBoundingClientRect(), cx = l.left + l.width / 2, cy = l.top + l.height * .38;
    for (var k = 0; k < 18; k++) { var a = Math.random() * 6.28, sp = 1.5 + Math.random() * 3; extras.push({ x: cx, y: cy, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp, vida: 1 }); }
  }
  function corPo() { return temaAtual() === 'noite' ? '255, 236, 180' : '79, 142, 138'; }
  function quadro(t) {
    ctx.clearRect(0, 0, W, H);
    var c = corPo();
    graos.forEach(function (g) {
      g.y -= g.v / 60; if (g.y < -.02) { g.y = 1.02; g.x = Math.random(); }
      var x = (g.x + Math.sin(t / 3000 + g.f) * .015) * W, y = g.y * H;
      var foco = Math.max(0, 1 - Math.abs(x - W / 2) / (W * .45));
      ctx.fillStyle = 'rgba(' + c + ',' + (.12 + .45 * foco) + ')';
      ctx.beginPath(); ctx.arc(x, y, g.r, 0, 6.28); ctx.fill();
    });
    extras = extras.filter(function (p) { return p.vida > 0; });
    extras.forEach(function (p) {
      p.x += p.vx; p.y += p.vy; p.vy += .06; p.vida -= .025;
      ctx.fillStyle = 'rgba(255, 226, 150,' + p.vida + ')'; ctx.beginPath(); ctx.arc(p.x, p.y, 2.2, 0, 6.28); ctx.fill();
    });
    if (!calmo) requestAnimationFrame(quadro);
  }
  requestAnimationFrame(quadro);
})();
