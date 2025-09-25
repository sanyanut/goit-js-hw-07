const refs = {
  input: document.querySelector("#controls input"),
  create: document.querySelector("[data-create]"),
  destroy: document.querySelector("[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

let totalAmount = null;
let boxSide = 30;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  destroyBoxes();
  if (amount >= 1 && amount <= 100) {
    for (let i = 0; i < amount; i++) {
      refs.boxes.insertAdjacentHTML(
        "beforeend",
        `<div style='background-color: ${getRandomHexColor()}; width: ${boxSide}px; height: ${boxSide}px;'></div>`
      );
      boxSide += 10;
    }
  } else {
    return null;
  }
}

function destroyBoxes() {
  while (boxes.firstChild) {
    boxes.firstChild.remove();
  }
  refs.input.value = "";
  totalAmount = null;
  boxSide = 30;
}

refs.input.addEventListener("input", (e) => {
  totalAmount = e.target.value;
});

refs.create.addEventListener("click", () => createBoxes(totalAmount));
refs.destroy.addEventListener("click", destroyBoxes);
