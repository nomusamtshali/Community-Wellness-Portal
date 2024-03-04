function toggleMenu() {
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.toggle("hidden");
}

function navigateTo(sectionId) {
  // Hide mobile menu if it's open
  const mobileMenu = document.getElementById("mobile-menu");
  mobileMenu.classList.add("hidden");

  // Hide all sections
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    section.classList.add("hidden");
  });

  // Show the selected section
  const selectedSection = document.getElementById(sectionId);
  selectedSection.classList.remove("hidden");
}
