/* ==========================================================
   Component — copy from here down
   ========================================================== */

(function () {
  const burger = document.getElementById("morphBurger");
  const panel = document.getElementById("morphPanel");
  const backdrop = document.getElementById("morphBackdrop");
  if (!burger || !panel || !backdrop) return;

  const links = panel.querySelectorAll("a");

  function setOpen(open) {
    burger.classList.toggle("is-open", open);
    panel.classList.toggle("is-open", open);
    backdrop.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", String(open));
    panel.setAttribute("aria-hidden", String(!open));
    links.forEach((a) => a.setAttribute("tabindex", open ? "0" : "-1"));
  }

  burger.addEventListener("click", () => {
    setOpen(!burger.classList.contains("is-open"));
  });

  backdrop.addEventListener("click", () => setOpen(false));

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
})();
