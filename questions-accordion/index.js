/* Using selectors inside the element */
const questions = document.querySelectorAll(".questions__question");

/*questions.forEach( question => {
    const btn = question.querySelector(".questions__question-btn");
    // console.log(btn); // Indica el elemento button

    btn.addEventListener("click", () => {
        // console.log(question); // Indica el elemento article

        questions.forEach( item => {
            if (item !== question) {
                item.classList.remove("show__text");
            }

            question.classList.toggle("show__text");
        });

    });
});*/


/* Traversing the DOM */
const btns = document.querySelectorAll(".questions__question-btn");

btns.forEach( btn => {
    btn.addEventListener("click", e => {
        const question = e.currentTarget.parentElement.parentElement;
        // console.log(question); // current = button / parent = div / parent = article

        question.classList.toggle("show__text");
    });
});