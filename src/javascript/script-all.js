// PEGA O BOTÃO HAMBÚRGUER
const botaoMenu = document.getElementById("menu-btn");

// PEGA O MENU
const menu = document.getElementById("menu");

// SE elementos existem, adiciona listener e controla ARIA
if (botaoMenu && menu) {
  botaoMenu.setAttribute('aria-expanded', 'false');
  botaoMenu.addEventListener("click", () => {
    const ativo = menu.classList.toggle("ativo");
    botaoMenu.setAttribute('aria-expanded', String(ativo));
  });
}

