import { checkMaxLength } from './util.js';

const form = document.querySelector('.img-upload__form');
const register = new RegExp('^#[а-яА-ЯA-Za-zёЁ0-9]{1,20}$');
export const pristine  = new Pristine(form, {
  classTo: 'img-upload__text',
  errorClass: 'form__item--invalid',
  successClass: 'form__item--valid',
  errorTextParent: 'img-upload__text',
  errorTextTag: 'span',
  errorTextClass: 'form__error'
});

export function validateHashtag(hash) {
  return register.test(hash) || checkMaxLength(hash, 0);
}

pristine.addValidator(document.querySelector('.text__hashtags'), validateHashtag, 'Хэштег должен начинаться с символа # и содержать не более 20 символов');

export function validateComment(str) {
  return !checkMaxLength(str, 20) && checkMaxLength(str, 140);
}

pristine.addValidator(document.querySelector('.text__description'), validateComment, 'Комментарий должен содержать не менее 20 и не более 150 символов');


form.addEventListener('submit', (evt) => {
  if (!pristine.validate()) {
    evt.preventDefault();
  }
});
