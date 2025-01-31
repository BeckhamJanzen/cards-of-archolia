let cash = 5.00;

// Possible rarities and their odds
const rarities = [
    { type: "Common", chance: 0.75, class: "common", multiplier: 1.0 },
    { type: "Uncommon", chance: 0.15, class: "uncommon", multiplier: 2.0 },
    { type: "Rare", chance: 0.07, class: "rare", multiplier: 3.0 },
    { type: "Legendary", chance: 0.025, class: "legendary", multiplier: 5.0 },
    { type: "Mythic", chance: 0.005, class: "mythic", multiplier: 50.0 }
];

// Base prices for each Archolia
const archoliaBasePrices = {
    Glorpo: 0.05, // 5 cents
    Poisin: 0.02,  // 2 cents
    Prettymid: 0.01 // 1 cent
};

// Define the base multiplier for each grade from 1 to 10
const gradeMultipliers = {
    7: 1.0,
    8: 2.0,
    9: 3.0,
    10: 10.0
};

const grades = [
    { grade: 7, chance: 0.02, multiplier: 1.0 },  // 10% chance for grade 7
    { grade: 8, chance: 0.08, multiplier: 2.0 },  // 20% chance for grade 8
    { grade: 9, chance: 0.20, multiplier: 3.0 },  // 30% chance for grade 9
    { grade: 10, chance: 0.70, multiplier: 10.0 } // 40% chance for grade 10
];

const archoliaImages = [
    { name: "Glorpo", file: "glorpo.png" },
    { name: "Poisin", file: "poisin.png" },
    { name: "Prettymid", file: "prettymid.png" }
];