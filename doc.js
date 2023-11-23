document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        // You can add JavaScript code here to handle form submission, e.g., sending data to a server.
        // For now, let's simply show an alert:
        alert("Form submitted!");
    });
});

