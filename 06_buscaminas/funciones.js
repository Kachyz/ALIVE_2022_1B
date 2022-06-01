let tablero = []
const CANTIDAD_MINAS = 20

function generarTablero() {
    // iterar sobre la cantidad de filas y columnas que necesitamos
    // para llenar el tablero

    const tableroHTML = document.getElementById('tablero')

    for(let x=0; x < 8; x++){ // filas
        tablero[x] = []

        for(let y=0; y < 8; y++){ // columnas
            tablero[x][y] = ' '

            let nuevoBoton = document.createElement('button')
            nuevoBoton.onclick = function(){console.log(x,y)}
            nuevoBoton.innerText = x + "," + y
            tableroHTML.appendChild(nuevoBoton) // Pegarle el nuevo botón
        }
    }
    colocarMinas()
}

function colocarMinas() {
    // Seleccionar una fila aleatoria y una columna aleatoria
    // Revisar si la casilla en cuestion está libre
    // Colocamos la mina
    for(let cont = 0; cont < CANTIDAD_MINAS; cont++) {
        let x = Math.floor(Math.random() * 8)
        let y = Math.floor(Math.random() * 8)
    
        if(tablero[x][y] == 'M'){
            // No cuenta, repetir el ciclo
            cont--
        } else {
            tablero[x][y] = 'M'
        }
    }
    console.table(tablero)
}

generarTablero()