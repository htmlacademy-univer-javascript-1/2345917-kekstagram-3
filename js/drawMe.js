const picturePattern = document.querySelector('#picture');
const block = document.querySelector('.pictures');

const drawPicture = (elements) => {
  const pictureFragment = document.createDocumentFragment();
  elements.forEach((element) => {
    const pattern = picturePattern.cloneNode(true).content;
    const img = pattern.querySelector('.picture__img');
    const likes = pattern.querySelector('.picture__likes');
    const comments = pattern.querySelector('.picture__comments');

    img.src = element.url;
    likes.textContent = element.likes;
    comments.textContent = element.comments;

    pictureFragment.appendChild(pattern);
  });

  block.appendChild(pictureFragment);
};
