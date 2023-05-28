import { updateEffectPicture } from './modify.js';

export const sliderStatus = document.querySelector('.effect-level__slider');
const sliderValue = document.querySelector('.effect-level__value');

export function clearEffects() {
  sliderStatus.classList.add('visually-hidden');
  for (const className of updateEffectPicture.classList) {
    if (className.startsWith('effects__preview--')) {
      updateEffectPicture.classList.remove(className);
    }
  }
}

noUiSlider.create(sliderStatus, {
  connect: 'lower',
  start: 100,
  range: {
    min: 0,
    max: 100,
  },
  step: 1,
});

sliderStatus.classList.add('visually-hidden');
sliderValue.value = 100;

function updateEffectStatus(value) {
  for (const className of sliderStatus.classList) {
    if (className === 'effects__preview--chrome') {
      sliderStatus.style = `filter: grayscale(${value})`;
    }
    if (className === 'effects__preview--sepia') {
      sliderStatus.style = `filter: sepia(${value})`;
    }
    if (className === 'effects__preview--marvin') {
      sliderStatus.style = `filter: invert(${value}%)`;
    }
    if (className === 'effects__preview--phobos') {
      sliderStatus.style = `filter: blur(${value}px)`;
    }
    if (className === 'effects__preview--heat') {
      sliderStatus.style = `filter: brightness(${value})`;
    }
  }
}

export function installSlider(param) {

  if (param === 'chrome') {
    sliderStatus.classList.remove('visually-hidden');
    sliderStatus.noUiSlider.updateOptions({
      start: 1,
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    });
  }

  if (param === 'sepia') {
    sliderStatus.classList.remove('visually-hidden');
    sliderStatus.noUiSlider.updateOptions({
      start: 1,
      range: {
        min: 0,
        max: 1
      },
      step: 0.1
    });
  }

  if (param === 'marvin') {
    sliderStatus.classList.remove('visually-hidden');
    sliderStatus.noUiSlider.updateOptions({
      start: 100,
      range: {
        min: 0,
        max: 100
      },
      step: 1
    });
  }
  if (param === 'phobos') {
    sliderStatus.classList.remove('visually-hidden');
    sliderStatus.noUiSlider.updateOptions({
      start: 3,
      range: {
        min: 0,
        max: 3
      },
      step: 0.1
    });
  }

  if (param === 'heat') {
    sliderStatus.classList.remove('visually-hidden');
    sliderStatus.noUiSlider.updateOptions({
      start: 3,
      range: {
        min: 1,
        max: 3
      },
      step: 0.1
    });
  }

  if (param === 'none') {
    sliderStatus .classList.add('visually-hidden');
    updateEffectPicture.style.filter = '';
  }
}

sliderStatus.noUiSlider.on('update', () => {
  sliderValue.value = sliderStatus.noUiSlider.get();
  updateEffectStatus(sliderValue.value);
});

