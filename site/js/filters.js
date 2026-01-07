/* =========================================================
   SecureTheCloud — Labs Filters
   STC-CORE-DS v1.0
========================================================= */

const labsGrid = document.getElementById("labs-grid");
const filtersContainer = document.querySelector(".labs-filters");

let labsData = [];
let activeFilters = {
  cloud: null,
  domain: null,
  level: null
};

/* =========================
   INIT
========================= */

document.addEventListener("DOMContentLoaded", () => {
  fetchLabs();
});

/* =========================
   DATA LOAD
========================= */

async function fetchLabs() {
  try {
    const res = await fetch("/data/labs.json");
    const json = await res.json();

    // Only published labs
    labsData = json.labs.filter(lab => lab.status === "published");

    renderFilters(labsData);
    renderLabs(labsData);
  } catch (err) {
    console.error("Failed to load labs.json", err);
    labsGrid.innerHTML = "<p>Unable to load labs.</p>";
  }
}

/* =========================
   FILTER RENDERING
========================= */

function renderFilters(labs) {
  const clouds = new Set();
  const domains = new Set();
  const levels = new Set();

  labs.forEach(lab => {
    lab.cloud.forEach(c => clouds.add(c));
    domains.add(lab.domain);
    levels.add(lab.level);
  });

  filtersContainer.innerHTML = `
    ${renderFilterGroup("Cloud", "cloud", [...clouds])}
    ${renderFilterGroup("Domain", "domain", [...domains])}
    ${renderFilterGroup("Level", "level", [...levels])}
  `;
}

function renderFilterGroup(label, key, values) {
  return `
    <div class="filter-group">
      <strong>${label}</strong>
      ${values
        .sort()
        .map(
          val => `
          <button
            class="filter-btn"
            data-filter="${key}"
            data-value="${val}"
          >
            ${val.toUpperCase()}
          </button>
        `
        )
        .join("")}
    </div>
  `;
}

/* =========================
   FILTER HANDLING
========================= */

filtersContainer.addEventListener("click", e => {
  if (!e.target.matches("button[data-filter]")) return;

  const { filter, value } = e.target.dataset;

  // Toggle behavior
  activeFilters[filter] =
    activeFilters[filter] === value ? null : value;

  updateActiveButtons();
  applyFilters();
});

function applyFilters() {
  const filtered = labsData.filter(lab => {
    return (
      (!activeFilters.cloud || lab.cloud.includes(activeFilters.cloud)) &&
      (!activeFilters.domain || lab.domain === activeFilters.domain) &&
      (!activeFilters.level || lab.level === activeFilters.level)
    );
  });

  renderLabs(filtered);
}

/* =========================
   ACTIVE STATE
========================= */

function updateActiveButtons() {
  document
    .querySelectorAll("button[data-filter]")
    .forEach(btn => {
      const { filter, value } = btn.dataset;
      btn.classList.toggle(
        "active",
        activeFilters[filter] === value
      );
    });
}

/* =========================
   LAB CARD RENDER
========================= */

function renderLabs(labs) {
  if (!labs.length) {
    labsGrid.innerHTML = "<p>No labs match your filters.</p>";
    return;
  }

  labsGrid.innerHTML = labs
    .map(
      lab => `
      <article class="lab-card">
        <h3 class="lab-title">${lab.title}</h3>

        <div class="lab-meta">
          ${lab.cloud
            .map(c => `<span class="lab-tag ${c}">${c.toUpperCase()}</span>`)
            .join("")}
          <span class="lab-tag level">${lab.level}</span>
          <span class="lab-tag domain">${lab.domain}</span>
        </div>

        <p class="lab-summary">${lab.summary}</p>

        <a class="lab-cta" href="${lab.path}">
          Open Lab →
        </a>
      </article>
    `
    )
    .join("");
}
