/* Simulador de inversiones controladas mensualmente */

/* Ingrese la tasa en porcentaje (ejemplo: 30% ===> 30) */
let tasa=parseInt(prompt("Ingrese la tasa de rentabilidad de tu inversión (ejemplo: si es el 30% ===>  entonces escribes 30)"));
/* Ingrese el monto a invertir (USD) */
let monto=parseInt(prompt("Ingrese el monto a invertir (USD)"));
/* Ingrese el tiempo de inversión(meses) */
let tiempo=parseInt(prompt("Ingrese el tiempo de inversión (en meses)"));

/*Se realiza la iteración para mostrar el saldo mensual*/
for(let i=0; i<=tiempo; i++){
/*Se aplica la fórmula del interés compuesto */
let rentabilidad=(1+tasa/100)**(i);
let resultado= monto*(rentabilidad);
/* Se muestra el seguimiento de cada mes */
alert(`Mes ${i}: ${resultado.toFixed(2)} USD`);
/* Pregunta si desea continuar invirtiendo */
let confirmacion= prompt("¿Desea continuar invirtiendo?")
while(confirmacion!=="No"){
    break;
}
/* Corta el ciclo en caso de que el usuario no desee continuar invirtiendo */
if(confirmacion==="no"){
    alert("Fue un placer servirte");
    break;
}
/* Indica al usuario que su dinero continúa trabajando*/
else{
    alert("Tu dinero sigue trabajando por ti");
}
}
