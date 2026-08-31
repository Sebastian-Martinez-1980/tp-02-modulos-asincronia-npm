function formatearJuego(juego) {
    const reserva = juego.disponible ? "Si" : "No";
    
    return `${juego.titulo} | ${juego.editorial} | ${juego.anio} | ${juego.jugadoresMin} | ${juego.jugadoresMax} | ${juego.categorias} | ${reserva}`;
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

   module.exports = { formatearJuego };