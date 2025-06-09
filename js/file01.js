"use strict";

import { setTitle } from "./functions.js";

/**
 * Muestra la notificación interactiva si el elemento con el ID 'toast-interactive' existe.
 * @function
 * @returns {void}
 */
const showToast = () => {
    const toast = document.getElementById("toast-interactive");
    if (toast) {
        toast.classList.add("md:block");
    }
};

/**
 * Agrega un evento click al botón con el ID 'demo' para abrir un video de YouTube en una nueva pestaña.
 * @function
 * @returns {void}
 */
const showVideo = () => {
    const demo = document.getElementById("demo");
    if (demo) {
        demo.addEventListener("click", () => {
            window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
        });
    }
};

(() => {
    // Variables locales
    const titulo = "Landing Page";
    const subtitulo = "Bienvenido a la landing";

    // Llama a setTitle
    setTitle(titulo, subtitulo);

    showToast();
    showVideo();
})();
