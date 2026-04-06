import { viajes, registrarDestino, mostrarItinerario } from "./viajes";
import { calcularCosto } from "./costos";

//Elementos del DOM
const form = document.getElementById("form-viaje");
const destinoInput = document.getElementById("destino");
const fechaInput = document.getElementById("fecha");
const transporteInput = document.getElementById("transporte");
const personasInput = document.getElementById("personas");

const resumen = document.getElementById("resumen");
const itinerario = document.getElementById("itinerario");

//evento principal
form.addEventListener("submit", (e) =>{
    e.preventDefault();

    //Obtener datos

    const destino = destinoInput.value;
    const fecha = fechaInput.value;
    const transporte = transporteInput.value;
    const personas = parseInt(personasInput.value);

    //guardar viaje
    registrarDestino(destino, fecha, transporte, personas);

    //Calcular costo
    const costo = calcularCosto(transporte, personas);

    //Obtener sugerencia
    const sugerencia = sugerenciaViaje(destino);

    // Mostrar resumen
    resumen.innerHTML = `
    <h2>Resumen del viaje</h2>
    <p><strong>Destino:</strong> ${destino}</p>
    <p><strong>Total:</strong> $${costo}</p>
    <p>${sugerencia}</p>
    `;
    //Mostrar itinerario
    itinerario.innerHTML =
    <h2>Itinerario</h2>
    ${mostrarItinerario(viajes)}
    ;

    //Limpiar formulario
    form.requestFullscreen();
});




    
}