/**
 * [0] Ubicaciçon del programa node
 * [1] Directorio y nombre del programa a ejecutar
 * [2] 1º Parámetro del programa a ejecutar
 * [3] 2º Param...
 * 
 * Ejemplo: node app uno dos tres
 * 
 * Losobtenemos con process.argv
 */
console.log(process.argv);

process.argv.forEach((value, index) => {
    console.log(`ìndex: ${index} - value ${value}`);
});

// Obtener solo los params

const args = process.argv.slice(2)
    console.log("Parámetros :", args);

//Hacer algo en función del param
//Ejemplo: node app open prueba.txt

/*switch (args[0]) {
    case "open":
        console.log("Quieres abrir prueba.txt");
        break;
    case "remove":
        console.log("Quieres borrar prueba.txt");
        break;
    default:
        console.log("Parámetros erróneos");
        break;
}*/

// Otro ejemplo
//node app 1 2 3

let suma = 0;
for (let index = 0; index < args.length; index++) {
    suma += parseInt(args[index]) 
}
console.log(suma);

// Comprobar si existe un param, desde argv

/*let nameValue
const nameIndex = process.argv.indexOf("--name")
if (nameIndex > 1) {
    nameValue = process.argv[nameIndex + 1]
}
console.log(nameValue);

const nameV = nameValue || "Acceso a datos"
console.log("nameV ", nameV);
*/

// Comprobar si existe un param, desde args

let nameValue
const nameIndexArgs = args.indexOf("--name")
console.log("arg ", args);

if (nameIndexArgs > 1) {
    nameValue = args[nameIndexArgs + 1]
}
console.log(nameValue);

const nameV = nameValue || "Acceso a datos"
console.log("Name args : ", nameV);