import { calculateScrollPosition } from '../Utils/scrollPosition.js';

class GoToTop {
    constructor() {
        this.buttonToTop = document.getElementById('goToTop');
        this.initializeEvents()
    }
    initializeEvents() {
        this.buttonToTop.addEventListener('click', () => this.eventClick())
        window.addEventListener('scroll', () => this.visibility())

    }

    eventClick() {
        this.buttonToTop.classList.add('goToTop__vibrating');
        setTimeout(() => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'

            });
            this.buttonToTop.classList.remove('goToTop__vibrating');
        }, 200);
    }

    visibility() {
        const scrollPosition = calculateScrollPosition();
        if (scrollPosition >= 25) {
            this.buttonToTop.classList.add('goToTop__showElement')
        } else {
            this.buttonToTop.classList.remove('goToTop__showElement')
        }

    }
}

const goToTop = new GoToTop();