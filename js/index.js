
const dropdownIcon = document.querySelector('.header__navbar__element--second');
const dropdownList = document.querySelector('.header__navbar__list');
const hidePage = document.documentElement.scrollHeight;
const buttonToTop = document.getElementById('goToTop');

//Evento despliegue de la lista en version movil 
dropdownIcon.addEventListener('click', () => {

    dropdownList.classList.toggle('header__navbar__list--event');
});

//Evento para la barra de progreso 
window.addEventListener('scroll', function () {
    const scrollActualPosition = window.scrollY + window.innerHeight;
    const result = (scrollActualPosition / hidePage) * 100;
    const progressBar = document.querySelector('.header__navbar__progressBarContainer__progressBar');
    progressBar.style.width = result + '%';

    //visibilidad de boton toTop 
    if (result > 25) {
        buttonToTop.style.display = 'block';
    } else {
        buttonToTop.style.display = 'none';
    }
});

//return button
buttonToTop.addEventListener('click', function () {
    buttonToTop.classList.add('goToTop__vibrating');
    setTimeout(function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'

        });
        buttonToTop.classList.remove('goToTop__vibrating');
    }, 200);

});