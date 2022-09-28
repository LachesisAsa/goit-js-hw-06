function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputBoxes: document.querySelector("input"),
  createBtn: document.querySelector("button[data-create]"),
  destroyBtn: document.querySelector("button[data-destroy]"),
  boxCollection: document.querySelector("#boxes"),
};
refs.createBtn.addEventListener("click", () => {
  destroyBoxes();
  createBoxes(refs.inputBoxes.value);
});
refs.destroyBtn.addEventListener("click", destroyBoxes);
function createBoxes(amount) {
  const blocks = [];
  for (let i = 0; i < amount; i += 1) {
    const createNewBlock = document.createElement("div");
    const sizeNextBlock = 30 + i * 10 + "px";
    createNewBlock.style.height = sizeNextBlock;
    createNewBlock.style.width = sizeNextBlock;
    createNewBlock.style.backgroundColor = getRandomHexColor();
    blocks.push(createNewBlock);
  }
  refs.boxCollection.append(...blocks);
}
function destroyBoxes() {
  refs.boxCollection.innerHTML = "";
}
