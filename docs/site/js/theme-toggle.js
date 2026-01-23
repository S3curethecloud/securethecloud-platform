(() => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const saved = localStorage.getItem("stc-theme");
  const initial = saved || "dark";

  root.setAttribute("data-theme", initial);
  toggle.textContent = initial === "dark" ? "🍌" : "🌙";

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("stc-theme", next);
    toggle.textContent = next === "dark" ? "🍌" : "🌙";
  });
})();
