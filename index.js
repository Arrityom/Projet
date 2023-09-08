const bannerItems = document.querySelector('.home-banner-items, .achievement-banner-items');
const prevButton = document.querySelector('.banner-prev-button');
const nextButton = document.querySelector('.banner-next-button');
const contact = document.getElementById("contact");
const nav = document.querySelector("nav");
let currentIndex = 0;



prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + bannerItems.children.length) % bannerItems.children.length;
  updateBannerPosition();
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % bannerItems.children.length;
  updateBannerPosition();
});

function updateBannerPosition() {
  const itemWidth = bannerItems.children[0].offsetWidth;
  bannerItems.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
}

window.addEventListener("scroll", () => {
  if (window.scrollY > 120) {
    nav.style.top = "0";
    nav.style.display = "flex"
  } else {
    nav.style.top = "-50px";
  }
});

document.addEventListener("DOMContentLoaded", function() {
  var contactLink = document.querySelector('header a[href="#contact"]');
  contactLink.addEventListener("click", function(event) {
    event.preventDefault();
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
  });
});

