const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll('img')[0];
const arrowIcons = document.querySelectorAll('.wrapper svg');

let isDragStart = false, isDragging = false, prevPageX, prevScrollLeft, positionDiff;

// Oculta las flechas en caso de llegar al fin o al principio
const showHideIcons = () => {
    // Obteniendo el maximo width del scroll
    let scrollWidth = carousel.scrollWidth - carousel.clientWidth; 
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? 'none' : 'block';
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
}

arrowIcons.forEach( icon => {
    icon.addEventListener("click", () => {
        // Obteniendo la primer imagen y agregando 14px de margin
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => {
            showHideIcons();
        }, 60); // Llama la funcion despues de 60ms
    })
});

const autoSlide = () => {
    if( carousel.scrollLeft == (carousel.scrollWidth - carousel.clientWidth)) return;
    // Pasando valor absoluto de la posicion para realizar el salto de imagen
    positionDiff = Math.abs(positionDiff); // Redondea el valor
    let firstImgWidth = firstImg.clientWidth + 14;
    let valDifference = firstImgWidth - positionDiff; // Centra la imagen quitando los px que se agregaron en firstImgWidth

    // if (carousel.scrollLeft > prevScrollLeft) {
    //     // Si da scroll hacia la derecha
    //     return carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
    // }
    // // Si da scroll hacia la izquierda
    // carousel.scrollLeft += positionDiff > firstImgWidth / 3 ? valDifference : -positionDiff;
}

// Acciona el slide cuando das click en la imagen
const dragStart = (e) => {
    isDragStart = true;
    // Ambos dan las coordenadas de x, tanto del mouse pointer o del touch
    prevPageX = e.pageX || e.touched[0].pageX;
    prevScrollLeft = carousel.scrollLeft;
};

// Arrastre
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    isDragging = true;
    carousel.classList.add("dragging"); // Agregando clase dragging
    positionDiff = (e.pageX || e.touched[0].pageX) - prevPageX;
    carousel.scrollLeft = prevScrollLeft - positionDiff;
    showHideIcons(); // Agregando funcion mientras se arrastra la imagen
}

// El arrastre de la imagen finaliza cuando soltas el click
const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
    if(!isDragging) return;
    isDragging = false;
    autoSlide();
}

// Listeners
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);


carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);