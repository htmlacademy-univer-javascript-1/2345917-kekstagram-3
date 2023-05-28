import { clearEffects } from './slider.js';
import { updateScale } from './modify.js';
import { pristine } from './validation.js';
import { validateHashtag } from './validation.js';
import { validateComment } from './validation.js';
import { openSuccess } from './api.js';
import { openError } from './api.js';
import { letErrorHashtag } from './errorMessage.js';
import { letErrorComment } from './errorMessage.js';

const uploadFile = document.querySelector('#upload-file');
const closeUploadFile = document.querySelector('#upload-cancel');
const makeEdit = document.querySelector('.img-upload__overlay');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');
const form = document.querySelector('.img-upload__form');
const button = document.querySelector('.img-upload__submit');

const letButton = () => {
  button.disabled = false;
  button.textContent = 'Опубликовать';
};

const banButton = () => {
  button.disabled = true;
  button.textContent = 'Загрузка...';
};

function clearUserForm() {
  uploadFile.value = '';
  hashtag.value = '';
  comment.value = '';
  clearEffects();
  updateScale()
}

uploadFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  openWindow();
});

closeUploadFile.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeWindow(true);
});

const closeEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow(true);
  }
};

export function openWindow() {
  makeEdit.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeEscapeKeydown);
}

export function closeWindow(ok) {
  makeEdit.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeEscapeKeydown);
  clearEffects();
  clearUserForm();
  updateScale();
  if (ok) {
    clearEffects();
  }
}

form.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const actual = pristine.validate();
  if (actual) {
    banButton();
    const formData = new FormData(evt.target);
    fetch('https://27.javascript.pages.academy/kekstagram-simple',
      {
        method: 'POST',
        body: formData,
      }
    )
      .then((response) => {
        if (response.ok) {
          openSuccess();
          closeWindow(true);
          letButton();
        } else {
          openError();
          closeWindow(false);
          letButton();
        }
      })
      .catch(openError);
  }
  if (!validateHashtag(hashtag.value)) {
    letErrorHashtag();
  }
  if (!validateComment(comment.value)) {
    letErrorComment();
  }
});
