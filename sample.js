const collectionItems = document.getElementsByClassName('item');
const nodeItems = document.querySelectorAll('.item');

// console.log(nodeItems.children);

// console.log(collectionItems);

// for (item of collectionItems) {
//   console.log(item);
// }

nodeItems.forEach(function (item) {
  console.log(item);
});
