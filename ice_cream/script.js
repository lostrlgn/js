var cardsData = [
  {
    inStock: true,
    imgUrl: 'img/choco.jpg',
    text: 'Сливочно-кофейное с кусочками шоколада',
    price: 310,
    isHit: true,
    specialOffer: 'Двойная порция сиропа бесплатно!'
  },
  {
    inStock: false,
    imgUrl: 'img/lemon.jpg',
    text: 'Сливочно-лимонное с карамельной присыпкой',
    price: 125,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'img/cowberry.jpg',
    text: 'Сливочное с брусничным джемом',
    price: 170,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'img/cookie.jpg',
    text: 'Сливочное с кусочками печенья',
    price: 250,
    isHit: false
  },
  {
    inStock: true,
    imgUrl: 'img/creme-brulee.jpg',
    text: 'Сливочное крем-брюле',
    price: 190,
    isHit: false
  }
];


/* function renderCards(mas){
  const goods = document.querySelector('.goods');

  mas.forEach((element) => {
    const good = document.createElement('li');
    good.classList.add('good');
    
    if (element.inStock){
      good.classList.add('good--available');
      good.classList.remove('good--unavailable');
    } else {
      good.classList.add('good--unavailable');
      good.classList.remove('good--available');
    }
    
    const picture = document.createElement('img');
    picture.classList.add('good__image');
    picture.src = element.imgUrl;
    picture.alt = element.text;
    
    const name = document.createElement('h2');
    name.classList.add('good__description');
    name.textContent = element.text;
    
    const price = document.createElement('p');
    price.classList.add('good__price');
    price.textContent = element.price + '₽/кг';
    
    if (element.isHit){
      good.classList.add('good--hit');
    } else {
      good.classList.remove('good--hit');
    }
    good.appendChild(name);
    good.appendChild(picture);
    good.appendChild(price);
    
    if (element.specialOffer){
      const offer = document.createElement('p');
      offer.classList.add('good__special-offer');
      offer.textContent = element.specialOffer;
      good.appendChild(offer);
      
    }
    goods.appendChild(good);
  });
}

renderCards(cardsData);
*/

function renderCards(cards){
  const goods = document.querySelector('.goods');

  cards.forEach(({inStock, imgUrl, text, price, isHit, specialOffer }) => {
    const good = document.createElement('li');

    good.classList.add('good', inStock ? 'good--available' : 'good--unavailable');

    if (isHit) good.classList.add('good--hit');

    const name = document.createElement('h2');
    name.classList.add('good__description');
    name.textContent = text;

    const picture = document.createElement('img');
    picture.classList.add('good__image');
    picture.src = imgUrl;
    picture.alt = text;
    
    const priceElement = document.createElement('p');
    priceElement.classList.add('good__price');
    priceElement.textContent = price + '₽/кг';

    good.appendChild(name);
    good.appendChild(picture);
    good.appendChild(priceElement);

    if (specialOffer) {
      const offerElement = document.createElement('p');
      offerElement.classList.add('good__special-offer');
      offerElement.textContent = specialOffer;
      good.appendChild(offerElement);
    }

    goods.appendChild(good);
  });
}


renderCards(cardsData);

/* Техническое задание

Мяу! Помнишь магазин мороженого? Нужно создать карточки товаров, основываясь на данных, полученных с сервера.

Данные — массив объектов cardsData, один элемент соответствует одному товару. У каждого объекта есть следующие свойства:

- inStock — доступность товара. Если значение true — товар доступен (для такого продукта верстальщик подготовил класс good--available), если false — продукта нет в наличии (товар с классом good--unavailable).
- imgUrl — ссылка на изображение товара.
- text — название продукта.
- price — цена.
- isHit — является ли товар хитом продаж. Если значение true — продукт «хитовый». Для такого товара подготовлен класс good--hit.
- specialOffer — специальное предложение, которое есть только у хита продаж. Должно находиться в абзаце с классом good__special-offer и быть самым последним дочерним элементом в карточке.

Вот пример вёрстки одной карточки в каталоге:

<ul class="goods">
  <li class="good">
    <h2 class="good__description">Сливочно-кофейное с кусочками шоколада</h2>
    <img class="good__image" src="img/choco.jpg" alt="Сливочно-кофейное с кусочками шоколада">
    <p class="good__price">110₽/кг</p>
  </li>
  ...
</ul>

Обрати внимание, что текст в атрибуте alt у изображения должен быть таким же, как и название товара.

Создай функцию renderCards, которая будет принимать на вход массив данных, вызови её, передав cardsData, и отрисуй на странице карточки мороженого.

*/