
class PricingComponent {
    constructor() {
        //Elementos DOM 
        this.select = document.getElementById('select')
        this.basicPrice = document.getElementById('BascicPrice')
        this.premiunPrice = document.getElementById('PremiunPrice')
        this.professionalPrice = document.getElementById('ProfessionalPrice')

        this.initializeEvents()
    }
    initializeEvents() {
        this.select.addEventListener('change', () => this.changeEvent())
    }

    async changeEvent() {
        const json = await this.changeValue()
        const filterJson = this.filterJson(json)
        const selectOption = this.select.value;
        this.changePrices(filterJson, selectOption)
    }

    async changeValue() {
        try {
            const request = await fetch('https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/eur.json')
            try {
                const json = await request.json()
                return json
            } catch (err) {
                console.log(ApiErrors.getJsonError())
            }
        } catch (err) {
            console.log(ApiErrors.getServerError())
        }
    }
    filterJson(data) {
        return {
            usd: data.eur.usd,
            gbp: data.eur.gbp
        };
    }
    changePrices(filterJson, selectOption) {
        switch (selectOption) {
            case "Eur": {
                this.basicPrice.textContent = "0€"
                this.premiunPrice.textContent = "60€"
                this.professionalPrice.textContent = "25€"
                break;
            }
            case "Usd": {
                let pricePremiun = (filterJson.usd * 60).toFixed(2)
                let pricePro = (filterJson.usd * 25).toFixed(2)
                this.basicPrice.textContent = "$0"
                this.premiunPrice.textContent = "$" + pricePremiun
                this.professionalPrice.textContent = "$" + pricePro
                break;
            }
            case "Gbp": {
                let pricePremiun = (filterJson.gbp * 60).toFixed(2)
                let pricePro = (filterJson.gbp * 25).toFixed(2)
                this.basicPrice.textContent = "£0"
                this.premiunPrice.textContent = "£" + pricePremiun
                this.professionalPrice.textContent = "£" + pricePro
                break;
            }

        }
    }
}

