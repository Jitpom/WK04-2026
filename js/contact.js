document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".bars");
    const navbar = document.querySelector(".nav-bar");
    
    bars.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});