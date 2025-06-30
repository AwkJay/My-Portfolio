document.addEventListener("DOMContentLoaded", function() {

    // --- Mobile Navigation ---
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    // When someone clicks the hamburger icon
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    });

    // Close the menu if a link is clicked
    document.querySelectorAll(".nav-links li a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("active");
        });
    });


    // --- Scroll Animations (Fade-in effect) ---

    // check if an element is on screen
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            // If the element is intersecting (visible on screen)
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        // Start the animation when the element is 10% visible
        threshold: 0.1 
    });

    // Find all the elements with the 'fade-in' class
    const elementsToFadeIn = document.querySelectorAll('.fade-in');
    
    elementsToFadeIn.forEach((el) => observer.observe(el));
    
});
