const container = document.querySelector('.container');

window.addEventListener('scroll', () => {
    
    const { scrollHeight, clientHeight, scrollTop } = document.documentElement;

    scrollTop + clientHeight > scrollHeight - 3 && 
    setTimeout(() => {
        newContainer();
        newBlock();
        randomBlock();
    }, 1000);
});

// Creando nuevo box
const newContainer = () => {
    const box = document.createElement('div');
    box.className = 'box d';
    container.appendChild(box);
}

const newBlock = () => {
    const box = document.createElement('div');
    box.className = 'box e';
    container.appendChild(box);
}

function randomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.round() * 16)]
    }
    return color
}

const randomBlock = () => {
    const box = document.createElement('div');
    box.className = `box ${randomColor()}`;
    container.appendChild(box);
}