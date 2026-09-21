/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const card = document.getElementById("spotlightCard");
  if (!card) return;

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    card.style.setProperty("--x", x + "%");
    card.style.setProperty("--y", y + "%");
  });
})();
