let desafio = "30 días de JavaScript"
console.log(desafio)
console.log(desafio.length)
console.log(desafio.toUpperCase())
console.log(desafio.toLowerCase())
console.log(desafio.substring(3,7))
console.log(desafio.substring(3,21))
console.log(desafio.includes("Script"))
console.log(desafio.split())
console.log(desafio.split(" "))

let empresas ='Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'
console.log(empresas.split())
console.log(empresas.split(","))

console.log(desafio.replace("JavaScript", "Python"))
console.log(desafio.charAt(15))
console.log(desafio.charCodeAt(11))
console.log(desafio.indexOf("a"))
console.log(desafio.lastIndexOf("a"))

let oracion = 'No puedes terminar una oración con porque porque porque es una conjunción'
console.log(oracion.indexOf('porque'))
console.log(oracion.lastIndexOf('porque'))
console.log(oracion.search('porque'))