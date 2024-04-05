import { Player, arr1 } from "./player";

function generateNames(names: Player[]) {
    let items = "";
    for (let i = 0; i < names.length; i++) {
        items += '<p>' + names[i].firstName + ' ' + names[i].lastName + '</p>';
    }
    return items;
}

// Function to render player names into the playerNamesContainer
function renderPlayerNames() {
    const playerNamesContainer = document.getElementById("playerNames");
    if (playerNamesContainer) {
        playerNamesContainer.innerHTML = generateNames(arr1);
    }
}

// Call the renderPlayerNames function when the DOM content is loaded
document.addEventListener("DOMContentLoaded", renderPlayerNames);

// Function to toggle visibility of Challenge 1 section
function toggleChallenge1Section() {
    const challenge1Section = document.getElementById("challenge1");
    if (challenge1Section) {
        // Toggle the display style of the section
        challenge1Section.style.display = challenge1Section.style.display === "none" ? "block" : "none";
    }
}

// Add event listener to the button when the DOM content is loaded
document.addEventListener("DOMContentLoaded", function () {
    // Get the button element
    const toggleChallenge1Button = document.getElementById("toggleChallenge1Button");
    // Add event listener to the button
    if (toggleChallenge1Button) {
        toggleChallenge1Button.addEventListener("click", toggleChallenge1Section);
    }
});