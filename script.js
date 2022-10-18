const open = document.getElementById('open');
const modal_container = document.getElementById('contenedor_principal-modal');
const close = document.getElementById('close');
//Variables globales
let edad;
let sexo;
let exito;
let opcion;
let nombreProducto;

open.addEventListener('click', () => {
    let mensaje1 = confirm(`Esta es una encuesta para saber los gustos de nuestros usuarios y
    asi adaptar nuestros productos a ustedes.Al finalizar la encuesta recibiras un premio`);
    encuestaPersonalizada(mensaje1);

    // funcion: Generar numero aleatorio
    function generarAleatorio(minimo, maximo) {
        return Math.ceil(Math.random() * (maximo - minimo) + minimo);
    }
    function sleep(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    function generarRecomendaciones(edad, sexo, ruta,opcion) {
        console.log("=======Parametros========");
        console.log("Edad: " + edad);
        console.log("Sexo: " + sexo);
        console.log("opcion: "+opcion);
        generarRecompensa(3000,ruta,sexo,opcion);
    }

    async function generarRecompensa(tiempo_ms,ruta,sexo) {
        let numRandom = generarAleatorio(0, 3);
        // let numRandom = 0;
        console.log("El numero random nuevo es: " + numRandom);
        //Recomendaciones en dado caso que selecciono Sexo como Masculino
        if(sexo==1 && opcion!="blusas"){
            switch (numRandom) {
                case 0:
                    //hacer que js cambie la imagen del modal dependiendo el case 
                    ruta += "Hombres/imagen1.jpg"; 
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 1";
                    console.log("Ruta del case 0: "+ruta);
                    document.getElementById("imagen_modal").src = ruta;
                    // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";
                    // alert("Le recomendamos el articulo 1");
                    modal_container.classList.add('show');  
                    break;
                case 1:
                    ruta += "Hombres/imagen2.jpg"; 
                    console.log("Ruta del case 1: "+ruta);

                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 2";
                    document.getElementById("imagen_modal").src = ruta;
                    // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";
                    // alert("Le recomendamos el articulo 2 ");
                    modal_container.classList.add('show');  
                    break;
                case 2:
                    ruta += "Hombres/imagen3.jpg"; 
                    console.log("Ruta del case 3: "+ruta);
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 3";
                    document.getElementById("imagen_modal").src = ruta;   
                    // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";                
                    // alert("Le recomendamos el articulo 3 ");
                    modal_container.classList.add('show'); 
                    break;
                case 3:
                    ruta += "Hombres/imagen4.jpg"; 
                    console.log("Ruta del case 4: "+ruta);
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 4";
                    document.getElementById("imagen_modal").src = ruta;
                    // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";
                    // alert("Le recomendamos el articulo 4 ");
                    modal_container.classList.add('show'); 
                    break;
                default:
                    alert("Lo siento, no pudimos encontrar ninguna recomendación :c");
                    break;
            }
        }
        else if(sexo==2 || (sexo==1 && opcion=="blusas")){
            switch (numRandom) {
                case 0:
                    //hacer que js cambie la imagen del modal dependiendo el case 
                    ruta += "Mujeres/imagen1.jpg"; 
                    console.log("Ruta del case 0: "+ruta);
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 1";
                    document.getElementById("imagen_modal").src = ruta;
                    alert("Le recomendamos el articulo 1");
                    modal_container.classList.add('show');  
                    break;
                case 1:
                    ruta += "Mujeres/imagen2.jpg"; 
                    console.log("Ruta del case 1: "+ruta);
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 2";
                    document.getElementById("imagen_modal").src = ruta;
                    alert("Le recomendamos el articulo 2 ");
                    modal_container.classList.add('show');  
                    break;
                case 2:
                    ruta += "Mujeres/imagen3.jpg"; 
                    console.log("Ruta del case 3: "+ruta);
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 3";
                    document.getElementById("imagen_modal").src = ruta;
                    alert("Le recomendamos el articulo 3 ");
                    modal_container.classList.add('show'); 
                    break;
                case 3:
                    ruta += "Mujeres/imagen4.jpg"; 
                    console.log("Ruta del case 4: "+ruta);
                    document.getElementById("titulo_modal").textContent="Te recomendamos el articulo 4";
                    document.getElementById("imagen_modal").src = ruta;
                    alert("Le recomendamos el articulo 4 ");
                    modal_container.classList.add('show'); 
                    break;
                default:
                    alert("Lo siento, no pudimos encontrar ninguna recomendación :c");
                    break;
            }
        }



        // modal_container.classList.add('show');  
        close.addEventListener('click', async () => {
            modal_container.classList.remove('show');
            await sleep(tiempo_ms);
            // alert("El descuento que obtuviste es de 10% en playeras");
        });    

    }       

    function encuestaPersonalizada(datoUsuario) {

        if (datoUsuario == true) {
            let ruta ="";
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
            do{
                //Para 
                opcion = parseInt(prompt(`Generalmente que te gusta comprar/ver aqui: 
                1.Playeras.
                2.Chamarras.
                3.Blusas.
                4.Tenis.
                5.Pants/pantalon.`));
                if(opcion>5 || opcion<1){
                    alert("Ingrese una opcion correcta")
                }
                switch(opcion){
                    case 1:
                        opcion = String("Playeras");
                        ruta = "imagenes/"+opcion+"/";
                        console.log("La ruta es: "+ruta);
                        break;
                    case 2:
                        opcion = String("chamarras");
                        ruta = "imagenes/"+opcion+"/";
                        console.log("La ruta es: "+ruta);
                        break;
                    case 3:
                        opcion = String("blusas");
                        ruta = "imagenes/"+opcion+"/";
                        console.log("La ruta es: "+ruta);
                        break;
                    case 4:
                        opcion = String("Tenis");
                        ruta = "imagenes/"+opcion+"/";
                        console.log("La ruta es: "+ruta);
                        break;
                    case 5:
                        opcion = String("pantalones");
                        ruta = "imagenes/"+opcion+"/";
                        console.log("La ruta es: "+ruta);
                        break;
                    default:
                        break;
                }
            }while(opcion>5 || opcion<1);


            //Datos ingresados
            // console.log("Edad: " + edad);
            // console.log("Sexo: " + sexo);
            // console.log("Opción: " + opcion);


            pregunta = confirm("¿Desea una recomendación?");
            if (pregunta == true) {
                generarRecomendaciones(edad,sexo,ruta,opcion);
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


//Objeto que sirve para los productos de novedades








