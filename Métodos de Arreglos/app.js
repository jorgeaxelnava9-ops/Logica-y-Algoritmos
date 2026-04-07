// 1. Arreglo de productos
const productos = [
    {nombre: "Audífonos", precio: 80, categoria: "Electrónica" },
    {nombre: "Teclado", precio: 150, categoria: "Electrónica" },
    {nombre: "Mouse", precio: 50, categoria: "Electrónica" },
    {nombre: "Playera", precio: 90, categoria: "Ropa" },
    {nombre: "Zapatos", precio: 200, categoria: "Ropa" },
    {nombre: "Libro", precio: 70, categoria: "Educación" },
];

//Mostrar productos en pantalla
const contenedor = document.getElementById("productos");

function mostrarProductos(lista) {
    contenedor.innerHTML = "";

    lista.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("card");

        card.innerHTML =
        <h3>${producto.nombre}</h3>
        <p>💲 ${producto.precio}</p>
        <p>📦 ${producto.categoria}</p>
        ;

        contenedor.appendChild(card);
        });
}

//Mostrar todo al inicio
mostrarProductos(productos);

// Botón
document.getElementById("btnFiltrar").addEventListener("click", () => {

    //2. FILTER productos menores a 100
    const filtrados = productos.filter(p => p.precio <100);
    console.log("Filtrados (<100):", filtrados);

    //3. SORT ordenar por nombre
    const ordenados = filtrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
    console.log("Ordenados:", ordenados);

    //4. MAP solo nombres
    const nombres = ordenados.map(p => p.nombre);
    console.log("Nombres:", nombres);

    //Mostrar en pantalla
    mostrarProductos(ordenados);

    const lista = document.getElementById("listaNombres");
    lista.innerHTML = "";

    nombres.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });

    // Reduce total de precios
    const total = ordenados.reduce((acc, p) => acc + p.precio, 0);
    console.log("Total precios:", total);

    });



