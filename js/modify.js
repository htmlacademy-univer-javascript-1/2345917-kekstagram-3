import { sliderStatus } from './slider.js';
import { installSlider } from './slider.js';

const fieldSizeStatus = document.querySelector('.scale__control--value');
const updateSizePicture = document.querySelector('.img-upload__preview');
const sizeBigger = document.querySelector('.scale__control--bigger');
const sizeSmaller = document.querySelector('.scale__control--smaller');
const effects = document.querySelectorAll('.effects__radio');
export const updateEffectPicture = document.querySelector('.img-upload__preview');

//Изменение масштаба изображения

function changeSize(value) {
  fieldSizeStatus.value = `${value}%`;
  updateSizePicture.style = `transform: scale(${value / 100})`;
}

export function updateScale() {
  changeSize(100);
}

sizeBigger.addEventListener('click', () => {
  const actualData = parseInt(fieldSizeStatus.value, 10);
  let updateData = actualData + 25;
  if (updateData > 100) {
    updateData = 100;
  }
  sliderStatus.noUiSlider.set(100);
  changeSize(updateData);
});

sizeSmaller.addEventListener('click', () => {
  const actualData = parseInt(fieldSizeStatus.value, 10);
  let updateData = actualData - 25;
  if (updateData < 25) {
    updateData = 25;
  }
  sliderStatus.noUiSlider.set(100);
  changeSize(updateData);
});

//Изменение фильтра изображения

for (let i = 0; i < effects.length; i++) {
  const effect = effects[i];
  effect.addEventListener('change', changeEffectPicture);
}

function changeEffectPicture(evt) {
  for (const className of updateEffectPicture.classList) {
    if (className.startsWith('effects__preview--')) {
      updateEffectPicture.classList.remove(className);
    }
  }
  updateEffectPicture.classList.add(`effects__preview--${evt.target.value}`);
  updateScale();
  installSlider(evt.target.value);
}
