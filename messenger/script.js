let template = document.querySelector('#message-template').content;

let formBut = document.querySelector('.chat-form-button');

let chat = document.querySelector('.chat-content');


formBut.addEventListener('click', function (event) {
    event.preventDefault();
    let input = document.querySelector('.chat-form-input').value;
    let messageClone = document.importNode(template, true);
    let textTemplate = messageClone.querySelector('.chat-message-text');
    textTemplate.textContent = input;
    document.querySelector('.chat-form-input').value = '';
    chat.appendChild(messageClone);
    let deleteBut = messageClone.querySelector('.chat-message-button');
    deleteBut.addEventListener('click', function () {
        messageClone.remove();
    })
})



// console.log(chat);

/*

Нужно запрограммировать мессенджер. Как должна работать программа:

— Шаблон сообщения находится в теге template с идентификатором message-template.

— В блоке сообщения (класс chat-message) должен быть текст сообщения, кнопка удаления и имя пользователя.

— Новое сообщение добавляется в конец контейнера с классом chat-content.

— Чтобы добавить новое сообщение, нужно ввести текст в поле ввода (элемент с классом chat-form-input) и нажать кнопку «Отправить» (отправляет данные из формы с классом chat-form).

- Чтобы удалить сообщение, нужно кликнуть по кнопке с крестиком (элемент с классом chat-message-button). Эта кнопка появляется при наведении на сообщение.


*/
