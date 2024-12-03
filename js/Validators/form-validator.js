export class FormValidator {

    constructor(form) {
        this.name = form.name
        this.email = form.email
        this.isCheck = form.isCheck
    }

    isValidName() {
        if (this.name.length >= 2 && this.name.length <= 100) {
            return true
        } else {
            return false
        }
    }
    isValidEmail() {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        if (emailRegex.test(this.email)) {
            return true
        } else {
            return false
        }
    }
    isValidCheck() {
        if (this.isCheck === true) {
            return true
        } else {
            return false
        }

    }
    isValid() {
        if (this.isValidName() === true && this.isValidEmail() === true && this.isValidCheck() === true) {
            return true
        } else {
            return false
        }
    }

}