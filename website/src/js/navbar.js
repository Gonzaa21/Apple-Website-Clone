// Mobile Version

const menuIconContainer = document.querySelector("nav .menu-icon-container");
const navContainer = document.querySelector(".nav-container");

menuIconContainer.addEventListener("click", () => {
    setTimeout(() => {
        navContainer.classList.toggle("active");
    }, 250);
})