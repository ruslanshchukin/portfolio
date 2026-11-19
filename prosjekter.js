const buttons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

buttons.forEach(btn => {
    btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;

    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    projects.forEach(project => {
        const categories = project.dataset.category.split(' ');
        const show = filter === 'all' || categories.includes(filter);
        if(show) {
            project.classList.remove('hidden');
        }else {
            project.classList.add('hidden');
        }
    });
    });
});

