function letErrorMessage(error) {
  const fieldOfError = document.createElement('div');
  fieldOfError.textContent = error;

  fieldOfError.style.top = '50px';
  fieldOfError.style.left = '300px';
  fieldOfError.style.right = '300px';
  fieldOfError.style.fontSize = '20px';
  fieldOfError.style.textAlign = 'center';
  fieldOfError.style.position = 'absolute';
  fieldOfError.style.zIndex = '100';
  fieldOfError.style.backgroundColor = 'orange';

  document.body.append(fieldOfError);

  setTimeout(() => {
    fieldOfError.remove();
  }, 9000);
}

export function letErrorHashtag() {
  letErrorMessage('Несоответствие требованиям оформления хэштэга');
}
export function letErrorComment() {
  letErrorMessage('Несоответствие требованиям оформления комментария');
}
export function letErrorUploadPicture() {
  letErrorMessage('Ошибка загрузки изображения');
}
