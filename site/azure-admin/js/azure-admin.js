(() => {
  const html = document.documentElement;
  const body = document.body;

  const toggle = document.getElementById("themeToggle");
  if (!toggle) {
    console.warn("[STC] themeToggle button not found");
    return;
  }

  const applyTheme = (theme) => {
    // Apply to BOTH html and body so CSS can target either
    html.setAttribute("data-theme", theme);
    body.setAttribute("data-theme", theme);

    localStorage.setItem("stc-theme", theme);
    toggle.textContent = theme === "dark" ? "🍌" : "🌙";
    toggle.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");

    console.log("[STC] theme set to:", theme);
  };

  // Pick initial theme
  const saved = localStorage.getItem("stc-theme");
  const initial = saved || html.getAttribute("data-theme") || body.getAttribute("data-theme") || "dark";
  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme") || body.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
  });
})();
