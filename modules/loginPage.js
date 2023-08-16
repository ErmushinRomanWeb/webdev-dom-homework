import { appRender } from "../appRender.js";
import { postRegistration, postlogin } from "./api.js";
import { newComName, newToken } from "./variables.js";

//Функция выполняет: 1. Переменные, 2. Полученин промиса из postLogin, 3. Получение токена, 4. Добавление токена в свойства объекта для подписи комментария
//данная функция, при введенных в input логине и пароле, и нажатии кнопки вызывает функцию postLogin(смотри процесс в postFunction.js)
//Здесь подключаю данню функцию к кнопке в форме
//Это подключить к render/renderLoginForm/ЕСТЬ
export function loginProcess() {
    const loginButtonElement = document.getElementById('loginButton');//рендер в appRender
    const loginInputElement = document.getElementById('loginInput');
    const passwordInputElement = document.getElementById('passwordInput');

    loginButtonElement.addEventListener('click', () => {
        postlogin({//добавили в аргументы в postLogin то, что будет добавляться в postLogin (api.js)
            login: loginInputElement.value,//аргумент
            password: passwordInputElement.value,//аргумент
            //postLogin возвращает promise в котором объект с user
        }).then((responseData) => { //получили объект в котором содержатся данные о пользователе, включая ТОКЕН
            console.log(responseData.user); 
            newComName(responseData.user.name)
            return newToken(responseData.user.token);//Присвоили переменной token значение токена из объекта, полученного ранее
        }).then(() => {
            appRender(true)//запустили функцию appRender(смотри процесс в appRender.js) c аргументом true
        }) 
        .catch((error) => {
            if (error.message === 'wrong login or password') {
                alert('Вы ввели некорректный логин или пароль')
            };
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
            return newToken(responseData.user.token)
        }).then((responseData) => {
            appRender(true)
        }).catch((error) => {
            if (error.message === 'user already exists') {
                alert('Пользователь уже существует')
            }
        })
    })
}