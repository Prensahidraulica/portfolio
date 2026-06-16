document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("theme-toggle");
  if (!btn) return;

  const saved = localStorage.getItem("theme") || "dark";

  function apply(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
      btn.textContent = "☀️";
      btn.classList.remove("btn-outline-light");
      btn.classList.add("btn-outline-dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
      btn.textContent = "🌙";
      btn.classList.remove("btn-outline-dark");
      btn.classList.add("btn-outline-light");
    }
    localStorage.setItem("theme", theme);
  }

  apply(saved);

  btn.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
    apply(current === "light" ? "dark" : "light");
  });
});
