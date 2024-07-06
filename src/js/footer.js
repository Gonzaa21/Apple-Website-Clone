document.querySelectorAll('.navegation-column h3, .navegation-column .material-symbols-outlined')
.forEach((element) => {
    element.addEventListener('click', () => {
        const column = element.parentElement;
        column.classList.toggle('open');
        const icon = column.querySelector('.material-symbols-outlined');
        icon.classList.toggle('rotate');
    });
});