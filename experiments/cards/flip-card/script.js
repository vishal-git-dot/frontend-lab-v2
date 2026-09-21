/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const card = document.getElementById("flipCard");
  if (!card) return;

  // Hover already flips the card for mouse users. This adds
  // keyboard and touch support so it isn't hover-only.
  card.addEventListener("click", () => toggle());
  card.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle();
    }
  });

  function toggle() {
    const flipped = card.classList.toggle("is-flipped");
    card.setAttribute("aria-pressed", String(flipped));
  }
})();
