const form = document.querySelector(".login-form");
form.addEventListener("submit", onFormSubmit);
function onFormSubmit(event) {
  event.preventDefault();
  if (form.email.value === "" || form.password.value === "") {
   return alert("Всі поля повинні бути заповнені");
}
const formData = new FormData(event.currentTarget);
formData.forEach((email, password) => {
    console.log(email);
    console.log(password);
});
form.reset();
}
