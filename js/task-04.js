let counterValue = 0;
const refs = {
    decrementBtn: document.querySelector("button[data-action=decrement]"),
    incrementBtn: document.querySelector("button[data-action=increment]"),
    value: counter.querySelector("#value")
}

refs.decrementBtn.addEventListener("click", () => {
    counterValue -= 1;
    textContentValue();
  });
refs.incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    textContentValue();
  });

function textContentValue() {
  refs.value.textContent = counterValue;
}
