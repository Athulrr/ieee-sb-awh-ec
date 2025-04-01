window.addEventListener("scroll", function () {
    let navbar = document.querySelector("nav");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
document.getElementById("hamburger").addEventListener("click", function () {
document.getElementById("nav-links").classList.toggle("active");
});