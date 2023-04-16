import {
  aboutSection,
  aboutHeading,
  aboutParagraph,
  gallerySection,
  galleryHeading,
  galleryParagraph,
  contactSection,
  contactParagraphOne,
  contactParagraphTwo,
  contactParagraphThree,
  contactParagraphFour,
  contactForm,
} from "../index.js";

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
