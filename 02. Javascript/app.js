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