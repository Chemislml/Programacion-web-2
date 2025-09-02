let vidas = 3;
let numero = Math.random();

let numUsuario = parseInt(prompt("Adivina el numero magico"));

while(numero != numUsuario && vidas > 1){
    vidas --;
    numUsuario = parseInt(prompt("Vuelve a intentar"))
}

if(numUsuario == numero){
    alert("Ganaste");
}else{
    alert("Perdiste")
}



