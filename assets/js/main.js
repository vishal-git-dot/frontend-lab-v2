(function () {
  "use strict";

  const galleryEl = document.getElementById("gallery");
  const tabsEl = document.getElementById("filterTabs");
  const searchEl = document.getElementById("searchInput");
  const countEl = document.getElementById("headerCount");

  let activeCategory = "all";
  let query = "";

  /* ----------------------------------------------------------
     Build filter tabs from CATEGORIES
     ---------------------------------------------------------- */

  function buildTabs() {
    const all = [{ id: "all", label: "All" }, ...CATEGORIES];

    tabsEl.innerHTML = all
      .map(
        (cat) => `
        <button
          class="filter-tab"
          data-cat="${cat.id}"
          type="button"
          aria-pressed="${cat.id === "all" ? "true" : "false"}"
        >${cat.label}</button>
      `
      )
      .join("");

    tabsEl.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-tab");
      if (!btn) return;

      activeCategory = btn.dataset.cat;

      tabsEl.querySelectorAll(".filter-tab").forEach((el) => {
        el.setAttribute("aria-pressed", String(el === btn));
      });

      render();
    });
  }

  /* ----------------------------------------------------------
     Card markup
     ---------------------------------------------------------- */

  function cardHTML(item) {
    return `
      <a class="spec-card" href="${item.path}" target="_blank" rel="noopener">
        <div class="spec-stage">
          <iframe
            src="${item.path}"
            loading="lazy"
            tabindex="-1"
            title="${item.title} live preview"
          ></iframe>
        </div>
        <div class="spec-body">
          <span class="spec-tag" style="--dot: var(--cat-${item.category})">
            ${labelFor(item.category)}
          </span>
          <h3>${item.title}</h3>
          <p>${item.description}</p>
        </div>
      </a>
    `;
  }

  function labelFor(catId) {
    const found = CATEGORIES.find((c) => c.id === catId);
    return found ? found.label : catId;
  }

  /* ----------------------------------------------------------
     Filtering + render
     ---------------------------------------------------------- */

  function matches(item) {
    const inCategory = activeCategory === "all" || item.category === activeCategory;
    if (!inCategory) return false;
    if (!query) return true;

    const haystack = (item.title + " " + item.description).toLowerCase();
    return haystack.includes(query);
  }

  function render() {
    const filtered = EXPERIMENTS.filter(matches);

    if (filtered.length === 0) {
      galleryEl.innerHTML = `
        <div class="gallery-empty">
          <strong>No experiments match "${escapeHTML(query)}"</strong>
          <p>Try a different search term or clear the filter.</p>
        </div>
      `;
      return;
    }

    // Group by category, but only show categories with results,
    // in the order CATEGORIES defines.
    const sections = CATEGORIES.map((cat) => ({
      cat,
      items: filtered.filter((item) => item.category === cat.id),
    })).filter((section) => section.items.length > 0);

    galleryEl.innerHTML = sections
      .map(
        (section) => `
        <section class="gallery-section" id="cat-${section.cat.id}">
          <div class="section-heading">
            <h2>${section.cat.label}</h2>
            <span class="count">${section.items.length}</span>
          </div>
          <div class="card-grid">
            ${section.items.map(cardHTML).join("")}
          </div>
        </section>
      `
      )
      .join("");
  }

  function escapeHTML(str) {
    const div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  /* ----------------------------------------------------------
     Search
     ---------------------------------------------------------- */

  function bindSearch() {
    searchEl.addEventListener("input", (e) => {
      query = e.target.value.trim().toLowerCase();
      render();
    });
  }

  /* ----------------------------------------------------------
     Init
     ---------------------------------------------------------- */

  function init() {
    countEl.textContent = EXPERIMENTS.length + " experiments";
    buildTabs();
    bindSearch();
    render();
  }

  init();
})();
