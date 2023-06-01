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
console.log(desafio.indexOf("a")) //Muestra la posicion de la primera aparicion del caracter
console.log(desafio.lastIndexOf("a")) //Muestra la posicion de la ultima aparicion del caracter

let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.indexOf('porque')) 
console.log(oracion.lastIndexOf('porque'))
console.log(oracion.search('porque')) //Buscar la primera aparicion del caracter solicitado
