const focusInput = document.querySelector("#validation-input");
focusInput.addEventListener("blur", () => {
  focusInput.className = focusInput.value.length;
  if (focusInput.value.length == focusInput.dataset.length) {
    focusInput.className = "valid";
  } else 
    focusInput.className = "invalid";
    console.log(focusInput.className);
});
