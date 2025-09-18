// tipos de variables
let nombre='Benjamín'; //string
let estudiante=false; //boolean
const id=1; //constante, valor que no cambiaremos

console.log(typeof nombre);
console.log(typeof estudiante);
console.log(typeof id);

// id=2; //Nos arrojaría error ya que no se puede reasignar el valor de una constante

let user= prompt('ingrese nombre usuario')
console.log(user);

// qué pasa si paso un número en el prompt?
// parseInt es un metodo que convierte un string a número entero
// parseFloat convierte un string a número decimal

let deseacontinuar= confirm('desea continuar?') //retorna true o false

console.log(deseacontinuar);

// ejemplo advertencia
if (user==''){
    alert('usuario no ingresado');
} else {
    alert('usuario ingresado correctamente');
}

// Notas mías: Ejemplo IF
if (deseacontinuar){ // deseacontinuar tiene valor true o false dependiendo lo que responda, si es true se aplica la primera parte del if
    console.log('el usuario desea continuar');
} else {
    console.log('el usuario no desea continuar');
}

// // Otras notas. Ejemplo array
// let colores=['rojo', 'verde', 'azul']; //array o arreglo
// console.log(colores[1]); //accedo al segundo elemento del array


// Ejemplo switch
let colorfav= prompt('ingrese su color favorito: rojo, verde o azul');


//Clase 2: Condicionales y demás
switch(colorfav){
    case 'rojo':
        console.log('su color favorito es el rojo');
        break; //el break es para que no siga evaluando los demás casos
    case 'verde':
        console.log('su color favorito es el verde');
        break;
    case 'azul':
        console.log('su color favorito es el azul');
        break;
    default:
        console.log('no ingresó un color válido');
        break;
}

// parseInt y parseFloat
let num1= prompt('ingrese un número');
let num2= prompt('ingrese otro número');

console.log(num1+num2); //si no convierto a número, concatena los strings

//convierto a número
num1=parseInt(num1);
num2=parseInt(num2);

console.log(num1+num2); //ahora sí suma los números

// ejemplo do while
let i=0;

do {
    console.log('el valor de i es: '+i);
    i++;
} while (i<5);