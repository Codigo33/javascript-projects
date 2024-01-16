
const modalBtn = document.querySelector('.hero__modal-btn');
const modal = document.querySelector('.modal__overlay');
const closeBtn = document.querySelector('.modal__close-btn');
const modalContainer = document.querySelector('.modal__container');

modalBtn.addEventListener("click", () => {
    modal.classList.add('open__modal');
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove('open__modal');
})

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove('open__modal');
    }
});

modalContainer.addEventListener("click", (e) => {
    e.stopPropagation();
});