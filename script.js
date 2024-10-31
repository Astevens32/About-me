// Display a welcome message when the page loads
function greetUser() {
    alert("Welcome to Aliko's Portfolio! Explore my journey as a programmer, designer, and creator.");
}

// JavaScript to animate skill levels when the page loads
document.assEventListener("DOMContentLoaded", function() {
    // Selects all skill level bars
    const skillLevels = document.querySelectorAll('.skill-level');
    skillLevels.forEach(skill => {
        // Animates width based oon initial style
        skill.style.width = skill.getAttribute('style').split(":")[1].trim();
    });
});

// Toggle the visibility of the contact information in the Contact section
function toggleContactInfo() {
    // selects the contact info div
    const contactInfo = document.getElementById("contactInfo");
    const showContactBtn = document.getElementById("showContactBtn");

    //Checks if the contact info is currently hidden or visible
    if (contactInfo.style.display === "none" ) {
        // Show contact info if hidden
        contactInfo.style.display = "block"; 
        showContactBtn.textContent = "Hide Contact Details";
    } else { 
        // Hide contact info if visible
        contactInfo.style.display = "none";
        showContactBtn.textContent = "Show Contact Details";
    }
}

// Smooth scroll functionality for navigation links
document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        // Prevent default anchor click behavior
        event.preventDefault();
        // Get section ID
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        //Smooth scroll to the section
        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});

// JavaScript function to toggle dark mode
function toggleDarkMode() {
    // Toggles the dark-mode class on body element
    document.body.classList.toggle('dark-mode');
}

// JavaScript to add fade-in effect when elements come into view
document.addEventListener('scroll', function() {
    // Selects all fade-in elements
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        // Gets element's position relative to viewport
        const rect = el.getBoundingClientRect();
        // Checks if element is in view
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
            // Adds visible class if in view
            el.classList.add('visible');
        }
    });
});