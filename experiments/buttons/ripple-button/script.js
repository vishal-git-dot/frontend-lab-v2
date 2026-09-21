/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const btn = document.getElementById("rippleBtn");
  if (!btn) return;

  btn.addEventListener("click", (e) => {
    const rect = btn.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;

    const ripple = document.createElement("span");
    ripple.className = "ripple";
    ripple.style.width = ripple.style.height = size + "px";
    ripple.style.left = x + "px";
    ripple.style.top = y + "px";

    btn.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  });
})();
