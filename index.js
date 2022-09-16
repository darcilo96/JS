//Llamamos al objeto que será el padre de los elementos
const contenedor = document.getElementById("contenedor");

//Array compuesto con diferentes objetos que contienen los overdrives
const overdrives = [
{ id: 1, nombre: "Morning Glory V4", marca: "JHS Pedals", precio: 199, genero: "worship" },
{ id: 2, nombre: "Tube Screamer TS9", marca: "Ibanez", precio: 150, genero: "blues" },
{ id: 3, nombre: "The Duellist", marca: "King Tone", precio: 350, genero: "blues" },
{ id: 4, nombre: "Double Barrel", marca: "JHS Pedals", precio: 345, genero: "worship" },
{ id: 5, nombre: "Ages", marca: "Walrus Audio", precio: 199, genero: "rock" },
{ id: 6, nombre: "ACS1", marca: "Walrus Audio", precio: 399, genero: "rock" },
{ id: 7, nombre: "Tube Screamer TS8", marca: "Ibanez", precio: 130, genero: "blues" },
{ id: 8, nombre: "Gravity", marca: "Nordvang Custom", precio: 260, genero: "blues" },
{ id: 9, nombre: "1981 DRV", marca: "1981 Inventions", precio: 250, genero: "worship" },
{ id: 10, nombre: "OCD", marca: "Full Tone", precio: 60, genero: "rock" },
]

for(const overdrive of overdrives){
    let item = document.createElement("div");
    item.innerHTML = `<h2> ID: ${overdrive.id} </h2>
                    <h2> Nombre: ${overdrive.nombre} </h2>
                    <p> Precio: ${overdrive.precio} USD</p>
                    <p> Marca: ${overdrive.marca} </p>`;
    contenedor.append(item);
}

let nombreUsuario = prompt("Bienvenido a FRETBOARD.COM. Ingresa tu nombre por favor:")
let escogerDrive = parseInt(prompt(`${nombreUsuario}, en cuál de los siguientes Overdrives estás interesad@? Indica el número
\n 1: Morning Glory V4 (199 USD)
\n 2: Tube Screamer TS9 (150 USD )
\n 3: The Duellist(350 USD)
\n 4: Double Barrel (345 USD)
\n 5: Ages(199 USD)
\n 6: ACS1 (399 USD)
\n 7: Tube Screamer TS8 (130 USD )
\n 8: Gravity (260 USD)
\n 9: 1981 DRV (250 USD)
\n 10: OCD (60 USD)
`))

const driveEscogido = overdrives.find(drive => drive.id === escogerDrive)

function Mensaje(driveEscogido) {
if (escogerDrive > 0 && escogerDrive <= 10) {
    alert(`${nombreUsuario}, el overdrive escogido es el ${driveEscogido.nombre}, de la marca ${driveEscogido.marca} y cuesta ${driveEscogido.precio} USD. Esta opción es útil para ti si tu género de énfasis es ${driveEscogido.genero}`)
} else { alert(`${nombreUsuario},por favor elige una opción válida`) }
}

Mensaje(driveEscogido);
