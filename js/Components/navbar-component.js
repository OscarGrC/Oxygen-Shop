
class NavBarComponent {
    constructor() {
        //Elementos DOM 
        this.menuIcon = document.getElementById('menuIcon')
        this.dropdownList = document.getElementById('dropdownList')
        this.progressBar = document.getElementById('progressBar')


        this.initializeEvents()
    }
    initializeEvents() {
        this.menuIcon.addEventListener('click', () => this.dropdownMenu())
        window.addEventListener('scroll', () => this.updateProgressBar())
    }
    // Funcion para que el MenuIcon despliege la lista en movil añadiendo clase 
    dropdownMenu() {
        this.dropdownList.classList.toggle('header__navbar__list--event');
    }
    // Funcion actualiza el progressBar   
    updateProgressBar() {
        const scrollActualPosition = calculateScrollPosition()
        const progressBar = document.querySelector('.header__navbar__progressBarContainer__progressBar');
        progressBar.style.width = scrollActualPosition + '%';
    }
}
