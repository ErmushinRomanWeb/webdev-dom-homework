import { formRender, commentsRender } from "./render.js";
import { getComments } from "./api.js";

export function getFunction(commentators, loader) {
  const addForm = document.querySelector('.add-form');
  loader = true;
  formRender(loader);
  getComments().then((responseData) => {
    commentators = responseData.comments;
    commentsRender(commentators);
    loader = false;
    formRender(loader);
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