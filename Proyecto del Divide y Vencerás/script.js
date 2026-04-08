const input = document.getElementById("numeros");
const resultado = document.getElementById("resultado");
const visual = document.getElementById("visual");

// FUNCIÓN DIVIDE & CONQUISTA
function encontrarMaximo(arr) {

    // CASO BASE
    if (arr.length === 1) {
        return arr[0];
    }

    // DIVIDIR
    const mitad = Math.floor(arr.length /2);
    const izquierda = arr.slice(0, mitad);
    const derecha = arr.slice(mitad);
}