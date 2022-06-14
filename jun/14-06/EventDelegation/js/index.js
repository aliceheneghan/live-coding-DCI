const listItems = document.querySelectorAll("li");
const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");
const button = document.querySelector("button");
const list = document.querySelector("ul");

// Dummy example of listItems
// [{ htmlTag: 'li', text: 'First' } , { htmlTag: 'li', text: 'Second'}]
// Dummy example of buttons
// [{ htmlTag: 'button', text: 'Delete'}, { htmlTag: 'button', text: 'Delete'}, { htmlTag: 'button', text: 'Delete'}]

// ! Do not use this way of adding event listeners to both the buttons and the li's
// ! Notice that we are using listItems to loop. If the buttons array has a different length, it will not work properly
// listItems.forEach((_, index) => {
//   listItems[index].addEventListener("click", () => {
//     console.log("I am an li");
//   });
//   buttons[index].addEventListener("click", () => {
//     console.log("I am a btn");
//   });
// });

// Adding event listeners to buttons and stopping propagation
// for (let btn of buttons) {
//   btn.addEventListener("click", (event) => {
//     Stopping propagation prevents the event bubbling
// !   event.stopPropagation();
//     console.log("I am a btn");
//   });
// }

// Adding event listeners to list items
// for (let li of listItems) {
//   li.addEventListener(
//     "click",
//     () => {
//       console.log("I am an li");
//     }
//    Event capturing - reverse the order of event triggering
//    The parent event will trigger before the child event
// !  true
//   );
// }

// Event listener for the button to add a new list item
button.addEventListener("click", () => {
  const newListItem = document.createElement("li");
  newListItem.innerText = input.value;
  const btn = document.createElement("button");
  btn.innerText = "Delete";
  newListItem.append(btn);
  list.append(newListItem);
});

// ! Event delegation
// Adding an event listener to the parent element
list.addEventListener("click", (event) => {
  // If the target that was clicked is a list item
  if (event.target.matches("li")) {
    console.log("Li clicked");
  }

  // If the target that was clicked is a button
  if (event.target.matches("button")) {
    list.removeChild(event.target.parentElement);
  }
});
