const path = require("node:path");
const pc = require("picocolors");
const { leerJson, escribirTexto } = require("./archivos.js");
const { formatearJuego } = require("./juegos.js");
const rutaDatos = path.join(__dirname, "../", "datos", "juegos.json");
const rutaSalida = path.join(__dirname, "../", "salida", "catalogo_juegos.txt");

async function main() {
    try {
        console.log(pc.cyan("Leyendo juegos... "));
        const juegos = await leerJson(rutaDatos);
        const juego = formatearJuego(juegos);
        await escribirTexto(rutaSalida, juego);
        console.log(juegos);
        console.log(pc.green(`Juego generado exitosamente en: ${rutaSalida}`));
    } catch (error) {
        console.error(pc.red(`Error al generar el juegooo : ${error.message}`));
        process.exitCode = 1;
    }
}

main();