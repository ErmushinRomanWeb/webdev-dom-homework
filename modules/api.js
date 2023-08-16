import { baseUrl, loginUrl, registrationUrl, token } from "./variables.js";

export function getComments() {
    return fetch(baseUrl,
        {
            method: 'GET',
        }).then((response) => {
            console.log(response);
            if (response.status != 200) {
                throw new Error('error')
            } else {
                return response.json();
            }
        })
}


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
            throw new Error('wrong login or password')
        } else {
            throw new Error('Error')
        }
    })
}

export function postRegistration({login, name, password }) {
    return fetch (registrationUrl, {
        method: 'POST',
        body: JSON.stringify({
            login,
            name,
            password,
        })
    }).then((response) => {
        if (response.status === 201) {
            return response.json()
        } else if (response.status === 400) {
            throw new Error('user already exists')
        } else {
            throw new Error('Error')
        }
    })
}