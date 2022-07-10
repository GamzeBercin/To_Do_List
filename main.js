const listParentElement = document.getElementById("list");

const inputElement = document.getElementById("task");
const buttonElement = document.getElementById("liveToastBtn");

buttonElement.addEventListener("click", function () {
  const description = inputElement.value;
  addItem(description);
});

const list = [
  {
    description: "This is first to do ",
    done: false,
  },
  {
    description: "This is second to do ",
    done: false,
  },
];

function addItem(description) {
  list.push({ description, done: false });
  listItems();
}

// girdi(index) -> ciktisinda -> silme

function removeItem(index) {
  console.log("trigger");
  list.splice(index, 1);
  listItems();
}

function doneItem(index) {
  list[index].done = true;
  listItems();
}

function listItems() {
  listParentElement.replaceChildren();

  list.forEach((item, index) => {
    const listItemElement = document.createElement("li"); //<li></li>
    listItemElement.appendChild(document.createTextNode(item.description)); //<li> description </li>

    const removeItemElement = document.createElement("button"); //<button></button>
    removeItemElement.addEventListener("click", function () {
      removeItem(index);
    });
    removeItemElement.appendChild(document.createTextNode("x")); //<button>x</button>

    listItemElement.appendChild(removeItemElement); // <li> description <button>x</button></li>

    listParentElement.appendChild(listItemElement);
  });
}

listItems();
