//Lista ordenada alfabéticamente
const invitados = [
  "Adrián"
  "Alberto"
  "Alejandra"
  "Alejandro"
  "Alicia"
  "Andrea"
  "Andrés"
  "Antonio"
  "Beatriz"
  "Benjamín"
  "Brenda"
  "Carlos"
  "Carolina"
  "Cecilia"
  "Claudia"
  "Daniel"
  "Daniela"
  "David"
  "Diego"
  "Diana"
  "Eduardo"
  "Elena"
  "Emilio"
  "Enrique"
  "Erika"
  "Fernando"
  "Francisco"
  "Gabriela"
  "Gabriel"
  "Gerardo"
  "Guadalupe"
  "Héctor"
  "Hugo"
  "Isabel"
  "Iván"
  "Javier"
  "Jorge"
  "José"
  "Juan"
  "Julio"
  "Karla"
  "Laura"
  "Luis"
  "Manuel"
  "María"
  "Mario"
  "Miguel"
  "Natalia"
  "Patricia"
  "Raúl"
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