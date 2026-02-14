// ----------------------
// Contact Form Submit
// ----------------------
const contactForm = document.getElementById("contactForm");
if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Your message has been sent!");
    });
}

// ----------------------
// Hamburger Menu
// ----------------------
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

// Create overlay
let overlay = document.createElement("div");
overlay.id = "overlay";
document.body.appendChild(overlay);

// Open / Close menu
function toggleMenu() {
    navLinks.classList.toggle("active");
    overlay.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);

// Close when clicking overlay
overlay.addEventListener("click", () => {
    navLinks.classList.remove("active");
    overlay.classList.remove("active");
});

// Close when clicking any link
document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        overlay.classList.remove("active");
    });
});
