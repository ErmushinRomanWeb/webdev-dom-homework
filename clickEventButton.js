

export function clickEventButton(postFunction) {
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