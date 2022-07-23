const throttle = require('lodash.throttle');

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', onFormInput);

const LOCALSTORAGE_KEY = 'feedback-form-state';

updateOutput();

function onSubmitForm(e) {
  e.preventDefault(); //отменяем перезагрузку стр
  e.currentTarget.reset(); //очищаем форму
  localStorage.removeItem(LOCALSTORAGE_KEY); //очищаем форму, если пол-ль нажал submit
}

function onFormInput(e) {
  const message = e.currentTarget.value; //записываем значение value в message
  //   console.log(message);
  localStorage.setItem(LOCALSTORAGE_KEY, message); //записываем в лок хранилище message под ключом feedback-msg
}
function updateOutput() {
  const savedMessage = localStorage.getItem(LOCALSTORAGE_KEY);
  if (savedMessage) {
    //если savedMessage === true => записываем новое значение в refs.textarea.value
    console.log(savedMessage);
    form.value = savedMessage;
  } //иначе => ничего не делаем
}
