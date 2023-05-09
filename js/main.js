const provideRandomInt = function (bottom, top) {
  if (bottom < 0 || top < 0) {
    return 0;
  }

  if (bottom > top) {
    return 0;
  }

  return Math.floor(Math.random() * (top - bottom) + bottom);
}

const checkMaxLength = function (string, maximumLength) {
  if (string.length <= maximumLength) {
    return true;
  }

  return false;
}

provideRandomInt(0, 9);
checkMaxLength('cat', 5)
