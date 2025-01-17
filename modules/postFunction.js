import { getFunction } from "./getFunction.js";
import { postComments } from "./api.js";
//Функция отвечает за добавление новых комментариев 
export function postFunction(commentators, loader) {
    const nameInputElement = document.getElementById("name-input");//отрендерены ранее
    const textInputElement = document.getElementById("text-input");
    //вызываем postComments(api.js) 
    postComments({ name: nameInputElement.value, text: textInputElement.value }).then((responseData) => {
        commentators = responseData.comment;
        getFunction(commentators, loader);
    }).catch((error) => {
        console.warn(error)
        if (error.message === 'NetworkError when attempting to fetch resource.') {
            alert('Кажется, у Вас пропал интернет, обновите страницу позже.')
        };
        if (error.message === '< 2 sumb') {
            alert('Вы ввели слишком короткое имя либо комментарий');
            nameInputElement.classList.add("error");
            textInputElement.classList.add('error');
        };
        if (error.message === 'server fall') {
            alert('Сервер сломался, попробуй позже');
            postFunction(commentators, loader)
        };
        if (error.message === 'unauthorized') {
            alert('Вы не авторизовались')
        }
    });
};