fetch('./datos.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        const productos = res;
        const productCatalog = document.querySelector('#productCatalog');
        productos.forEach((producto) => {
            const productContainer = document.createElement('div');
            productContainer.classList.add('productContainer');
            productContainer.classList.add(`${producto.categoria}`);
            productContainer.innerHTML = `
                <div id="${producto.id}" class="productContainer-card">
                    <div class="contenedor_producto-imagen">
                        <img class="front" src=${producto.link} alt="">
                    </div>
                    <div class="contenedor_producto-texto">
                        <h3 class="product__tittle">${producto.nombre}</h3>
                        <p class="product__price">$${producto.precio}</p>
                    </div>
                    <button class="fa-solid fa-cart-plus add-cart" type="button"></button>
                </div>
                `;
            productCatalog.appendChild(productContainer);
        });
    });



//Recomendaciones

// fetch('./datos.json')
//     .then((resinicial) => resinicial.json())
//     .then((res) => {
//         const productos = res;
//         const productCatalog = document.querySelector('#contenedor_principal-modal');
//         productos.forEach((producto) => {
//             const productContainer = document.createElement('div');
//             productContainer.classList.add('contenedor_modal');
//             productContainer.classList.add(`${producto.categoria}`);
//             productContainer.innerHTML = `
//                 <div id="${producto.id}" class="productContainer-card">
//                     <div class="contenedor_producto-imagen">
//                         <img class="front" src=${producto.link} alt="">
//                     </div>
//                     <div class="contenedor_producto-texto">
//                         <h3 class="product__tittle">${producto.nombre}</h3>
//                         <p class="product__price">$${producto.precio}</p>
//                     </div>
//                     <button class="fa-solid fa-cart-plus add-cart" type="button"></button>
//                 </div>
//                 `;
//             productCatalog.appendChild(productContainer);
//         });
//     });