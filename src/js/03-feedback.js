import throttle from 'lodash.throttle';

const formEl = document.querySelector('form');
const inputEl = document.querySelector('input');
const textareaEl = document.querySelector('textarea');

formEl.addEventListener('input', throttle(onFormInput, 500));
formEl.addEventListener('submit', onFormSubmit);

const KEY = 'feedback-form-state';

onSaveInput();

function onFormInput() {
  let newMessage = {
    email: '',
    message: '',
  };
  newMessage.email = inputEl.value;
  newMessage.message = textareaEl.value;

  localStorage.setItem(KEY, JSON.stringify(newMessage));
}
function onSaveInput() {
  const savedMessage = JSON.parse(localStorage.getItem(KEY));

  if (savedMessage) {
      inputEl.value = savedMessage.email;
      textareaEl.value = savedMessage.message;
    console.log(savedMessage);
  }
}
function onFormSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem(KEY)));
  localStorage.removeItem(KEY);
  formEl.reset();
}
