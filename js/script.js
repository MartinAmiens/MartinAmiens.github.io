document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'project-card'
    const projectCards = document.querySelectorAll('.project-card');
    // Select all elements with the class 'close-button' (for any modal)
    const closeButtons = document.querySelectorAll('.close-button');

    // Add click event listeners to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            const projectId = card.dataset.projectId; // Get the ID from data-project-id attribute
            const modal = document.getElementById(`modal-${projectId}`); // Find the corresponding modal

            if (modal) {
                modal.style.display = 'block'; // Show the modal
            }
        });
    });

    // Add click event listeners to each close button
    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.project-modal'); // Find the closest parent modal
            if (modal) {
                modal.style.display = 'none'; // Hide the modal
            }
        });
    });

    // Hide the modal if the user clicks outside of the modal content
    window.addEventListener('click', (event) => {
        // Check if the clicked element has the 'project-modal' class, meaning it's the backdrop
        if (event.target.classList.contains('project-modal')) {
            event.target.style.display = 'none'; // Hide that specific modal
        }
    });
});