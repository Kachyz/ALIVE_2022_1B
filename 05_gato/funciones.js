// 0 - disponible
// 1 - X (primer jugador)
// 2 - O (segundo jugador)
let tablero = [0,0,0,0,0,0,0,0,0];
// let tableroC = ['','','','','','','','','',];
let marca = 'x'

function seleccionar(posicion, btnId) {
    // Comprobar disponibilidad
    if( tablero[posicion] == 0 ) {
        // Marcamos el tablero
        tablero[posicion] = 1
        // Cambiamos texto de botón
        document.getElementById(btnId).innerText = marca

        if(marca == 'x') {
            marca = 'o'
        } else {
            marca = 'x'
        }
    }
    console.log(tablero)
}