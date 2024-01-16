// classList - shows/gets all classes
// contains - checks classList for specific class
// add - add class
// remove - remove class
// toggle - toggles class

const navToggle = document.querySelector(".nav__toggle");
const links = document.querySelector(".nav__links");

navToggle.addEventListener("click", () => {
    links.classList.toggle("show-links");
})