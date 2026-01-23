// Dark / Light theme toggle
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("light");

  // Persist preference
  const isLight = document.body.classList.contains("light");
  localStorage.setItem("stc-theme", isLight ? "light" : "dark");
});

// Restore theme on load
window.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("stc-theme");
  if (savedTheme === "light") {
    document.body.classList.add("light");
  }
});
