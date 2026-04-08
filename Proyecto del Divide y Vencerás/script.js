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

    // CONQUISTAR (recursión)
    const maxIzq = encontrarMaximo(izquierda);
    const maxDer = encontrarMaximo(derecha);

    // COMBINAR
    return maxIzq > maxDer ? maxIzq : maxDer;
}

// Evento Botón
document.getElementById("btnCalcular").addEventListener("click", () => {

    const valores = input.value
    .split(",")
    .map(num => parseInt(num.trim()))
    .filter(num => !isNaN(num));

    if (valores.length === 0) {
        resultado.textContent = "❌ Ingresa números válidos";
        return;
    }

    const maximo = encontrarMaximo(valores);

    resultado.textContent = `🔝 Número máximo: ${maximo}`;
    console.log("Máximo:", maximo);

    // Mostrar visual
    visual.innerHTML = "";

    valores.forEach(num => {
        const div = document.createElement("div");
        div.classList.add("bloque");
        div.textContent = num;

        if (num === maximo) {
            div.classList.add("max");
        }

        visual.appendChild(div);
    });
});