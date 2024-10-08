import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { contactDiv } from "./contact.js";
import { aboutDiv } from "./about.js";
import "./styles.css";

export const contentDiv = document.getElementById("content");

contentDiv.appendChild(homeDiv);
contentDiv.appendChild(menuDiv);
contentDiv.appendChild(contactDiv);
contentDiv.appendChild(aboutDiv);

const homeNavButton = document.querySelector(".nav-home");
const menuNavButton = document.querySelector(".nav-menu");
const contactNavButton = document.querySelector(".nav-contact");
const aboutNavButton = document.querySelector(".nav-about");

const seeMenuButton = document.querySelector("#menu");

function hideAllPages() {
  const allPages = [homeDiv, menuDiv, contactDiv, aboutDiv];

  allPages.forEach((page) => {
    page.style.display = "none";
  });
}

function unselectAllNavs() {
  const allNavs = [
    homeNavButton,
    menuNavButton,
    contactNavButton,
    aboutNavButton,
  ];

  allNavs.forEach((navButton) => {
    navButton.classList.remove("selected-nav");
  });
}

homeNavButton.addEventListener("click", (e) => {
  hideAllPages();
  unselectAllNavs();
  homeNavButton.classList.add("selected-nav");
  homeDiv.style.display = "block";
});

menuNavButton.addEventListener("click", (e) => {
  hideAllPages();
  unselectAllNavs();
  menuNavButton.classList.add("selected-nav");
  menuDiv.style.display = "block";
});

seeMenuButton.addEventListener("click", (e) => {
  hideAllPages();
  unselectAllNavs();
  menuNavButton.classList.add("selected-nav");
  menuDiv.style.display = "block";
});

contactNavButton.addEventListener("click", (e) => {
  hideAllPages();
  unselectAllNavs();
  contactNavButton.classList.add("selected-nav");
  contactDiv.style.display = "block";
});

aboutNavButton.addEventListener("click", (e) => {
  hideAllPages();
  unselectAllNavs();
  aboutNavButton.classList.add("selected-nav");
  aboutDiv.style.display = "flex";
});
