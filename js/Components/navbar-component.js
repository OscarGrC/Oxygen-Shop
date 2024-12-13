
class NavBarComponent {
    constructor() {
        //Elementos DOM 
        this.menuIcon = document.getElementById('menuIcon')
        this.dropdownList = document.getElementById('dropdownList')
        this.progressBar = document.getElementById('progressBar')
        this.whyUs = document.getElementById('whyUs')
        this.benefits = document.getElementById('benefits')
        this.prices = document.getElementById('prices')
        this.contact = document.getElementById('contact')

        this.initializeEvents()
    }
    initializeEvents() {
        this.menuIcon.addEventListener('click', () => this.dropdownMenu())
        this.whyUs.addEventListener('click', () => this.dropdownPage("mostPopular"))
        this.benefits.addEventListener('click', () => this.dropdownPage("secondSection"))
        this.prices.addEventListener('click', () => this.dropdownPage("pricing"))
        this.contact.addEventListener('click', () => this.dropdownPage("form"))
        window.addEventListener('scroll', () => this.updateProgressBar())
    }
    // Funcion para que el MenuIcon despliege la lista en movil añadiendo clase 
    dropdownMenu() {
        this.dropdownList.classList.toggle('header__navbar__list--event');
    }
    dropdownPage(targetId) {
        const targetSection = document.getElementsByClassName(targetId)[0];
        console.log(targetId)
        window.scrollTo({
            top: targetSection.offsetTop - 1,
            behavior: 'smooth'
        });
    }

    // Funcion actualiza el progressBar   
    updateProgressBar() {
        const scrollActualPosition = calculateScrollPosition()
        const progressBar = document.querySelector('.header__navbar__progressBarContainer__progressBar');
        progressBar.style.width = scrollActualPosition + '%';
    }
}
