let desafio = "30 días de JavaScript"
console.log(desafio)
console.log(desafio.length) //Tamaño variable
console.log(desafio.toUpperCase()) //Mayusculas
console.log(desafio.toLowerCase()) //Minusculas
console.log(desafio.substring(3,7)) //Mostrar caracteres dentro del rango
console.log(desafio.substring(3,21)) //Mostrar caracteres dentro del rango
console.log(desafio.includes("Script")) //Ver si el termino buscado esta dentro de la variable
console.log(desafio.split()) //Convertir en matriz
console.log(desafio.split(" ")) //Separar valores de la matriz en espacios

let empresas ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split())
console.log(empresas.split(",")) //Separar valores de la matriz en comas

console.log(desafio.replace("JavaScript", "Python")) //Reemplazar caracteres en la variable
console.log(desafio.charAt(15)) //Indicar el caracter que se encuentra en la posicion indicada
console.log(desafio.charCodeAt(11)) //Muestre el codigo Ascii del caracter en la posicion indicada
console.log(desafio.indexOf("a")) //Muestra la posicion de la primera aparicion del caracter o cadena
console.log(desafio.lastIndexOf("a")) //Muestra la posicion de la ultima aparicion del caracter o cadena

let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.indexOf('porque')) 
console.log(oracion.lastIndexOf('porque'))
console.log(oracion.search('porque')) //Buscar la primera aparicion del caracter o cadena solicitado

let desafio2 = "  30 días de JavaScript  "
console.log(desafio2)
console.log(desafio.trim(" ")) //Elimina espacios al principo y final de una cadena
console.log(desafio.startsWith("30")) //toma una subcadena como argumento y verifica si la cadena comienza con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).
console.log(desafio.endsWith("Script")) //toma una subcadena como argumento y verifica si la cadena finaliza con esa subcadena especificada. Devuelve un valor booleano (verdadero o falso).
console.log(desafio.match("a")) //toma una subcadena o un patrón de expresión regular como argumento y devuelve una matriz si hay una coincidencia; de lo contrario, devuelve un valor nulo.

let desafio3 = "30 días de"
let desafio4 = " JavaScript"
console.log(desafio3.concat(desafio4))
console.log(desafio2.repeat(2))