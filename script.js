const form = document.querySelector('form');
const input = document.querySelector('#new-item');
const list = document.querySelector('#list');

form.addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();

  const item = input.value.trim();

  if (item.length) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${item}</span>
      <button class="edit-btn">Edit</button>
      <button class="delete-btn">Delete</button>
    `;
    list.appendChild(li);
    input.value = '';
  }
}

list.addEventListener('click', handleListClick);

function handleListClick(e) {
  const li = e.target.closest('li');

  if (!li) {
    return;
  }

  const span = li.querySelector('span');
  const editBtn = li.querySelector('.edit-btn');
  const deleteBtn = li.querySelector('.delete-btn');

  if (e.target === editBtn) {
    const newTask = prompt('Enter a new task:', span.innerText);

    if (newTask && newTask.trim().length) {
      span.innerText = newTask.trim();
    }
  } else if (e.target === deleteBtn) {
    li.remove();
  }
}
