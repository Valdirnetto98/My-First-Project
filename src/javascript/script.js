// Toggle de tema (robusto e acessível)
const btn = document.getElementById("toggleTheme");
const body = document.body;

function applyTheme(theme) {
  body.classList.remove("light-theme", "dark-theme");
  body.classList.add(`${theme}-theme`);
  if (btn) {
    btn.textContent = theme === "dark" ? "☀️" : "🌙";
    btn.setAttribute('aria-pressed', String(theme === 'dark'));
  }
}

// Aplicar tema salvo (ou padrão 'light') ao carregar o DOM e ativar o glow na foto
// Comentário: usamos DOMContentLoaded para garantir que elementos (ex: #profileImg) existam
document.addEventListener('DOMContentLoaded', () => {
  const temaSalvo = localStorage.getItem("tema") || "light";
  applyTheme(temaSalvo);

  // Ativa o glow na imagem de perfil (classe .glow-on controla o efeito no CSS)
  const profile = document.getElementById('profileImg');
  if (profile) {
    // pequeno delay para suavizar a transição
    setTimeout(() => profile.classList.add('glow-on'), 60);
  }
});

// Alterna tema ao clicar no botão e reativa o glow para refletir a cor do novo tema
if (btn) {
  btn.addEventListener("click", () => {
    const current = body.classList.contains("light-theme") ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("tema", next);

    // Reaplica o efeito na imagem para forçar atualização visual do glow
    const profile = document.getElementById('profileImg');
    if (profile) {
      profile.classList.remove('glow-on');
      setTimeout(() => profile.classList.add('glow-on'), 60);
    }
  });
}
