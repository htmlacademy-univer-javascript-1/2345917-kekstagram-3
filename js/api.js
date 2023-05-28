import { openWindow } from './userForm.js';

const successNote = document.querySelector('#success').content.querySelector('.success');
const errorNote = document.querySelector('#error').content.querySelector('.error');
const successButton = successNote.querySelector('.success__button');
const errorButton = errorNote.querySelector('.error__button');

const onSuccessEscape = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeSuccess();
  }
};

const onErrorEscape = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeError();
  }
};

export function closeSuccess(){
  document.removeEventListener('keydown', onSuccessEscape);
  document.removeEventListener('click', closeSuccess);
  successNote.classList.add('hidden');
}

export function closeError(){
  document.removeEventListener('keydown', onErrorEscape);
  document.removeEventListener('click', closeError);
  errorNote.classList.add('hidden');
  openWindow();
}

export function openSuccess(){
  document.addEventListener('click', closeSuccess);
  document.body.addEventListener('keydown', onSuccessEscape);
  successButton.addEventListener('click', closeSuccess);
  document.body.append(successNote);
  successNote.classList.remove('hidden');
}

export function openError(){
  document.addEventListener('click', closeError);
  document.body.addEventListener('keydown', onErrorEscape);
  errorButton.addEventListener('click', closeError);
  document.body.append(errorNote);
  errorNote.classList.remove('hidden');
}
