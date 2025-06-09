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