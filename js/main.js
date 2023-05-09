let provideRandomInt = function (bottom, top) {
  if (bottom < 0 || top < 0) {
    console.log('Допустимо использование только положительных чисел, включая 0');
    return 0;
  }

  if (bottom > top) {
    console.log('Верхняя граница top диапазона должна быть больше нижней bottom');
    return 0;
  }

  return Math.floor(Math.random() * (top - bottom) + bottom);
}

let checkMakLength = function (string, maximumLength) {
  if (string.length <= maximumLength) {
    return true;
  }

  return false;
}
