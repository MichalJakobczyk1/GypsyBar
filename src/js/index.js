import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const aboutSection = document.querySelectorAll(".section--about");
const aboutHeading = document.querySelector(".about__h2--js");
const aboutParagraph = document.querySelector(".about__paragraph--js");

const gallerySection = document.querySelectorAll(".section--gallery");
const galleryHeading = document.querySelector(".gallery__h2--js");
const galleryParagraph = document.querySelector(".gallery__paragraph--js");

const contactSection = document.querySelectorAll(".section--contact");
const contactParagraphOne = document.querySelector(".contact__paragraph--1");
const contactParagraphTwo = document.querySelector(".contact__paragraph--2");
const contactParagraphThree = document.querySelector(".contact__paragraph--3");
const contactParagraphFour = document.querySelector(".contact__paragraph--4");
const contactForm = document.querySelector(".contact__container--form");

const aboutObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        aboutHeading.style.animation = `appearDown 1s 0.75s forwards`;
        aboutParagraph.style.animation = `appearDown 1s 1s forwards`;
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const galleryObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        galleryHeading.style.animation = `appearDown 1s 0.75s forwards`;
        galleryParagraph.style.animation = `appearDown 1s 1s forwards`;
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const contactObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        contactParagraphOne.style.animation = `appearDown 1s 0.5s forwards`;
        contactParagraphTwo.style.animation = `appearDown 1s 0.75s forwards`;
        contactParagraphThree.style.animation = `appearDown 1s 1s forwards`;
        contactParagraphFour.style.animation = `appearDown 1s 1.25s forwards`;
        contactForm.style.animation = `appearDown 1s 1.75s forwards`;
      }
    });
  },
  {
    threshold: 0.2,
  }
);

aboutSection.forEach((about) => {
  aboutObserver.observe(about);
});

gallerySection.forEach((gallery) => {
  galleryObserver.observe(gallery);
});

contactSection.forEach((contact) => {
  contactObserver.observe(contact);
});

const main = document.querySelector(".main--preload");

function remove() {
  main.classList.remove("main--preload");
}
setTimeout(remove, 3750);

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]");
    const activeSlide = slides.querySelector("[data-active]");
    let newIndex = [...slides.children].indexOf(activeSlide) + offset;
    if (newIndex < 0) newIndex = slides.children.length - 1;
    if (newIndex >= slides.children.length) newIndex = 0;

    slides.children[newIndex].dataset.active = true;
    delete activeSlide.dataset.active;
  });
});

const lang = document.querySelector(".lang");
let p = document.querySelector(".welcome__h1");
let isPl = false;

lang.addEventListener("click", () => {
  console.log("xdxdxd");
  if (isPl == false) {
    p.innerHTML = "pl pl pl ";
    isPl = true;
  } else {
    p.innerHTML = "eng eng eng";
    isPl = false;
  }
});
