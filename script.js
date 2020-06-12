const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

const list = document.getElementById('todo-list');
const itemCountSpan = document.getElementById('item-count');
const uncheckedCountSpan = document.getElementById('unchecked-count');

let count = 0;
let checkedCount = 0;

function newTodo() {
  var todo = prompt("Please enter to do task", "Enter here");
  alert(document.getElementById("list"));
  var newId = "todo" + count;
  count++;
  uncheckedCountSpan.innerHTML = count - checkedCount;

  const markup = `<li><button value=${todo} onClick="removeTodo(${todo})">Remove</button>
  <input type="checkbox" id=${newId} value=${todo} data-ischecked = "false" />
	<label for=${todo}>${todo}</label></li>`
  list.insertAdjacentHTML("beforeend", markup);
  itemCountSpan.innerHTML = count;
  document.getElementById(newId).addEventListener("click", check);

}

function check(event) {
  let article = event.target;
  if (article.dataset.ischecked == "false") {
    article.dataset.ischecked = "true";
    checkedCount++;
    uncheckedCountSpan.innerHTML = count - checkedCount;
  } else {
    article.dataset.ischecked = "false";
    checkedCount--;
    uncheckedCountSpan.innerHTML = count - checkedCount;
  }
}

function removeTodo(data) {
  alert('remove!' + data);
  // list.removeChild;

}
