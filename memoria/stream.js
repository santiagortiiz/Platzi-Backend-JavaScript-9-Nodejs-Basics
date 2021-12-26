const fs = require('fs');
const stream = require('stream');
const util = require('util');

let data = '';

let readableStream = fs.createReadStream(__dirname + '/input.txt');
readableStream.setEncoding('UTF8');

// readableStream.on('data', function (chunk) {
//     data += chunk;
// });

// readableStream.on('end', function() {
//     console.log(data);
// });

// process.stdout.write('hola')
// process.stdout.write('que')
// process.stdout.write('tal')

// Crea un stream de transformacion que puede leer y escribir de forma bidireccional:
const Transform = stream.Transform; 

function Mayus() {
    Transform.call(this); // Se crea un constructor para el transform
}

// Se trae la clase util para generar herencia automatica para que 
// mayus herede todo de transform
util.inherits(Mayus, Transform);  // (Quien hereda, Quien sede atributos)

// Se añade una funcion prototipo a Mayus
Mayus.prototype._transform = function(chunk, codif, cb) { 
    chunkMayus = chunk.toString().toUpperCase();
    this.push(chunkMayus);
    cb();
}

let mayus = new Mayus();

readableStream                  
    .pipe(mayus)                // Se añade al proceso de transformar a mayusculas        
    .pipe(process.stdout);      // y luego a la salida del sistema 