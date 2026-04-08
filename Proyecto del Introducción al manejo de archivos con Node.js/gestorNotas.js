const fs = require('fs');
const path = require('path');

// Ruta de Archivo
const archivoNotas = path.join(__dirname, 'notas.json');

// Función para Leer notas
const leerNotas = () => {
    try {
        const data = fs.readFileSync(archivoNotas, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
};

// Función para guardar notas
const guardarNotas = (notas) => {
    fs.writeFileSync(archivoNotas, JSON.stringify(notas, null, 2));
};

// Crear nota
const crearNota = (titulo, contenido) => {
    const notas = leerNotas();

    // Verificar si ya existe
    const existe = notas.find(nota => nota.titulo === titulo);

    if (existe) {
        console.log('⚠️ Ya existe una nota con ese título');
        return;
    }

    notas.push({titulo, contenido});
    guardarNotas(notas);

    console.log('✅ Nota creada correctamente');
};

// Listar notas 
const listarNotas = () => {
    const notas = leerNotas();

    if (notas.length === 0) {
        console.log('📭 No hay notas guardadas');
        return;
    }

    console.log('\n📒 LISTA DE NOTAS:\n');

    notas.forEach((nota, index) => {
        console.log(`${index + 1}. 📝 ${nota.titulo}`);
        console.log(`   ${nota.contenido}\n`);
    });
};

// Eliminar nota 
const eliminarNota = (titulo) => {
    const notas = leerNotas();
    
    const nuevasNotas = notas.filter(nota => nota.titulo !== titulo);
    
    if (notas.length === nuevasNotas.length) {
    console.log('❌ No se encontró la nota');
    return;
}

    guardarNotas(nuevasNotas);
    console.log('🗑️ Nota eliminada correctamente');
};
    
    // Exportar funciones 
    module.exports = {
    crearNota,
    listarNotas,
    eliminarNota
    };