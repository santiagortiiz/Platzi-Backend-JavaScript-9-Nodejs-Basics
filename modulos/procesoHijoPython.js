
/* Using execFile 
const { execFile } = require('child_process')
const path = "D:/Laboral/Vitalbox/Proyectos/Clientes/Katia/Procesamiento Carga Masiva/main.py"
const python = execFile("python", [path], (error, stdout, stderr) => {
    if (error) {
        console.log(stderr)
        throw error
  }
  console.log(stdout)
})
*/

/* Using spawn */
const { spawn } = require('child_process')
const path = "D:/Laboral/Vitalbox/Proyectos/Clientes/Katia/Procesamiento Carga Masiva/main.py"
const python = spawn('python', [path], {detached: true})
console.log(`Python ID: ${python.pid}`);

python.stdout.on('data', function (data) {
    console.log(`Data: ${data}`)
})

python.on('close', function(code) {
    console.log(`Proceso Cerrado ${code}`)
})

python.on('error', function(err) {
    console.log(`Ups! hubo un error: ${err}`)
})

python.on('exit', function(code) {
    console.log(`Proceso Terminado ${code}`)
})

/* Using fork
const { fork } = require('child_process')
const path = "D:/Laboral/Vitalbox/Proyectos/Clientes/Katia/Procesamiento Carga Masiva/main.py"
const python = fork(path, ['child']);
*/


/* This example works very good */
/*
const { execFile } = require('child_process');
const child = execFile('node', ['--version'], (error, stdout, stderr) => {
    if (error) {
        throw error;
        }
    console.log(stdout);
});
*/




