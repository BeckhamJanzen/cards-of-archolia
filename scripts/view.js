// Create a card element based on the card data object
function createCardElementFromData(cardData) {
    const cardElement = document.createElement("div");
    // Use the rarity type (converted to lowercase) as a class name
    cardElement.classList.add("card", cardData.rarity.toLowerCase());

    // Create the image element
    const imageElement = document.createElement("img");
    imageElement.src = cardData.image;
    imageElement.alt = cardData.name;
    imageElement.classList.add("pixel-art");
    imageElement.onerror = function() {
        this.src = "images/default.png";
    };

    // Create text elements
    const nameElement = document.createElement("p");
    nameElement.textContent = cardData.name;

    const rarityElement = document.createElement("p");
    rarityElement.textContent = cardData.rarity;

    const gradeElement = document.createElement("p");
    gradeElement.textContent = "Grade: " + cardData.grade;

    const priceElement = document.createElement("p");
    priceElement.textContent = "Price: $" + cardData.finalPrice.toFixed(2);

    // Create sell button
    const sellButton = document.createElement("button");
    sellButton.textContent = "Sell for $" + cardData.finalPrice.toFixed(2);
    sellButton.onclick = function() {
        // When selling, remove the card from gameData and re-render
        sellCard(cardData.finalPrice);
        gameData.cards = gameData.cards.filter(card => card.id !== cardData.id);
        gameData.save();
        gameData.render();
    };

    // Append children to card element
    cardElement.appendChild(imageElement);
    cardElement.appendChild(nameElement);
    cardElement.appendChild(rarityElement);
    cardElement.appendChild(gradeElement);
    cardElement.appendChild(priceElement);
    cardElement.appendChild(sellButton);

    return cardElement;
}

function populateInfo() {
    const infoTab = document.getElementById("infoTab");

    // Build Grades info
    let html = `<h2>Game Info</h2>`;
    html += `<section class="info-section"><h3>Grades</h3><ul>`;
    grades.forEach(item => {
        html += `<li>Grade ${item.grade}: x${item.multiplier} (${(item.chance * 100).toFixed(1)}% chance)</li>`;
    });
    html += `</ul></section>`;

    // Build Rarities info
    html += `<section class="info-section"><h3>Rarities</h3><ul>`;
    rarities.forEach(item => {
        html += `<li>${item.type}: x${item.multiplier} (${(item.chance * 100).toFixed(1)}% chance)</li>`;
    });
    html += `</ul></section>`;

    // Build Base Prices info
    html += `<section class="info-section"><h3>Base Prices</h3><ul>`;
    archolia.forEach(card => {
        html += `<li>${card.name}: $${card.price.toFixed(2)}</li>`;
    });
    html += `</ul></section>`;

    // Update the info tab's innerHTML
    infoTab.innerHTML = html;
}
