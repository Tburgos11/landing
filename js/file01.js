"use strict";

import { setTitle } from "./functions.js";
import { fetchFakerData } from "./functions.js";

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

/**
 * Carga datos desde la API de Faker y los muestra en consola.
 * Utiliza async/await para manejar la operación asincrónica.
 * @returns {Promise<void>}
 */
const loadData = async () => {
    const url = 'https://fakerapi.it/api/v2/texts?_quantity=10&_characters=120';

    try {
        const result = await fetchFakerData(url);

        if (result.success) {
            console.log('Datos obtenidos con éxito:', result.body);
        } else {
            console.error('Error al obtener los datos:', result.error);
        }

    } catch (error) {
        console.error('Ocurrió un error inesperado:', error);
    }
};

// Función de autoejecución
(() => {
    const titulo = "Landing Page";
    const subtitulo = "Bienvenido a la landing";

    setTitle(titulo, subtitulo);

    showToast();
    showVideo();
    loadData();
})();
