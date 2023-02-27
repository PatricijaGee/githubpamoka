console.log("hello world");
var firstName = "Patri";
var lastName = "Gustaityte";
var age = 24;
const isCool = true;

console.log(
  "Hello, my name is:" + firstName + " " + lastName,
  "I am",
  age,
  "years old"
);
console.log(age + age);

var title = document.querySelector("#title");

//title.innerHTML = firstName;

var spalvos = ["balta", "juoda"];

var array = [1, "lol", 2];
var nestedArray = [[1, 2, 3], [(3, 4, 5)], [(6, 7, 8)]];

console.log(nestedArray[0][2]);

var jewlery = new Array(
  "gold",
  "rose gold",
  "silver",
  "iron",
  "stainless steel"
);

jewlery.push("iron");

jewlery.unshift("brass");

jewlery.pop();

console.log(Array.isArray(jewlery));

console.log(jewlery);

var person = {
  firstName: "Patricija",
  lastName: "Gustaityte",
  age: 24,
  hobbies: ["dancing", "movies", "yoga"],
  mail: "jonesbbqandfootmassage@yahoo.com",
  address: {
    street: "Ooga Booga st.",
    city: "Panevėžys",
  },
};

var todos = [
  {
    id: 1,
    text: "Take oyt trash",
    isCompleted: true,
  },
  {
    id: 2,
    text: "Watch netflix",
    isCompleted: true,
  },
  {
    id: 3,
    text: "Make a mimosa",
    isCompleted: false,
  },
];

//for
for (let i = 0; i < todos.length; i++) {
  console.log(todos[i].text);
}

//while
let i = 0;
while (i < 10) {
  console.log(`While Loop Number: ${i}`);
  i++;
}

for (let todo of todos) {
  console.log(todo.text);
}

todos.forEach(function (todo) {
  console.log(todo.text);
});

var todoText = todos.map(function (todo) {
  return todo.text;
});

console.log(todoText);

var todoCompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === true;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoCompleted);

var todoUncompleted = todos
  .filter(function (todo) {
    return todo.isCompleted === false;
  })
  .map(function (todo) {
    return todo.text;
  });

console.log(todoUncompleted);

var x = 20;
var y = 11;

if (x > 5 && y > 10) {
  console.log("x more than 5 or y is more than 10");
}

//užduotis 1.8:
var x = 9;

var color = x > 10 ? "red" : "blue"; //if true - then red, else - blue

switch (color) {
  case "red":
    console.log("color is red");
    break;
  case "blue":
    console.log("color is blue");
    break;
  default:
    console.log("color is not red or blue");
    break;
}

function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}
console.log(addNums(155, 376));

//užduotis 1.6:
var x = 10;

if (x === 10) {
  console.log("x is 10");
} else if (x < 10) {
  console.log("x is less than 10");
} else {
  console.log("x is greater than 10");
}

//užduotis 1.7
var x = 9;
var y = 11;

if (x > 5 || y > 10) {
  console.log("x more than 5 or y is more than 10");
}
if (x > 5 && y > 10) {
  console.log("x more than 5 or y is more than 10");
}

//užduotis 1.9:
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.dob = new Date(dob);
  this.getBirthYear = function () {
    return this.dob.getFullYear();
  };
}

Person.prototype.getBirthYear = function () {
  return this.dob.getFullYear();
};
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

var person1 = new Person("Dolly", "Parton", "1961-05-26");
var person2 = new Person("Miriam", "Schmokes", "1-30-1989");

console.log(person2.dob.getFullYear());

console.log(person1.getBirthYear());
console.log(person1.getFullName());

console.log(person2.getFullName());

// 1.10
var form = document.getElementById("my-form");

console.log(form);

var header = document.getElementById("header");

console.log(header);

//1.11
var ul = document.querySelector(".items");

ul.firstElementChild.textContent = "Hello";
ul.children[1].innerText = "Hello";
ul.lastElementChild.innerHTML = "<i>Hello</i>";
