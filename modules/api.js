import { loginUrl } from "./variables.js";

export function getComments() {
    return fetch('https://wedev-api.sky.pro/api/v1/:ErmushinRomant/comments',
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


export function postComments({ name, text }) {
    return fetch('https://wedev-api.sky.pro/api/v1/:ErmushinRomant/comments', {
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