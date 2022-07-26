import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormInput, 500));

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');
const LOCALSTORAGE_KEY = 'feedback-form-state';
const formMessage = {};

updateForm();

function onSubmitForm(e) {
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(LOCALSTORAGE_KEY);
}

function onFormInput(e) {
  formMessage[e.target.name] = e.target.value;
  // console.log(formMessage[e.target.name]);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formMessage));
}

function updateForm() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedMessage) {
    console.log(savedMessage.email);
    email.value = savedMessage.email;

    console.log(savedMessage.message);
    message.value = savedMessage.message;
  }
}
