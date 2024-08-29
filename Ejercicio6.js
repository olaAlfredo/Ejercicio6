// 6. Filtrado de elementos en un arreglo: 
// Crea un arreglo de números y filtra los elementos para mostrar solo aquellos que sean mayores que un valor dado por el usuario.
const arreglo3 = [4,2,8,9,0,11,3];
const valor = 5;
const filtrar = arreglo3.filter((arreglo3) => arreglo3 > valor);
console.log("6. Los elementos mayores que "+valor+" son: "+filtrar);