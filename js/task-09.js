const refs = {
  changeColorBtn: document.querySelector(".change-color"),
  color: document.querySelector(".color"),
};

refs.changeColorBtn.addEventListener("click", () => {
  const currentRandomColor = getRandomHexColor();
  document.body.style.backgroundColor = currentRandomColor;
  refs.color.textContent = currentRandomColor;
});
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
