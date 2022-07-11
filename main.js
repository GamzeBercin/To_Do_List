const listParentElement = document.getElementById("list");

const inputElement = document.getElementById("task");
const buttonElement = document.getElementById("liveToastBtn");

buttonElement.addEventListener("click", function () {
  const description = inputElement.value;
  addItem(description);
});

function saveList() {
  localStorage.setItem("list", JSON.stringify(list));
}

function getList() {
  return JSON.parse(localStorage.getItem("list")) || [];
}

const list = getList();

function addItem(description) {
  if (!inputElement.value || inputElement.value === "")
    return $(".error").toast("show");

  list.push({ description, done: false });
  saveList();
  $(".success").toast("show");

  listItems();
}
function removeItem(index) {
  console.log("trigger");
  list.splice(index, 1);
  saveList();
  listItems();
}

function doneItem(index) {
  list[index].done = !list[index].done;
  saveList();
  listItems();
}

function listItems() {
  listParentElement.replaceChildren();

  list.forEach((item, index) => {
    const listItemElement = document.createElement("li"); //<li></li>

    if (item.done) listItemElement.classList.add("checked");

    listItemElement.addEventListener("click", () => doneItem(index));
    listItemElement.appendChild(document.createTextNode(item.description)); //<li> description </li>

    const removeItemElement = document.createElement("button"); //<button></button>
    removeItemElement.classList.add("btn-delete");
    removeItemElement.addEventListener("click", function () {
      removeItem(index);
    });
    removeItemElement.appendChild(document.createTextNode("x")); //<button>x</button>

    listItemElement.appendChild(removeItemElement); // <li> description <button>x</button></li>

    listParentElement.appendChild(listItemElement);
  });
}

listItems();
