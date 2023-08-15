import { baseUrl, loginUrl, registrationUrl } from "./variables.js";

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


export function postComments({ name, text }) {
    return fetch(baseUrl, {
        method: 'POST',
        body: JSON.stringify({
            name: name,
            text: text,
            forceError: true,
        })
    }).then((response) => {
        if (response.status === 400) {
            throw new Error('< 2 sumb')
        } else if (response.status === 500) {
            throw new Error('server fall')
        } else {
            return response.json();
        }
    })
}

export function postlogin({ login, password }) {
    return fetch (loginUrl, {
        method: 'POST',
        body: JSON.stringify({
            login: 'admin',
            password: 'admin',
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