// We'll use a global instance of GameData
const gameData = new GameData();

// A simple counter to give each card a unique id
let cardIdCounter = 0;

function openPack() {
    let newCards = [];
    // Generate 5 cards for the pack
    for (let i = 0; i < 5; i++) {
        const randomArch = archolia[Math.floor(Math.random() * archolia.length)];
        const rarity = getRandomItem(rarities);
        const grade = getRandomItem(grades);
        const finalPrice = calculatePrice(randomArch, rarity, grade);

        // Build the card object (including a unique id)
        const card = {
            id: cardIdCounter++, // Unique identifier
            name: randomArch.name,
            rarity: rarity.type,
            grade: grade.grade,
            basePrice: randomArch.price,
            finalPrice: finalPrice,
            image: `images/${randomArch.name}#3.png`
        };

        newCards.push(card);
    }

    // Add the new cards to gameData
    gameData.addCards(newCards);
    // Save the updated gameData and re-render the UI
    gameData.save();
    gameData.render();
}
