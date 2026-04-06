const precios = {
    avion: 5000,
    autobus: 2000,
    tren: 3000
};

export const calcularCosto = (destino, transporte, personas) => {
    let total = precios[transporte] || 0;

    if (personas >= 4) {
        total *= 0.85;
    }

    return total;
};