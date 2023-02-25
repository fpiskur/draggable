// Draggable elements
let draggableElements = document.querySelectorAll('.item');

draggableElements.forEach(element => {
  element.addEventListener('dragstart', dragStart);
  element.addEventListener('dragend', dragEnd);
});

function dragStart(e) {
  e.dataTransfer.setData('text/plain', e.target.id);
  setTimeout(() => {
    e.target.classList.add('hidden');
  }, 0);
}

function dragEnd(e) {
  e.target.classList.remove('hidden');
}

// Drop targets
let droppableElements = document.querySelectorAll('.block');

droppableElements.forEach(element => {
  element.addEventListener('dragenter', dragEnter);
  element.addEventListener('dragover', dragOver);
  element.addEventListener('dragleave', dragLeave);
  element.addEventListener('drop', drop);
});

function dragEnter(e) {
  e.preventDefault();
  e.currentTarget.classList.add('drag-over');
}

function dragOver(e) {
  e.preventDefault();
  // e.currentTarget.classList.add('drag-over');
}

function dragLeave(e) {
  e.target.classList.remove('drag-over');
}

function drop(e) {
  e.target.classList.remove('drag-over');

  // get the draggable element
  const id = e.dataTransfer.getData('text/plain');
  const draggable = document.getElementById(id);

  // add it to the drop target
  e.target.appendChild(draggable);

  // display the draggable element
  draggable.classList.remove('hidden');
}
