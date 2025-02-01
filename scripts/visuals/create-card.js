// Create a card element based on the card data object
function createCardElementFromData(cardData) {
    const cardElement = createCardContainer(cardData);
    const imageElement = createCardImage(cardData);
    const textElements = createCardTextElements(cardData);
    const sellButton = createSellButton(cardData);

    // Append all elements to the card container
    appendCardElements(cardElement, imageElement, textElements, sellButton);

    // Apply unique jagged edges based on grade
    applyJaggedEdges(cardElement, cardData);

    return cardElement;
}

// Create the card container div and add base classes
function createCardContainer(cardData) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("card", cardData.rarity.toLowerCase(), `grade-${cardData.grade}`);
    return cardElement;
}

// Create the card image element
function createCardImage(cardData) {
    const imageElement = document.createElement("img");
    imageElement.src = cardData.image;
    imageElement.alt = cardData.name;
    imageElement.classList.add("pixel-art");
    imageElement.onerror = function () {
        this.src = "images/default.png";
    };
    return imageElement;
}

// Create all text elements for the card
function createCardTextElements(cardData) {
    const nameElement = createTextElement(cardData.name);
    const rarityElement = createTextElement(cardData.rarity);
    const gradeElement = createTextElement(`Grade: ${cardData.grade}`);
    const priceElement = createTextElement(`Price: $${cardData.finalPrice.toFixed(2)}`);

    return { nameElement, rarityElement, gradeElement, priceElement };
}

// Helper function to create a text element
function createTextElement(text) {
    const element = document.createElement("p");
    element.textContent = text;
    return element;
}

// Create the sell button for the card
function createSellButton(cardData) {
    const sellButton = document.createElement("button");
    sellButton.textContent = `Sell for $${cardData.finalPrice.toFixed(2)}`;
    sellButton.onclick = function () {
        sellCard(cardData.finalPrice);
        gameData.cards = gameData.cards.filter(card => card.id !== cardData.id);
        gameData.save();
        gameData.render();
    };
    return sellButton;
}

// Append all child elements to the card container
function appendCardElements(cardElement, imageElement, textElements, sellButton) {
    cardElement.appendChild(imageElement);
    cardElement.appendChild(textElements.nameElement);
    cardElement.appendChild(textElements.rarityElement);
    cardElement.appendChild(textElements.gradeElement);
    cardElement.appendChild(textElements.priceElement);
    cardElement.appendChild(sellButton);
}