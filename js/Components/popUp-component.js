
class PopUpComponent {
    constructor() {
        //Elementos DOM 
        this.popUp = document.getElementById('popUp')
        this.exitIcon = document.getElementById('exitIcon')
        this.popUpUserInput = document.getElementById('popUpUserInput')
        this.popUpButton = document.getElementById('popUpButton')
        this.popUpError = document.getElementById('popUpError')
        this.porUpErrosCode = new PopUpErrors()
        //PARA PROBAR FORZAMOS BORRAR ANTES DE PRODUCCION 
        sessionStorage.setItem('popUp', 'false')
        this.initializeEvents()
    }
    initializeEvents() {
        this.exitIcon.addEventListener('click', () => this.close())
        this.popUpButton.addEventListener('click', () => this.sendEmail())
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                this.close()
            }
        })
        document.addEventListener('click', (event) => {
            if (!this.popUp.contains(event.target)) {
                this.close()
            }
        })

        window.addEventListener('scroll', () => this.scrollEvent())
        setTimeout(() => {
            if (sessionStorage.getItem('popUp') != 'true') {
                this.open()
            }
        }, 5000)
    }

    close() {
        this.popUp.classList.remove('popUp__showElement')
    }

    open() {
        this.popUp.classList.add('popUp__showElement')
        sessionStorage.setItem('popUp', 'true')
    }
    scrollEvent() {
        const isLaunched = sessionStorage.getItem('popUp')
        if (calculateScrollPosition() >= 25 && isLaunched != 'true') {
            this.open()
        }
    }
    sendEmail() {
        const validator = new EmailValidator(this.popUpUserInput.value)
        if (validator.isValidEmail() === true) {
            this.send(this.popUpUserInput)
            this.popUpError.classList.remove('popUp__showErr')

        } else {
            this.popUpError.classList.add('popUp__showErr')
            this.popUpError.textContent = this.porUpErrosCode.getEmailError()
        }
    }

    send(email) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify({
                email: email,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then((response) => response.json())
            .then((json) => console.log(json))
        ///// 
        alert("Thanks to subscribe !!!!");

        this.close()
    }
}
