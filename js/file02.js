import { addRow } from "./functions.js";

/**
 * Arreglo de frameworks con datos en formato de cadena.
 * Cada elemento contiene: nombre | fecha de lanzamiento | número de usuarios | porcentaje de popularidad
 * @type {string[]}
 */
const frameworks = [
    "React | 2013 | 1000000 | 40%",
    "Vue | 2014 | 800000 | 30%",
    "Angular | 2010 | 600000 | 20%",
    "Svelte | 2016 | 200000 | 10%"
];

frameworks.forEach(item => {
    // Divide la cadena y elimina espacios en blanco
    const [nombre, fecha, usuarios, popularidad] = item.split("|").map(valor => valor.trim());

    // Crea el objeto frameworkObj
    const frameworkObj = {
        nombre,
        fecha,
        usuarios,
        popularidad
    };

    // Llama a addRow
    addRow(frameworkObj);
});