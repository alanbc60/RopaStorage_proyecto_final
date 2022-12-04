//Evento al hacer click en el boton realizar encuesta

fetch('./datos.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        // document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', ready) : ready();
        /* Maiking Function */
        const modal_container = document.getElementById('contenedor_principal-modal');
        const botonCerrarModal = document.getElementById('close');

        //Variables del modal - promociones
        const popup_promociones_container = document.getElementById('popup');
        const btn_promociones = document.getElementById('btn_promociones');
        const botonCerrarPromocion = document.getElementById('close_popup_promociones');

        //Variables del modal - contactanos
        const popup_contactanos_container = document.getElementById('popup_contactanos');
        const btn_contactanos = document.getElementById('btn_contactanos');
        const botonCerrarContactanos = document.getElementById('close_popup_contactanos');

        //Variables globales
        let edad, sexo;
        let exito, opcion;
        let nombreProducto;
        let ruta;
        var arrayInput = new Array();

        const contenedoresEncuesta = {
            //Al hacer click en el boton realizar encuesta y mostrar el div general
            mensaje1: document.querySelector('.contenedor_inicio-encuesta'),
                //Primera pregunta
                contenedorPrimeraPregunta: document.querySelector('.encuesta_primera_pregunta'),
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
        
            //Evento que abre la encuesta
            botonesEncuesta.botonAbrirEncuesta.addEventListener('click',abrirEncuesta);
            botonesEncuesta.botonGenerarRecomendacion.style.display = "none";
            botonesEncuesta.botonRealizarEncuesta.addEventListener('click',realizarEncuesta);
            botonesEncuesta.botonGuardarPreferencias.addEventListener('click', generarPreferencia);
            botonesEncuesta.botonNoRealizarEncuesta.addEventListener('click', rechazarEncuesta);
            botonesEncuesta.botonGenerarRecomendacion.addEventListener('click', generarRecomendacion);


        function abrirEncuesta(){
            //evento que abre la encuesta
                console.log("Abriendo encuesta..");
                contenedoresEncuesta.mensaje1.style.display = "block";
                contenedoresEncuesta.contenedorPrimeraPregunta.style.display = "block";
                botonesEncuesta.botonAbrirEncuesta.style.display = "none";
                popup_promociones_container.style.display = "none";    
                popup_contactanos_container.style.display = "none";    
        }




        // Eventos cuando damos aceptar la primera pregunta
        function realizarEncuesta() {
            //Quitar el contenedor de la primera pregunta
            contenedoresEncuesta.contenedorPrimeraPregunta.style.display = "none";

            // ==== Segunda pregunta ====
            do {
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
                    else {
                        contenedoresEncuesta.contenedorPreguntaEdad_Sexo.style.display = "none";
                        contenedoresEncuesta.contenedorPreguntapreferencias.style.display = "block";
                    }
                });
            } while (exito == false);
        }

        //Contenedor de preferencias

        function generarPreferencia(){
            verificarPreferencias();
            if (opcion == 1) {
                opcion = String("Playeras");
                ruta = "imagenes/" + opcion + "/";
                console.log("La ruta es: " + ruta);
            }
            else if (opcion == 2) {
                opcion = String("chamarras");
                ruta = "imagenes/" + opcion + "/";
                console.log("La ruta es: " + ruta);
            }
            else if (opcion == 3) {
                opcion = String("blusas");
                ruta = "imagenes/" + opcion + "/";
                console.log("La ruta es: " + ruta);
            }
            else if (opcion == 4) {
                opcion = String("Tenis");
                ruta = "imagenes/" + opcion + "/";
                console.log("La ruta es: " + ruta);
            }
            else if (opcion == 5) {
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
        };

        function rechazarEncuesta(){
            contenedoresEncuesta.mensaje1.style.display = "none";
            alert("Bueno, ya sera para la otra");
        };
        
        function generarRecomendacion() {
            console.log("Se presiono generar recompensa");
            generarRecompensa(3000, ruta, sexo);
        };


        function datosArrayEdadSexo() {
            // var arrayInput = new Array();
            var inputValores = document.getElementsByClassName('datoInput'),
                namesValores = [].map.call(inputValores, function (dataInput) {
                    arrayInput.push(dataInput.value);
                })
            arrayInput.forEach(function (inpusValueData) {
                console.log("El dato es: " + inpusValueData);
            })
            edad = parseInt(arrayInput[0]);
            sexo = parseInt(arrayInput[1]);
        }

        function vaciarArray(arrayInput) {
            arrayInput.splice(0, arrayInput.length);
        }
        function verificarPreferencias() {
            console.log("Entro a verificacion");

            if (document.getElementById("preferencia1").checked) {
                console.log("Seleccionado playeras");
                opcion = 1;
            }
            if (document.getElementById("preferencia2").checked) {
                alert("Eligio chamarras");
                console.log("Seleccionado chamarras");
                opcion = 2;
            }
            if (document.getElementById("preferencia3").checked) {
                alert("Eligio blusas");
                console.log("Seleccionado blusas");
                opcion = 3;
            }
            if (document.getElementById("preferencia4").checked) {
                alert("Eligio tenis");
                console.log("Seleccionado tenis");
                opcion = 4;
            }
            if (document.getElementById("preferencia5").checked) {
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
            else {
                console.log("Error, no se paso parametros");
            }

            // modal_container.classList.add('show');
            botonCerrarModal.addEventListener('click', async () => {
                modal_container.classList.remove('show');
                console.log("Se cerro el modal");
                // await sleep(tiempo_ms);

            });
            cerrarEncuesta();
        }
        

        function cerrarEncuesta(){
            botonesEncuesta.botonAbrirEncuesta.style.display = "none";
            botonesEncuesta.generarRecompensa.style.display = "none";
        }

        /* añadir al carrito */
        function addCartClicked(event) {
            console.log("Producto de recomendacion añadido al carrito :D");
            let button = event.target;
            let shopProducts = button.parentElement;

            let id = shopProducts.id;
            let title = shopProducts.getElementsByClassName('product__tittle')[0].innerText;
            let price = shopProducts.getElementsByClassName('product__price')[0].innerText;
            let productImg = shopProducts.getElementsByClassName('front')[0].src;

            const productos1 = JSON.parse(localStorage.getItem('carrito') || '[]');

            const existeProducto = productos1.find((producto) => producto.id == id);
            if (!existeProducto) {
                localStorage.setItem('carrito', JSON.stringify([...productos1, { id, title, price, productImg }]));
                alertProductoCarrito();
            }

            agregarProductoAlCarrito(id, title, price, productImg);
            updateTotal();
        }

        // funcion: Generar numero aleatorio
        function generarAleatorio(minimo, maximo) {
            return Math.ceil(Math.random() * (maximo - minimo) + minimo);
        }
        function sleep(ms) {
            return new Promise((resolve) => setTimeout(resolve, ms));
        }


        function agregarProductoAlCarrito(id, title, price, productImg) {
            let cartShopBox = document.createElement('div');
            cartShopBox.setAttribute('id', id);

            cartShopBox.classList.add('cart-box');
            let cartItems = document.getElementsByClassName('cart-content')[0];
            let cartItemsNames = document.getElementsByClassName('cart-product-title');
            for (let i = 0; i < cartItemsNames.length; i++) {
                if (cartItemsNames[i].innerText == title) {
                    alertRepetido();
                    return;
                }
            }

            let cartBoxContent = `<img src="${productImg}" alt="" class="cart-img">
                            <div class="detail-box">
                                <div class="cart-product-title">${title}</div>
                                <div class="cart-price">${price}</div>   
                                <input type="number" value="1" class="cart-quantity"> 
                            </div>
                            <i class='bx bxs-trash-alt cart-remove'></i>
    `
            cartShopBox.innerHTML = cartBoxContent;
            cartItems.append(cartShopBox);
            cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removerProductoCarrito);
            cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change', quantityChanged);
        }

        //=====funciones de la navbar

        //cerrar el popup de contactanos
        botonCerrarContactanos.addEventListener('click', async () => {
            console.log("Se presiono el boton cerrar promociones");
            popup_contactanos_container.style.opacity = "0";
            console.log("Se cerro el popup");

            // await sleep(tiempo_ms);
    
        });
    
        //Abrir el popup de contactanos
        btn_contactanos.addEventListener('click', async () => {
            console.log("Se presiono el boton abrir contactanos");
            popup_contactanos_container.style.display = "block";    
            popup_contactanos_container.style.opacity = "1";
            popup_contactanos_container.style.visibility = "visible";
        });


        //cerrar el popup de promociones
        botonCerrarPromocion.addEventListener('click', async () => {
                console.log("Se presiono el boton cerrar promociones");
                popup_promociones_container.style.opacity = "0";
                console.log("Se cerro el popup");
        });

        //Abrir el popup de promociones
        btn_promociones.addEventListener('click', async () => {
            popup_promociones_container.style.display = "block";    
            popup_promociones_container.style.opacity = "1";
            popup_promociones_container.style.visibility = "visible";
            popup_contactanos_container.style.display="none";
        });


        
        

    });












