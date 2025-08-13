const header = document.querySelector("header");
const aside = document.querySelector("aside");
const aside_prof = document.querySelector(".profile-container");
let aside_btn = Array.from(document.querySelectorAll(".btnsnav"));
aside_btn.push(document.querySelector(".logout-container"));
const main = document.querySelector("main");
const nav = document.querySelector(".navigation");
const btnoff = document.querySelector(".btn-off");
const article = Array.from(document.querySelectorAll("article"));

window.addEventListener("load", (event) => {
  header.style.transform = "translate(0px ,0px)";
  setTimeout(() => {
    aside.style.transform = "translate(0px)";
    main.style.opacity = "1";

    setTimeout(() => {
      aside_prof.style.scale = "1";
      aside_prof.style.opacity = "1";
      aside_btn.forEach((aside_btn) => {
        aside_btn.style.transform = "translate(0px)";
      });
      nav.style.opacity = "1";
      nav.style.transform = "translate(0px)";
      article.forEach((article) => {
        article.style.scale = "1";
        article.style.opacity = "1";
      });
    }, 600);
  }, 500);
});
