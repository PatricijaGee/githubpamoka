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

//element.addEventListner("click", function);

var buttonTwo = document.querySelector(".btn-2");

function alertBtn() {
  alert("I am also Dying");
}

buttonTwo.addEventListener("click", alertBtn);

// Mouseover

var newBackgroundColor = document.querySelector(".box-3");

function changeBgColor() {
  newBackgroundColor.style.backgroundColor = "blue";
}

newBackgroundColor.addEventListener("mouseover", changeBgColor);

const revealBtn = document.querySelector(".reveal-btn");

const hiddenContent = document.querySelector(".hidden-content");

function revealContent() {
  if (hiddenContent.classList.contains("reveal-btn")) {
    hiddenContent.classList.remove("reveal-btn");
  } else {
    hiddenContent.classList.add("reveal-btn");
  }
}

revealBtn.addEventListener("click", revealContent);

//event probagation

window.addEventListener(
  "click",
  function () {
    console.log("Window");
  },
  false
);

document.addEventListener(
  "click",
  function () {
    console.log("Document");
  },
  false
);
document.querySelector(".div2").addEventListener(
  "click",
  function () {
    console.log("DIV 2");
  },
  false
);
document.querySelector(".div1").addEventListener(
  "click",
  function () {
    console.log("DIV 1");
  },
  false
);
document.querySelector("button").addEventListener(
  "click",
  function (e) {
    console.log((e.target.innerText = "clicked!"));
  },
  false
);
