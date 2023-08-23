import { baseUrl, loginUrl, registrationUrl, token } from "./variables.js";

export function getComments() {
    return fetch(baseUrl,
        {
            method: 'GET',
        }).then((response) => {
            if (response.status != 200) {
                throw new Error('error')
            } else {
                return response.json();
            }
        })
}

//отвечает за добавление введенной нами информации на сервер, из этой информации потом получаются новые комментарии
export function postComments({ text }) {
    console.log(token);
    return fetch(baseUrl, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            text: text,
            forceError: true,
        })
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('< 2 sumb')
        } else if (response.status === 500) {
            throw new Error('server fall')
        } else if (response.status === 401) {
            throw new Error('unauthorized')
        } else {
            console.log(response);
            return response.json();
        }
    })
}
//Это подключить к loginPage/loginProcess/ЕСТЬ
export function postlogin({ login, password }) {
    return fetch (loginUrl, {
        method: 'POST',
        body: JSON.stringify({
            login,
            password,
        })
    }).then((response) => {
        if (response.status === 201) {
            return response.json()
        } else if (response.status === 400) {
            throw new Error('wrong login or password')} 
    })
}

export function postRegistration({login, name, password }) {//функция будет принимать в себя логин, имя пользователя и пароль, вызывается в loginPage
    return fetch (registrationUrl, {// сылка registrationUrl(variables) 
        method: 'POST', //меотод добавляет в массив с пользователями информацию, которая преедана в параметрах
        body: JSON.stringify({
            login,
            name,
            password,
        })
    }).then((response) => {
        if (response.status === 201) {
            return response.json()//возвращаем данные о зараегистрированном пользователе в формате JSON
        } else if (response.status === 400) {
            throw new Error('user already exists')
        } else {
            throw new Error('Error')
        }
    })
}