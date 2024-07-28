//GETELEMENTBYCLASSNAME

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);
// items[1].style.backgroundColor = "yellow";

// for (var i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "grey";
// }

// QUERYSELECTOR

// var input = document.querySelector("#input");
// input.value = "Hello Word!";

// var odd = document.querySelectorAll("li:nth-child(odd");

// for (var i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "yellow";
// }

// TRAVERSE THE DOM

// var itemList = document.querySelector("#items");
// //parrentNode
// //nextSibling
// //nextElementSibring
// //lastElementChild

// //CreateElement

// var newDiv = document.createElement("div");

// // add class

// newDiv.className = "hello";

// //add id
// newDiv.id = "hello1";

// // add attribute

// newDiv.setAttribute("title", "hello div");

// // create a text note

// var newDivTxext = document.createTextNode("Hello world");

// //add text to div

// newDiv.appendChild(newDivTxext);
// console.log(newDiv);

// var button = document.getElementById("button");
// var box = document.getElementById("box");

//button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);

// box.addEventListener("mouseenter", runEvent);
// function buttonClick(e) {
//   //console.log("Button clicked");
//   //document.getElementById("header-title").textContent = "Changed";
//   //   console.log(e.target);
//   //   var output = document.getElementById("output");
//   //   output.innerHTML = "<h3>" + e.target.id + "</h3>";
// }

var itemInput = document.querySelector('input[type = "text"]');
var form = document.querySelector("form");

itemInput.addEventListener("keydown", runEvent);

function runEvent(e) {
  console.log("Event Type: " + e.type);
}
