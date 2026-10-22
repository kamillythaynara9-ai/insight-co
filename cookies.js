// Aviso de cookies (LGPD). Este site não usa cookies de rastreamento: só guarda, no próprio aparelho,
// a escolha de tema (dia/noite) e se o aviso já foi visto. Reabre em "Cookies" no rodapé.
(function () {
  var CHAVE = 'insight-cookies';
  function visto() { try { return !!localStorage.getItem(CHAVE); } catch (e) { return false; } }
  var caixa = null;
  function abrir() {
    if (caixa) caixa.remove();
    caixa = document.createElement('section');
    caixa.className = 'cookies'; caixa.setAttribute('role', 'dialog'); caixa.setAttribute('aria-labelledby', 'ck-titulo');
    caixa.innerHTML = '<div class="cookies-cab"><img src="bulbo.png" alt=""><h2 id="ck-titulo">Sem cookies de rastreamento</h2></div>' +
      '<p>Guardamos no seu aparelho só o necessário: o tema que você escolheu na cordinha e este aviso. Nada é enviado para terceiros. Veja a <a href="privacidade.html">Política de Privacidade</a>.</p>' +
      '<div class="cookies-acoes"><button type="button" class="sim" data-ck="ok">Entendi</button></div>';
    document.body.appendChild(caixa);
    caixa.querySelector('[data-ck="ok"]').addEventListener('click', function () {
      try { localStorage.setItem(CHAVE, new Date().toISOString()); } catch (e) {}
      caixa.remove(); caixa = null;
    });
  }
  document.addEventListener('click', function (e) { if (e.target.closest('[data-abrir-cookies]')) { e.preventDefault(); abrir(); } });
  if (!visto()) setTimeout(abrir, document.getElementById('intro') ? 3200 : 800);
})();
