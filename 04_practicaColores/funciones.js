// rgb( #Rojo, #Verde, #Azul)
let cantidadRojo = 0
let cantidadVerde = 0
let cantidadAzul = 0

function clickRojo() {
    cantidadRojo += 15

    // Limitar cantidadRojo a 255
    if(cantidadRojo > 255){
        cantidadRojo=0
    }

    // Buscar en el HTML el nodo con el ID 'rojo'
    let botonRojo = document.getElementById('rojo')
    // Cambiamos el texto del elemento que se encontró
    botonRojo.innerText = cantidadRojo

    cambiarColor()
}

function clickVerde() {
    cantidadVerde += 15

    // Limitar cantidadVerde a 255
    if(cantidadVerde > 255){
        cantidadVerde=0
    }

    // Buscar en el HTML el nodo con el ID 'verde'
    let botonVerde = document.getElementById('verde')
    // Cambiamos el texto del elemento que se encontró
    botonVerde.innerText = cantidadVerde

    cambiarColor()
}

function clickAzul() {
    cantidadAzul += 15

    // Limitar cantidadAzul a 255
    if(cantidadAzul > 255){
        cantidadAzul=0
    }

    // Buscar en el HTML el nodo con el ID 'verde'
    let botonAzul = document.getElementById('azul')
    // Cambiamos el texto del elemento que se encontró
    botonAzul.innerText = cantidadAzul

    cambiarColor()
}


function cambiarColor(){
    // Cambiar la combinación de RGB
    let nuevoColor = "rgb(" 
    + cantidadRojo + ","
    + cantidadVerde + ","
    + cantidadAzul + ")"
    console.log('color nuevo', nuevoColor)
    
    // Buscar el DIV
    document.getElementById('tortilla').style.backgroundColor = nuevoColor
}