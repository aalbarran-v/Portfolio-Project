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
const userForm = document.getElementById('userForm');
if (userForm) {
  const fields = [
    { input: document.getElementById('name'), error: document.getElementById('nameError') },
    { input: document.getElementById('email'), error: document.getElementById('emailError') },
    { input: document.getElementById('phoneNumber'), error: document.getElementById('phoneError') },
    { input: document.getElementById('userName'), error: document.getElementById('userError') }
  ];
  fields.forEach(field => {
    if (field.input) {
      field.input.addEventListener('input', () => {
        field.error.style.display = 'none';
      });
    }
  });
  userForm.addEventListener('submit', function (e) {
    e.preventDefault();
    let isValid = true;

    fields.forEach(field => {
      const val = field.input.value.trim();

      if (val === '') {
        field.error.innerText = 'This field is required.';
        field.error.style.display = 'block';
        isValid = false;
      } else if (field.input.id === 'email' && !val.includes('@')) {
        field.error.innerText = 'Email must contain an @ symbol.';
        field.error.style.display = 'block';
        isValid = false;
      }
    });

    if (isValid) {
      fetchPublicApi();
    }
  });
}
function fetchPublicApi() {
  const resultDiv = document.getElementById('api-result');
  if (!resultDiv) return;

  resultDiv.innerText = 'Fetching data...';

  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response error: ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      resultDiv.innerHTML = `<strong>API Success!</strong> Sample Title: "${data.title}"`;
    })
    .catch(error => {
      resultDiv.innerHTML = `<span style="color: red;">API Error: ${error.message}</span>`;
    });
}
