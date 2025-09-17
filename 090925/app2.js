const frutas = ["Banana"];
frutas.push("Sandia"); //Final
frutas.unshift("Mango"); //Inicio
console.log(frutas);

frutas.push("Guayaba"); 
frutas.unshift("Melon");
frutas.push("Manzana"); 
frutas.unshift("Piña");
// Completo
for(let fruta of frutas){
console.log(fruta);
}

// Eliminar
console.log("----------------------------")
frutas.pop();

for(let fruta of frutas){
console.log(fruta);
}

console.log("----------------------------")
frutas.shift();

for(let fruta of frutas){
console.log(fruta);
}







/*
const puerto=3306;
puerto = 3308;
console.log(puerto);
*/