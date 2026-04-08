const { crearNota, listarNotas,eliminarNota } = require('./gestorNotas');

// Pruebas
crearNota('Compras', 'Comprar leche y pan');
crearNota('Estudio', 'Repasar Node.js');

listarNotas();

eliminarNota('Compras');

listarNotas();