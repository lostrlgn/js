let pictures = [
  'img/tomato-red-large.jpg',
  'img/tomato-yellow-large.jpg',
  'img/tomato-strange-large.jpg'
];

let picturesSmall = document.querySelectorAll('.gallery__picture-preview');
let fullPhoto = document.querySelector('.full-picture');

let changePhoto = function (small, big) {
  small.addEventListener('click', function (){
    fullPhoto.src = big;
  })
}

for(let i = 0; i <= pictures.length; i++) {
  changePhoto(picturesSmall[i], pictures[i]);
}





/* Техническое задание

Мяу! Нужно оживить галерею с фотографиями товаров.

В галерее есть миниатюры (элементы с классом 'gallery__picture-preview') и большое изображение (класс 'full-picture').

После клика по превью большая фотография должна поменяться. Большое изображение должно быть таким же, как и в миниатюре, только большего размера.

Пути к полноразмерным фотографиям находятся в массиве pictures. Порядок элементов в массиве такой же, как и порядок миниатюр в разметке.

*/
