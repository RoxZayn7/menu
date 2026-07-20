const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("navlinks");
hamburger.addEventListener("click", function() {
    hamburger.classList.toggle("active");
    navlinks.classList.toggle("active");
});
const links = document.querySelectorAll(".nav-links a");
links.forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("active");
    });
});