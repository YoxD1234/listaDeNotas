const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


let listaDeNotas = [];

//CREATE 
function crear(){
    rl.question("Escribe tu nota: ", function(nota){
        listaDeNotas.push(nota);
        console.log("Nota Agregada Correctamente: ");
        menu();
    })
        
}

//READ
function listar(){
    console.log("este es tu listado de notas\n")
    for(let index=0; index<listaDeNotas.length; index++){
        console.log("N°", index+1,": ", listaDeNotas[index])
    }
    menu();
}


//UPDATE
function editar(){
    rl.question("Qué nota quieres cambiar?: \n", function(numero){
        rl.question("Escribe el nuevo contenido: \n", function(texto){
            listaDeNotas[numero-1]= texto;
            menu();
        })
        
    })
}

//DELETE
function borrar(){
    rl.question("Qué Nota Deseas Borrar", function(numero){
        let nuevoListadoDeNotas = [];
        for(let i= 0; i < listaDeNotas.length; i++){

            if(i!== numero-1){
                nuevoListadoDeNotas.push(listaDeNotas[i]);
            }
            
        }
        listaDeNotas = nuevoListadoDeNotas;
        menu();
    })
}

//EJECUCIÓN

function menu(){
    console.log("\n*****Menú de Usuario*****\n");
    console.log("Elige una opción:");
    console.log("1. Crear una Nota");
    console.log("2. Ver Todas las Nota");
    console.log("3. Editar una Nota");
    console.log("4. Eliminar una Nota");
    console.log("5. Cerrar el Programa");

    rl.question("Escribe la Opción Elegida: ", function(num){
        switch(num){
            case "1":
                crear();
                break;
            case "2":
                listar();
                break;
            case "3":
                editar();
                break;
            case "4":
                borrar();
                break;
            case "5":
                console.log("ADIOS!")
                rl.close();
                break;
            default:
                console.log("Error, Opción Incorrecta")

        }
    })
}
menu();