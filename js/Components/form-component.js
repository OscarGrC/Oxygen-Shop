import { Form } from "../Models/form.js"
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
        const form = new Form(
            this.nameInput.value,
            this.emailInput.value,
            this.checkbox.checked
        );
        const isValidForm = this.formValidation(form)
        if (isValidForm) {
            this.formSend(form)

        }
    }

    formValidation(form) {
        const validator = new FormValidator(form);
        if (validator.isValidName() && validator.isValidEmail() && validator.isValidCheck()) {
            this.checkbox.style.border = "1px solid gray"
            this.emailError.style.visibility = 'hidden'
            this.nameError.style.visibility = 'hidden'
            return true;
        } else {
            if (!validator.isValidName()) {
                this.nameError.style.visibility = 'visible'
                this.nameError.textContent = this.formError.getNameError()
            } else {
                this.nameError.style.visibility = 'hidden'
            }
            if (!validator.isValidEmail()) {
                this.emailError.style.visibility = 'visible'
                this.emailError.textContent = this.formError.getEmailError()
            } else {
                this.emailError.style.visibility = 'hidden'
            }
            if (!validator.isValidCheck()) {
                //  alert(this.formError.getCheckError());
                this.checkbox.style.border = "2px solid red"
            } else {
                this.checkbox.style.border = "1px solid gray"
            }
            return false;
        }
    }

    formSend(form) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                name: form.name,
                email: form.email,
                isCheck: form.isCheck,
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
