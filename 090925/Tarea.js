const canasta = [];


const fruta = prompt ("Feria de fruta: Que fruta quieres agregar a tu carrito?");

canasta.push(fruta);

while(confirm("Quieres agregar otra fruta")){
    const fruta = prompt("¿Que otra fruta quieres agregar?");
    frutas.push(fruta);
}

console.log("Usted compro");
for (let fruta of canasta){
    console.log(fruta);
}

/*

while(confirm("Quieres agregar una fruta")){
    canasta.push = prompt("Nombre de la fruta")
}
for(let completo of canasta){
    console.log(canasta);
}

if (confirm("Quieres agregar una fruta") == true){
    canasta.push = prompt("Nombre de la fruta")
}else{
    for(let completo of canasta){
    console.log(canasta);
    }
}
*/

