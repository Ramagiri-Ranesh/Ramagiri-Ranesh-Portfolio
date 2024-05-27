// script.js

// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a, .hero-section .btn').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Highlight active navigation link on scroll
window.addEventListener('scroll', () => {
    let fromTop = window.scrollY + 60; // Adjust for fixed header
    document.querySelectorAll('nav ul li a').forEach(link => {
        let section = document.querySelector(link.getAttribute('href'));
        if (
            section.offsetTop <= fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
