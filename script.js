const contactForm = document.querySelector('#contact-form');
const nameInput = document.querySelector('#full-name');
const nameError = document.querySelector('#name-error');

if (contactForm) {
  contactForm.addEventListener('submit', function (event) {
    if (nameInput.value.trim() === '') {
      event.preventDefault();
      nameError.textContent = 'Don\'t forget your name!';
    }
  });

  nameInput.addEventListener('input', function () {
    if (nameInput.value.trim() !== '') {
      nameError.textContent = '';
    }
  });
}

const submitBtn = document.querySelector('button[type="submit"]');
if (submitBtn) {
  submitBtn.addEventListener('click', function () {
    submitBtn.style.backgroundColor = '#bead2c';
    submitBtn.style.color = '#000000';
  });
}
const listInput = document.getElementById('list-input');
const addButton = document.getElementById('add-btn');
const dynamicList = document.getElementById('dynamic-list');

if (addButton) {
  addButton.addEventListener('click', function() {
    const itemText = listInput.value.trim();

    if (itemText !== '') {
      const newLi = document.createElement('li');
      newLi.textContent = itemText + ' ';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'Remove';
      deleteButton.addEventListener('click', function() {
        dynamicList.removeChild(newLi);
      });
      newLi.appendChild(deleteButton);
      dynamicList.appendChild(newLi);
      listInput.value = '';
    }
  });
}
