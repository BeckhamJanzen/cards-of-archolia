// Open a pack and display the Archolia with names, images, grades, and prices
function openPack() {
    let container = document.getElementById("cardContainer");
    container.innerHTML = ""; // Clear previous cards

    for (let i = 0; i < 5; i++) {
        let randomArcholia = archolia[Math.floor(Math.random() * archolia.length)];
        let rarity = getRandomItem(rarities);
        let grade = getRandomItem(grades);

        // Calculate final price
        let finalPrice = randomArcholia.price * rarity.multiplier * grade.multiplier;

        // Create card element
        let archoliaElement = document.createElement("div");
        archoliaElement.classList.add("card", rarity.class);

        // Create image element
        let imageElement = document.createElement("img");
        let imageName = randomArcholia.name + "#3.png";
        imageElement.src = `images/${imageName}`;
        imageElement.alt = randomArcholia.name;
        imageElement.classList.add("pixel-art"); // Prevents blurring
        imageElement.onerror = function () {
            this.src = "images/default.png"; // Fallback if image is missing
        };

        // Create text elements
        let nameElement = document.createElement("p");
        nameElement.textContent = randomArcholia.name;

        let rarityElement = document.createElement("p");
        rarityElement.textContent = rarity.type;

        let gradeElement = document.createElement("p");
        gradeElement.textContent = "Grade: " + grade.grade;

        let priceElement = document.createElement("p");
        priceElement.textContent = "Price: $" + finalPrice.toFixed(2);

        // Create sell button
        let sellButton = document.createElement("button");
        sellButton.textContent = "Sell for $" + finalPrice.toFixed(2);
        sellButton.onclick = function () {
            sellCard(finalPrice);
            archoliaElement.remove(); // Remove card after selling
        };

        // Append elements
        archoliaElement.appendChild(imageElement);
        archoliaElement.appendChild(nameElement);
        archoliaElement.appendChild(rarityElement);
        archoliaElement.appendChild(gradeElement);
        archoliaElement.appendChild(priceElement);
        archoliaElement.appendChild(sellButton);
        container.appendChild(archoliaElement);
    }
}