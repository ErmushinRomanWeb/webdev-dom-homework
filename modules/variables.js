let loader = false;

const addForm = document.querySelector('.add-form');

const commentBlockElement = document.getElementById("comment-block");

let commentators = [];

const appElement = document.getElementById('appElement')

const loginUrl = 'https://wedev-api.sky.pro/api/user/login';

function setVariables(oldVar, newVar) {
    oldVar = newVar
}

export { loader, addForm, commentBlockElement, commentators, appElement, loginUrl, setVariables }

