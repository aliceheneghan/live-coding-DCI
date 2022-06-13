const parent = document.querySelector(".parent");
const forwardButton = parent.querySelector("#forwards");
const backwardsButton = document.querySelector("#backwards");
let visibleBox = document.querySelector(".visible");
const grandParent = document.querySelector(".grandParent");

// Notice the grandParent.querySelector - we are searching for a button element within the
// element with the class grandParents
const btn = grandParent.querySelector("button");

// Move to the next sibling
forwardButton.addEventListener("click", () => {
  // Stop the execution of the function if the next element does not have
  // the box class
  if (!visibleBox.nextElementSibling.matches(".box")) return;

  // Manipulating the next sibling
  visibleBox.classList.remove("visible");
  visibleBox.nextElementSibling.classList.add("visible");
  visibleBox = document.querySelector(".visible");

  // Manipulating the HTML of the parent element
  const h2 = document.createElement("h2");
  h2.innerText = `${visibleBox.textContent} was clicked`;
  visibleBox.parentElement.prepend(h2);

  // Matches - returns a boolean value, depending if our matches query is successful
  if (visibleBox.matches(".last")) {
    console.log("You have reached the last box");
  }
});

// Move to the previous sibling
backwardsButton.addEventListener("click", () => {
  // Stop the execution of the function if the previous element does not have
  // the box class
  if (!visibleBox.previousElementSibling.matches(".box")) return;

  // Manipulating the previous sibling
  visibleBox.classList.remove("visible");
  visibleBox.previousElementSibling.classList.add("visible");
  visibleBox = document.querySelector(".visible");
});

// Manipulating a specific ancestor
btn.addEventListener("click", () => {
  // Closest method looks for the first ancestor that matches our query
  const grandpa = btn.closest(".grandParent");
  const paragraph = document.createElement("p");
  paragraph.textContent = "Added text to the grandparent";
  grandpa.prepend(paragraph);
});

// Access the children of an HTML element - returns a collection of HTML elements
console.log("Children:", parent.children);
console.log("Children count:", parent.childElementCount);
