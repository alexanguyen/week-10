var addListButton = document.getElementById("add-list");
console.log(addListButton);

addListButton.addEventListener("click", function() {
  console.log("button clicked");

  var addListPopUp = document.getElementById("add-list-popup");
  addListPopUp.style.display = "flex";

var closeListPopUp = document.getElementById("close-list-popup");

closeListPopUp.addEventListener("click", function() {
  addListPopUp.style.display = "none";
});

});

var addItemButton = document.getElementById("add-item");

addItemButton.addEventListener("click", function() {
  var addItemPopUp = document.getElementById("add-item-popup");
  addItemPopUp.style.display = "flex";

var closeItemPopUp = document.getElementById("close-item-popup");

closeItemPopUp.addEventListener("click", function() {
  addItemPopUp.style.display = "none";

})

});
