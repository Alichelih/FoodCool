
    // Sélectionner le bouton et l'élément body
    const toggleButton = document.getElementById('theme-toggle');
    const body = document.body;

    // Écouter les clics sur le bouton
    toggleButton.addEventListener('click', () => {
        // Basculer la classe "dark-mode" sur le body
        body.classList.toggle('dark-mode');

        // Changer le texte du bouton en fonction du thème actuel
        if (body.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Light ';
        } else {
            toggleButton.textContent = 'Dark ';
        }
    });
