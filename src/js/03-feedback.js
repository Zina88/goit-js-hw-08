import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormInput, 500));

const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

const LOCALSTORAGE_KEY = 'feedback-form-state';
const formMessage = {};

updateOutput();

function onSubmitForm(e) {
  e.preventDefault(); //отменяем перезагрузку стр
  e.currentTarget.reset(); //очищаем форму
  localStorage.removeItem(LOCALSTORAGE_KEY); //очищаем форму, если пол-ль нажал submit
  console.log(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)));
}

function onFormInput(e) {
  formMessage[e.target.name] = e.target.value; //записываем значение value в message
  //   console.log(message);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formMessage)); //записываем в лок хранилище message под ключом feedback-msg
}

function updateOutput() {
  const savedMessage = JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY));

  if (savedMessage) {
    //если savedMessage === true => записываем новое значение

    email.value = savedMessage.email;
    console.log(email.value);
    message.value = savedMessage.message;
    console.log(message.value);
  } //иначе => ничего не делаем
}
