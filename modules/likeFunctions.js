import { commentsRender } from "./render.js";

export function likeMaker(commentators, commentBlockElement, replyТoСomment) {
    const likeButtonElements = document.querySelectorAll('.like-button');
    likeButtonElements.forEach((likeButtonElement) => {
        likeButtonElement.addEventListener('click', (event) => {
            event.stopPropagation()
            const index = likeButtonElement.dataset.index
            const like = commentators[index];
            if (like.isLiked === false) {
                like.isLiked = true;
                like.likes += 1;
                commentsRender(commentators, commentBlockElement, replyТoСomment)
            } else {
                like.isLiked = false;
                like.likes -= 1;
                commentsRender(commentators, commentBlockElement, replyТoСomment)
            }
        })
    })
}


export function newlikeColor(element) {
    if (element) {
        return 'like-button -active-like';
    } else {
        return 'like-button';
    }
}