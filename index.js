//Llamamos al objeto que será el padre de los elementos
const contenedor = document.getElementById("contenedor");

//Llamamos al objeto que será el padre de los elementos, en este caso el contenedor del carrito
const carrito = document.getElementById("carrito")

//Array compuesto con diferentes objetos que contienen los overdrives
const overdrives = [
{ id: 1, nombre: "Morning Glory V4", marca: "JHS Pedals", precio: 199, genero: "worship", img: "./img/1.jpg" },
{ id: 2, nombre: "Tube Screamer TS9", marca: "Ibanez", precio: 150, genero: "blues", img: "./img/2.jpg" },
{ id: 3, nombre: "The Duellist", marca: "King Tone", precio: 350, genero: "blues", img: "./img/3.jpg" },
{ id: 4, nombre: "Double Barrel", marca: "JHS Pedals", precio: 345, genero: "worship", img: "./img/4.jpg" },
{ id: 5, nombre: "Ages", marca: "Walrus Audio", precio: 199, genero: "rock", img: "./img/5.webp" },
{ id: 6, nombre: "ACS1", marca: "Walrus Audio", precio: 399, genero: "rock", img: "./img/6.webp" },
{ id: 7, nombre: "Blues Driver", marca: "Boss", precio: 125, genero: "blues", img: "./img/7.jpg" },
{ id: 8, nombre: "Gravity", marca: "Nordvang Custom", precio: 260, genero: "blues", img: "./img/8.jpg" },
{ id: 9, nombre: "1981 DRV", marca: "1981 Inventions", precio: 250, genero: "worship", img: "./img/9.jpg" },
{ id: 10, nombre: "Steel String MK2", marca: "Vertex Effects", precio: 60, genero: "rock", img: "./img/10.jpg" },
{ id: 11, nombre: "Timmy", marca: "MXR", precio: 130, genero: "worship", img: "./img/11.webp" },
{ id: 12, nombre: "Soul Food", marca: "EHX", precio: 100, genero: "blues", img: "./img/12.jpg" },
]

//Genera el DOM, agrega los datos de los productos y sus imágenes
for(const overdrive of overdrives){
    let item = document.createElement("div");
    item.innerHTML = `<img src="${overdrive.img}"></img>
                    <h2> ID: ${overdrive.id} </h2>
                    <h2> Nombre: ${overdrive.nombre} </h2>
                    <p> Precio: ${overdrive.precio} USD</p>
                    <p> Marca: ${overdrive.marca} </p>
                    <button id="${overdrive.id}">Agregar al carrito</button>`
    contenedor.appendChild(item);

}

/* let nombreUsuario = prompt("Bienvenido a FRETBOARD.COM. Ingresa tu nombre por favor:")
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

Mensaje(driveEscogido); */
