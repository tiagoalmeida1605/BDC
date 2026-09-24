// ==========================================================================
// BDC - Batalha do Capao | script.js
// Script compartilhado: controle de navegacao mobile
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {
  var botaoMenu = document.getElementById('menuToggle');
  var menuNavegacao = document.getElementById('menuNavegacao');

  if (botaoMenu && menuNavegacao) {
    botaoMenu.addEventListener('click', function () {
      var aberto = menuNavegacao.classList.toggle('aberto');
      botaoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    // Fecha o menu ao clicar fora dele em dispositivos moveis
    document.addEventListener('click', function (evento) {
      if (
        menuNavegacao.classList.contains('aberto') &&
        !menuNavegacao.contains(evento.target) &&
        !botaoMenu.contains(evento.target)
      ) {
        menuNavegacao.classList.remove('aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
      }
    });
  }
});