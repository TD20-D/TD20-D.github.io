const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const country = document.getElementById("country").value.trim();
  const comments = document.getElementById("comments").value.trim();
  const formMessage = document.getElementById("formMessage");

  if (!fullName || !email || !country || !comments) {
    formMessage.textContent = "Please fill in all fields before submitting.";
    formMessage.className = "form-message error";
    alert("Please fill in all fields before submitting.");
    return;
  }

  const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  if (!emailPattern.test(email)) {
    formMessage.textContent = "Please enter a valid email address.";
    formMessage.className = "form-message error";
    alert("Please enter a valid email address.");
    return;
  }

  formMessage.textContent = "Your form has been submitted successfully!";
  formMessage.className = "form-message success";
  alert("Your form has been submitted successfully!");

  // This front-end demo validates the form but does not send data to a server.
  contactForm.reset();
});
