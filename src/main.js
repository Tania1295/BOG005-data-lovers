import { example } from './data.js';
import data from './data/harrypotter/data.js';

document.getElementById("btnHarryPotter").addEventListener("click", showHarryPotter)
function showHarryPotter(){
const result = data.characters.filter(personage => personage.name =='Harry Potter')
//console.log(result)
alert(`Nombre: ${result[0].name} \n Fecha de Nacimiento: ${result[0].birth} \n Casa de Hogwarts: ${result[0].house} \n Tipo de Mago: ${result[0].species} `)
}
const result1 = data.characters.filter(personage => personage.name =='Hermione Granger')
photoHermioneGranger.innerHTML += `<li>${result1[0].name} - ${result1[0].house} </li>`


const personajes = data.characters;
const imagenHarryPotter = document.getElementById("imagen_harry_potter");
const personajeSeleccionado = data.characters.filter(personaje => personaje.name === "Harry Potter");
console.log(personajeSeleccionado[0].name) 
imagenHarryPotter.innerHTML += `<li>${personajeSeleccionado[0].name} - ${personajeSeleccionado[0].house} </li>` 

data.characters.forEach(personaje => {
    
})

const result2 = data.characters.filter(personage => personage.name =='Ronald Weasley')
photoRonWeasley.innerHTML += `<li>${result2[0].name} - ${result2[0].house} </li>`

const result3 = data.characters.filter(personage => personage.name =='Albus Dumbledore')
photoAlbusDumbledore.innerHTML += `<li>${result3[0].name} - ${result3[0].house} </li>`


//const harrypotter = data.characters.find(harryPotter => harryPotter.name === "Harry Potter");
const ron = data.characters.find(ron => ron.name === "Ronald Weasley");
console.log (harrypotter, ron)

f//or(const [key, value] of Object.entries(data.characters)){
 //   console.log(value)
//}


