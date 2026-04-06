const precios = {
    avion: 5000,
    autobus: 2000,
    tren: 3000
};

export const calcularCosto = (transporte, personas) => {
    let total = precios[transporte] * personas;

    //Descuento por grupo
    if (personas >= 4) {
        total *= 0.85;
    }

    return total;
};