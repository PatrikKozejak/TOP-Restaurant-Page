export const contactDiv = document.createElement("div");
contactDiv.classList.add("intro", "contact-div");

const addressDiv = document.createElement("div");
addressDiv.classList.add("contact-category");
const addressHeadline = document.createElement("h2");
const addressPar = document.createElement("p");

const operatorDiv = document.createElement("div");
operatorDiv.classList.add("contact-category");
const operatorHeadline = document.createElement("h2");
const operatorPar = document.createElement("p");

const contactPersonDiv = document.createElement("div");
contactPersonDiv.classList.add("contact-category");
const contactPersonHeadline = document.createElement("h2");
const contactPersonPar = document.createElement("p");

addressHeadline.textContent = "Location";
addressPar.setAttribute("style", "white-space: pre;");
addressPar.textContent =
  "Ristorante Bella Vita\r\nVia Roma 123, 00100 Roma, Italia\r\n+34 685 778 8892\r\ninfo@bellavita.it\r\nOpen daily: 12:00 – 22:00";

addressDiv.appendChild(addressHeadline);
addressDiv.appendChild(addressPar);

operatorHeadline.textContent = "Operator";
operatorPar.setAttribute("style", "white-space: pre;");
operatorPar.textContent =
  "Bella Vita s.r.l.\r\nPiazza del Popolo 12, 00187 Roma, Italia\r\nCompany ID: 123456789\r\nTax ID: 987654321";

operatorDiv.appendChild(operatorHeadline);
operatorDiv.appendChild(operatorPar);

contactPersonHeadline.textContent = "Contact person";
contactPersonPar.setAttribute("style", "white-space: pre;");
contactPersonPar.textContent = "Marco Rossi\r\n+39 333 654 9876";

contactPersonDiv.appendChild(contactPersonHeadline);
contactPersonDiv.appendChild(contactPersonPar);

contactDiv.appendChild(addressDiv);
contactDiv.appendChild(operatorDiv);
contactDiv.appendChild(contactPersonDiv);

contactDiv.style.display = "none";
