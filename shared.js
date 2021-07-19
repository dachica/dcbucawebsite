const toggleButton = document.querySelector(".toggle-button");
const mainNav = document.querySelector(".main-nav");



toggleButton.addEventListener("click", () => {
    mainNav.classList.toggle("navOpen");
});
