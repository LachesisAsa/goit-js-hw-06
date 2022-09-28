const refs = {
  fontSizeEl: document.querySelector("#font-size-control"),
  textEl: document.querySelector("#text"),
};
refs.textEl.style.fontSize = refs.fontSizeEl.value + "px";
refs.fontSizeEl.addEventListener("input", () => {
refs.textEl.style.fontSize = refs.fontSizeEl.value + "px";
});
