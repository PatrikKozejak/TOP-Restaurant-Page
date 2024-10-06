import { homeDiv } from "./home.js";
import { menuDiv } from "./menu.js";
import { contactDiv } from "./contact.js";
import { aboutDiv } from "./about.js";
import "./styles.css";

export const contentDiv = document.getElementById("content");
// contentDiv.appendChild(homeDiv);
// contentDiv.appendChild(menuDiv);
// contentDiv.appendChild(contactDiv);
contentDiv.appendChild(aboutDiv);
