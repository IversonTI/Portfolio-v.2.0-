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