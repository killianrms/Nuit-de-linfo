var nombreDeClics = 0;

    // Fonction à exécuter lors du clic sur le lien
    function onClickLinkHandler(event) {
        // Empêche le comportement par défaut du lien (naviguer vers une nouvelle page)
        event.preventDefault();

        // Obtenez une référence vers la div que vous souhaitez manipuler
        var maDiv = document.getElementById('hiddenImage');

        // Incrémentez le compteur de clics
        nombreDeClics++;

        // Si le nombre de clics est inférieur ou égal à 10, toggle la classe 'cacher'
        if (nombreDeClics <= 10) {
            maDiv.classList.toggle('hidden');
        }
    }

    // Obtenez une référence vers le lien que vous souhaitez détecter
    var monLien = document.getElementById('copyrightButton');

    // Ajoutez un écouteur d'événement 'click' au lien
    monLien.addEventListener('click', onClickLinkHandler);
