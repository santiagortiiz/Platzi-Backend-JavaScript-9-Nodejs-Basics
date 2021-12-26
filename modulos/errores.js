function otraFuncion() {
    serompe();
}

function serompe() {
    return 3 + z;
}

function seRompeAsincrona(cb) {
    setTimeout(function () {
        try {
            return 3 + z;
        } catch (err) {
            console.error('Error en mi función asícnrona');
            cb(err);
        }
    })
}

try {
    //otraFuncion();
    seRompeAsincrona(function (err, result) {
        if (err) console.log (err.message)
        else console.log(result)
    });
} catch(err) {
    console.error('Vaya, algo se ha roto...');
    console.error(err);
    console.error(err.message);                 // Mensaje del error a detalle
    console.log('Pero no pasa nada, lo hemos capturado');
}

console.log('esto de aqui está al final');