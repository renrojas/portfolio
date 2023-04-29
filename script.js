var menuElement = document.getElementById("myMenu"); //selects the UL
var checkboxElement = document.getElementById("navi-toggle");
// adds click to ul to close the hamburger menu
menuElement.addEventListener("click", function() {
  checkboxElement.checked = false;
});