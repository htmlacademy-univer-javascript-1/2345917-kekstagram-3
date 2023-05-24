const provideRandomInt = function (bottom, top) {
  if (bottom < 0 || top < 0) {
    return 0;
  }

  if (bottom > top) {
    return 0;
  }

  return Math.floor(Math.random() * (top - bottom) + bottom);
};

const checkMaxLength = function (string, maximumLength) {
  if (string.length <= maximumLength) {
    return true;
  }

  return false;
};

provideRandomInt(0, 9);
checkMaxLength('cat', 5);


function generatePhotos() {
  const arrayOfData = [];
  for (let i = 1; i <= 25; i++) {
    const id = i;
    const url = 'photo/${i}.jpg';;
    const description = 'Какой прекрасный закат!';
    const likes = provideRandomInt(15, 200);
    const comments = provideRandomInt(0, 200);
    const photos = {
      id,
      url,
      description,
      likes,
      comments
    };
    arrayOfData[i - 1] = photos;
  }
}

generatePhotos(15);
