import { commentsRender } from "./render.js";
import { isLoginForLike } from "./variables.js";

export function likeMaker(commentators) {
    // const commentBlockElement = document.getElementById("comment-block")
    const likeButtonElements = document.querySelectorAll('.like-button');

    if (isLoginForLike) {
        likeButtonElements.forEach((likeButtonElement) => {
            likeButtonElement.addEventListener('click', (event) => {
                event.stopPropagation()
                const index = likeButtonElement.dataset.index
                const like = commentators[index];
                if (like.isLiked === false) {
                    like.isLiked = true;
                    like.likes += 1;
                    commentsRender(commentators)
                } else {
                    like.isLiked = false;
                    like.likes -= 1;
                    commentsRender(commentators)
                }
            })
        })
    }
}


export function newlikeColor(element) {
    if (element) {
        return 'like-button -active-like';
    } else {
        return 'like-button';
    }
}