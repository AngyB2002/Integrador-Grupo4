document.addEventListener('DOMContentLoaded', function () {
    let productosContainer = document.getElementById("listaProductos");

    let productos = JSON.parse(localStorage.getItem('productos'));

    if (productos && productos.length > 0) {
        productos.forEach(function (producto) {
            let productoElement = document.createElement('div');
            productoElement.classList.add('producto');

            let imagenElement = document.createElement('img');
            imagenElement.classList.add('producto-imagen');
            imagenElement.setAttribute('src', producto.imagen);
            productoElement.appendChild(imagenElement);

            let productoInfoElement = document.createElement('div');
            productoInfoElement.classList.add('producto-info');

            let nombreElement = document.createElement('h3');
            nombreElement.classList.add('producto-nombre');
            nombreElement.textContent = producto.nombre;
            productoInfoElement.appendChild(nombreElement);

            let tamañoElement = document.createElement('p');
            tamañoElement.classList.add('producto-detalle');
            tamañoElement.textContent = 'Tamaño: ' + producto.tamaño;
            productoInfoElement.appendChild(tamañoElement);

            let aromaElement = document.createElement('p');
            aromaElement.classList.add('producto-detalle');
            aromaElement.textContent = 'Aroma: ' + producto.aroma;
            productoInfoElement.appendChild(aromaElement);

            let generoElement = document.createElement('p');
            generoElement.classList.add('producto-detalle');
            generoElement.textContent = 'Género: ' + producto.genero;
            productoInfoElement.appendChild(generoElement);

            let precioElement = document.createElement('p');
            precioElement.classList.add('producto-precio');
            precioElement.textContent = 'Precio: ' + producto.precio;
            productoInfoElement.appendChild(precioElement);

            // Botón de Me gusta
            let likeButton = document.createElement('button');
            likeButton.classList.add('btn', 'btn-outline-primary', 'like-btn');
            likeButton.setAttribute('type', 'button');
            likeButton.setAttribute('data-count', '0');

            let heartIcon = document.createElement('span');
            heartIcon.classList.add('heart');
            heartIcon.innerHTML = '&#10084;';

            let countElement = document.createElement('span');
            countElement.classList.add('count');
            countElement.textContent = '0';

            likeButton.appendChild(heartIcon);
            likeButton.appendChild(countElement);

            productoInfoElement.appendChild(likeButton);

            productoElement.appendChild(productoInfoElement);

            productosContainer.appendChild(productoElement);
        });

        // Agregar evento de clic para los botones de "Me gusta"
        let likeButtons = document.querySelectorAll(".like-btn");
        likeButtons.forEach((button) => {
            button.addEventListener("click", function() {
                let count = parseInt(button.dataset.count);
                let countElement = button.querySelector(".count");
                let heartIcon = button.querySelector(".heart");

                if (heartIcon.classList.contains("active")) {
                    heartIcon.classList.remove("active");
                    count--;
                } else {
                    heartIcon.classList.add("active");
                    count++;
                }

                countElement.innerText = count;
                button.dataset.count = count;
            });
        });
    }
});