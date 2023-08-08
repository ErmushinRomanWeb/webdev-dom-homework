import { timeFunction } from "./timeFunction.js";

export function formRender(loader, addForm, clickButtonFunction) {
    if (loader) {
        addForm.innerHTML = `<p>Loading...</p>`
    } else {
        addForm.innerHTML = `<input 
        id="name-input"
        type="text"
        class="add-form-name"
        placeholder="Введите ваше имя"
      />
      <!--Сюда будет вводится ИМЯ-->
      <textarea
        id="text-input"
        type="textarea"
        class="add-form-text"
        placeholder="Введите ваш коментарий" 
        rows="4"
      ></textarea>
      <!--Сюда будет вводится ТЕКСТ-->
      <div class="add-form-row">
        <button id="form-button" class="add-form-button">Написать</button>
      </div>`;
        clickButtonFunction();
    }
}


export function commentsRender(commentators, newlikeColor, commentBlockElement, likeMaker, replyТoСomment) {
    const commentatorsHtml = commentators.map((commentator, index) => {
        return `<li data-index="${index}" class="comment">
            <div class="comment-header">
              <div>${commentator.author.name}</div>
              <div>${timeFunction(new Date(commentator.date))}</div>
            </div>
            <div class="comment-body">
              <div class="comment-text">
                ${commentator.text}
              </div>
            </div>
            <div class="comment-footer">
              <div class="likes">
                <span class="likes-counter">${commentator.likes}</span>
                <button data-index="${index}" class="${newlikeColor(commentator.isLiked)}"></button>
              </div>
            </div>`
    }).join('');
    commentBlockElement.innerHTML = commentatorsHtml;
    likeMaker();
    replyТoСomment();
}