function formatearJuego(juego) {
    const reserva = juego.disponible ? "Disponible" : "No disponible";
    
    return `
    ==================================
    Titulo: ${juego.titulo}
    Editorial: ${juego.editorial} 
    Año: ${juego.anio}
    Jugadores Minimo: ${juego.jugadoresMin} 
    Jugadores Maximo: ${juego.jugadoresMax} 
    Categorias: ${juego.categorias} 
    Reserva: ${reserva}`;
   }
   
function crearJuego(juegos) {
    const lineas = juegos.map(formatearJuego);
    return `CATÁLOGO DE JUEGOS DE MESA
   ===============
    ${lineas.join("/n")}
    ===============

   Cantidad de juegos: ${juegos.length}
   `;
   }

   module.exports = { formatearJuego, crearJuego };