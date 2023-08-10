import { postFunction } from "./postFunction.js";
import { addForm, commentBlockElement, commentators, loader } from "./variables.js";


export function clickEventButton() {
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
    postFunction(commentators, loader, addForm, commentBlockElement)
  });
}