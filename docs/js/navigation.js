/* =========================================================
   SecureTheCloud — Global Navigation Logic
   STC-CORE-DS v1.0
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const toggleButton = document.querySelector(".stc-nav-toggle");
  const navMenu = document.querySelector(".stc-nav-menu");

  if (!toggleButton || !navMenu) return;

  toggleButton.addEventListener("click", () => {
    const expanded = toggleButton.getAttribute("aria-expanded") === "true";
    toggleButton.setAttribute("aria-expanded", String(!expanded));
    navMenu.classList.toggle("active");
  });

  /* Close menu on link click (mobile) */
  navMenu.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      toggleButton.setAttribute("aria-expanded", "false");
    });
  });

});
