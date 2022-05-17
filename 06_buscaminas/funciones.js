function generarTablero() {
    // iterar sobre la cantidad de filas y columnas que necesitamos
    // para llenar el tablero

    const tableroHTML = document.getElementById('tablero')

    for(let x=0; x < 8; x++){ // filas
        for(let y=0; y < 8; y++){ // columnas
            let nuevoBoton = document.createElement('button')
            nuevoBoton.onclick = function(){console.log(x,y)}
            nuevoBoton.innerText = x + "," + y
            tableroHTML.appendChild(nuevoBoton) // Pegarle el nuevo botón
        }
    }
}

generarTablero()