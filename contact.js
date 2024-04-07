// Get the form element
const form = document.querySelector("#contactForm");

// Add event listener for form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting

  // Validate form inputs
  if (validateForm()) {
    // Get form data
    const formData = new FormData(form);

    // Send form data to the server
    fetch("/submit", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // Handle server response
        console.log(data);
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });
  }
});

// Function to validate form inputs
function validateForm() {
  // Add your validation logic here
  // Return true if form is valid, false otherwise
  return true;
}

// FILEPATH: /Users/nikola/Documents/udemy bootcamp/the WOLF/contact.js

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;

    if (!name || !phone || !email) {
      alert("All fields are required.");
      return;
    }

    // Perform additional validation here if needed

    const formData = { name, phone, email };

    // Send the form data to the server
    fetch("/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => console.log("Success:", data))
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
