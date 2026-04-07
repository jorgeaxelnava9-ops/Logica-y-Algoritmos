//Lista ordenada alfabéticamente
const invitados = [
  "Adrián",
  "Alberto",
  "Alejandra",
  "Alejandro",
  "Alicia",
  "Andrea",
  "Andrés",
  "Antonio",
  "Beatriz",
  "Benjamín",
  "Brenda",
  "Carlos",
  "Carolina",
  "Cecilia",
  "Claudia",
  "Daniel",
  "Daniela",
  "David",
  "Diego",
  "Diana",
  "Eduardo",
  "Elena",
  "Emilio",
  "Enrique",
  "Erika",
  "Fernando",
  "Francisco",
  "Gabriela",
  "Gabriel",
  "Gerardo",
  "Guadalupe",
  "Héctor",
  "Hugo",
  "Isabel",
  "Iván",
  "Javier",
  "Jorge",
  "José",
  "Juan",
  "Julio",
  "Karla",
  "Laura",
  "Luis",
  "Manuel",
  "María",
  "Mario",
  "Miguel",
  "Natalia",
  "Patricia",
  "Raúl",
];

const contenedor = document.getElementById("contenedor");
const resultado = document.getElementById("resultado");

//Mostrar invitados
function mostrarInvitados(lista){
    contenedor.innerHTML = "";

    lista.forEach(nombre => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.textContent = nombre;
        contenedor.appendChild(card);
    });
}

mostrarInvitados(invitados);

//Algoritmo de dos punteros
function encontrarPareja(lista) {
    let i = 0;
    let j = 1;

    while (j < lista.length) {
        const inicial1 = lista[i][0];
        const inicial2 = lista[j][0];

        if (inicial1 === inicial2) {
            return [lista[i], lista[j]];
        }

        i++;
        j++;
    }

    return null;
}

//Evento botón
document.getElementById("btnBuscar").addEventListener("click", () => {

    const pareja = encontrarPareja(invitados);

    const cards = document.querySelectorAll(".card");
    cards.forEach(card => card.classList.remove("highlight"));

    if (pareja) {
        resultado.textContent = `✅ ${pareja[0]} y ${pareja[1]} pueden sentarse juntos`;

//Resaltar en UI
cards.forEach(card => {
    if (card.textContent === pareja[0] || card.textContent === pareja[1]) {
    card.classList.add("highlight");
    }
    });

    console.log("Pareja encontrada:", pareja);


    } else {
        resultado.textContent = "❌ No hay parejas compatibles";
    console.log("No se encontró pareja");
    }

});