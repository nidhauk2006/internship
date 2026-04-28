let items = ["Pen", "Book", "Bag", "Bottle"];

let list = document.getElementById("list");

items.forEach(function(item) {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});