/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const btn = document.getElementById("magneticBtn");
  if (!btn) return;

  const STRENGTH = 0.35; // how far the button travels relative to cursor offset
  const RADIUS = 70; // px, how far from center the effect still applies

  btn.addEventListener("mousemove", (e) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);
    const distance = Math.hypot(x, y);

    if (distance < RADIUS) {
      btn.style.transform = `translate(${x * STRENGTH}px, ${y * STRENGTH}px)`;
    }
  });

  btn.addEventListener("mouseleave", () => {
    btn.style.transform = "translate(0, 0)";
  });
})();
