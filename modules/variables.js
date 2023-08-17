export let loader = false;

//Задача: объявить переменные только в фонкциях, где используются
export let commentators = [];

export const baseUrl = 'https://wedev-api.sky.pro/api/v2/ErmushinRomnam2/comments';

export const loginUrl = 'https://wedev-api.sky.pro/api/user/login';

export const registrationUrl = 'https://wedev-api.sky.pro/api/user';

export let token;

export function newToken(newToken) {
    token = newToken
}

export let comName;

export function newComName(newName) {
    comName = newName
}

export let isLoginForLike 

export function newIsLoginForLike (newIsLoginForLike) {
    isLoginForLike = newIsLoginForLike
}



// export function setVariables(oldVar, newVar) {
//     return oldVar = newVar
// }


