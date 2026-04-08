const button = document.querySelector('#submit');
const todoList = document.querySelector('#todo-list');
const todoNr = document.querySelector('.todo-nr b');
const mainTitle = document.querySelector('.main-title');
// console.log(todoNr);
const items = todoList.children;

updateCount();

// console.log(items);
// click, scroll, resizing the browser

// attach event listener
button.addEventListener('click', function () {
  const newItem = document.createElement('li');
  newItem.classList.add('item');
  newItem.innerText = `Item ${items.length + 1}`;
  todoList.appendChild(newItem);
  updateCount();
  // create the element and attaching the event listener
  newItem.addEventListener('click', deleteItem);
});

// for (item of items) {
//   item.addEventListener('click', deleteItem);
// }
function deleteItem(e) {
  e.target.remove();
  updateCount();
}

function updateCount() {
  todoNr.innerText = items.length;
}

//pass named function as callback
// button.addEventListener('click', addItem);
// function addItem() {
//   console.log('New item was added');
// }

// button.addEventListener('keydown', function (e) {
//   if (e.keyCode === 81) {
//     mainTitle.classList.toggle('special');
//   }
// });
