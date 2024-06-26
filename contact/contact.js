document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  const successMessage = document.getElementById("successMessage");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission


    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    // Check if all fields are filled
    if (name && email && subject && message) {
      // Show success message
      successMessage.style.display = "block";

      // Clear form inputs after successful submission
      form.reset();
    }
  });
});
