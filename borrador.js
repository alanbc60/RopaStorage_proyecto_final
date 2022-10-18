
//Esto es un borrador que funciona y sirve como respaldo en dado caso que script.js falle algo

const open = document.getElementById('open');
const modal_container = document.getElementById('contenedor_principal-modal');
const close = document.getElementById('close');
let edad;
let sexo;
let exito;
let i = 0;
let opcion;
let confirmacionRecompensa;

open.addEventListener('click', () => {
    let mensaje1 = confirm(`Esta es una encuesta para saber los gustos de nuestros usuarios y
    asi adaptar nuestros productos a ustedes.Al finalizar la encuesta recibiras un premio`);
    encuestaPersonalizada(mensaje1);



    //funcion: Generar numero aleatorio
    // function generarAleatorio(minimo, maximo) {
    //     return Math.ceil(Math.random() * (maximo - minimo) + minimo);
    // }
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function generarRecompensa(tiempo_ms) {

        do{
            console.log("Iteracion: "+i);
            // let numRandom = generarAleatorio(0, 4);
            let numRandom = 0;
            console.log("El numero random nuevo es: " + numRandom);

            switch (numRandom) {
                case 0:
                    //hacer que js cambie la imagen del modal dependiendo el case 
                    console.log("Entro al case 0");
                    alert("Le recomendamos el articulo 1");
                    modal_container.classList.remove('show');
                    break;
                case 1:
                    console.log("Entro al case 1");
                    alert("Le recomendamos el 2 ")
                    break;
                case 2:
                    console.log("Entro al case 2");
                    alert("Le recomendamos el 3 ");
                    break;
                case 3:
                    console.log("Entro al case 3");
                    alert("Le recomendamos el 4 ")
                    break;
                default:
                    alert("Lo siento, no pudimos encontrar ninguna recomendación :c");
                    break;
            }

            modal_container.classList.add('show');  
            close.addEventListener('click', async () => {
                await sleep(tiempo_ms);
                //Sugerir otra recomendacion o aplicar descuentos para el premio
                confirmacionRecompensa = confirm("¿Desea otra recomendación?");
                console.log("Mensaje de recomendacion again: " + confirmacionRecompensa);
                await sleep(10000);
            });

            i++;       

        }while(confirmacionRecompensa == true);    

        //Recomendaciones de playeras
        if(edad >= 18 && (sexo == 1 || sexo == 2) && opcion == 1) {
            let i =0
            alert("El descuento que obtuviste es de 10% en playeras")
        }
    }       


    function generarRecomendaciones(edad, sexo, opcion) {
        console.log("=======Parametros========");
        console.log("Edad: " + edad);
        console.log("Sexo: " + sexo);
        console.log("opcion: "+opcion);
        generarRecompensa(5000);
    }


    function encuestaPersonalizada(datoUsuario) {

        if (datoUsuario == true) {

            console.log("Mensaje de confirmacion: " + mensaje1);
            do{
                exito = true;
                edad = parseInt(prompt("Ingrese su edad(debes tener un minimo de 18 años): "));
                sexo = parseInt(prompt(`Tipo de sexo(ingrese el numero que le indica): 
                                1.Masculino
                                2.Femenino`));
                console.log("Edad: " + edad);
                console.log("Sexo: " + sexo);
                //Ejemplo con edad  = 18 y sexo = 0
                //0 + (1 * 1) = 1.. Entra
                //Ejemplo con edad  = 17 y sexo = 0
                //1 + (1 * 1) = 1.. Entra
                //Ejemplo con edad  = 17 y sexo = 1(solo la edad es menor)
                //1 + (0 * 1) = 1.. Entra
                //Ejemplo con edad  = 18 y sexo = 1(Datos correctos)
                //0 + (0 * 1) = 0

                if ((edad < 18 || (sexo != 1 && sexo != 2)) ) {
                    console.log("Sexo o edad incorrrectos, intente de nuevo");
                    alert("Sexo o edad incorrrectos, intente de nuevo");
                    exito=false;
                    console.log("Exito..: "+exito);
                }
                console.log("=======Antes del while===")
                console.log("Edad: " + edad);
                console.log("Sexo: " + sexo);

            }while(exito==false);

            opcion = parseInt(prompt(`Generalmente que te gusta comprar/ver aqui: 
             1.Playeras.
             2.Chamarras.
             3.Blusas.
             4.Tenis.
             5.Pants.
             6.Deseo salir`));

            //Datos
            console.log("Edad: " + edad);
            console.log("Sexo: " + sexo);
            console.log("Opción: " + opcion);

            pregunta = confirm("¿Desea una recomendación?");
            if (pregunta == true) {
                generarRecomendaciones(edad, sexo, opcion);
            }
            else{
                alert("No podemos generar la recomendación y el descuento");
            }

        }

        else {
            alert("Bueno, ya sera para la otra");
        }

    }
});








