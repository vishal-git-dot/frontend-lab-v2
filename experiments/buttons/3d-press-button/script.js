
const pressButton = document.querySelector("#pressBtn");
const clickCount = document.querySelector("#clickCount");

let totalClicks = 0;

if (pressButton && clickCount) {
  pressButton.addEventListener("click", () => {
    totalClicks += 1;
    clickCount.textContent = totalClicks;
  });
}
