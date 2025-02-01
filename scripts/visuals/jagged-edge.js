// Apply jagged edges to the card based on its grade
function applyJaggedEdges(cardElement, cardData) {
    let variation = grades[cardData.grade].jaggedness;
    if (variation > 0) {
        cardElement.style.clipPath = generateJaggedEdge(variation);
    }
}


/**
 * Generates a unique jagged edge effect for cards
 * @param {number} variation - Max percentage deviation from straight edge (0-100)
 * @returns {string} - CSS clip-path polygon string
 */


function generateJaggedEdge(variation = 1) {



    const points = [];
    const segments = Math.max(1, 20);
    
    // Top edge (left to right)
    for(let i = 0; i <= segments; i++) {
        const x = (i / segments) * 100;
        const y = Math.random() * variation;
        points.push(`${x}% ${y}%`);
    }

    // Right edge (top to bottom)
    for(let i = 0; i <= segments; i++) {
        const y = (i / segments) * 100;
        const x = 100 - (Math.random() * variation);
        points.push(`${x}% ${y}%`);
    }

    // Bottom edge (right to left)
    for(let i = 0; i <= segments; i++) {
        const x = 100 - (i / segments) * 100;
        const y = 100 - (Math.random() * variation);
        points.push(`${x}% ${y}%`);
    }

    // Left edge (bottom to top)
    for(let i = 0; i <= segments; i++) {
        const y = 100 - (i / segments) * 100;
        const x = Math.random() * variation;
        points.push(`${x}% ${y}%`);
    }

    return `polygon(${points.join(', ')})`;
}