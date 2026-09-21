/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const btn = document.getElementById("confettiBtn");
  if (!btn) return;

  const COLORS = ["#ff7a33", "#7c8cff", "#ffd166", "#4fd1c5", "#f27979"];
  const COUNT = 20;

  btn.addEventListener("click", () => {
    for (let i = 0; i < COUNT; i++) {
      const particle = document.createElement("span");
      particle.className = "confetti-particle";

      const angle = Math.random() * Math.PI * 2;
      const distance = 40 + Math.random() * 50;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const rot = Math.random() * 360;
      const dur = 0.5 + Math.random() * 0.4;

      particle.style.setProperty("--tx", tx + "px");
      particle.style.setProperty("--ty", ty + "px");
      particle.style.setProperty("--rot", rot + "deg");
      particle.style.setProperty("--dur", dur + "s");
      particle.style.setProperty(
        "--c",
        COLORS[Math.floor(Math.random() * COLORS.length)]
      );

      btn.appendChild(particle);
      particle.addEventListener("animationend", () => particle.remove());
    }
  });
})();
