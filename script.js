document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    console.log('Form is attempting to submit.');
    alert('Form submitted!');
});

