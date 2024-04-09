var monLien = document.getElementById("copyrightButton");
monLien.addEventListener("click", onClickLinkHandler);

document.addEventListener("DOMContentLoaded", function () {
  var homeButton = document.querySelector("#first");
  var audio = new Audio("prout.mp3");
  homeButton.addEventListener("click", function () {
    audio.play();
  });
});

var nombreDeClics = 0;
function onClickLinkHandler(event) {
    event.preventDefault();
    var maDiv = document.getElementById('hiddenImage');
    nombreDeClics++;
    if (nombreDeClics > 10) {
        maDiv.classList.remove('hidden');
    }
}
var monLien = document.getElementById('copyrightButton');
monLien.addEventListener('click', onClickLinkHandler);