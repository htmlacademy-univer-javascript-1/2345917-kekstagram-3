export function provideRandomInt (bottom, top) {
  if (bottom < 0 || top < 0) {
    return 0;
  }

  if (bottom > top) {
    return 0;
  }

  return Math.floor(Math.random() * (top - bottom) + bottom);
};

export function checkMaxLength(string, maximumLength) {
  if (string.length <= maximumLength) {
    return true;
  }

  return false;
};
