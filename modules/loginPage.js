import { postlogin } from "./api.js";

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
            console.log(responseData);
        }))
    })

}