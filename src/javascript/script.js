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

// Aplicar tema salvo (ou padrão 'light')
const temaSalvo = localStorage.getItem("tema") || "light";
applyTheme(temaSalvo);

if (btn) {
  btn.addEventListener("click", () => {
    const current = body.classList.contains("light-theme") ? "light" : "dark";
    const next = current === "light" ? "dark" : "light";
    applyTheme(next);
    localStorage.setItem("tema", next);
  });
}
