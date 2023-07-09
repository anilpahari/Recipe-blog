let addIngredientsBtn = document.getElementById("addIngredientsBtn");
let ingredientsList = document.querySelector(".ingredientsList");
let ingredientsDiv = document.querySelectorAll(".ingredientsDiv")[0];
addIngredientsBtn.addEventListener("click", function () {
  let newIngredientsBtn = ingredientsDiv.cloneNode(true);
  let input = newIngredientsBtn.getElementsByTagName("input")[0];
  input.value = "";
  ingredientsList.appendChild(newIngredientsBtn);
});

// function confirmDeleteRecipe(event) {
//   const confirmation = confirm("Are you sure you want to delete the recipe?");
//   if (!confirmation) {
//     event.preventDefault();
//   }
// }
