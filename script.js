//Evento al hacer click en el boton realizar encuesta


const modal_container = document.getElementById('contenedor_principal-modal');
const botonCerrarModal = document.getElementById('close');
//Variables globales
let edad,sexo;
let exito,opcion;
let nombreProducto;
let ruta;
var arrayInput = new Array();



const contenedoresEncuesta = {
    //Al hacer click en el boton realizar encuesta y mostrar el div general
    mensaje1: document.querySelector('.contenedor_inicio-encuesta'),
    //Primera pregunta
    contenedorPrimeraPregunta:document.querySelector('.encuesta_primera_pregunta'),
    //Segunda pregunta
    contenedorPreguntaEdad_Sexo: document.querySelector(".encuesta_segundaPregunta-Edad_Sexo"),
    //Tercer pregunta
    contenedorPreguntapreferencias: document.querySelector(".encuesta_tercerPregunta-preferencias"),

}


//Objeto Botones
const botonesEncuesta = {
    //Boton que abre una encuesta y los contenedores
    botonAbrirEncuesta: document.querySelector('.abrirRealizarEncuesta'),
    //Boton de generar recompensa
    botonGenerarRecomendacion: document.querySelector('.botonGenerarRecomendacion'),
    //Botones para realizar una encuesta o no
    botonRealizarEncuesta: document.querySelector('#botonAceptarPrimeraPregunta'),
    botonNoRealizarEncuesta: document.querySelector('#botonCancelarPrimeraPregunta'),
    //Boton del contenedorPreguntaEdad_Sexo
    botonRecibirEdadSexo: document.querySelector('.recibiEdadSexo'),
    //Boton del contenedorPreguntapreferencias
    botonGuardarPreferencias: document.querySelector('.radioBoton_Preferencias')
}


//evento que abre la encuesta
botonesEncuesta.botonAbrirEncuesta.addEventListener('click', () => {
    console.log("Abriendo encuesta..");
    contenedoresEncuesta.mensaje1.style.display = "block";
    contenedoresEncuesta.contenedorPrimeraPregunta.style.display ="block";
    botonesEncuesta.botonAbrirEncuesta.style.display = "none";
});

botonesEncuesta.botonGenerarRecomendacion.style.display = "none";

// Eventos cuando damos aceptar la primera pregunta
botonesEncuesta.botonRealizarEncuesta.addEventListener('click', ()=>{
    //Quitar el contenedor de la primera pregunta
    contenedoresEncuesta.contenedorPrimeraPregunta.style.display = "none";

    // ==== Segunda pregunta ====
    do{
        exito = true;
        //Contenedor de la pregunta edad y sexo
        contenedoresEncuesta.contenedorPreguntaEdad_Sexo.style.display = "block";

        botonesEncuesta.botonRecibirEdadSexo.addEventListener('click', () => {
            datosArrayEdadSexo();
            console.log("La Edad es: " + edad);
            console.log("El Sexo es: " + sexo);
            if ((edad < 18 || (sexo != 1 && sexo != 2))) {
                console.log("Sexo o edad incorrrectos, intente de nuevo");
                alert("Sexo o edad incorrrectos, intente de nuevo");
                exito = false;
                console.log("Exito..: " + exito);
                vaciarArray(arrayInput);
                console.log(arrayInput);
            }
            else{
                contenedoresEncuesta.contenedorPreguntaEdad_Sexo.style.display = "none";
                contenedoresEncuesta.contenedorPreguntapreferencias.style.display = "block"; 
            }
        });   
    }while(exito == false);        
});

//Contenedor de preferencias

botonesEncuesta.botonGuardarPreferencias.addEventListener('click', () => {
    verificarPreferencias();
    if(opcion == 1){
        opcion = String("Playeras");
        ruta = "imagenes/" + opcion + "/";
        console.log("La ruta es: " + ruta);
    }
    else if(opcion==2){
        opcion = String("chamarras");
        ruta = "imagenes/" + opcion + "/";
        console.log("La ruta es: " + ruta);   
    }
    else if(opcion==3){
        opcion = String("blusas");
        ruta = "imagenes/" + opcion + "/";
        console.log("La ruta es: " + ruta);
    }
    else if(opcion==4){
        opcion = String("Tenis");
        ruta = "imagenes/" + opcion + "/";
        console.log("La ruta es: " + ruta);                
    }
    else if(opcion==5){
        opcion = String("pantalones");
        ruta = "imagenes/" + opcion + "/";
        console.log("La ruta es: " + ruta);   
    }
    contenedoresEncuesta.contenedorPreguntapreferencias.style.display = "none";
    // contenedoresEncuesta.contenedorRecomendacion.style.display = "block";
    contenedoresEncuesta.mensaje1.style.display = "none";
    botonesEncuesta.botonAbrirEncuesta.style.display = "none";
    //Mostrar el boton de generarRecompensa
    botonesEncuesta.botonGenerarRecomendacion.style.display = "block";
});

botonesEncuesta.botonNoRealizarEncuesta.addEventListener('click', ()=> {
    contenedoresEncuesta.mensaje1.style.display = "none";
    alert("Bueno, ya sera para la otra");
});


botonesEncuesta.botonGenerarRecomendacion.addEventListener('click', ()=>{
    console.log("Se presiono generar recompensa");
    generarRecompensa(3000,ruta, sexo);
});


function datosArrayEdadSexo(){
    // var arrayInput = new Array();
    var inputValores = document.getElementsByClassName('datoInput'),
    namesValores = [].map.call(inputValores,function(dataInput){
        arrayInput.push(dataInput.value);
    })
    arrayInput.forEach(function(inpusValueData){
        console.log("El dato es: "+inpusValueData);
    })
    edad = parseInt(arrayInput[0]);
    sexo = parseInt(arrayInput[1]);
}

function vaciarArray(arrayInput){
    arrayInput.splice(0, arrayInput.length);
}
function verificarPreferencias(){
    console.log("Entro a verificacion");
    
    if(document.getElementById("preferencia1").checked){
        console.log("Seleccionado playeras");
        opcion = 1;
    }
    if(document.getElementById("preferencia2").checked){
        alert("Eligio chamarras");
        console.log("Seleccionado chamarras");
        opcion = 2;
    }
    if(document.getElementById("preferencia3").checked){
        alert("Eligio blusas");
        console.log("Seleccionado blusas");
        opcion = 3;
    }
    if(document.getElementById("preferencia4").checked){
        alert("Eligio tenis");
        console.log("Seleccionado tenis");
        opcion = 4;
    }
    if(document.getElementById("preferencia5").checked){
        alert("Eligio pants/pantalones");
        console.log("Seleccionado pants");
        opcion = 5;
    }
}
        
async function generarRecompensa(tiempo_ms, ruta, sexo) {
    let numRandom = generarAleatorio(0, 3);
    // let numRandom = 0;
    console.log("El numero random nuevo es: " + numRandom);
    //Recomendaciones en dado caso que selecciono Sexo como Masculino
    if (sexo == 1 && opcion != "blusas") {
        switch (numRandom) {
            case 0:
                //hacer que js cambie la imagen del modal dependiendo el case
                ruta += "Hombres/imagen1.jpg";
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 1";
                console.log("Ruta del case 0: " + ruta);
                document.getElementById("imagen_modal").src = ruta;
                // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";
                // alert("Le recomendamos el articulo 1");
                modal_container.classList.add('show');
                break;
            case 1:
                ruta += "Hombres/imagen2.jpg";
                console.log("Ruta del case 1: " + ruta);

                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 2";
                document.getElementById("imagen_modal").src = ruta;
                // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";
                // alert("Le recomendamos el articulo 2 ");
                modal_container.classList.add('show');
                break;
            case 2:
                ruta += "Hombres/imagen3.jpg";
                console.log("Ruta del case 3: " + ruta);
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 3";
                document.getElementById("imagen_modal").src = ruta;
                // document.getElementById('modal_texto').textContent= opcion+" recomendada 1";
                // alert("Le recomendamos el articulo 3 ");
                modal_container.classList.add('show');
                break;
            case 3:
                ruta += "Hombres/imagen4.jpg";
                console.log("Ruta del case 4: " + ruta);
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 4";
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
    else if (sexo == 2 || (sexo == 1 && opcion == "blusas")) {
        switch (numRandom) {
            case 0:
                //hacer que js cambie la imagen del modal dependiendo el case
                ruta += "Mujeres/imagen1.jpg";
                console.log("Ruta del case 0: " + ruta);
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 1";
                document.getElementById("imagen_modal").src = ruta;
                alert("Le recomendamos el articulo 1");
                modal_container.classList.add('show');
                break;
            case 1:
                ruta += "Mujeres/imagen2.jpg";
                console.log("Ruta del case 1: " + ruta);
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 2";
                document.getElementById("imagen_modal").src = ruta;
                alert("Le recomendamos el articulo 2 ");
                modal_container.classList.add('show');
                break;
            case 2:
                ruta += "Mujeres/imagen3.jpg";
                console.log("Ruta del case 3: " + ruta);
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 3";
                document.getElementById("imagen_modal").src = ruta;
                alert("Le recomendamos el articulo 3 ");
                modal_container.classList.add('show');
                break;
            case 3:
                ruta += "Mujeres/imagen4.jpg";
                console.log("Ruta del case 4: " + ruta);
                document.getElementById("titulo_modal").textContent = "Te recomendamos el articulo 4";
                document.getElementById("imagen_modal").src = ruta;
                alert("Le recomendamos el articulo 4 ");
                modal_container.classList.add('show');
                break;
            default:
                alert("Lo siento, no pudimos encontrar ninguna recomendación :c");
                break;
        }
    }
    else{
        console.log("Error, no se paso parametros");
    }

    // modal_container.classList.add('show');
    botonCerrarModal.addEventListener('click', async () => {
        modal_container.classList.remove('show');
        console.log("Se cerro el modal");
        // await sleep(tiempo_ms);

    });
    botonesEncuesta.botonAbrirEncuesta.style.display = "none";
    botonesEncuesta.generarRecompensa.style.display = "none";

}

// funcion: Generar numero aleatorio
function generarAleatorio(minimo, maximo) {
    return Math.ceil(Math.random() * (maximo - minimo) + minimo);
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}



// =============== carrito  ======================
// desplegar barra al presionar boton Carrito
// const abrirCarrito = document.querySelector('.abrir_carrito');
// const nav = document.querySelector(".nav");
// const fondoBlurCompleto = document.querySelector(".nav-overlay");
// const cerrarSidebar = document.querySelector(".close");

// abrirCarrito.addEventListener("click",() =>{
//     console.log("Se abrio el carrito")
//  	navShow();
//  });
//  cerrarSidebar.addEventListener("click",() =>{
//  	hideNav();
//  });

//  fondoBlurCompleto.addEventListener("click",(e) =>{
//    hideNav();
//  })

//  function navShow(){
//     fondoBlurCompleto.style.transition = "all 0.5s ease";
//     fondoBlurCompleto.classList.add("open");
//     nav.style.transition = "all 0.3s ease 0.5s";
//     nav.classList.add("open");
//  }

//  function hideNav(){
//    //hacer una transicion a la hora de cerrar
//    nav.style.transition = "all 0.3s ease";
//    nav.classList.remove("open");
//    fondoBlurCompleto.style.transition = "all 0.5s ease 0.3s";
//    fondoBlurCompleto.classList.remove("open");
//  }














