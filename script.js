document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent default form submission

    // Retrieve values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const dob = document.getElementById("dob").value;
    const country = document.getElementById("country").value;
    const message = document.getElementById("message").value.trim();
    const genderSelected = document.querySelector('input[name="gender"]:checked');

    let isValid = true;
    let errorMsg = "";

    // Name validation
    if (name === "") {
      errorMsg += "Name is required.\n";
      isValid = false;
    } else if (!/^[a-zA-Z\s]+$/.test(name)) {
      errorMsg += "Name must contain only letters.\n";
      isValid = false;
    }

    // Email validation
    if (email === "") {
      errorMsg += "Email is required.\n";
      isValid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(email)) {
      errorMsg += "Invalid email format.\n";
      isValid = false;
    }

    // Gender validation
    if (!genderSelected) {
      errorMsg += "Gender is required.\n";
      isValid = false;
    }

    // DOB validation
    if (dob === "") {
      errorMsg += "Date of Birth is required.\n";
      isValid = false;
    }

    // Country validation
    if (country === "") {
      errorMsg += "Country selection is required.\n";
      isValid = false;
    }

    // Message validation
    if (message === "") {
      errorMsg += "Message is required.\n";
      isValid = false;
    } else if (message.length < 10) {
      errorMsg += "Message must be at least 10 characters long.\n";
      isValid = false;
    }

    // Show alert or submit
    if (!isValid) {
      alert(errorMsg);
    } else {
      alert("Form submitted successfully!");
      form.submit(); // Use the form variable instead of `this.submit()`
    }
  });
});
