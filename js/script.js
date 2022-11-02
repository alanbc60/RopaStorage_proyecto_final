//SCript de la entrega 1

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


// desplegar barra al presionar boton Carrito 
const abrirCarrito = document.querySelector('.abrir_carrito');
const nav = document.querySelector(".nav");
const fondoBlurCompleto = document.querySelector(".nav-overlay");
const cerrarSidebar = document.querySelector(".close");

abrirCarrito.addEventListener("click",() =>{
    console.log("Se abrio el carrito")
 	navShow();
 });
 cerrarSidebar.addEventListener("click",() =>{
 	hideNav();
 });
 
 // hide nav after clicked outside of nav
 fondoBlurCompleto.addEventListener("click",(e) =>{
   hideNav();
 })

 function navShow(){
    fondoBlurCompleto.style.transition = "all 0.5s ease";
    fondoBlurCompleto.classList.add("open");
    nav.style.transition = "all 0.3s ease 0.5s";
    nav.classList.add("open");
 }

 function hideNav(){
   //hacer una transicion a la hora de cerrar 
   nav.style.transition = "all 0.3s ease";
   nav.classList.remove("open");
   fondoBlurCompleto.style.transition = "all 0.5s ease 0.3s";
   fondoBlurCompleto.classList.remove("open");
 }




//Objeto que sirve para los productos de novedades


document.addEventListener('DOMContentLoaded', () => {
    const baseDeDatos = [
        {
            id: 1,
            nombre: 'Patata',
            precio: 1,
            imagen: 'patata.jpg'
        },
        {
            id: 2,
            nombre: 'Cebolla',
            precio: 1.2,
            imagen: 'cebolla.jpg'
        },
        {
            id: 3,
            nombre: 'Calabacin',
            precio: 2.1,
            imagen: 'calabacin.jpg'
        },
        {
            id: 4,
            nombre: 'Fresas',
            precio: 0.6,
            imagen: 'fresas.jpg'
        }

    ];
    let carrito = [];
    const divisa = '€';
    const DOMitems = document.querySelector('#items');
    const DOMcarrito = document.querySelector('#carrito');
    const DOMtotal = document.querySelector('#total');
    const DOMbotonVaciar = document.querySelector('#boton-vaciar');

    // Funciones

    /**
        * Dibuja todos los productos a partir de la base de datos. No confundir con el carrito
    */
    function renderizarProductos() {
        baseDeDatos.forEach((info) => {
            // Estructura
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-4');
            // Body
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Titulo
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Boton 
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-primary');
            miNodoBoton.textContent = '+';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    }

        /**
        * Evento para añadir un producto al carrito de la compra
        */
        function anyadirProductoAlCarrito(evento) {
            // Anyadimos el Nodo a nuestro carrito
            carrito.push(evento.target.getAttribute('marcador'))
            // Actualizamos el carrito 
            renderizarCarrito();

        }

        /**
        * Dibuja todos los productos guardados en el carrito
        */
        function renderizarCarrito() {
            // Vaciamos todo el html
            DOMcarrito.textContent = '';
            // Quitamos los duplicados
            const carritoSinDuplicados = [...new Set(carrito)];
            // Generamos los Nodos a partir de carrito
            carritoSinDuplicados.forEach((item) => {
                // Obtenemos el item que necesitamos de la variable base de datos
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    // ¿Coincide las id? Solo puede existir un caso
                    return itemBaseDatos.id === parseInt(item);
                });
                // Cuenta el número de veces que se repite el producto
                const numeroUnidadesItem = carrito.reduce((total, itemId) => {
                    // ¿Coincide las id? Incremento el contador, en caso contrario no mantengo
                    return itemId === item ? total += 1 : total;
                }, 0);
                // Creamos el nodo del item del carrito
                const miNodo = document.createElement('li');
                miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
                miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
                // Boton de borrar
                const miBoton = document.createElement('button');
                miBoton.classList.add('btn', 'btn-danger', 'mx-5');
                miBoton.textContent = 'X';
                miBoton.style.marginLeft = '1rem';
                miBoton.dataset.item = item;
                miBoton.addEventListener('click', borrarItemCarrito);
                // Mezclamos nodos
                miNodo.appendChild(miBoton);
                DOMcarrito.appendChild(miNodo);
            });
           // Renderizamos el precio total en el HTML
           DOMtotal.textContent = calcularTotal();
        }

        /**
        * Evento para borrar un elemento del carrito
        */
        function borrarItemCarrito(evento) {
            // Obtenemos el producto ID que hay en el boton pulsado
            const id = evento.target.dataset.item;
            // Borramos todos los productos
            carrito = carrito.filter((carritoId) => {
                return carritoId !== id;
            });
            // volvemos a renderizar
            renderizarCarrito();
        }

        /**
         * Calcula el precio total teniendo en cuenta los productos repetidos
         */
        function calcularTotal() {
            // Recorremos el array del carrito 
            return carrito.reduce((total, item) => {
                // De cada elemento obtenemos su precio
                const miItem = baseDeDatos.filter((itemBaseDatos) => {
                    return itemBaseDatos.id === parseInt(item);
                });
                // Los sumamos al total
                return total + miItem[0].precio;
            }, 0).toFixed(2);
        }

        /**
        * Varia el carrito y vuelve a dibujarlo
        */
        function vaciarCarrito() {
            // Limpiamos los productos guardados
            carrito = [];
            // Renderizamos los cambios
            renderizarCarrito();
        }

        // Eventos
        DOMbotonVaciar.addEventListener('click', vaciarCarrito);

        // Inicio
        renderizarProductos();
        renderizarCarrito();

});













