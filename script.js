const toggleButton = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (toggleButton && navLinks) {
  toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

// scroll header
function scrollHeader() {
  const nav = document.getElementById("home");
  if (window.scrollY >= 200) nav.classList.add("scroll-header");
  else nav.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

// scroll to top
function scrollUp() {
  const scrollUp = document.getElementById("scroll-up");
  if (window.scrollY >= 560) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
