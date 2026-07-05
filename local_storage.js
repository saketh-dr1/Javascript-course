// Local storage

localStorage.setItem('todo', 'Feed the dog');
localStorage.setItem('todo', 'eat dinner');
localStorage.setItem('user', 'DSR');

// // Session storage
// sessionStorage.setItem('todo', 'session Feed the dog');

// localStorage.clear();

// const user = localStorage.getItem('user');

// console.log(user);

// const todoList = ['feed the dog', 'eat dinner', 'go to the gym'];

const todoList = {
  task1: 'Feed the dog',
  task2: 'eat dinner',
};
localStorage.setItem('todos', JSON.stringify(todoList)); // stores array in the storage

const retrieved = JSON.parse(localStorage.getItem('todos'));
console.log(retrieved);
