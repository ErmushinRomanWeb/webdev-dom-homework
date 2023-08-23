import { autorisation } from "./modules/autorisation.js";
import { getFunction } from "./modules/getFunction.js";
import { commentsRender } from "./modules/render.js";
import { commentators, loader, newIsLoginForLike } from "./modules/variables.js";


"use strict";

//?Данная функция принимаетв себя переменную, которая = true or false и отрисовывает разметку внутри единственной разметки в HTML, для того, чтобы потом отрисовать туда следующую разметку
// ?блок отвечает только за страницу с комментариями
export function appRender(isLogin, loader) {
  newIsLoginForLike(isLogin)
  const app = document.querySelector('.app');//?Нашли единственный элемент в HTML
  if (isLogin) {
    //?Отрисовываем разметку >
    app.innerHTML = `<div class="container">
        <ul id="comment-block" class="comments">
          <!-- render -->
        </ul>
        <div id="addFormElement" class="add-form">
          <!-- render -->
        </div>
      </div>`;
    getFunction(commentators, loader);//?после того, как отрисовали разметку запускаем getFunction(смотри процесс в getFunction.js)
    commentsRender(commentators);
  } else {
    app.innerHTML = `<div class="container">
  <ul id="comment-block" class="comments">
    <!-- render -->
  </ul>
  <div id="addFormElement" class="add-form">
    войти в айти
  </div>
  <div class="start-form">Для того, чтобы войти нажми ><span id="sign-in" class="menu">Войти</span></div>
</div>`;
    //?для того, чтобы перейти на форму авторизации надо найти sign-in и на него повесить обработчик событий
    getFunction(commentators, loader);//?после того, как отрисовали разметку запускаем getFunction(смотри процесс в getFunction.js)
    commentsRender(commentators);//?render.js
    //? autorisation()
    const addForm = document.getElementById('addFormElement');//? данным действием мы убираем форму и вместо  нее ставим ссылку
    console.log(addForm);
    addForm.style.display = `none`;//?мы обращаемся к переменной addForm, и задаем ей дисплей нон, благодаря 
    const signIn = document.getElementById('sign-in');//?определяем, так как разметка отрисовалась
    signIn.addEventListener('click', () => {
      autorisation()
    })
  }
}
