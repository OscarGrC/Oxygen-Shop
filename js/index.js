
const dropdownIcon = document.querySelector('.header__navbar__element--second');
const dropdownList = document.querySelector('.header__navbar__list');
const hidePage = document.documentElement.scrollHeight;
const buttonToTop = document.getElementById('goToTop');
const buttonForm = document.getElementById('formButton');

//EVENTOS

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

//comprobacion previa envio form 

buttonForm.addEventListener('click', function () {
    const nameInput = document.querySelector(".form__inputLine__inputUserName");
    const emailInput = document.querySelector(".form__inputLine__inputUserEmail");
    const consentCheckbox = document.querySelector(".form__consent__checkbox");
    const isNameValid = validateName(nameInput);
    const isEmailValid = validateEmail(emailInput);
    const isConsentGiven = validateConsent(consentCheckbox);
    const nameError = document.querySelector(".form__inputLine__error--name");
    const emailError = document.querySelector(".form__inputLine__error--email");
    const checkBoxForm = document.querySelector(".form__consent__checkbox");
    if (isNameValid && isEmailValid && isConsentGiven) {

        TODO
    } else {
        if (!isNameValid) {
            nameError.style.visibility = 'visible';
        }
        if (!isEmailValid) {
            emailError.style.visibility = 'visible';
        }
        if (!isConsentGiven) {
            checkBoxForm.style.border = "2px solid red";
        }
        if (isNameValid) {
            nameError.style.visibility = 'hidden';
        }
        if (isEmailValid) {
            emailError.style.visibility = 'hidden';
        }
        if (isConsentGiven) {
            checkBoxForm.style.border = "1px solid gray";
        }


    }
});



//FUNCIONES
// Funciones de validación
function validateName(input) {
    const value = input.value.trim();
    if (value.length >= 2 && value.length <= 100) {
        return true
    } else {
        return false
    }
}

function validateEmail(input) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(input.value.trim());
}

function validateConsent(checkbox) {
    return checkbox.checked;
}