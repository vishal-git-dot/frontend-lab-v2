/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const card = document.getElementById("tiltCard");
  const glare = document.getElementById("tiltGlare");
  if (!card) return;

  const MAX_TILT = 10; // degrees

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0 - 1
    const py = (e.clientY - rect.top) / rect.height; // 0 - 1

    const rotateY = (px - 0.5) * MAX_TILT * 2;
    const rotateX = (0.5 - py) * MAX_TILT * 2;

    card.style.transform = `perspective(600px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

    if (glare) {
      glare.style.setProperty("--gx", px * 100 + "%");
      glare.style.setProperty("--gy", py * 100 + "%");
    }
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "perspective(600px) rotateX(0deg) rotateY(0deg)";
  });
})();
