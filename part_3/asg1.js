// 1.HTML DOM and Event Handling
const welcomeBox = document.querySelector(".welcome-message");

welcomeBox.addEventListener("click", () => {
  const text = document.querySelector(".welcome-message p");
  text.textContent = "Have a Good Time";
});

// 2.Click to Show/Close Menu.
const openBtn = document.querySelector(".ham");
const closeBtn = document.querySelector(".close-btn");
const hMenu = document.querySelector(".h-menu");

openBtn.addEventListener("click", () => {
  hMenu.style.display = "flex";
  closeBtn.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  hMenu.style.display = "none";
  closeBtn.style.display = "none";
});

// 3.Click to Show More Content Boxes.
const actionBtn = document.querySelector(".action-btn");

actionBtn.addEventListener("click", () => {
  const hideCont = document.querySelector(".hide-content");
  hideCont.style.display = "flex";
});
