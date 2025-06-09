'use strict';

/**
 * Cambia el título de la página y muestra un subtítulo en consola.
 * @param {string} title - Título de la página.
 * @param {string} subtitle - Subtítulo a mostrar en consola.
 * @returns {void}
 */
export function setTitle(title, subtitle) {
    document.title = title;
    console.log(`Subtítulo: ${subtitle}`);
}

/**
 * Agrega una fila (objeto framework) a la consola o a una tabla.
 * @param {Object} frameworkObj - Objeto con datos del framework.
 * @param {string} frameworkObj.nombre
 * @param {string} frameworkObj.fecha
 * @param {string} frameworkObj.usuarios
 * @param {string} frameworkObj.popularidad
 * @returns {void}
 */
export function addRow(frameworkObj) {
    console.log("Fila agregada:", frameworkObj);
    // Aquí puedes agregar lógica para insertar en una tabla si lo deseas
}

/**
 * Realiza una petición HTTP a la URL dada y devuelve un objeto con el resultado.
 * @param {string} url - URL de la API a consultar.
 * @returns {Promise<{success: boolean, body?: any, error?: string}>}
 */
export const fetchFakerData = (url) => {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            return {
                success: true,
                body: data
            };
        })
        .catch(error => {
            return {
                success: false,
                error: `Error en la petición: ${error.message}`
            };
        });
};