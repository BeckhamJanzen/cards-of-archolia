function updateCash() {
    document.getElementById("cash").textContent = gameData.cash.toFixed(2);
}

function earnCoins() {
    let earnings = (Math.random() * 0.05 + 0.01).toFixed(2); // Earn between $0.01 - $0.05
    gameData.cash += parseFloat(earnings);
    gameData.save(); // Save the updated cash balance
    updateCash();
}

function buyPack() {
    if (gameData.cash >= 1.00) {
        gameData.cash -= 1.00;
        gameData.save(); // Save the updated cash balance
        updateCash();
        openPack();
    }
}

function sellCard(amount) {
    gameData.cash += amount;
    gameData.save(); // Save the updated cash balance
    updateCash();
}

// Close modal when clicking outside of it
window.onclick = function (event) {
    if (event.target == document.getElementById("infoModal")) {
        closeInfo();
    }
};

function switchTab(tabId) {
    // Hide all tab content
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });

    // Remove 'active' from all tab buttons
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show the selected tab content
    document.getElementById(tabId).classList.add('active');

    // Add 'active' class to the clicked tab
    event.currentTarget.classList.add('active');
}


window.onload = function() {
    populateInfo();
    gameData.load(); // Load saved data (including cash)
    gameData.render(); // Render cards and update cash display
};

// Example utility to pick a random item from an array by weighted chance
function getRandomItem(array) {
    let roll = Math.random();
    let cumulativeChance = 0;
    for (let item of array) {
        cumulativeChance += item.chance;
        if (roll < cumulativeChance) {
            return item;
        }
    }
    return array[array.length - 1]; // Fallback in case of rounding errors
}

// Calculate final price from base price, rarity multiplier, and grade multiplier
function calculatePrice(card, rarity, grade) {
    return card.price * rarity.multiplier * grade.multiplier;
}