//Llamamos al objeto que será el padre de los elementos
const contenedor = document.getElementById("contenedor");

//Llamamos al objeto que será el padre de los elementos, en este caso el contenedor del carrito

const contenedorCarrito = document.getElementById('carritoContenedor');

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
{ id: 11, nombre: "Timmy", marca: "MXR", precio: 130, genero: "worship", img: "./img/11.jpg" },
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

const productos = [
    { id: 1, nombre: "Morning Glory V4", marca: "JHS Pedals", precio: 199, genero: "worship", img: "./img/1.jpg" },
    { id: 2, nombre: "Tube Screamer TS9", marca: "Ibanez", precio: 150, genero: "blues", img: "./img/2.jpg" },
    { id: 3, nombre: "The Duellist", marca: "King Tone", precio: 350, genero: "blues", img: "./img/3.jpg" },
    ]

    localStorage.setItem("carrito", JSON.stringify(productos));

    let carrito = JSON.parse(localStorage.getItem("carrito"));

    let cerrarModal = document.querySelectorAll(".cerrar")[0];
    let modalC = document.querySelectorAll(".modalContenedor")[0];
    let modal = document.querySelectorAll(".modalCarrito")[0];
    let abrirModal =  document.querySelectorAll(".abrir")[0];

    cerrarModal.addEventListener("click",function(e){
        e.preventDefault()
        modal.style.transform = "translateY(-200vh)";
        modal.style.transition = "0.7s";
        modalC.style.opacity = "0";
        modalC.style.transition = "0.7s";
        modalC.style.visibility = "hidden";
    }
    )

    abrirModal.addEventListener("click",function(e){
        e.preventDefault()
        modal.style.transform = "translateY(0)";
        modal.style.transition = "0.7s";
        modalC.style.opacity = "1";
        modalC.style.transition = "0.7s";
        modalC.style.visibility = "visible";
    }
    )


/* const n = parseInt(prompt("Ingrese el número de datos"));

for(let i=0; i<n; i++){
    let dato = prompt("Ingrese el dato");
    carrito.push(dato);
    console.log(carrito);
}

carrito.forEach(itm){
    let div = document.createElement("div");
    div.innerHTML = carrito.find()
} */


