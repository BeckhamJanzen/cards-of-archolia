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

// Get a random item from an array based on weighted chance
function getRandomItem(array) {
    let roll = Math.random();
    let cumulativeChance = 0;

    for (let item of array) {
        cumulativeChance += item.chance;
        if (roll < cumulativeChance) {
            return item;
        }
    }
    return array[array.length - 1]; // Fallback in case of floating-point errors
}

// Handle selling a card and updating the balance
function sellCard(amount) {
    cash += amount;
    updateCash();
}

// Info modal logic
function showInfo() {
    document.getElementById("infoModal").style.display = "block"; // Show modal
}

function closeInfo() {
    document.getElementById("infoModal").style.display = "none"; // Hide modal
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
