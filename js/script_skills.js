// js/script_skills.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to toggle the visibility of a skill list
    function toggleSkillList(event) {
        const clickedElement = event.target;
        let targetList;

        // Check if it's a main branch title or a sub-skill name
        if (clickedElement.classList.contains('branch-title')) {
            // For main branch, target the immediate sibling .skill-list
            targetList = clickedElement.nextElementSibling;
        } else if (clickedElement.classList.contains('skill-name')) {
            // For sub-skill, target the immediate sibling .sub-skill-list
            targetList = clickedElement.nextElementSibling;
        }

        if (targetList) {
            targetList.classList.toggle('collapsed');
            // Optional: Change icon to indicate expanded/collapsed state (future enhancement)
        }
    }

    // Add event listeners to main branch titles
    const branchTitles = document.querySelectorAll('.branch-title');
    branchTitles.forEach(title => {
        title.addEventListener('click', toggleSkillList);
    });

    // Add event listeners to skill names within branches
    const skillNames = document.querySelectorAll('.skill-name');
    skillNames.forEach(skill => {
        skill.addEventListener('click', toggleSkillList);
    });
});