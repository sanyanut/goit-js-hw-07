const formSelector = document.querySelector(".login-form");

function handleSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const email = form.elements.email.value.trim();
  const password = form.elements.password.value.trim();

  if (email === "" || password === "") {
    alert("All form fields must be filled in");
    return;
  }

  console.log({ email, password });
  form.reset();
}

formSelector.addEventListener("submit", handleSubmit);
