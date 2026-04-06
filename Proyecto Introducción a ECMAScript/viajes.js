export const viajes = [];

export const registrarDestino = (destino, fecha, transporte, personas) => {
    const viaje = {
      id: Date.now(),
      destino,
      fecha,
      transporte,
      personas
    };

    viajes.push(viajes);
    };

    export const mostrarItinerario = (viajes) => {
        return viajes.map(viaje =>
          <div class="card">
            <h3>${viaje.destino}</h3>
            <p>📅 ${viaje.fecha}</p>
            <p>🚍 ${viaje.transporte}</p>
            <p>👥 ${viaje.personas} personas</p>
          </div>
        ).join("");
    };