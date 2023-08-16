import { postFunction } from "./postFunction.js";
import { commentators, loader } from "./variables.js";

//функция отвечает за добавление нового комментария посредством вызова в ней postFunction после обработки события - нажатие кнопки
export function clickEventButton() {
  const formButtonElement = document.getElementById("form-button");
  const nameInputElement = document.getElementById("name-input");
  const textInputElement = document.getElementById("text-input");// элементы отрисованы заранее в formRender функции
  // 
  formButtonElement.addEventListener("click", () => {//вешаем обработчик события 
    nameInputElement.classList.remove("error");
    if (nameInputElement.value === "") {
      nameInputElement.classList.add("error");//при отсутствии в полях ввода информации вешаем класс, который красит поля ввода
      return;
    }
    textInputElement.classList.remove("error");
    if (textInputElement.value === "") {
      textInputElement.classList.add("error");
      return;
    }
    postFunction(commentators, loader)//если поля ввода заполнены, то вызывается postFunction(смотри в postFunction.js)
  });
}