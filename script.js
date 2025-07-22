let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scrolling down
    navbar.style.top = "-80px"; // hide navbar
  } else {
    // scrolling up
    navbar.style.top = "0"; // show navbar
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});