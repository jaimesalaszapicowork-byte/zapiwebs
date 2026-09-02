const elements = document.querySelectorAll(
    ".service-card, .project-card, .process-step"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.15
});

elements.forEach((element) => {
    observer.observe(element);
});
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navLinkItems = document.querySelectorAll(".nav-links a");

menuButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

navLinkItems.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});
