/* ==========================================================
        PORTFOLIO WEBSITE
        File : script.js
========================================================== */

/* ==============================
        SELECT ELEMENTS
================================ */

const menuButton = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navigationLinks = document.querySelectorAll(".nav-links a");
const header = document.querySelector("header");

/* ==============================
        MOBILE MENU
================================ */

// Open and close mobile navigation

menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ==============================
    CLOSE MENU AFTER CLICK
================================ */

navigationLinks.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ==============================
        STICKY NAVBAR
================================ */

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        header.style.boxShadow =
            "0 10px 25px rgba(0,0,0,.08)";

    }

    else {

        header.style.boxShadow = "none";

    }

});


/* ==============================
    ACTIVE NAVIGATION LINK
================================ */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (pageYOffset >= sectionTop) {

            currentSection = section.getAttribute("id");

        }

    });

    navigationLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {

            link.classList.add("active");

        }

    });

});


/* ==============================
        SCROLL REVEAL
================================ */

const revealElements = document.querySelectorAll(

    ".section, .hero-content, .hero-image, .info-card"

);

function revealOnScroll() {

    revealElements.forEach(element => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0px)";

        }

        else {

            element.style.opacity = "0";

            element.style.transform = "translateY(50px)";

        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* ==============================
    SKILL BAR ANIMATION
================================ */

const progressBars = document.querySelectorAll(".progress-bar");

function animateSkills() {

    progressBars.forEach(bar => {

        const width = bar.style.width;

        bar.style.width = "0";

        setTimeout(() => {

            bar.style.width = width;

        }, 300);

    });

}

animateSkills();


/* ==============================
    CONTACT FORM
================================ */

const contactForm = document.querySelector(".contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name =
        contactForm.querySelector("input[type='text']").value.trim();

    const email =
        contactForm.querySelector("input[type='email']").value.trim();

    const message =
        contactForm.querySelector("textarea").value.trim();

    if (name === "" || email === "" || message === "") {

        alert("Please fill in all fields.");

        return;

    }

    alert("Thank you! Your message has been received.");

    contactForm.reset();

});


/* ==============================
        BACK TO TOP BUTTON
================================ */

// Create button

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

document.body.appendChild(topButton);

topButton.classList.add("top-button");

// Button Style

topButton.style.position = "fixed";

topButton.style.right = "30px";

topButton.style.bottom = "30px";

topButton.style.width = "55px";

topButton.style.height = "55px";

topButton.style.border = "none";

topButton.style.borderRadius = "50%";

topButton.style.background = "#F4B400";

topButton.style.color = "#fff";

topButton.style.fontSize = "22px";

topButton.style.cursor = "pointer";

topButton.style.display = "none";

topButton.style.boxShadow =
    "0 10px 25px rgba(0,0,0,.2)";

topButton.style.zIndex = "999";


// Show button

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    }

    else {

        topButton.style.display = "none";

    }

});


// Scroll to top

topButton.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


/* ==============================
    HERO TYPING EFFECT
================================ */

const heroText = document.querySelector(".small-title");

const words = [

    "SOFTWARE ENGINEERING STUDENT",

    "FRONT-END DEVELOPER",

    "UI DESIGN ENTHUSIAST",

    "WEB DEVELOPER"

];

let wordIndex = 0;

function changeWord() {

    heroText.style.opacity = "0";

    setTimeout(() => {

        heroText.textContent = words[wordIndex];

        heroText.style.opacity = "1";

        wordIndex++;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

    }, 300);

}

setInterval(changeWord, 2500);


/* ==============================
        SMOOTH PAGE LOAD
================================ */

window.addEventListener("load", () => {

    document.body.style.opacity = "1";

});


/* ==============================
        END OF FILE
================================ */