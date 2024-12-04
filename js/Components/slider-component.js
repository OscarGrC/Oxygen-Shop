
class SliderComponent {
    constructor(sliderId) {
        //Elementos DOM 
        this.slider = document.getElementById(sliderId)
        this.nextButton = document.getElementById('nextBtn')
        this.backButton = document.getElementById('backBtn')
        this.actualImg = document.getElementById('sliderImg')
        this.perls = [
            document.getElementById("perl0"),
            document.getElementById("perl1"),
            document.getElementById("perl2"),
            document.getElementById("perl3"),
            document.getElementById("perl4")
        ];
        this.imgIndex = 0
        this.imageRepository = [
            "resources/slider0.jpg",
            "resources/slider1.jpg",
            "resources/slider2.jpg",
            "resources/slider3.jpg",
            "resources/slider4.jpg"
        ]
        this.perls[0].style.backgroundColor = "white"
        this.initializeEvents()
    }
    initializeEvents() {
        this.nextButton.addEventListener('click', () => this.nextImg())
        this.backButton.addEventListener('click', () => this.backImg())

        this.automaticNext()
    }

    nextImg() {
        this.imgIndex++
        if (this.imgIndex >= this.imageRepository.length) {
            this.imgIndex = 0
        }
        this.actualImg.src = this.imageRepository[this.imgIndex]
        this.selectPerl(this.imgIndex)


    }

    backImg() {
        this.imgIndex--
        if (this.imgIndex < 0) {
            this.imgIndex = (this.imageRepository.length - 1)
        }
        this.actualImg.src = this.imageRepository[this.imgIndex]
        this.selectPerl(this.imgIndex)
    }

    selectPerl(index) {
        this.perls.forEach((element, index) => element.style.backgroundColor = "grey")
        this.perls[index].style.backgroundColor = "white";
    }

    automaticNext() {
        setInterval(() => {
            this.nextImg();
        }, 5000);
    }
}

const slider = new SliderComponent("slider");