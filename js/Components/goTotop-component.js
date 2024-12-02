import { calculateScrollPosition } from '../Utils/utils.js';

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
        const buttonToTop = this.buttonToTop;
        buttonToTop.style.display = (scrollPosition > 25) ? 'block' : 'none';
    }
}

const goToTop = new GoToTop();