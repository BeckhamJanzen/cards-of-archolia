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