export const menuDiv = document.createElement("div");
menuDiv.classList.add("intro", "menu-div");

const primaryHeadline = document.createElement("h1");
primaryHeadline.textContent = "Menu";

const appetizersDiv = document.createElement("div");
appetizersDiv.classList.add("meal-category");
const appetizersHeadline = document.createElement("h2");
appetizersHeadline.textContent = "Appetizers";
appetizersDiv.appendChild(appetizersHeadline);
appetizersDiv.appendChild(
  createMealDiv(
    "BRUSCHETTA",
    "bread, dried tomatoes, pickled eggplant with peppers, extra virgin olive oil, oregano, basil",
    "7.50€"
  )
);

const soupsDiv = document.createElement("div");
soupsDiv.classList.add("meal-category");
const soupsHeadline = document.createElement("h2");
soupsHeadline.textContent = "Soups";
soupsDiv.appendChild(soupsHeadline);
soupsDiv.appendChild(
  createMealDiv(
    "TOMATO SOUP",
    "tomatoes, Grana Padano, extra virgin olive oil, basil",
    "4.20€"
  )
);

const pizzaDiv = document.createElement("div");
pizzaDiv.classList.add("meal-category");
const pizzaHeadline = document.createElement("h2");
pizzaHeadline.textContent = "Pizza";
pizzaDiv.appendChild(pizzaHeadline);
pizzaDiv.appendChild(
  createMealDiv(
    "MARGHERITA",
    "tomato base, mozzarella fior di latte, basil, extra virgin olive oil",
    "8.00€"
  )
);

pizzaDiv.appendChild(
  createMealDiv(
    "AMATRICIANA",
    "tomato base, mozzarella fior di latte, guanciale di Norcia bacon, pecorino cheese, black pepper, extra virgin olive oil",
    "11.00€"
  )
);

pizzaDiv.appendChild(
  createMealDiv(
    "SANNITA",
    "tomato base, mozzarella fior di latte, salsiccia-Italian sausage, provola-semi-hard cheese, extra virgin olive oil",
    "12.00€"
  )
);

const pastaDiv = document.createElement("div");
pastaDiv.classList.add("meal-category");
const pastaHeadline = document.createElement("h2");
pastaHeadline.textContent = "Pasta";
pastaDiv.appendChild(pastaHeadline);
pastaDiv.appendChild(
  createMealDiv(
    "BOLOGNESE LASAGNE",
    "Bolognese ragout, mozzarella fior di latte, bechamel, Grana Padano, basil",
    "11.50€"
  )
);

pastaDiv.appendChild(
  createMealDiv(
    "SPAGHETTI CARBONARA",
    "guanciale (cured pork), eggs, Pecorino Romano and lots of black pepper",
    "13.00€"
  )
);

function createMealDiv(name, ingredients, price) {
  const mealDiv = document.createElement("div");
  mealDiv.classList.add("meal");
  const nameHeadline = document.createElement("h2");
  nameHeadline.textContent = name;
  const ingredientsPar = document.createElement("p");
  ingredientsPar.textContent = ingredients;

  const prizeHeadline = document.createElement("h2");
  prizeHeadline.textContent = price;

  mealDiv.appendChild(nameHeadline);
  mealDiv.appendChild(ingredientsPar);
  mealDiv.appendChild(prizeHeadline);
  return mealDiv;
}

menuDiv.appendChild(appetizersDiv);
menuDiv.appendChild(soupsDiv);
menuDiv.appendChild(pizzaDiv);
menuDiv.appendChild(pastaDiv);
