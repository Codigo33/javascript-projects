
const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (e) => {
    e.preventDefault();

    // Cambia el icono para mostrar la contraseña
    inputIcon.setAttribute(
        'src',
        input.getAttribute('type') === 'password' ?
        'img/eye-off.svg'
            :
        'img/eye.svg'
    );

    // Cambia la visibilidad de la contraseña en caso de dar click en el ojo
    input.setAttribute(
        'type',
        input.getAttribute('type') === 'password' ?
        'text'
            :
        'password'
    );
})