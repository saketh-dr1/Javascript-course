// // const headers = document.getElementsByTagName('h2');
// // const list = document.getElementsByClassName('item');
// // const button = document.getElementById('submit');

// // const headers = document.querySelector('h2');

// // console.log(headers);

// // const collectionItems = document.getElementsByClassName('item');
// // const nodeItems = document.querySelectorAll('.item');

// // console.log(collectionItems, nodeItems);
// // for (item of nodeItems) {
// //   console.log(item);
// // }

// // nodeItems.forEach(function (item) {
// //   console.log(item);
// // });

// const collectionItems = document.getElementsByClassName('item');
// const todoList = document.getElementById('todo-list');
// const todoNr = document.getElementsByClassName('todo-nr')[0];

// const newItem = document.createElement('li');
// newItem.classList.add('item');
// newItem.innerText = 'Item 3';

// todoList.appendChild(newItem);

// // update the amount of items that we have
// todoNr.innerText = `You have ${collectionItems.length} items in your list`;

// const nodeItems = document.querySelectorAll('.item');
const todoList = document.querySelector('#todo-list');
const items = todoList.children;
console.log(items);
const todoNr = document.querySelector('.todo-nr');

const newItem = document.createElement('li');
newItem.classList.add('item');
newItem.innerText = 'Item 3';

todoList.appendChild(newItem);
// update the amount of items that we have
todoNr.innerText = `You have ${items.length} items in your list`;
console.log(items);
