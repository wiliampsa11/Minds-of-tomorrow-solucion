// Sombra en la barra de navegación al hacer scroll
window.addEventListener('scroll', function () {
    var nav = document.getElementById('nav');
    if (nav) {
        nav.style.boxShadow = window.scrollY > 50 ? '0 2px 12px rgba(0, 0, 0, .12)' : 'none';
    }
}, { passive: true });
