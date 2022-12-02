let cantidadDescuento = 0.10;
let TotalAPagar;
let repeticionDescuento = 0;


fetch('./datos.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        /* Cart Working */
        document.readyState == 'loading' ? document.addEventListener('DOMContentLoaded', ready) : ready();

        /* Funcion principal */
        function ready() {
            let btnTodos = document.querySelector('#btn-todos');
            btnTodos.classList.add('backgroundColorButton');
            if (JSON.parse(localStorage.getItem('counter')) == null) {
                localStorage.setItem('counter', '0');
            }
            contador.textContent = JSON.parse(localStorage.getItem('counter'));

            let DOMTotal = document.getElementsByClassName('contenedorTotalPago-precio')[0];
            // console.log("El DomTotal es tipo: ",typeof DOMTotal);
            let precio = JSON.parse(localStorage.getItem('contenedorTotalPago-precio'));
            DOMTotal.innerText = '$' + precio;
            console.log("El DomTotal es tipo: ",typeof precio);
            if (JSON.parse(localStorage.getItem('contenedorTotalPago-precio')) == null) {
                DOMTotal.innerText = '$0';
            }

            else{
                cantidadDescuento = precio;
            }

            const productos1 = JSON.parse(localStorage.getItem('carrito') || '[]');
            for (const product of productos1) {
                agregarProductoAlCarrito(product.id, product.title, product.price, product.productImg);
            }

            /* Quitar producto del carrito */
            let removeCartButtons = document.getElementsByClassName('cart-remove');
            for (let i = 0; i < removeCartButtons.length; i++) {
                let button = removeCartButtons[i];
                button.addEventListener('click', removerProductoCarrito);
            }
            /* Modificar entrada de cantidad x producto */
            let quantityInput = document.getElementsByClassName('carrito_itemCantidad');
            for (let i = 0; i < quantityInput.length; i++) {
                let input = quantityInput[i];
                input.addEventListener('change', quantityChanged);
            }
            /* Agregar al carrito */
            let addCart = document.getElementsByClassName('add-cart');
            for (let i = 0; i < addCart.length; i++) {
                let button = addCart[i];
                button.addEventListener('click', addCartClicked);
            }

            /* Input de descuentos */
            let aplicarDescuento = document.getElementsByClassName('btn_descuento');
            for (let i = 0; i < aplicarDescuento.length; i++) {
                console.log("======Contenedor descuento=====")
                let button = aplicarDescuento[i];
                button.addEventListener('click', generarDescuentoTotal);
            }
            // let botonAplicarDescuento;
            // botonAplicarDescuento.addEventListener('click',generarDescuentoTotal);

            /* Boton pagar productos del carrito */
            document.getElementsByClassName('btn-pagarProductos')[0].addEventListener('click', pagarProductos);
        }

        function generarDescuentoTotal(event){
            let inputDescuento = document.getElementsByClassName('inputAplicarDescuento')[0].value;
            if(repeticionDescuento==0){
                if(inputDescuento=="descuentodic2022"){
                    repeticionDescuento = 1;
                    console.log("Se aplico el descuento");
                    //Operacion de descuento
    
                    let totalDescuento = TotalAPagar * 0.10;
    
                    console.log("Total a pagar sin descuento: ",TotalAPagar);
                    console.log("Total a descontar: ",totalDescuento);
    
                    TotalAPagar-= totalDescuento;
                    console.log("Total a pagar con descuento: ",TotalAPagar);
    
                    //Actualizar el precio
    
                    TotalAPagar = Math.round(TotalAPagar * 100) / 100;
                    //Es lo que aparece en el carrito
                    localStorage.setItem('cart-ContenedorTotalPago', JSON.stringify(TotalAPagar));
                    document.getElementsByClassName('contenedorTotalPago-precio')[0].innerText = '$' + JSON.parse(localStorage.getItem('cart-ContenedorTotalPago'));
                }
            }
            //Cuando se intenta aplicar varias veces el descuento
            else{
                alertDescuentoAplicado();
            }

        }



        /* Buy Button */
        function pagarProductos() {
            console.log("Se abrio el carrito");
            const productos1 = JSON.parse(localStorage.getItem('carrito') || '[]');
            if (productos1.length == 0) {
                alertVacio();
            } else {
                alertComprar();

                for (let i = productos1.length; i > 0; i--) {
                    productos1.pop();
                }

                let cartContent = document.getElementsByClassName('cart-content')[0];
                while (cartContent.hasChildNodes()) {
                    cartContent.removeChild(cartContent.firstChild);
                }
                localStorage.setItem('carrito', JSON.stringify(productos1));
                localStorage.setItem('counter', '0');
                contador.textContent = JSON.parse(localStorage.getItem('counter'));
                updateTotal();
            }

            carrito.classList.remove('active');
        }

        /* Remove items from cart */
        function removerProductoCarrito(event) {
            let buttonClicked = event.target;
            buttonClicked.parentElement.remove();
            alertProductoFueraCarrito();

            const id = buttonClicked.parentElement.id;
            const productos1 = JSON.parse(localStorage.getItem('carrito') || '[]');
            const nuevosProductos = productos1.filter((producto) => producto.id !== id);
            localStorage.setItem('carrito', JSON.stringify(nuevosProductos));
            //Actalizamos el total
            updateTotal();
        }

        /* Quantity Changes */
        function quantityChanged(event) {
            let input = event.target;
            if (isNaN(input.value) || input.value <= 0) {
                input.value = 1;
            }
            //Actalizamos el total
            updateTotal();
        }

        /* Ad To cart */
        function addCartClicked(event) {
            console.log("Producto añadido al carrito :D");
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

        function agregarProductoAlCarrito(id, title, price, productImg) {
            let cartShopBox = document.createElement('div');
            cartShopBox.setAttribute('id', id);

            cartShopBox.classList.add('cart-contenedorProducto');
            let cartItems = document.getElementsByClassName('cart-content')[0];
            let cartItemsNames = document.getElementsByClassName('cart-productoTitulo');
            for (let i = 0; i < cartItemsNames.length; i++) {
                if (cartItemsNames[i].innerText == title) {
                    alertRepetido();
                    return;
                }
            }

            let cartBoxContent = `
                    <div class="contenedorProducto-imagen">
                        <img src="${productImg}" alt="imagen del carrito xd">                    
                    </div>

                    <div class="contenedorProducto-informacion">
                        <div class="cart-productoTitulo">
                            <h2>${title}</h2>
                        </div>
                        
                        <div class="cart-precio">
                            <h2>${price}</h2>
                        </div>   
                        <input type="number" value="1" class="carrito_itemCantidad"> 
                    </div>
                    
                    <i class='bx bxs-trash-alt cart-remove'></i>
    `
            cartShopBox.innerHTML = cartBoxContent;
            cartItems.append(cartShopBox);
            cartShopBox.getElementsByClassName('cart-remove')[0].addEventListener('click', removerProductoCarrito);
            cartShopBox.getElementsByClassName('carrito_itemCantidad')[0].addEventListener('change', quantityChanged);
        }

        //Update total
        function updateTotal() {
            let cartContent = document.getElementsByClassName('cart-content')[0];
            let cartBoxes = document.getElementsByClassName('cart-contenedorProducto');
            let total = 0;
            let counter = 0;

            for (let i = 0; i < cartBoxes.length; i++) {
                let cartBox = cartBoxes[i];
                let priceElement = cartBox.getElementsByClassName('cart-precio')[0];
                let quantityElement = cartBox.getElementsByClassName('carrito_itemCantidad')[0];
                let price = parseFloat(priceElement.innerText.replace('$', ''));
                let quantity = quantityElement.value;

                total += price * quantity;

                let contador = document.getElementById('contador');
                counter += parseInt(quantity);
                localStorage.setItem('counter', counter);
                contador.textContent = JSON.parse(localStorage.getItem('counter'));
            }

            if (cartBoxes.length == 0) {
                document.getElementById('contador').textContent = counter;
                localStorage.setItem('counter', counter);
            }
            /* Si el precio contiene decimales */
            total = Math.round(total * 100) / 100;
            //Es lo que aparece en el carrito
            localStorage.setItem('cart-ContenedorTotalPago', JSON.stringify(total));
            document.getElementsByClassName('contenedorTotalPago-precio')[0].innerText = '$' + JSON.parse(localStorage.getItem('cart-ContenedorTotalPago'));
            TotalAPagar = JSON.parse(localStorage.getItem('cart-ContenedorTotalPago'));
            console.log("Precio en consola: ",JSON.parse(localStorage.getItem('cart-ContenedorTotalPago')));
        }
    });