import { getPhotos } from './data.js';
import { letErrorUploadPicture } from './errorMessage.js';
import { drawPicture } from './drawMe.js';
import './userForm.js';
import './validation.js';
import './modify.js';
import './slider.js';

getPhotos(drawPicture, letErrorUploadPicture);

//Задание 7 часть 2
