class GameData {
    constructor() {
        this.cards = [];
        this.cash = 5.00; // Default starting cash
    }

    // Add one card object
    addCard(card) {
        this.cards.push(card);
    }

    // Add multiple card objects at once
    addCards(newCards) {
        this.cards.push(...newCards);
    }

    // Save the current cards and cash to localStorage
    save() {
        const saveData = {
            cards: this.cards,
            cash: this.cash
        };
        localStorage.setItem("gameData", JSON.stringify(saveData));
    }

    // Load cards and cash from localStorage
    load() {
        const data = localStorage.getItem("gameData");
        if (data) {
            const saveData = JSON.parse(data);
            this.cards = saveData.cards || [];
            // Convert the cash value to a number to ensure toFixed() works
            this.cash = Number(saveData.cash) || 5.00;
        }
    }

    // Render the card data to the HTML container
    render() {
        const container = document.getElementById("cardContainer");
        container.innerHTML = ""; // Clear current display

        this.cards.forEach(cardData => {
            const cardElement = createCardElementFromData(cardData);
            container.appendChild(cardElement);
        });

        // Update the cash display
        updateCash();
    }
}