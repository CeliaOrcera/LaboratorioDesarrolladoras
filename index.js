document.addEventListener("DOMContentLoaded", function() {
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirm-password");
  const form = document.getElementById("survey-form");

  form.addEventListener("submit", e => {
    e.preventDefault();
    let isValid = true;

    if (!nameInput.value.match(/^[a-zA-Z\s]+$/)) {
      isValid = false;
      nameInput.style.borderColor = "red";
      document.getElementById("name-error").style.display = "block";
      nameInput.classList.remove("valid");
    } else {
      nameInput.style.borderColor = "";
      document.getElementById("name-error").style.display = "none";
      nameInput.classList.add("valid");
    }
    

    if (!emailInput.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)) {
      isValid = false;
      emailInput.style.borderColor = "red";
      document.getElementById("email-error").style.display = "block";
      emailInput.classList.remove("valid");
    } else {
      emailInput.style.borderColor = "";
      document.getElementById("email-error").style.display = "none";
      emailInput.classList.add("valid");
    }

    if (passwordInput.value.length < 8) {
      isValid = false;
      passwordInput.style.borderColor = "red";
      document.getElementById("password-error").style.display = "block";
      passwordInput.classList.remove("valid");
    } else {
      passwordInput.style.borderColor = "";
      document.getElementById("password-error").style.display = "none";
      passwordInput.classList.add("valid");
    }
a
    if (passwordInput.value !== confirmPasswordInput.value) {
      isValid = false;
      passwordInput.style.borderColor = "red";
      confirmPasswordInput.style.borderColor = "red";
      document.getElementById("confirm-password-error").style.display = "block";
      passwordInput.classList.remove("valid");
    } else {
      confirmPasswordInput.style.borderColor = "";
      document.getElementById("confirm-password-error").style.display = "none";
      passwordInput.classList.add("valid");
    }

    if (isValid) {
      alert("La inscripción ha sido correcta");
    }
  });
});
