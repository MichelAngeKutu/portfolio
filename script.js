// Project filter for projects.html

// Get all filter buttons and all project cards
const buttons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');
// When a button is clicked, show only the matching projects
buttons.forEach(function (button) {
    button.addEventListener('click', function () {
        const filter = button.dataset.filter;
        // Show matching projects, hide the others
        projects.forEach(function (project) {
            const category = project.dataset.category;

            if (filter === 'all' || category === filter) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
        // Move the "active" highlight to the clicked button
        buttons.forEach(function (b) {
            b.classList.remove('active');
        });
        button.classList.add('active');

    });
});
