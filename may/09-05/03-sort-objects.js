let todos = [
  {
    todo: "watch Netflix",
    priority: 2,
    done: false,
  },
  {
    todo: "clean the apartment",
    priority: 5,
    done: false,
  },
  {
    todo: "buy groceries",
    priority: 3,
    done: true,
  },
  {
    todo: "study",
    priority: 4,
    done: false,
  },
];

// sort the array putting objects with highest priority first
function priorityDescending(a, b) {
  if (a.priority > b.priority) {
    return -1;
  } else if (a.priority < b.priority) {
    return 1;
  } else {
    return 0;
  }
}

let sortedList = todos.sort(priorityDescending);
console.log(sortedList);

let sortedList2 = todos.sort((a, b) => b.priority - a.priority);
console.log(sortedList2);
