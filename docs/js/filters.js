/* =========================================================
   SecureTheCloud — Labs Filters
   STC-CORE-DS v1.1 (Filters + Sorting)
========================================================= */

const labsGrid = document.getElementById("labs-grid");
const filtersContainer = document.querySelector(".labs-filters");

let labsData = [];

/* =========================
   FILTER + SORT STATE
========================= */

let activeFilters = {
  cloud: null,
  domain: null,
  level: null
};

let activeSort = "newest";

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
    renderLabs(applySort(labsData));
  } catch (err) {
    console.error("Failed to load labs.json", err);
    labsGrid.innerHTML = "<p>Unable to load labs.</p>";
  }
}

/* =========================
   FILTER + SORT RENDERING
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
    ${renderSortControls()}
    ${renderFilterGroup("Cloud", "cloud", [...clouds])}
    ${renderFilterGroup("Domain", "domain", [...domains])}
    ${renderFilterGroup("Level", "level", [...levels])}
  `;

  updateActiveSortButtons();
}

function renderSortControls() {
  return `
    <div class="filter-group">
      <strong>Sort</strong>
      <button class="sort-btn" data-sort="newest">Newest</button>
      <button class="sort-btn" data-sort="level">Level</button>
      <button class="sort-btn" data-sort="time">Time</button>
    </div>
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
   FILTER + SORT HANDLING
========================= */

filtersContainer.addEventListener("click", e => {
  /* FILTER BUTTONS */
  if (e.target.matches("button[data-filter]")) {
    const { filter, value } = e.target.dataset;

    activeFilters[filter] =
      activeFilters[filter] === value ? null : value;

    updateActiveButtons();
    applyFilters();
  }

  /* SORT BUTTONS */
  if (e.target.matches("button[data-sort]")) {
    activeSort = e.target.dataset.sort;

    updateActiveSortButtons();
    applyFilters();
  }
});

function applyFilters() {
  const filtered = labsData.filter(lab => {
    return (
      (!activeFilters.cloud || lab.cloud.includes(activeFilters.cloud)) &&
      (!activeFilters.domain || lab.domain === activeFilters.domain) &&
      (!activeFilters.level || lab.level === activeFilters.level)
    );
  });

  renderLabs(applySort(filtered));
}

/* =========================
   SORT LOGIC
========================= */

function applySort(labs) {
  const sorted = [...labs];

  switch (activeSort) {
    case "level":
      return sorted.sort(
        (a, b) =>
          parseInt(a.level.replace("L", "")) -
          parseInt(b.level.replace("L", ""))
      );

    case "time":
      return sorted.sort(
        (a, b) => parseTime(a.estimated_time) - parseTime(b.estimated_time)
      );

    case "newest":
    default:
      return sorted.reverse();
  }
}

function parseTime(timeStr) {
  // Extract first number from "60–90 mins"
  const match = timeStr.match(/\d+/);
  return match ? parseInt(match[0], 10) : 999;
}

/* =========================
   ACTIVE STATE (UI)
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

function updateActiveSortButtons() {
  document
    .querySelectorAll("button[data-sort]")
    .forEach(btn => {
      btn.classList.toggle(
        "active",
        btn.dataset.sort === activeSort
      );
    });
}

/* =========================
   LAB CARD RENDER (FIXED UX)
========================= */

function renderLabs(labs) {
  if (!labs.length) {
    labsGrid.innerHTML = "<p>No labs match your filters.</p>";
    return;
  }

  labsGrid.innerHTML = labs
    .map(
      lab => `
        <article class="lab-card" data-href="${lab.path}">
          <h3 class="lab-title">${lab.title}</h3>

          <div class="lab-meta">
            ${lab.cloud
              .map(
                c =>
                  `<span class="lab-tag ${c}">${c.toUpperCase()}</span>`
              )
              .join("")}

            <span class="lab-tag level">${lab.level}</span>
            <span class="lab-tag domain">${lab.domain}</span>

            <span class="lab-tag time">
              ⏱ ${lab.estimated_time}
            </span>
          </div>

          <p class="lab-summary">${lab.summary}</p>

          <div class="lab-card-footer">
            Open Lab →
          </div>
        </article>
      `
    )
    .join("");

  // Make entire card clickable
  document.querySelectorAll(".lab-card").forEach(card => {
    card.addEventListener("click", () => {
      window.location.href = card.dataset.href;
    });
  });
}

