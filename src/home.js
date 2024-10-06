export const homeDiv = document.createElement("div");
homeDiv.classList.add("intro");

const brandDiv = document.createElement("div");
brandDiv.classList.add("brand");

const secondaryHeadline = document.createElement("h3");
secondaryHeadline.textContent = "Cucina tradizionale italiana";

const primaryHeadline = document.createElement("h1");
primaryHeadline.textContent = "Saporro";

const menuButton = document.createElement("button");
menuButton.setAttribute("id", "menu");
menuButton.classList.add("main-button");

const menuButtonLabel = document.createElement("label");
menuButtonLabel.setAttribute("for", "menu");
menuButtonLabel.textContent = "SEE TODAYS MENU";

menuButton.appendChild(menuButtonLabel);

brandDiv.appendChild(secondaryHeadline);
brandDiv.appendChild(primaryHeadline);

homeDiv.appendChild(brandDiv);
homeDiv.appendChild(menuButton);
