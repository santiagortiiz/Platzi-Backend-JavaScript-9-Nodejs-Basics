const os = require('os');

// console.log(os.arch());              // Arquitectura x86, x32... la mia es x64
// console.log(os.platform());          // Linux, Windows... la mia es win32

// console.log(os.cpus().length);       // Cantidad CPUs/Nucleos y su informacion, tengo 4 nucleos

// console.log(os.constants);

/* Funciones para ver la memoria disponible en kb, mb y gb */
const SIZE = 1024;
function kb(bytes) { return bytes / SIZE }
function mb(bytes) { return kb(bytes) / SIZE }
function gb(bytes) { return mb(bytes) / SIZE }

console.log(os.freemem());              // Memoria libre disponible en bytes
console.log(kb(os.freemem()));
console.log(mb(os.freemem()));
console.log(gb(os.freemem()));

console.log(gb(os.totalmem()));         // Total de la memoria RAM

console.log(os.homedir())               // Directorio raiz de mi PC
console.log(os.tmpdir())                // Directorio temporal

console.log(os.hostname());             // Nombre del host de mi PC
console.log(os.networkInterfaces());    // Interfaces activas en mi PC
