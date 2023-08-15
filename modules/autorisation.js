import { appRender } from "../appRender.js";

export function autorisation() {
    const app = document.querySelector('.app');
    app.innerHTML = `<div class="container"> 
    <div class="login-box"> <!-- Авторизация -->
        <h2 class="login-box__heading">Форма входа</h2>
        <input type="text" id="loginInput" class="login-box__login"> <br>
        <input type="text" id="passwordInput" class="login-box__password"> <br>
        <button id="loginButton" class="login-box__button">Войти</button> <br>
        <a href="" id="registrationLink" class="login-box__link">Зарегистрироваться</a>
    </div>
    </div>`;
    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', () => {
        appRender(true);
    })

    const registrationLink = document.getElementById('registrationLink');
    registrationLink.addEventListener('click', (event) => {
        event.preventDefault();
        app.innerHTML = `<div class="container">
        <div class="login-box">
          <!-- Регистрация -->
          <h2 class="login-box__heading">Форма регистрации</h2>
          <input type="text" id="regNameInput" class="login-box__name" /> <br />
          <input type="text" id="regLoginInput" class="login-box__login" /> <br />
          <input type="text" id="regPasswordInput" class="login-box__password" />
          <br />
          <button id="registerButton" class="login-box__button">
            Зарегистрироваться
          </button>
          <br />
          <a href="" id="loginLink" class="login-box__link">Войти</a>
        </div>
      </div>`;
        const registerButton = document.getElementById('registerButton');
        registerButton.addEventListener('click', () => {
            appRender(true);
        })

        const loginLink = document.getElementById('loginLink');
        loginLink.addEventListener('click', event => {
            event.preventDefault();
            autorisation()
        })
    })

}