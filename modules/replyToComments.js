

export function replyТoСomment(commentators) {
    const commentElements = document.querySelectorAll('.comment');
    commentElements.forEach((commentElement) => {
        commentElement.addEventListener('click', () => {
            const index = commentElement.dataset.index;
            const person = commentators[index];
            const textInputElement = document.getElementById("text-input");
            textInputElement.value = `> ${person.text} \n \n  ${person.author.name},`;
        })
    })
}