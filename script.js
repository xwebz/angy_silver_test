const form = document.getElementById('myForm');             // Language / Location Menu
const change = document.getElementById('preferences-btn');  // Button within the Invitation to reopen Menu

const languageSelect = document.getElementById("language"); // Language selection
const locationSelect = document.getElementById("location"); // Location selection

const greeting = document.getElementById("welcome-message") // Welcome Title
const message  = document.getElementById('main-message')    // Invitation Message

// Set elements visibility
form.style.visibility = 'visible';    // Form is what the user sees first
change.style.visibility = 'hidden';   // Hidden button to reopen Menu, when Menu is visible
greeting.style.visibility = 'hidden'; // Hidden Welcome Title
message.style.visibility = 'hidden';  // Hidden Main Invitation Message

// When Menu Preferences Summited, Hide Form and Show Button to reopen it
form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.style.visibility = 'hidden';
    change.style.visibility = 'visible';
    greeting.style.visibility = 'visible';
    message.style.visibility = 'visible';
});

// When Button to reopen Menu clicked, hide button and reopen Menu
change.addEventListener('click', function(event) {
    event.preventDefault();
    form.style.visibility = 'visible';
    change.style.visibility = 'hidden';
    greeting.style.visibility = 'hidden';
    message.style.visibility = 'hidden';
});

// Update greeting based on language and location selection
languageSelect.addEventListener('change', function() {
    updateGreeting();
});

locationSelect.addEventListener('change', function() {
    updateGreeting();
});

function updateGreeting() {
    const language = languageSelect.value;
    const location = locationSelect.value;

    if (language === 'english') {
        if (location === 'ontario') {
            greeting.textContent = 'Welcome to Ontario';
        }
        else if (location === 'toronto') {
            greeting.textContent = 'Welcome to Toronto';
        }
        else if (location === 'massachusetts') {
            greeting.textContent = 'Welcome to Massachusetts';
        }
        message.textContent = 'We are delighted to invite you to our upcoming Jewelry Event, which will take place on April 15th, 2023, at 15:00. The event promises to be a celebration of exquisite craftsmanship and unparalleled beauty, showcasing an array of stunning jewelry pieces that will capture your imagination.'
    }

    else if (language === 'spanish') {
        if (location === 'ontario') {
            greeting.textContent = 'Bienvenido a Ontario';
        }
        else if (location === 'toronto') {
            greeting.textContent = 'Bienvenido a Toronto';
        }
        else if (location === 'massachusetts') {
            greeting.textContent = 'Bienvenido a Massachusetts';
        }
        message.textContent = 'Nos complace invitarle a nuestro próximo Evento de Joyería, que tendrá lugar el 15 de abril de 2023 a las 15:00. El evento promete ser una celebración de la artesanía exquisita y la belleza sin igual, exhibiendo una variedad de impresionantes piezas de joyería que capturarán su imaginación.'
    }
}


