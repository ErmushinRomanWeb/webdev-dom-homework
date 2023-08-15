export let loader = false;

export const commentBlockElement = document.getElementById("comment-block");
//Задача: объявить переменные только в фонкциях, где используются
export let commentators = [];

export const appElement = document.getElementById('appElement')

export const baseUrl = 'https://wedev-api.sky.pro/api/v2/ErmushinRomnam/comments';

export const loginUrl = 'https://wedev-api.sky.pro/api/user/login';

export const registrationUrl = 'https://wedev-api.sky.pro/api/user';

export let token

export function setVariables(oldVar, newVar) {
    return oldVar = newVar
}


