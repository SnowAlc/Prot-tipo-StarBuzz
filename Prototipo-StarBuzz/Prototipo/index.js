document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const topbar = document.querySelector('.topbar');

    hamburger.addEventListener('click', function() {
        topbar.classList.toggle('active');
        hamburger.classList.toggle('active');
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulário enviado com sucesso!');
        form.reset();
    });
});
