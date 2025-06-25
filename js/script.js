document.addEventListener('DOMContentLoaded', () => {
    // Récupérer toutes les cartes de projets
    const projectCards = document.querySelectorAll('.project-card');
    // Récupérer tous les boutons de fermeture des modales
    const closeButtons = document.querySelectorAll('.close-button');

    // Ajouter un écouteur d'événements à chaque carte de projet
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId; // Récupère l'ID du projet
            const modal = document.getElementById(`modal-${projectId}`); // Trouve la modale correspondante

            if (modal) {
                modal.style.display = 'block'; // Affiche la modale
            }
        });
    });

    // Ajouter un écouteur d'événements à chaque bouton de fermeture
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.project-modal'); // Trouve la modale parente du bouton
            if (modal) {
                modal.style.display = 'none'; // Cache la modale
            }
        });
    });

    // Cacher la modale si l'utilisateur clique en dehors de son contenu
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('project-modal')) {
            event.target.style.display = 'none';
        }
    });
});