import { appRender } from "../appRender.js";
import { loginProcess, registrationProcess } from "./loginPage.js";
import { token } from "./variables.js";

//этот блок у нас рендерит формы авторизации и регистрации
//

export function autorisation() {
  //это обращение к единственному элементу разметки в HTML
  const app = document.querySelector('.app');  // тут меняем содержание элемента app на нашу форму авторизации, отрисовываем страницу
  app.innerHTML = `<div class="container"> 
    <div class="login-box"> <!-- Авторизация -->
        <h2 class="login-box__heading">Форма входа</h2>
        <input type="text" id="loginInput" placeholder="Ведите логин" class="login-box__login"> <br>
        <input type="text" id="passwordInput" placeholder="Ведите пароль" class="login-box__password"> <br>
        <button id="loginButton" class="login-box__button">Войти</button> <br>
        <a href="#" id="registrationLink" class="login-box__link">Зарегистрироваться</a>
    </div>
    </div>`;//эта разметка аоявляется(рендер) на странице потому, что элемент app уже есть и мы, с помощью innerHTML, меняем разметку,  ТАК И РАБОТАЕТ RENDER!!!!!!!!
    console.log(app);
    loginProcess();
//В конце запускается loginProcess, которая запускается и ждет, пока пользователь не введет логин и пароль и нажмет кнопку(стмотри процесс в loginPage.js) 
//  процесс получения токена и присваивания его переменной - token, которая потом используется для получения доступа к написанию комментария.

//далее, прямо в функции autorisation мы обращаемся к ссылке, которая должна переводить нас на форму регистрации >
  const registrationLink = document.getElementById('registrationLink');
  // добавляем обработчик события на эту ссылку, для того, чтобы при нажатии на эту ссылку у нас происходила отрисовка формы регистрации
  registrationLink.addEventListener('click', (event) => {
    // event.preventDefault();
    app.innerHTML = `<div class="container">
        <div class="login-box">
          <!-- Регистрация -->
          <h2 class="login-box__heading">Форма регистрации</h2>
          <input type="text" id="regNameInput" placeholder="Ведите имя" class="login-box__name" /> <br />
          <input type="text" id="regLoginInput" placeholder="Придумайте логин" class="login-box__login" /> <br />
          <input type="text" id="regPasswordInput" placeholder="Придумайте пароль" class="login-box__password" />
          <br />
          <button id="registerButton" class="login-box__button">
            Зарегистрироваться
          </button>
          <br />
          <a href="#" id="loginLink" class="login-box__link">Войти</a>
        </div>
      </div>`;
      registrationProcess();

    const loginLink = document.getElementById('loginLink');
    loginLink.addEventListener('click', event => {
      // event.preventDefault();
      autorisation()
    })
  })

}