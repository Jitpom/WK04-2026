document.addEventListener("DOMContentLoaded", function() {
    const bars = document.querySelector(".bars");
    const navbar = document.querySelector(".nav-bar");
    
    bars.addEventListener("click", function(event) {
        navbar.classList.toggle("active");
        event.stopPropagation();
    });

    document.addEventListener("click", function(event) {
        // Check if the menu is open and if the click was NOT inside the navbar
        if (navbar.classList.contains("active") && !navbar.contains(event.target)) {
            navbar.classList.remove("active");
        }
    });
});