const toggleBtn = document.querySelector('.sidebar__toggle');
const closeBtn = document.querySelector('.sidebar__close-btn');
const sidebar = document.querySelector('.sidebar');
const overlay = document.querySelector('.overlay');

toggleBtn.addEventListener('click', () => {
    toggleSidebar();
});

closeBtn.addEventListener('click', () => {
    toggleSidebar();
});

overlay.addEventListener('click', () => {
    hideSidebar();
});

function toggleSidebar() {
    sidebar.classList.toggle('show__sidebar');
    overlay.classList.toggle('show__overlay');
}

function hideSidebar() {
    sidebar.classList.remove('show__sidebar');
    overlay.classList.remove('show__overlay');
}
