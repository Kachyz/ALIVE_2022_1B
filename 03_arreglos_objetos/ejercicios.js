let alumnos = [
  {
    "nombre": "Bell",
    "apellido": "Keith",
    "direccion": {
      "calle": "Love Lane",
      "numero": 5703,
      "colonia": "Providencia"
    },
    "calificaciones": [
      {
        "materia": "español",
        "calificacion": 48
      },
      {
        "materia": "química",
        "calificacion": 34
      },
      {
        "materia": "biología",
        "calificacion": 27
      },
      {
        "materia": "dibujo",
        "calificacion": 70
      },
      {
        "materia": "historia",
        "calificacion": 82
      }
    ]
  },
  {
    "nombre": "Carson",
    "apellido": "Deleon",
    "direccion": {
      "calle": "Miami Court",
      "numero": 7506,
      "colonia": "Providencia"
    },
    "calificaciones": [
      {
        "materia": "deportes",
        "calificacion": 16
      },
      {
        "materia": "biología",
        "calificacion": 62
      },
      {
        "materia": "programación",
        "calificacion": 88
      },
      {
        "materia": "matemáticas",
        "calificacion": 6
      },
      {
        "materia": "dibujo",
        "calificacion": 78
      }
    ]
  },
  {
    "nombre": "Jody",
    "apellido": "Leonard",
    "direccion": {
      "calle": "Hart Place",
      "numero": 8893,
      "colonia": "Miravalle"
    },
    "calificaciones": [
      {
        "materia": "química",
        "calificacion": 26
      },
      {
        "materia": "historia",
        "calificacion": 93
      },
      {
        "materia": "deportes",
        "calificacion": 74
      },
      {
        "materia": "español",
        "calificacion": 92
      },
      {
        "materia": "biología",
        "calificacion": 60
      },
      {
        "materia": "dibujo",
        "calificacion": 23
      },
      {
        "materia": "matemáticas",
        "calificacion": 34
      },
      {
        "materia": "programación",
        "calificacion": 6
      }
    ]
  },
  {
    "nombre": "Lucille",
    "apellido": "Copeland",
    "direccion": {
      "calle": "Tudor Terrace",
      "numero": 7205,
      "colonia": "La Estancia"
    },
    "calificaciones": [
      {
        "materia": "deportes",
        "calificacion": 34
      },
      {
        "materia": "biología",
        "calificacion": 71
      },
      {
        "materia": "historia",
        "calificacion": 22
      },
      {
        "materia": "programación",
        "calificacion": 83
      },
      {
        "materia": "matemáticas",
        "calificacion": 93
      }
    ]
  },
  {
    "nombre": "Pollard",
    "apellido": "Shaw",
    "direccion": {
      "calle": "Howard Place",
      "numero": 5912,
      "colonia": "Miravalle"
    },
    "calificaciones": [
      {
        "materia": "dibujo",
        "calificacion": 10
      },
      {
        "materia": "biología",
        "calificacion": 27
      },
      {
        "materia": "programación",
        "calificacion": 69
      }
    ]
  },
  {
    "nombre": "Bartlett",
    "apellido": "Rivers",
    "direccion": {
      "calle": "Manhattan Court",
      "numero": 1291,
      "colonia": "Miravalle"
    },
    "calificaciones": [
      {
        "materia": "programación",
        "calificacion": 52
      },
      {
        "materia": "dibujo",
        "calificacion": 42
      },
      {
        "materia": "biología",
        "calificacion": 64
      },
      {
        "materia": "química",
        "calificacion": 61
      },
      {
        "materia": "matemáticas",
        "calificacion": 100
      },
      {
        "materia": "español",
        "calificacion": 86
      },
      {
        "materia": "historia",
        "calificacion": 25
      }
    ]
  }
]

// EJERCICIOS //

// 1) Lista el nombre y apellido de todos los alumnos, ejemplo
//    Lucille Copeland
//    Pollard Shaw
//    .....
for( let pos = 0; pos < alumnos.length; pos++) {
  let alumno = alumnos[pos]
  // console.log(alumno.nombre + ' ' + alumno.apellido)
}


// [] -> corchetes
// {} -> llaves

// 2) Calcula el promedio de las calificaciones obtenidas por Jody Leonard y muestra el resultado
let Jody = alumnos[4]
// console.log(Jody.nombre)
// console.log(Jody.calificaciones[1].calificacion)
// console.log(Jody.calificaciones[2].calificacion)

let promedio = 0;
for( let pos = 0; pos < Jody.calificaciones.length; pos++){
    promedio += Jody.calificaciones[pos].calificacion
}

promedio = promedio / Jody.calificaciones.length;

// console.log('El promedio de las calificaciones es', promedio)



// 3) Lista aquellas materías que reprobó Carson Deleon
//    Para considerar una materia como 'aprobada' es necesario obtener una calificación mínima de 60.
let carson = alumnos[1]
let calificaciones = carson.calificaciones

for(let i=0; i < calificaciones.length; i++){
  let materiaInfo = calificaciones[i]

  if(materiaInfo.calificacion < 60) {
    // console.log(materiaInfo.materia)
  }
}






// 4) Muestra en pantalla el nombre completo, calle y número de aquellos alumnos que viven en la colonia Miravalle 
for(let i=0; i < alumnos.length; i++){
  if(alumnos[i].direccion.colonia == 'Miravalle') {      // -> la colonia es Miravalle?
    // console.log(alumnos[i].nombre)
  } 
}



// 5) Obtén la calificación promedio de todos aquellos alumnos que cursan la materia de programación
let promedioProgra = 0;
let cantidadAlumnos = 0;

// Brincar de un alumno a otro hasta que terminemos con la lista de alumnos
for(let posAlumno = 0; posAlumno < alumnos.length; posAlumno++) {
  let todasCalificaciones = alumnos[posAlumno].calificaciones;
  
  // Iterar sobre todas las materias del alumno en cuestión
  for(let posCalif = 0; posCalif < todasCalificaciones.length; posCalif++) {
    let materiaActual = todasCalificaciones[posCalif]

    // Buscamos si el nombre de la materia es el que nos interesa
    if(materiaActual.materia == 'programación') {
      cantidadAlumnos++;
      promedioProgra += materiaActual.calificacion
    }
  }
}
promedioProgra /= cantidadAlumnos
console.log('el promedio de programación es ' + promedioProgra)






// 6) Calcula el promedio de las calificaciones obtenida por cada alumno
//    Imprime el nombre del mismo junto con el promedio seguido de todas las materias que aparecen como reprobadas.
//    Las materias reprobadas deben mostrarse en una misma línea separadas por comas
//    Ejemplo:
//    Bertlet Rivers, promedio 61, reprobó: programación, dibujo, historia 




// 7) Muestra el nombre de la persona que obtuvo la mayor calificación en dibujo
// Iterar sobre todos los alumnos
// Buscar si cursa la materia de dibujo
// SI la cursa, realizamos una comparativa contra la calificación mas alta que conocemos
    // Guardar el nombre del alumno con calificación mayor
// Imprimimos el nombre de la persona

let calificacionMayor = 0     // Comparar la calificación
let mejorAlumno = ''          // Guardar el nombre del dueño

for(let posAlumno = 0; posAlumno < alumnos.length; posAlumno++) {
  let todasCalificaciones = alumnos[posAlumno].calificaciones;
  
  for(let posCalif = 0; posCalif < todasCalificaciones.length; posCalif++) {
    let materiaActual = todasCalificaciones[posCalif]
    
    if(materiaActual.materia == 'dibujo') {
      if(materiaActual.calificacion > calificacionMayor){
        calificacionMayor = materiaActual.calificacion
        mejorAlumno = alumnos[posAlumno].nombre
      }
    }
  }
}

console.log('El alumno con la mayor calificación en dibujo fue ' + mejorAlumno)









// '{{repeat(6)}}',
// {
//   apellido: '{{surName()}}',
//   direccion: {
//     calle: '{{street()}}',
//     numero: '{{integer(1000, 9999)}}',
//     colonia: '{{random("Las fuentes", "Providencia", "Huentitan", "La Estancia", "Santa Teresita", "Miravalle")}}',
//   },
//   calificaciones: [
//     '{{repeat(3,8)}}',
//     {
//       materia: function (tags) {
//         var materias = [ 'español', 'matemáticas', 'química', 'deportes', 'dibujo', 'historia', 'programación', 'biología'];
//         return materias[tags.integer(0, materias.length -1)];
//       },
//       calificacion: '{{integer(0,100)}}'
//     }
//   ],
// }
