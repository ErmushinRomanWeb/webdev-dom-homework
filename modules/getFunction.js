import { formRender, commentsRender } from "./render.js";
import { getComments } from "./api.js";

//Функция принимает в себя аргументы, массива и индикатора загрузки
export function getFunction(commentators, loader) {
  loader = true;// Тут, пока страница не загрузилась, индикатор по умолчанию будет = false, и как только функция дошла до выполнения < этого кода индикатор = true появляется форма >
  formRender(loader);//Запустили formRender(смотри процесс в render.js )
  getComments().then((responseData) => {
    console.log(responseData.comments);//getComments(api.js) вызвали ее и она нам вернула промис с объектом в котором сохраненные данные с комментариями с сервера в формате json
    commentators = responseData.comments;// в аргумент, который явл. переменной массива, помещаем данные из объекта, которые внутри массива, внутри которого объекты с ключами, некоторы из которых и являются текстом комментария
    commentsRender(commentators);//запускаем commentsRender(render.js) в аргумент которой и идет наш массив с данными с сервера, это и отрисовывает наши комментарии
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