/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const tabs = document.getElementById("elasticTabs");
  const indicator = document.getElementById("elasticIndicator");
  if (!tabs || !indicator) return;

  const buttons = tabs.querySelectorAll(".elastic-tab");

  function moveIndicatorTo(btn) {
    indicator.style.transform = `translateX(${btn.offsetLeft - 4}px)`;
    indicator.style.width = btn.offsetWidth + "px";
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => {
        b.classList.remove("is-active");
        b.setAttribute("aria-selected", "false");
      });
      btn.classList.add("is-active");
      btn.setAttribute("aria-selected", "true");
      moveIndicatorTo(btn);
    });
  });

  // Position the indicator under the initially active tab.
  const active = tabs.querySelector(".elastic-tab.is-active") || buttons[0];
  if (active) moveIndicatorTo(active);

  // Re-measure on resize in case tab widths change (e.g. font load).
  window.addEventListener("resize", () => {
    const current = tabs.querySelector(".elastic-tab.is-active") || buttons[0];
    if (current) moveIndicatorTo(current);
  });
})();
