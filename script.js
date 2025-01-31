function updateCash() {
    document.getElementById("cash").textContent = cash.toFixed(2);
}

function earnCoins() {
    let earnings = (Math.random() * 0.05 + 0.01).toFixed(2); // Earn between $0.01 - $0.05
    cash += parseFloat(earnings);
    updateCash();
}

function buyPack() {
    if (cash >= 1.00) {
        cash -= 1.00;
        updateCash();
        openPack();
    } else {
        alert("Not enough money!");
    }
}

// Generate a random Archolia rarity
function getRandomRarity() {
    let roll = Math.random(); // Random number between 0 and 1
    let cumulative = 0;
    
    for (let rarity of rarities) {
        cumulative += rarity.chance;
        if (roll < cumulative) {
            return rarity;
        }
    }
    return rarities[0]; // Fallback to common if needed
}

function getRandomGrade() {
    const roll = Math.random();
    let cumulativeChance = 0;

    // Check the cumulative chances for each grade
    for (let i = 0; i < grades.length; i++) {
        cumulativeChance += grades[i].chance;
        if (roll <= cumulativeChance) {
            return grades[i];  // Return the grade object containing both grade and multiplier
        }
    }

    // Default to grade 10 in case of rounding errors
    return grades[grades.length - 1]; // Last grade (grade 10) in case of issues
}


// Open a pack and display the Archolia with names, images, and grades
function openPack() {
    let container = document.getElementById("cardContainer");

    for (let i = 0; i < 5; i++) {
        let rarity = getRandomRarity();
        let randomArcholia = archoliaImages[Math.floor(Math.random() * archoliaImages.length)];
        let archoliaName = randomArcholia.name;

        // Generate grade for the card
        let grade = getRandomGrade();

        // Calculate base price
        let basePrice = archoliaBasePrices[archoliaName];

        // Calculate the final price: base price * grade multiplier * rarity multiplier
        let finalPrice = basePrice * grade.multiplier * rarity.multiplier;

        // Create a new Archolia element
        let archoliaElement = document.createElement("div");
        archoliaElement.classList.add("card", rarity.class);

        // Create an image element
        let imageElement = document.createElement("img");
        imageElement.src = "archolian-images/" + randomArcholia.file;
        imageElement.alt = archoliaName;
        imageElement.classList.add("pixel-art"); // Prevents blurring

        // Create name, rarity, grade, and price text elements
        let nameElement = document.createElement("p");
        nameElement.textContent = archoliaName;

        let rarityElement = document.createElement("p");
        rarityElement.textContent = rarity.type;

        let gradeElement = document.createElement("p");
        gradeElement.textContent = "Grade: " + grade.grade;

        let priceElement = document.createElement("p");
        priceElement.textContent = "Price: $" + finalPrice.toFixed(2);

        // Create sell button
        let sellButton = document.createElement("button");
        sellButton.textContent = "Sell for $" + finalPrice.toFixed(2);
        sellButton.onclick = function() {
            sellCard(finalPrice);
            archoliaElement.remove(); // Remove card from the display after selling
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

// Handle selling a card and updating the balance
function sellCard(amount) {
    cash += amount;
    updateCash();
}

// Info modal logic
function showInfo() {
    document.getElementById("infoModal").style.display = "block"; // Show the modal
}

function closeInfo() {
    document.getElementById("infoModal").style.display = "none"; // Hide the modal
}

// Close the modal if the user clicks anywhere outside of the modal content
window.onclick = function(event) {
    if (event.target == document.getElementById("infoModal")) {
        closeInfo();
    }
}
