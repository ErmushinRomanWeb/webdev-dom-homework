import { postRegistration, postlogin } from "./api.js";
import { setVariables, token } from "./variables.js";

//Функция выполняет: 1. Переменные, 2. Полученин промиса из postLogin, 3. Получение токена, 4. Добавление токена в свойства объекта для подписи комментария
export function loginProcess() {
    const loginButtonElement = document.getElementById('loginButton');
    const loginInputElement = document.getElementById('loginInput');
    const passwordInputElement = document.getElementById('passwordInput');

    loginButtonElement.addEventListener('click', () => {
        postlogin({
            login: loginInputElement.value,
            password: passwordInputElement.value,
        }).then((responseData => {
            console.log(responseData.user.token);
            return setVariables(token, responseData.user.token);
        })).then((token) => {
            console.log(token);
        }).catch((error) => {
            if (error.message === 'wrong login or password') {
                alert('Вы ввели некорректный логин или пароль')
            }
        })
    })

}
//Object { login: "dsfsd", password: "sdfsdf", name: "dvsd", … }
//Функция выполняет: 1. Переменные, 2. получение промиса из postRegistration, 3. Добавление нового пользователя
export function registrationProcess() {
    const registerButtonElement = document.getElementById('registerButton');
    const regNameInputElement = document.getElementById('regNameInput')
    const regloginInputElement = document.getElementById('regLoginInput');
    const regpasswordInputElement = document.getElementById('regPasswordInput');

    registerButtonElement.addEventListener('click', () => {
        postRegistration({
            login: regloginInputElement.value,
            name: regNameInputElement.value,
            password: regpasswordInputElement.value,
        }).then((responseData) => {
            console.log(responseData);
        }).catch((error) => {
            if (error.message === 'user already exists') {
                alert('Пользователь уже существует')
            }
        })
    })
}