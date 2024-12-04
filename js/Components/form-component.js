import { FormValidator } from "../Validators/form-validator.js"
import { FormErrors } from "../Errors/form-errors.js"

class FormComponent {
    constructor() {
        // Elementos DOM
        this.nameInput = document.querySelector(".form__inputLine__inputUserName")
        this.emailInput = document.querySelector(".form__inputLine__inputUserEmail")
        this.checkbox = document.querySelector(".form__consent__checkbox")
        this.submitButton = document.getElementById("formButton")
        this.nameError = document.querySelector(".form__inputLine__error--name")
        this.emailError = document.querySelector(".form__inputLine__error--email")
        this.formError = new FormErrors();

        this.initializeEvents();
    }

    initializeEvents() {
        this.submitButton.addEventListener("click", () => this.ButtonClickEvent())
    }

    ButtonClickEvent() {
        const isValidForm = this.formValidation(this.nameInput.value, this.emailInput.value, this.checkbox.checked)
        if (isValidForm) {
            this.formSend(this.nameInput.value, this.emailInput.value, this.checkbox.checked)
        }
    }

    formValidation(form) {
        const validator = new FormValidator(this.nameInput.value, this.emailInput.value, this.checkbox.checked);
        if (validator.isValidName() && validator.isValidEmail() && validator.isValidCheck()) {
            this.emailError.classList.remove('form__showElement')
            this.nameError.classList.remove('form__showElement')
            this.checkbox.classList.remove('form__checkboxErr')
            return true;
        } else {
            if (!validator.isValidName()) {
                this.nameError.classList.add('form__showElement')
                this.nameError.textContent = this.formError.getNameError()
            } else {
                this.nameError.classList.remove('form__showElement')
            }
            if (!validator.isValidEmail()) {
                this.emailError.classList.add('form__showElement')
                this.emailError.textContent = this.formError.getEmailError()
            } else {
                this.emailError.classList.remove('form__showElement')
            }
            if (!validator.isValidCheck()) {
                this.checkbox.classList.add('form__checkboxErr')
            } else {
                this.checkbox.classList.remove('form__checkboxErr')
            }
            return false;
        }
    }

    formSend(name, email, isCheck) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: name,
                email: email,
                isCheck: isCheck,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))

    }
}

const formComponent = new FormComponent()
