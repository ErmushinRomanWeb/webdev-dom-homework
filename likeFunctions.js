import { commentsRender } from "./render.js";

export function likeMaker(commentators, newlikeColor, commentBlockElement, replyТoСomment) {
    const likeButtonElements = document.querySelectorAll('.like-button');
    likeButtonElements.forEach((likeButtonElement) => {
      likeButtonElement.addEventListener('click', (event) => {
        event.stopPropagation()
        const index = likeButtonElement.dataset.index
        const like = commentators[index];
        if (like.isLiked === false) {
          like.isLiked = true;
          like.likes += 1;
          commentsRender(commentators, newlikeColor, commentBlockElement, replyТoСomment)
        } else {
          like.isLiked = false;
          like.likes -= 1;
          commentsRender(commentators, newlikeColor, commentBlockElement, replyТoСomment)
        }
      })
    })
}