document.addEventListener("DOMContentLoaded", function () {
  const burgerButton = document.querySelector(".burger");
  const burgerMenu = document.querySelector(".burger-menu");

  burgerButton.addEventListener("click", function () {
    const isOpen =
      burgerMenu.style.transform === "translateX(0px)" ||
      burgerMenu.style.transform === "translateX(0%)";
    burgerMenu.style.transform = isOpen ? "translateX(-100%)" : "translateX(0)";
  });
});
