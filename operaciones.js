const fs = require('fs')

let opcion = process.argv[2]
let nombreAnimal = process.argv[3]
let edad = process.argv[4]
let tipoAnimal = process.argv[5]
let color = process.argv[6]
let enfermedad = process.argv[7]

// Funcion que agrega informacion al array de citas.json
const registrar = ()=>{
    const citas = fs.readFileSync('citas.json', 'utf-8')
    const citasArray = JSON.parse(citas)
    citasArray.push(
        {
            nombreAnimal:nombreAnimal, 
            edad:edad, 
            tipoAnimal:tipoAnimal,
            color:color,
            enfermedad:enfermedad
        } 
    );
    fs.writeFileSync('citas.json', JSON.stringify(citasArray))
}


// funcion que va a leer el archivo citas.json y lo va a mostrar por la consola
const leer = ()=>{
    const citas = fs.readFileSync('citas.json', 'utf-8')
    console.log(citas);
}

// condicional que activa la funcion que corresponda
if (opcion == "registrar"){
    registrar()
}

if (opcion == "leer"){
    leer()
}


module.exports = {registrar, leer}