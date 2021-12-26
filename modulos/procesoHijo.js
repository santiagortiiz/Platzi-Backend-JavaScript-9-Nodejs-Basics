/* exec permite ejecutar comandos en la consola del sistema */

const { exec, spawn } = require('child_process'); /* Sintaxis de ECMAscript 6 para
extraer objetos de un modulo de muchos objetos */

/* Es la misma forma de desestructurar objetos que:  */
const exec = require ('child_process').exec

/* Hacer que node ejecute un script de otro lado */
/*exec('node modulos/consola.js', (err, stdout, sterr) => {
    if (err) {
        console.error(err);
        return false;
    }

     console.log(stdout);
}) */

/* Invocar un proceso nuevo y complejo (Puede ejecutarse 1 por core del PC */
let proceso = spawn('ls', ['-la']);

console.log(proceso.pid);
console.log(proceso.connected);

/* Asociamos eventos al proceso */
proceso.stdout.on('data', function (dato) {
    console.log('¿Está muerto?');
    console.log(proceso.killed);
    console.log(dato.toString())
});

proceso.on('exit', function() {
    console.log('el proeso terminó');
    console.log(proceso.killed)
})
