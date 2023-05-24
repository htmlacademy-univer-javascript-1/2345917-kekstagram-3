import { provideRandomInt } from './util.js';

export function generatePhotos() {
  const arrayOfData = [];
  for (let i = 1; i <= 25; i++) {
    const id = i;
    const url = `photos/${  i  }.jpg`;
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
