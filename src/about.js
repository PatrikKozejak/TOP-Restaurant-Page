export const aboutDiv = document.createElement("div");
import saporroLogo from "./assets/logo-removebg.png";

aboutDiv.classList.add("intro", "about-div");

const aboutUsHeadline = document.createElement("h2");
const welcomeHeadline = document.createElement("h3");
const aboutUsPar = document.createElement("p");
const img = document.createElement("img");
img.src = saporroLogo;

aboutUsHeadline.textContent = "About Us";
welcomeHeadline.textContent = "Welcome to Saporro";
aboutUsPar.textContent =
  "At Saporro, we bring the authentic flavors of Italy to your table, offering a unique dining experience filled with passion, tradition, and fresh ingredients. Nestled in the heart of Rome, we take pride in creating homemade pasta, wood-fired pizzas, and classic Italian desserts that reflect our rich culinary heritage. Whether you're enjoying a casual lunch or a romantic dinner, our cozy atmosphere and friendly service will make you feel right at home.";

aboutDiv.appendChild(aboutUsHeadline);
aboutDiv.appendChild(welcomeHeadline);
aboutDiv.appendChild(aboutUsPar);
aboutDiv.appendChild(img);
