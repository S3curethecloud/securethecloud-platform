/* =========================================================
   SecureTheCloud — Labs Filter Engine
   STC-CORE-DS v1.0
========================================================= */

document.addEventListener("DOMContentLoaded", () => {
  const labsGrid = document.getElementById("labs-grid");

  const filterCloud = document.getElementById("filter-cloud");
  const filterDomain = document.getElementById("filter-domain");
  const filterLevel = document.getElementById("filter-level");
  const filterIndustry = document.getElementById("filter-industry");

  if (!labsGrid) return;

  let labsData = [];

  /* =========================
     Fetch Labs Data
  ========================= */
  fetch("/data/labs.json")
    .then(response => response.json())
    .then(data => {
      labsData = data.labs || [];
      renderLabs(labsData);
    })
    .catch(error => {
      console.error("Failed to load labs.json", error);
      labsGrid.innerHTML = renderEmptyState("Unable to load labs.");
    });

  /* =========================
     Event Listeners
  ========================= */
  [filterCloud, filterDomain, filterLevel, filterIndustry].forEach(select => {
    if (select) {
      select.addEventListener("change", applyFilters);
    }
  });

  /* =========================
     Filtering Logic
  ========================= */
  function applyFilters() {
    const cloud = filterCloud.value;
    const domain = filterDomain.value;
    const level = filterLevel.value;
    const industry = filterIndustry.value;

    const filteredLabs = labsData.filter(lab => {
      if (cloud && lab.cloud !== cloud && lab.secondaryCloud !== cloud) {
        return false;
      }

      if (domain && lab.domain !== domain) {
        return false;
      }

      if (level && lab.level !== level) {
        return false;
      }

      if (industry && (!lab.industry || !lab.industry.includes(industry))) {
        return false;
      }

      return true;
    });

    renderLabs(filteredLabs);
  }

  /* =========================
     Render Labs
  ========================= */
  function renderLabs(labs) {
    if (!labs.length) {
      labsGrid.innerHTML = renderEmptyState("No labs match the selected filters.");
      return;
    }

    labsGrid.innerHTML = labs.map(renderLabCard).join("");
  }

  /* =========================
     Render Lab Card
  ========================= */
  function renderLabCard(lab) {
    const tags = [
      lab.cloud,
      lab.secondaryCloud,
      lab.domain,
      lab.level,
      ...(lab.industry || [])
    ]
      .filter(Boolean)
      .map(tag => renderTag(tag))
      .join("");

    return `
      <article class="stc-lab-card stc-hover">
        <div>
          <h4 class="stc-lab-title">${lab.title}</h4>
          <div class="stc-lab-meta">
            Level ${lab.level} • ${lab.status.toUpperCase()}
          </div>

          <div class="stc-lab-tags">
            ${tags}
          </div>

          <p class="stc-lab-desc">
            ${lab.summary}
          </p>
        </div>

        <div class="stc-lab-actions">
          <a href="${lab.paths?.overview || '#'}"
             class="stc-btn stc-btn-secondary">
            View Lab
          </a>
        </div>
      </article>
    `;
  }

  /* =========================
     Render Tag Pill
  ========================= */
  function renderTag(tag) {
    const normalized = tag.toLowerCase();

    let className = "stc-lab-tag";

    if (["aws", "azure", "gcp"].includes(normalized)) {
      className += ` ${normalized}`;
    }

    return `<span class="${className}">${tag}</span>`;
  }

  /* =========================
     Empty State
  ========================= */
  function renderEmptyState(message) {
    return `
      <div class="stc-labs-empty">
        ${message}
      </div>
    `;
  }
});
