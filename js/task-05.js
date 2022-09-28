const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", () => {
  refs.output.textContent = refs.input.value;
  if (refs.input.value === "") {
    refs.output.textContent = "Anonymous";
  } else refs.input.value;
  // console.log(refs.input.value);
});
