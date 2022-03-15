const storyButtons = document.querySelectorAll(".story-btn");

storyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("change");
    btn.nextElementSibling.classList.toggle("change");
  });
});
