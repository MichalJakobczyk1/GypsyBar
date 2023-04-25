!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e){return function(e){if(Array.isArray(e))return o(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return o(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var a=window.matchMedia("(min-width: 426px)"),i=document.querySelectorAll(".section--about"),c=document.querySelector(".about__h2--js"),u=document.querySelector(".about__paragraph--js"),l=document.querySelectorAll(".section--gallery"),s=document.querySelector(".gallery__h2--js"),d=document.querySelector(".gallery__paragraph--js"),m=document.querySelectorAll(".section--contact"),p=document.querySelector(".contact__paragraph--1"),y=document.querySelector(".contact__paragraph--2"),f=document.querySelector(".contact__paragraph--3"),g=document.querySelector(".contact__paragraph--4"),_=document.querySelector(".contact__container--form"),h=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(c.style.animation="appearDown 1s 0.75s forwards",u.style.animation="appearDown 1s 1s forwards")}))}),{threshold:.2}),b=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(s.style.animation="appearDown 1s 0.75s forwards",d.style.animation="appearDown 1s 1s forwards")}))}),{threshold:.2}),v=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&(p.style.animation="appearDown 1s 0.5s forwards",y.style.animation="appearDown 1s 0.75s forwards",f.style.animation="appearDown 1s 1s forwards",g.style.animation="appearDown 1s 1.25s forwards",_.style.animation="appearDown 1s 1.75s forwards")}))}),{threshold:.2});i.forEach((function(e){h.observe(e)})),l.forEach((function(e){b.observe(e)})),m.forEach((function(e){v.observe(e)}));var S=document.querySelector(".main--preload");setTimeout((function(){S.classList.remove("main--preload")}),3750),document.querySelectorAll("[data-carousel-button]").forEach((function(e){e.addEventListener("click",(function(){var t="next"===e.dataset.carouselButton?1:-1,n=e.closest("[data-carousel]").querySelector("[data-slides]"),o=n.querySelector("[data-active]"),a=r(n.children).indexOf(o)+t;a<0&&(a=n.children.length-1),a>=n.children.length&&(a=0),n.children[a].dataset.active=!0,delete o.dataset.active}))}));var q=document.querySelector(".lang"),L=document.querySelector(".lang__button--pl"),w=document.querySelector(".lang__button--eng"),M=document.querySelector(".navigation__link--about"),j=document.querySelector(".navigation__link--gallery"),T=document.querySelector(".navigation__link--contact"),H=document.querySelector(".about__paragraph--js"),E=document.querySelector(".gallery__h2--js"),A=document.querySelector(".gallery__paragraph--js"),O=document.querySelector(".contact__h3--js"),k=document.querySelector(".form__submit--js"),I=document.getElementsByName("Name")[0],D=document.getElementsByName("Email")[0],x=document.getElementsByName("PhoneNumber")[0],N=document.getElementsByName("Message")[0],C=!1;function P(){document.querySelector(".gallery__popup").style.display="none"}q.addEventListener("click",(function(){0==C?(L.classList.add("lang__button--hidden"),w.classList.remove("lang__button--hidden"),M.innerHTML="O mnie",j.innerHTML="Galeria",T.innerHTML="Kontakt",H.innerHTML="Aliquam rutrum ultricies eros ut porttitor. Aliquam erat volutpat. Cras ac metus tincidunt, iaculis ipsum in, sodales nibh. Fusce eu sem ut eros scelerisque bibendum. Cras commodo magna a dui rutrum pulvinar. Duis condimentum et mauris nec posuere. Vestibulum porta metus vel magna aliquet, non tristique elit ultricies.",E.innerHTML="Galeria",A.innerHTML="Sprawdź moje poprzednie realizacje",p.innerHTML="Sprawdź nowe posty",y.innerHTML="Oraz zdjęcia i relacje",O.innerHTML="Lorem ipsum lorem ipsum",k.innerHTML="Wyślij",I.placeholder="Imię",D.placeholder="Email",x.placeholder="Numer telefonu",N.placeholder="Wiadomość",C=!0):(w.classList.add("lang__button--hidden"),L.classList.remove("lang__button--hidden"),M.innerHTML="About",j.innerHTML="Gallery",T.innerHTML="Contact",H.innerHTML="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat, metus vitae consectetur tempor, dui nulla viverra turpis, et fringilla ex felis quis erat. Suspendisse feugiat lacinia nibh. Aenean et tortor dapibus, varius tortor non, semper sapien. Nullam eu risus quis nibh pellentesque porta. Donec sodales ipsum nisi, eu rhoncus libero egestas vel.",E.innerHTML="Gallery",A.innerHTML="Check my previous realizations",p.innerHTML="Check facebook for new posts",y.innerHTML="Instagram for photos&relations",O.innerHTML="Lorem ipsum lorem ipsum",k.innerHTML="Send",I.placeholder="Your name",D.placeholder="Your email",x.placeholder="Your contact number",N.placeholder="Your message",C=!1)})),a.matches&&document.querySelectorAll(".gallery__image").forEach((function(e){e.onclick=function(){document.querySelector(".gallery__popup").style.display="block",document.querySelector(".gallery__popupImg").src=document.querySelector("[data-active] img.gallery__image").src}})),document.querySelector(".gallery__close").onclick=function(){P()},document.onkeydown=function(e){27==(e=e||window.event).keyCode&&P()};var z=document.querySelector(".menu--closed"),B=document.querySelector(".navigation--js");z.addEventListener("click",(function(){z.classList.contains("menu--closed")?(z.classList.remove("menu--closed"),z.classList.add("menu--open"),B.style.left="30%"):(z.classList.add("menu--closed"),z.classList.remove("menu--open"),B.style.left="100%")}))},function(e,t,n){}]);