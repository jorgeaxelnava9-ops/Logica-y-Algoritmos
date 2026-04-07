// ==========================
// 1. ARREGLO PRINCIPAL
// ==========================
const listaDeCompras =[];

// ==========================
// 2.- FUNCIONES
// ==========================

//Agregar producto
const agregarProducto = (producto) => {

    //Evitar duplicados
    if (listaDeCompras.includes(producto)) {
        mostrarMensaje("⚠ El producto ya existe");
        return;
    }

    listaDeCompras.push(producto);
    mostrarMensaje("✅ Producto agregado");
};

//Eliminar producto
const eliminarProducto = (producto) => {
    const index = listaDeCompras.indexOf(producto);

    if (index !== -1) {
        listaDeCompras.splice(index, 1);
        mostrarMensaje("🗑 Producto eliminado");
        mostrarLista ();
    }
};

//Mostrar lista
const mostrarLista =() => {
    const contenedor = document.getElementById("lista");
    contenedor.innerHTML ="";

    listaDeCompras.forEach(producto => {
        contenedor.innerHTML += `
  <div class="item">
    <span>${producto}</span>
    <button onclick="eliminarProducto('${producto}')">❌</button>
  </div>
`;
    });
};


//Función extra (mensaje)
const mostrarMensaje = (msg) => {
    const mensaje = document.getElementById("mensaje");
    mensaje.textContent = msg;

    setTimeout(() => {
        mensaje.textContent = "";
     }, 2000);
};

// ==========================
// 3. EVENTO PRINCIPAL
// ==========================
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = document.getElementById("producto");
    const producto = input.value.trim();

    if (producto ==="") return;

    agregarProducto(producto);
    mostrarLista();

    input.value = "";
});

