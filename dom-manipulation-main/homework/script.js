// select todo input to add to list and listen for enter key
const todoInput = document.querySelector(".todo-input");
document.addEventListener("keypress", function (k) {
  // if enter key is pressed add item to list
  if (k.key === "Enter") {
    // target the input value
    // figure out how remove whitespace !!!
    const text = todoInput.value.trim();
    // if input is not empty add to list
    if (text !== "") {
      addTodo(text);
      // clear input after adding to list
      k.target.value = "";
    }
  }
});

//  Create todo list add funtion
function addTodo(text) {
  const todoList = document.querySelector(".todo-list");
  const todoItem = document.createElement("li");
  todoItem.className = "todoItem";
  // check if li or span or div is better
  // add item in innerHTML to list
  console.log(todoItem);
  todoItem.innerText = `
  <span>${text}</span>
  `;
  // append child to list
  todoList.appendChild(todoItem);
}

//  create counter function
function counter() {
  const number = documment.querySelector(".counter");
  const counter = "";
}
