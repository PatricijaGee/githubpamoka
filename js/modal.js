var open = document.getElementById("open");
var modalContainer = document.getElementById("modalContainer");
var close = document.getElementById("close");

console.log(modalContainer);

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

const title = document.querySelector("#element");

element.style.fontFamily = "monospace";

console.log(title);

var ul = document.querySelector("ul");
var li = document.createElement("li");

ul.append(li);

var firstListItem = document.querySelector(".list-item");

li.innerText = "six point one";

li.classList.add("list-item");

console.log(li.classList.contains("list-item"));

li.remove();
