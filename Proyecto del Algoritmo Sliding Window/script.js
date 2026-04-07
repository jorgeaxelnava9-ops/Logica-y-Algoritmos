const textarea = document.getElementById("texto");
const resultado = document.getElementById("resultado");
const contenedor = document.getElementById("palabras");

document.getElementById("btnAnalizar").addEventListener("click", () => {

    const texto = textarea.value;

    // INSTRUCCIÓN 1: split (' ')
    const palabras = texto.split(" ");
    console.log("Palabras:", palabras);

    let longestWord = "";

    // INSTRUCCIÓN 2: Sliding Window (recorrer palabras)
    for (let i = 0; i < palabras.length; i++) {

    const palabraActual = palabras[i];

    if (palabraActual.length > longestWord.length) {
        longestWord = palabraActual;
    }

} 
    

//Mostrar resultado
resultado.textContent = `📌 Palabra más larga: ${longestWord}`;
console.log("Palabra más larga:", longestWord);

//Mostrar visualmente
contenedor.innerHTML = "";

palabras.forEach(palabra => {
    const span = document.createElement("span");
    span.classList.add("word");
    span.textContent = palabra;

    if (palabra === longestWord) {
        span.classList.add("highlight");
    }

    contenedor.appendChild(span);
});

});