import { formRender, commentsRender } from "./render.js";
import { getComments } from "./api.js";

export function getFunction(commentators, loader, addForm, commentBlockElement) {
  loader = true;
  formRender(loader, addForm);
  getComments().then((responseData) => {
    commentators = responseData.comments;
    commentsRender(commentators, commentBlockElement);
    loader = false;
    formRender(loader, addForm);
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