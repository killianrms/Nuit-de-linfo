    if (window.addEventListener) {
      var keys = [],
        exodiaCode = "101,120,111,100,105,97"; // Les codes ASCII pour 'e', 'e', 'o', 'd', 'i', 'a'

      window.addEventListener(
        "keydown",
        function (e) {
          keys.push(e.key.charCodeAt(0));
          if (keys.toString().indexOf(exodiaCode) >= 0) {
            alert("Bien joué ! Vous avez découvert l'enchaînement 'exodia'");
            window.location.href = "exodia.html"; // Remplacez par le chemin de votre nouvelle page
            keys = []; // Réinitialise le tableau des touches après avoir détecté l'enchaînement
          }
        },
        true
      );
    }