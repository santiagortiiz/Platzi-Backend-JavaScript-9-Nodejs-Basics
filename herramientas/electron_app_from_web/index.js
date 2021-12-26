const {app, BrowserWindow} = require ("electron")

let ventanaPrincipal

app.on('ready', crearVentana) // Una vez la pagina este cargada y disponible se genera

function crearVentana() {
    ventanaPrincipal = new BrowserWindow({
        width: 500,
        height: 500
    })
    ventanaPrincipal.loadFile("index.html")
}

