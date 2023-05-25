import { clearEffects } from './slider.js';
import { updateScale } from './modify.js';

const uploadFile = document.querySelector('#upload-file');
const closeUploadFile = document.querySelector('#upload-cancel');
const makeEdit = document.querySelector('.img-upload__overlay');
const hashtag = document.querySelector('.text__hashtags');
const comment = document.querySelector('.text__description');

function clearUserForm() {
  uploadFile.value = '';
  hashtag.value = '';
  comment.value = '';
}

uploadFile.addEventListener('change', (evt) => {
  evt.preventDefault();
  openWindow();
});

closeUploadFile.addEventListener('click', (evt) => {
  evt.preventDefault();
  closeWindow();
});

const closeEscapeKeydown = (evt) => {
  if (evt.key === 'Escape') {
    evt.preventDefault();
    closeWindow();
  }
};

function openWindow() {
  makeEdit.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', closeEscapeKeydown);
}

function closeWindow() {
  makeEdit.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('keydown', closeEscapeKeydown);
  clearEffects();
  clearUserForm();
  updateScale();
}
