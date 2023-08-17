import { timeFunction } from "./timeFunction.js";
import { likeMaker } from "./likeFunctions.js";
import { newlikeColor } from "./likeFunctions.js";
import { replyТoСomment } from "./replyToComments.js";
import { clickEventButton } from "./clickEventButton.js";
import { comName } from "./variables.js";


//Функция отвечает за появление формы ввода комментария, принимает в себя аргумент - loader, который является индикатором загрузки
export function formRender(loader) {
  const addForm = document.querySelector('.add-form');//add-form появляется в области видимости потому, что formRender запустилась внутри getFunction, которая запустилась внутри appRender, после того, как отрисовалась разметка, имеющая add-form
  if (loader) {//аргумент, который является переменной loader(индикатор загрузки), которая по умолчанию равна false вызывает отрисовку окна загрузки, пока равен false(это период, пока getFunction не дойдет до выполнения кода loader = true, тем самым во время загрузки частей функции пользователь видит окно Loading) >
    addForm.innerHTML = `<p>Loading...</p>`;
  } else { // как только loader внутри getFunction = true мы рендерим в форму разметку
    addForm.innerHTML = `<input 
        id="name-input"
        type="text"
        class="add-form-name"
        disabled
        value = "${comName}"
      />
      <!--Сюда будет вводится ИМЯ-->
      <textarea
        id="text-input"
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш коментарий" 
        rows="4"
      ></textarea>
      <!--Сюда будет вводится ТЕКСТ-->
      <div class="add-form-row">
        <button id="form-button" class="add-form-button">Написать</button>
      </div>`;
    clickEventButton();//В конце данной разметки мы вызываем clickEventButton(смотри процесс в clickEventButton.js)
  }
}

//функция отрисовывает комментарии с данными с сервера, переменную с которыми принимает в аргумент
export function commentsRender(commentators) {
  console.log(commentators);
  const commentBlockElement = document.getElementById("comment-block");//блок в области видимости так как его трисовала ранее вызванная функция appRender
  //в прееменную commentatorsHtml мы помещаем массив, который перебирается и его элементы изменяются с помощью метода map
  const commentatorsHtml = commentators.map((commentator, index) => {//с помощью метода map(работает как ф-я, но является свойством объекта и вызывается через точку), внутри которого мы задаем анонимную функцию, которая принимает аргументы элемента массива(объект) и его номер в массиве
    //Далее мы рендерим разметку комментария
    return `<li data-index="${index}" class="comment">
            <div class="comment-header">
              <div>${commentator.author.name}</div>
              <div>${timeFunction(new Date(commentator.date))}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
                ${commentator.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${commentator.likes}</span>
                <button data-index="${index}" class="${newlikeColor(commentator.isLiked)}"></button>
              </div>
            </div>
            </li>`
  }).join('');
  commentBlockElement.innerHTML = commentatorsHtml;//рендерим в ранее отрисованную разметку наш обработанный массив, внутри элементов которого мы поместили разметку HTML комментария, которая вместо каждого элемента массива дает нам его интерпритацию в ращзметке HTML
  likeMaker(commentators);
  replyТoСomment(commentators);
}

//ЗАДАЧА!!!: Сделать рердер комментариев:
//Последовательность рендеров:
//1. Рендер комментариев + страница перехода на форму входа => кнопка вход => переход, делай переход через addEventListner
//2. Страница входа, меняющаяся на страницу регистрации => ввод данных || ввод данных при регистрации => переход
//3. Страница комментариев + форма ввода комментариев


