import { postRegistration, postlogin } from "./api.js";
import { setVariables, token } from "./variables.js";

//Цель: получить из апи регистрации токен, поторым будет подписан каждый запрос.
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