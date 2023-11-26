// Get the reference to the "admin" div
const adminDiv = document.getElementById("admin");

// Get the reference to the "CouresKids" div
const courseDiv = document.getElementById("CouresKids");

// Get today's date
const today = new Date();

// Calculate the date for the start of the week (Sunday)
const startOfWeek = new Date(today);
const diff = today.getDate() - today.getDay(); // Get the difference between today's date and the start of the week
startOfWeek.setDate(diff); // Setting to the first day of the week (Sunday)

// Format the date to display
const options = { year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = startOfWeek.toLocaleDateString('en-US', options);

// Create a new element to display the date
const dateElement = document.createElement("div");
dateElement.textContent = ` ${formattedDate} `;
dateElement.style.position = "absolute";
dateElement.style.top = "1px"; // Adjust the position above the CouresKids div
dateElement.style.left = "-5%"; // Center horizontally
dateElement.style.transform = "translateX(-50%)"; // Center horizontally
dateElement.style.backgroundColor = "#30325ae0";  // Adjust background color
dateElement.style.backgroundColor = "transparent"; // Set background to transparent
dateElement.style.padding = "5px"; // Adjust padding
dateElement.style.border = "1px "; // Add border
dateElement.style.fontFamily = "Arial, sans-serif"; // Change font family
dateElement.style.color = "Gray"; // Change font color (e.g., blue)


// Insert the date element above the Course div without affecting the positions of Course and Tutors divs
adminDiv.insertBefore(dateElement, courseDiv);







document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.getElementById("moreButton");
    const hiddenListItems = document.querySelectorAll(".hidden");

    moreButton.addEventListener("click", function () {
        hiddenListItems.forEach(item => {
            item.style.display = "list-item"; // Show the hidden items
        });

        // Remove the button after all items are displayed
        moreButton.style.display = "none";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.getElementById("moreButton2");
    const hiddenListItems = document.querySelectorAll(".hidden2");

    moreButton.addEventListener("click", function () {
        hiddenListItems.forEach(item => {
            item.style.display = "list-item"; // Show the hidden items
        });

        // Remove the button after all items are displayed
        moreButton.style.display = "none";
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.getElementById("moreButton3");
    const hiddenListItems = document.querySelectorAll(".hidden3");

    moreButton.addEventListener("click", function () {
        hiddenListItems.forEach(item => {
            item.style.display = "list-item"; // Show the hidden items
        });

        // Remove the button after all items are displayed
        moreButton.style.display = "none";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const moreButton = document.getElementById("moreButton4");
    const hiddenListItems = document.querySelectorAll(".hidden4");

    moreButton.addEventListener("click", function () {
        hiddenListItems.forEach(item => {
            item.style.display = "list-item"; // Show the hidden items
        });

        // Remove the button after all items are displayed
        moreButton.style.display = "none"; 
    });
});
