export let loader = false;

export const addForm = document.querySelector('.add-form');

export const commentBlockElement = document.getElementById("comment-block");

export let commentators = [];

export const appElement = document.getElementById('appElement')

export const loginUrl = 'https://wedev-api.sky.pro/api/user/login';

export let token

export function setVariables(oldVar, newVar) {
    return oldVar = newVar
}


