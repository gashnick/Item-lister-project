// //GETELEMENTBYCLASSNAME

// // var items = document.getElementsByClassName("list-group-item");
// // console.log(items);
// // items[1].style.backgroundColor = "yellow";

// // for (var i = 0; i < items.length; i++) {
// //   items[i].style.backgroundColor = "grey";
// // }

// // QUERYSELECTOR

// // var input = document.querySelector("#input");
// // input.value = "Hello Word!";

// // var odd = document.querySelectorAll("li:nth-child(odd");

// // for (var i = 0; i < odd.length; i++) {
// //   odd[i].style.backgroundColor = "yellow";
// // }

// // TRAVERSE THE DOM

// // var itemList = document.querySelector("#items");
// // //parrentNode
// // //nextSibling
// // //nextElementSibring
// // //lastElementChild

// // //CreateElement

// // var newDiv = document.createElement("div");

// // // add class

// // newDiv.className = "hello";

// // //add id
// // newDiv.id = "hello1";

// // // add attribute

// // newDiv.setAttribute("title", "hello div");

// // // create a text note

// // var newDivTxext = document.createTextNode("Hello world");

// // //add text to div

// // newDiv.appendChild(newDivTxext);
// // console.log(newDiv);

// // var button = document.getElementById("button");
// // var box = document.getElementById("box");

// //button.addEventListener("click", runEvent);
// // button.addEventListener("dblclick", runEvent);

// // box.addEventListener("mouseenter", runEvent);
// // function buttonClick(e) {
// //   //console.log("Button clicked");
// //   //document.getElementById("header-title").textContent = "Changed";
// //   //   console.log(e.target);
// //   //   var output = document.getElementById("output");
// //   //   output.innerHTML = "<h3>" + e.target.id + "</h3>";
// // }

// var itemInput = document.querySelector('input[type = "text"]');
// var form = document.querySelector("form");

// itemInput.addEventListener("keydown", runEvent);

// function runEvent(e) {
//   console.log("Event Type: " + e.type);
// }

var form = document.getElementById("addForm");
var itemList = document.getElementById("items");
var filter = document.getElementById("filter");

// Load items from local storage
document.addEventListener("DOMContentLoaded", loadItems);
// Form submit event
form.addEventListener("submit", addItem);
// filter event

filter.addEventListener("keyup", filterItems);
//add item
function addItem(e) {
  e.preventDefault();

  //get input value

  var newItem = document.querySelector("#input").value;

  // check if the value enetered is empty
  if (newItem == "") {
    alert("You can't add an empty item to a list!");
  } else {
    // create new li element

    var li = document.createElement("li");
    // add class

    li.className = "list-group-item";

    // add text node with input
    li.appendChild(document.createTextNode(newItem));

    // Store item in local storage
    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(newItem);
    localStorage.setItem("items", JSON.stringify(items));
    //create delete button element
    var deleteBtn = document.createElement("button");
    //add class
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    //append text node
    deleteBtn.appendChild(document.createTextNode("X"));
    //append button to li
    li.appendChild(deleteBtn);
    //aappend li to a list
    itemList.appendChild(li);
  }
}

function loadItems() {
  let items = JSON.parse(localStorage.getItem("items")) || [];

  items.forEach(function (item) {
    // Create new li element
    var li = document.createElement("li");
    // Add class
    li.className = "list-group-item";

    // Add text node with input
    li.appendChild(document.createTextNode(item));

    // Create delete button element
    var deleteBtn = document.createElement("button");
    // Add class
    deleteBtn.className = "btn btn-danger btn-sm float-right delete";
    // Append text node
    deleteBtn.appendChild(document.createTextNode("X"));
    // Append button to li
    li.appendChild(deleteBtn);
    // Append li to a list
    itemList.appendChild(li);
  });
}

// delet event
itemList.addEventListener("click", removeItem);
// remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are You Sure")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);

      // Remove from local storage
      let items = JSON.parse(localStorage.getItem("items"));
      items = items.filter(function (item) {
        return item !== li.firstChild.textContent;
      });
      localStorage.setItem("items", JSON.stringify(items));
    }
  }
}

// filter items

function filterItems(e) {
  // convert to lower case
  var text = e.target.value.toLowerCase();
  // Get li elements
  var items = itemList.getElementsByTagName("li");
  // convert html collection to an array
  Array.from(items).forEach(function (items) {
    var itemName = items.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });
}
