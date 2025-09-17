let nombres = [];


//Funcion agregar nombre
function agregarNombre(){
    let nombre = prompt("Ingresa el nombre");
    if(nombre){
        nombres.push(nombre);
        alert(` El nombre es: ${nombre} agregado exitosamente `)
    }else{
        alert("El nombre esta vacio");
    }
}

function mostrarNombres(){
    if(nombres.length === 0){
        alert(`No hay nombres almacenados`);
    }else{
        let mensaje = "Nombres Almacenados: \n";

        //Funcion Flecha
        /*
        nombres.forEach((nombre, index)=>{
            mensaje += `${index + 1}. ${nombre}\n`;
        });
        alert(mensaje);
        */

        for(index = 1; index < nombres.length; index ++){
            var mensaje = (index + ". " + nombre + "n");
        }
        alert(mensaje)
    }
}

function mostrarMenu(){
    let option;
    
}

