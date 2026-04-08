const regalos = [
    "Muñeca",
    "Carro",
    "Videojuego",
    "Bicicleta",
    "Laptop",
    "Celular",
    "Pelota",
    "Libros",
    "Audífonos",
    "Juegos de Mesa",
    "Tazas",
    "Flores",
    "Relojes",
    "Perfumes",
    "Gafas de Sol",
    "Carteras",
    "Drones",
];

const lista = document.getElementById("lista");
const resultado = document.getElementById("resultado");

//Mostrar lista 
function mostrarLista() {
    lista.innerHTML = "";

    regalos.forEach(regalo => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.textContent = regalo;
        lista.appendChild(div);
    });
}

mostrarLista();


//FUNCIÓN RECURSIVA
function buscarRegalo(lista, objetivo, index = 0) {

    // CASO BASE 1: Se encontró
    if (lista[index] === objetivo) {
        return `🎁 Encontrado en la posición ${index}`;
    }

    // CASO BASE 2: No encontrado
    if (index >= lista.length) {
        return "❌ El regalo no está en la lista";
    }

    //LLAMADA RECURSIVA
    return buscarRegalo(lista, objetivo, index + 1);
}

//Evento botón
document.getElementById("btnBuscar").addEventListener("click", () => {

    const valor = document.getElementById("inputRegalo").value;

    const mensaje = buscarRegalo(regalos, valor);

    resultado.textContent = mensaje;
    console.log(mensaje);

    //resaltar en UI 
    const items = document.querySelectorAll(".item");
    items.forEach(item => item.classList.remove("highlight"));

    items.forEach(item => {
        if (item.textContent === valor) {
            item.classList.add("highlight");
        }
    });
});
