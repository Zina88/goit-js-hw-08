import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
form.addEventListener('submit', onSubmitForm);
form.addEventListener('input', throttle(onFormInput, 500));

const LOCALSTORAGE_KEY = 'feedback-form-state';

intiForm();

function onSubmitForm(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.forEach((value, name) => console.log(name, value));
}

function onFormInput(e) {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);
  persistedFilters = persistedFilters ? JSON.parse(persistedFilters) : {};
  persistedFilters[e.target.name] = e.target.value;
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(persistedFilters));
}

function intiForm() {
  let persistedFilters = localStorage.getItem(LOCALSTORAGE_KEY);

  if (persistedFilters) {
    persistedFilters = JSON.parse(persistedFilters);
    Object.entries(persistedFilters).forEach(([name, value]) => {
      form.elements[name].value = value;
    });
  }
}
