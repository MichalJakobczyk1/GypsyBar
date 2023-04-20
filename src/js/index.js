import "../scss/main.scss";
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
const mediaQueryMobile = window.matchMedia("(min-width: 426px)");

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
const navAbout = document.querySelector(".navigation__link--about");
const navGallery = document.querySelector(".navigation__link--gallery");
const navContact = document.querySelector(".navigation__link--contact");
const welcomeH1 = document.querySelector(".welcome__h1--js");
const welcomePar = document.querySelector(".welcome__paragraph--js");
const aboutPar = document.querySelector(".about__paragraph--js");
const galleryH2 = document.querySelector(".gallery__h2--js");
const galleryPar = document.querySelector(".gallery__paragraph--js");
const contactH3 = document.querySelector(".contact__h3--js");
const submit = document.querySelector(".form__submit--js");
const namePlaceholder = document.getElementsByName("Name")[0];
const emailPlaceholder = document.getElementsByName("Email")[0];
const phonePlaceholder = document.getElementsByName("PhoneNumber")[0];
const messagePlaceholder = document.getElementsByName("Message")[0];

let isPl = false;

lang.addEventListener("click", () => {
  if (isPl == false) {
    navAbout.innerHTML = "O mnie";
    navGallery.innerHTML = "Galeria";
    navContact.innerHTML = "Kontakt";
    welcomeH1.innerHTML = "Najlepsze doświadczenia";
    welcomePar.innerHTML = "Poczuj atmosferę baru na swoim przyjęciu";
    aboutPar.innerHTML =
      "Aliquam rutrum ultricies eros ut porttitor. Aliquam erat volutpat. Cras ac metus tincidunt, iaculis ipsum in, sodales nibh. Fusce eu sem ut eros scelerisque bibendum. Cras commodo magna a dui rutrum pulvinar. Duis condimentum et mauris nec posuere. Vestibulum porta metus vel magna aliquet, non tristique elit ultricies.";
    galleryH2.innerHTML = "Galeria";
    galleryPar.innerHTML = "Sprawdź moje poprzednie realizacje";
    contactParagraphOne.innerHTML = "Sprawdź nowe posty";
    contactParagraphTwo.innerHTML = "Oraz zdjęcia i relacje";
    contactH3.innerHTML = "Lorem ipsum lorem ipsum";
    submit.innerHTML = "Wyślij";
    namePlaceholder.placeholder = "Imię";
    emailPlaceholder.placeholder = "Email";
    phonePlaceholder.placeholder = "Numer telefonu";
    messagePlaceholder.placeholder = "Wiadomość";
    isPl = true;
  } else {
    navAbout.innerHTML = "About";
    navGallery.innerHTML = "Gallery";
    navContact.innerHTML = "Contact";
    welcomeH1.innerHTML = "Best cocktail experience";
    welcomePar.innerHTML = "Feel cocktail bar experience on your party";
    aboutPar.innerHTML =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, metus vitae consectetur tempor, dui nulla viverra turpis, et fringilla ex felis quis erat. Suspendisse feugiat lacinia nibh. Aenean et tortor dapibus, varius tortor non, semper sapien. Nullam eu risus quis nibh pellentesque porta. Donec sodales ipsum nisi, eu rhoncus libero egestas vel.";
    galleryH2.innerHTML = "Gallery";
    galleryPar.innerHTML = "Check my previous realizations";
    contactParagraphOne.innerHTML = "Check facebook for new posts";
    contactParagraphTwo.innerHTML = "Instagram for photos&relations";
    contactH3.innerHTML = "Lorem ipsum lorem ipsum";
    submit.innerHTML = "Send";
    namePlaceholder.placeholder = "Your name";
    emailPlaceholder.placeholder = "Your email";
    phonePlaceholder.placeholder = "Your contact number";
    messagePlaceholder.placeholder = "Your message";
    isPl = false;
  }
});

if (mediaQueryMobile.matches) {
  document.querySelectorAll(".gallery__image").forEach((image) => {
    image.onclick = () => {
      document.querySelector(".gallery__popup").style.display = "block";
      document.querySelector(".gallery__popupImg").src = document.querySelector(
        "[data-active] img.gallery__image"
      ).src;
    };
  });
}
console.log(document.querySelector(".gallery__popupImg").src);
document.querySelector(".gallery__close").onclick = () => {
  document.querySelector(".gallery__popup").style.display = "none";
};

const arrowLeft = document.querySelector(".gallery__arrow--left");
const arrowRight = document.querySelector(".gallery__arrow--right");
if (window.innerWidth < 500) {
  arrowLeft.src = "src/assets/img/arrowLeftWhite.svg";
  arrowRight.src = "src/assets/img/arrowRightWhite.svg";
} else {
  arrowLeft.src = "src/assets/img/arrowLeft.svg";
  arrowRight.src = "src/assets/img/arrowRight.svg";
}

const hamburger = document.querySelector(".menu--closed");
const navigation = document.querySelector(".navigation--js");
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("menu--closed")) {
    hamburger.classList.remove("menu--closed");
    hamburger.classList.add("menu--open");
    navigation.style.left = "30%";
  } else {
    hamburger.classList.add("menu--closed");
    hamburger.classList.remove("menu--open");
    navigation.style.left = "100%";
  }
});
