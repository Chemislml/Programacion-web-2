console.log("Comparacion 3 numeros");

let a = prompt("Ingresa A numeros");
let b = prompt("Ingresa B numeros");
let c = prompt("Ingresa C numeros");

let mayor, medio, menor;

if (a > b && a > c) {
    mayor = a;
    if (b > c) {
        medio = b;
        menor = c;
    } else {
        medio = c;
        menor = b;
    }
} else if (b > a && b > c) {
    mayor = b;
    if (a > c) {
        medio = a;
        menor = c;
    } else {
        medio = c;
        menor = a;
    }
} else {
    mayor = c;
    if (a > b) {
        medio = a;
        menor = b;
    } else {
        medio = b;
        menor = a;
    }
}

// Mostrar resultados
console.log("Mayor:", mayor);
console.log("Medio:", medio);
console.log("Menor:", menor);



/*
    if(A < B){
        console.log(A + " es mayor que " + B);
    }else{
        if(A > B){
            console.log(A + " es menor que " + B);
        }else{
            if(B < A){
                console.log(B + " es mayor que " + A);
                }else{
                    if(B > A){
                    console.log(B + " es menor que " + A);
                        }else{
                            if(B < C){
                                console.log(B + " es mayor que " + C);
                                }else{
                                if(B > C){
                                    console.log(B + " es menor que " + C);
                                    }else{
                                        if(C < B){
                                            console.log(C + " es mayor que " + B);
                                            }else{
                                                if(C > B){
                                                    console.log(C + " es menor que " + B);
                                                }else{
                                                    if(A < C){
                                                        console.log(A + " es mayor que " + C);
                                                        }else{
                                                            if(A > C){
                                                                console.log(A + " es menor que " + C);
                                                            }else{
                                                                if(C < A){
                                                                    console.log(A + " es mayor que " + B);
                                                                        }else{
                                                                                if(C > A){
                                                                                console.log(A + " es menor que " + B);
                                                                                }
                                                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
*/
