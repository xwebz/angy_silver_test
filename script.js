const form = document.getElementById('myForm');            // Language / Location Menu
const change = document.getElementById('preferences-btn'); // Button within the Invitation to reopen Menu

form.style.visibility = 'visible';  // Form is what the user sees first
change.style.visibility = 'hidden'; // Hidden button to reopen Menu, when Menu is visible

// When Menu Preferences Summited, Hide Form and Show Button to reopen it
form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.style.visibility = 'hidden';
    change.style.visibility = 'visible';
});

// When Button to reopen Menu clicked, hide button and reopen Menu
change.addEventListener('click', function(event) {
    event.preventDefault();
    change.style.visibility = 'hidden';
    form.style.visibility = 'visible';
});
