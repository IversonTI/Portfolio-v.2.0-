// filepath: c:\Users\watte\Desktop\Project#3\script.js

// This script handles the dropdown menu toggle functionality for mobile navigation
// and ensures that the menu items animate correctly when the dropdown is opened.
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.querySelector(".dropdown-toggle");
  const mobileNav = document.querySelector(".mobile-nav");
  const menuItems = document.querySelectorAll(".dropdown-menu li");

  if (toggleButton && mobileNav) {
    toggleButton.addEventListener("click", () => {
      mobileNav.classList.toggle("active");

      // Reset animation by removing and re-adding the 'active' class
      menuItems.forEach((item) => {
        item.classList.remove("active");
        void item.offsetWidth; // Trigger reflow to restart animation
        item.classList.add("active");
      });
    });
  } else {
    console.error("Dropdown toggle button or mobile navigation not found.");
  }

  menuItems.forEach((item) => {
    item.addEventListener("animationend", () => {
      item.classList.add("animated"); // Add the class to remove the type bar
    });
  });
});

// this is where I will put other scripts for the project
// such as form validation, API calls, etc.
// section indicator
document.addEventListener("DOMContentLoaded", () => {
    const circles = document.querySelectorAll(".circle");
    const sections = document.querySelectorAll("section");
  
    const updateActiveCircle = () => {
      let activeSection = null;
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          activeSection = section.id;
        }
      });
  
      circles.forEach((circle) => {
        if (circle.dataset.section === activeSection) {
          circle.classList.add("active");
        } else {
          circle.classList.remove("active");
        }
      });
    };
  
    window.addEventListener("scroll", updateActiveCircle);
    updateActiveCircle(); // Run on page load
  });


