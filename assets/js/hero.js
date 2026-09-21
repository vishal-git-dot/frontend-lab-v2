(function () {
  "use strict";

  // Specimen 1 — magnetic pull
  const magnetWrap = document.getElementById("specMagnetic");
  const magnetBtn = document.getElementById("magnetBtn");

  if (magnetWrap && magnetBtn) {
    magnetWrap.addEventListener("mousemove", (e) => {
      const rect = magnetWrap.getBoundingClientRect();
      const x = e.clientX - (rect.left + rect.width / 2);
      const y = e.clientY - (rect.top + rect.height / 2);
      magnetBtn.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
    });

    magnetWrap.addEventListener("mouseleave", () => {
      magnetBtn.style.transform = "translate(0, 0)";
    });
  }

  // Specimen 2 — spotlight
  const spotlightWrap = document.getElementById("specSpotlight");
  const spotlightBox = document.getElementById("spotlightBox");

  if (spotlightWrap && spotlightBox) {
    spotlightWrap.addEventListener("mousemove", (e) => {
      const rect = spotlightBox.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      spotlightBox.style.setProperty("--x", x + "%");
      spotlightBox.style.setProperty("--y", y + "%");
    });
  }

  // Specimen 3 — toggle
  const heroToggle = document.getElementById("heroToggle");

  if (heroToggle) {
    heroToggle.addEventListener("click", () => {
      heroToggle.classList.toggle("is-on");
      heroToggle.setAttribute(
        "aria-checked",
        heroToggle.classList.contains("is-on") ? "true" : "false"
      );
    });
  }
})();
