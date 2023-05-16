import "../scss/main.scss";
// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
function hasTouch() {
  return (
    "ontouchstart" in document.documentElement ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

if (hasTouch()) {
  // remove all the :hover stylesheets
  try {
    // prevent exception on browsers not supporting DOM styleSheets properly
    for (var si in document.styleSheets) {
      var styleSheet = document.styleSheets[si];
      if (!styleSheet.rules) continue;

      for (var ri = styleSheet.rules.length - 1; ri >= 0; ri--) {
        if (!styleSheet.rules[ri].selectorText) continue;

        if (styleSheet.rules[ri].selectorText.match(":hover")) {
          styleSheet.deleteRule(ri);
        }
      }
    }
  } catch (ex) {}
}

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

const buttonLang = document.querySelector(".lang");
const buttonPl = document.querySelector(".lang__button--pl");
const buttonEng = document.querySelector(".lang__button--eng");
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

let isPl = true;

buttonLang.addEventListener("click", () => {
  if (isPl == false) {
    buttonEng.classList.remove("lang__button--hidden");
    buttonPl.classList.add("lang__button--hidden");
    navAbout.innerHTML = "O mnie";
    navGallery.innerHTML = "Galeria";
    navContact.innerHTML = "Kontakt";
    welcomeH1.innerHTML = "Najlepsze koktajlowe doświadczenie";
    welcomePar.innerHTML = "Poczuj atmosferę koktajlbaru na swoim przyjęciu!";
    aboutPar.innerHTML =
      "Wyobraź sobie, że popijasz pyszny koktajl, przygotowany ze świeżych składników i dostosowany do Twoich preferencji smakowych, a wszystko to w towarzystwie Twoich przyjaciół i rodziny. Z Nami nie musisz się martwić o logistykę ustawienia baru lub o to, że zabraknie Ci napojów. Zajmiemy się wszystkim, od zapewnienia sprzętu barowego i jego ustawienia, po zaopatrzenie w alkohol i napoje. <br><br> Skorzystanie z oferty Gypsy’s to jak posiadanie osobistego koktajlbaru, który przyjeżdża do Ciebie! To nie są zwykli barmani, ale doświadczeni i pełni pasji eksperci, którzy są oddani zapewnieniu Tobie i Twoim gościom niezapomnianych wrażeń. Niezależnie od tego czy jest to ślub, impreza firmowa, prywatne przyjęcie czy festiwal, ożywimy imprezę dzięki niestandardowemu menu drinków, fachowo przygotowanym koktajlom i wyjątkowej obsłudze!";
    galleryH2.innerHTML = "Galeria";
    galleryPar.innerHTML = "Sprawdź moje poprzednie realizacje";
    contactParagraphOne.innerHTML = "Sprawdź nowe posty";
    contactParagraphTwo.innerHTML = "Oraz zdjęcia i relacje";
    contactH3.innerHTML = "Lub skontaktuj się </br> ze mną od razu";
    submit.innerHTML = "Wyślij";
    namePlaceholder.placeholder = "Imię";
    emailPlaceholder.placeholder = "Email";
    phonePlaceholder.placeholder = "Numer telefonu";
    messagePlaceholder.placeholder = "Wiadomość";
    isPl = true;
  } else {
    buttonEng.classList.add("lang__button--hidden");
    buttonPl.classList.remove("lang__button--hidden");
    navAbout.innerHTML = "About";
    navGallery.innerHTML = "Gallery";
    navContact.innerHTML = "Contact";
    welcomeH1.innerHTML = "Best cocktail experience";
    welcomePar.innerHTML = "Feel cocktail bar experience on your party!";
    aboutPar.innerHTML =
      "Imagine sipping a delicious cocktail, made with fresh ingredients and tailored to your taste preferences, all in the company of Your friends and family. With us, You don't have to worry about the logistics of setting up your bar or running out of drinks. We'll take care of everything, from providing bar equipment and set-up, to sourcing alcohol and drinks. <br><br> Taking advantage of Gypsy's offerings is like having a personal cocktail bar that comes to You! These are no ordinary bartenders, but experienced and passionate experts who are dedicated to providing You and your guests with an unforgettable experience. Whether it's a wedding, corporate event, private party or festival, we will bring your event to life with a customised drinks menu, expertly crafted cocktails and exceptional service!";
    galleryH2.innerHTML = "Gallery";
    galleryPar.innerHTML = "Check my previous realizations";
    contactParagraphOne.innerHTML = "Check facebook for new posts";
    contactParagraphTwo.innerHTML = "Instagram for photos&relations";
    contactH3.innerHTML = "You can also write here </br> straight ahead";
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

const galleryCloseButton = document.querySelector(".gallery__close");

function galleryClose() {
  document.querySelector(".gallery__popup").style.display = "none";
}

galleryCloseButton.onclick = () => {
  galleryClose();
};
document.onkeydown = function (evt) {
  evt = evt || window.event;
  if (evt.keyCode == 27) {
    galleryClose();
  }
};

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
