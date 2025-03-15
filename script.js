// Typed js

var typed = new Typed('.text', {
    strings: ['Student', 'Programmer', 'Designer'],
    typeSpeed: 50,
    backSpeed: 50,
    loop: true,
});

// Show education and experience

let EducationBtn = document.querySelector('.education');
let ExperienceBtn = document.querySelector('.experience');
let show_box = document.querySelectorAll('.show_box');
let hide_box = document.querySelectorAll('.hide_box');

EducationBtn.addEventListener('click', () => {
    show_box.forEach(Sbox => {
        Sbox.style.opacity = '0';
    });
    hide_box.forEach(Hbox => {
        Hbox.style.opacity = '1';
    });
});
ExperienceBtn.addEventListener('click', () => {
    show_box.forEach(Sbox => {
        Sbox.style.opacity = '1';
    });
    hide_box.forEach(Hbox => {
        Hbox.style.opacity = '0';
    });
});

// Mix It Up 
// Coming Soon 
//  var mixer = mixitup('.projects_cards');

// Show menu
let bar = document.querySelector('.bars');
let menu = document.querySelector('.menu');
let nav = document.querySelector('nav');

bar.addEventListener('click', () => {
    menu.classList.toggle('show_menu');
    nav.classList.toggle('nav_border');
});

// Download Cv
function downloadCV() {
    const link = document.createElement("a");
    link.href = "CV.pdf";
    link.download = "CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Email 
function sendEmail() {
    window.location.href = "mailto:lukazotovic@gmail.com?subject=Let's%20Talk&body=Hello%20Luka,";
}

// Theme
const themeToggle = document.getElementById("theme-toggle");
const sunIcon = document.getElementById("sun-icon");
const moonIcon = document.getElementById("moon-icon");
const body = document.body;

// Apply theme from localStorage on page load
if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-theme");
    moonIcon.style.display = "none"; // Hide the moon icon when dark theme is active
    sunIcon.style.display = "block"; // Show the sun icon for switching to light theme
} else {
    moonIcon.style.display = "block"; // Show the moon icon when light theme is active
    sunIcon.style.display = "none"; // Hide the sun icon for switching to dark theme
}

// Event listener for the sun icon (to switch to light theme)
sunIcon.addEventListener("click", () => {
    body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light"); // Save the preference
    moonIcon.style.display = "block"; // Show the moon icon
    sunIcon.style.display = "none"; // Hide the sun icon
});

// Event listener for the moon icon (to switch to dark theme)
moonIcon.addEventListener("click", () => {
    body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark"); // Save the preference
    sunIcon.style.display = "block"; // Show the sun icon
    moonIcon.style.display = "none"; // Hide the moon icon
});
