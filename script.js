const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    form.style.display = 'none';
});
