const navDrawer = document.getElementById('nav-drawer');
const bar = document.getElementById('bar');
const close = document.getElementById('close');

// Open Drawer
bar.addEventListener('click', () => {
    navDrawer.classList.add('active');
});

// Close Drawer
close.addEventListener('click', () => {
    navDrawer.classList.remove('active');
});

// Close Drawer on clicking outside
document.addEventListener('click', (e) => {
    if (!navDrawer.contains(e.target) && !bar.contains(e.target)) {
        navDrawer.classList.remove('active');
    }
});