fetch('./datos.json')
    .then((resinicial) => resinicial.json())
    .then((res) => {
        let productosBlusas = document.querySelectorAll('.Blusas');
        let productosChamarras = document.querySelectorAll('.Chamarras');
        let productosPantalones = document.querySelectorAll('.Pantalones');
        let productosPlayeras = document.querySelectorAll('.Playeras');
        let productosTodos = document.querySelectorAll('.productContainer');

        let btnTodos = document.querySelector('#btn-todos');
        let btnBlusas = document.querySelector('#btn-blusas');
        let btnChamarras = document.querySelector('#btn-chamarras');
        let btnPantalones = document.querySelector('#btn-pantalones');
        let btnPlayeras = document.querySelector('#btn-playeras');

        btnTodos.addEventListener('click', todosProductos);
        btnBlusas.addEventListener('click', soloAdidas);
        btnChamarras.addEventListener('click', soloAsics);
        btnPantalones.addEventListener('click', soloLacoste);
        btnPlayeras.addEventListener('click', soloNike);

        function todosProductos() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.remove('showProducto');
                zapatilla.classList.remove('hideProducto');
            }
            btnTodos.classList.add('backgroundColorButton');
            btnBlusas.classList.remove('backgroundColorButton');
            btnChamarras.classList.remove('backgroundColorButton');
            btnPantalones.classList.remove('backgroundColorButton');
            btnPlayeras.classList.remove('backgroundColorButton');
        }

        function soloAdidas() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosBlusas) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnBlusas.classList.add('backgroundColorButton');
            btnChamarras.classList.remove('backgroundColorButton');
            btnPantalones.classList.remove('backgroundColorButton');
            btnPlayeras.classList.remove('backgroundColorButton');
        }

        function soloAsics() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosChamarras) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnBlusas.classList.remove('backgroundColorButton');
            btnChamarras.classList.add('backgroundColorButton');
            btnPantalones.classList.remove('backgroundColorButton');
            btnPlayeras.classList.remove('backgroundColorButton');
        }

        function soloLacoste() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosPantalones) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnBlusas.classList.remove('backgroundColorButton');
            btnChamarras.classList.remove('backgroundColorButton');
            btnPantalones.classList.add('backgroundColorButton');
            btnPlayeras.classList.remove('backgroundColorButton');
        }

        function soloNike() {
            for (const zapatilla of productosTodos) {
                zapatilla.classList.add('hideProducto');
                zapatilla.classList.remove('showProducto');
            }
            for (const zapatilla of productosPlayeras) {
                zapatilla.classList.add('showProducto');
            }
            btnTodos.classList.remove('backgroundColorButton');
            btnBlusas.classList.remove('backgroundColorButton');
            btnChamarras.classList.remove('backgroundColorButton');
            btnPantalones.classList.remove('backgroundColorButton');
            btnPlayeras.classList.add('backgroundColorButton');
        }
    });
