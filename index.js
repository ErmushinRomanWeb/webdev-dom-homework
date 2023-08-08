import { getComments, postComments } from "./api.js";
import { formRender, commentsRender } from "./render.js";
"use strict";

let loader = false;
const addForm = document.querySelector('.add-form')

const commentBlockElement = document.getElementById("comment-block");


function getFunction(){
  loader = true;
  formRender(loader, addForm, clickEventButton);
  getComments().then((responseData) => {
    commentators = responseData.comments;
    commentsRender(commentators, newlikeColor, commentBlockElement, likeMaker, replyТoСomment);
    loader = false;
    formRender(loader, addForm, clickEventButton);
  }).catch((error) => {
    console.warn(error)
    // alert('Кажется у Вас пропал интернет');
    if (error.message === 'NetworkError when attempting to fetch resource.') {
      alert('Кажется, у Вас пропал интернет, обновите страницу позже.');
    }
    if (error.message === 'error') {
      alert('Что то пошло не так, обновите страницу')
    }
  })

}
getFunction();

function postFunction() {
  const nameInputElement = document.getElementById("name-input");
  const textInputElement = document.getElementById("text-input");
  postComments({ name: nameInputElement.value, text: textInputElement.value }).then((responseData) => {
    commentators = responseData.comment;
    getFunction();
  }).catch((error) => {
    console.warn(error)
    if (error.message === 'NetworkError when attempting to fetch resource.') {
      alert('Кажется, у Вас пропал интернет, обновите страницу позже.')
    };
    if (error.message === '< 2 sumb') {
      alert('Вы ввели слишком короткое имя либо комментарий');
      nameInputElement.classList.add("error");
      textInputElement.classList.add('error')
    };
    if (error.message === 'server fall') {
      alert('Сервер сломался, попробуй позже');
      postFunction()
    }
  });
};

let commentators = [];

const likeMaker = () => {
  const likeButtonElements = document.querySelectorAll('.like-button');
  likeButtonElements.forEach((likeButtonElement) => {
    likeButtonElement.addEventListener('click', (event) => {
      event.stopPropagation()
      const index = likeButtonElement.dataset.index
      const like = commentators[index];
      if (like.isLiked === false) {
        like.isLiked = true;
        like.likes += 1;
        commentsRender(commentators, newlikeColor, commentBlockElement, likeMaker, replyТoСomment)
      } else {
        like.isLiked = false;
        like.likes -= 1;
        commentsRender(commentators, newlikeColor, commentBlockElement, likeMaker, replyТoСomment)
      }
    })
  })
}

function replyТoСomment() {
  const commentElements = document.querySelectorAll('.comment');
  commentElements.forEach((commentElement) => {
    commentElement.addEventListener('click', () => {
      const index = commentElement.dataset.index;
      const person = commentators[index];
      const textInputElement = document.getElementById("text-input");
      textInputElement.value = `> ${person.text} \n \n  ${person.author.name},`;
    })
  })
}

const newlikeColor = (element) => {
  if (element) {
    return 'like-button -active-like';
  } else {
    return 'like-button';
  }
}


commentsRender(commentators, newlikeColor, commentBlockElement, likeMaker, replyТoСomment)

function clickEventButton() {
  const formButtonElement = document.getElementById("form-button");
  const nameInputElement = document.getElementById("name-input");
  const textInputElement = document.getElementById("text-input");
  // 
  formButtonElement.addEventListener("click", () => {
    nameInputElement.classList.remove("error");
    if (nameInputElement.value === "") {
      nameInputElement.classList.add("error");
      return;
    }
    textInputElement.classList.remove("error");
    if (textInputElement.value === "") {
      textInputElement.classList.add("error");
      return;
    }
    postFunction()
  });
}


