let productos = JSON.parse(localStorage.getItem('productos')) || [
    {
        id: 1,
        nombre: "Calvin Klein",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/181202-800-auto?v=637820870708700000&width=800&height=auto&aspect=true",
        tamaño: "200ml",
        aroma: "Cítrica",
        genero: "Unisex",
        precio: "$50.300"
    },
    {
        id: 2,
        nombre: "Tom Ford",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/170321-800-auto?v=637786452013400000&width=800&height=auto&aspect=true",
        tamaño: "50ml/100ml",
        aroma: "Cuero",
        genero: "Unisex",
        precio: "$162.000"
    },
    {
        id: 3,
        nombre: "Hermés",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/167461-800-auto?v=637783055311130000&width=800&height=auto&aspect=true",
        tamaño: "50ml/100ml",
        aroma: "Floral",
        genero: "Unisex",
        precio: "$62.890"
    },
    {
        id: 4,
        nombre: "Alexandre J",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/169606-800-auto?v=637783074375370000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Oriental",
        genero: "Unisex",
        precio: "$68.430"
    },
    {
        id: 5,
        nombre: "Cartier",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/188641-800-auto?v=637933378239630000&width=800&height=auto&aspect=true",
        tamaño: "25ml/75ml",
        aroma: "Oriental",
        genero: "Unisex",
        precio: "$78.000"
    },
    {
        id: 6,
        nombre: "Serge Lutens",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/182152-800-auto?v=637822743613600000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Amaderada",
        genero: "Unisex",
        precio: "$48.000"
    },
    {
        id: 7,
        nombre: "Giardini Di Seta",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/169304-800-auto?v=637783070216900000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Floral",
        genero: "Unisex",
        precio: "$65.650"
    },
    {
        id: 8,
        nombre: "Layton",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/186193-800-auto?v=637883064824300000&width=800&height=auto&aspect=true",
        tamaño: "125ml",
        aroma: "Amaderada",
        genero: "Unisex",
        precio: "$174.880"
    },
    {
        id: 9,
        nombre: "Clean Reserve Rain Blend",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/198261-800-auto?v=638156975698700000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Cítrica",
        genero: "Unisex",
        precio: "$47.210"
    },
    {
        id: 10,
        nombre: "Carlisle",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/186196-800-auto?v=637883064835530000&width=800&height=auto&aspect=true",
        tamaño: "125ml",
        aroma: "Floral",
        genero: "Unisex",
        precio: "$209.330"
    },
    {
        id: 11,
        nombre: "Moschino",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/182183-800-auto?v=637822766544800000&width=800&height=auto&aspect=true",
        tamaño: "30ml/50ml/100ml",
        aroma: "Floral",
        genero: "Mujer",
        precio: "$45.770"
    },
    {
        id: 12,
        nombre: "Armani (Si Passione)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164166-800-auto?v=637782938269530000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Floral",
        genero: "Mujer",
        precio: "$59.900"
    },
    {
        id: 13,
        nombre: "Armani (My way)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/183835-800-auto?v=637826173932770000&width=800&height=auto&aspect=true",
        tamaño: "90ml",
        aroma: "floral",
        genero: "Mujer",
        precio: "$59.900",
    },
    {
        id: 14,
        nombre: "Carolina Herrera (Goodgirl)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164350-800-auto?v=637782938994300000&width=800&height=auto&aspect=true",
        tamaño: "50ml",
        aroma: "Floral",
        genero: "Mujer",
        precio: "$52.400"
    },
    {
        id: 15,
        nombre: " Dolce & Gabbana (The One Gold)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/167559-800-auto?v=637783055705600000&width=800&height=auto&aspect=true",
        tamaño: "50ml",
        aroma: "Amaderada",
        genero: "Mujer",
        precio: "$53.630"
    },
    {
        id: 16,
        nombre: "Carolina Herrera (Very Good Girl)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164394-800-auto?v=637782939156370000&width=800&height=auto&aspect=true",
        tamaño: "50ml",
        aroma: "Floral",
        genero: "Mujer",
        precio: "$56.000",
    },
    {
        id: 17,
        nombre: "Dior (Miss Dior)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/170397-800-auto?v=637786452416900000&width=800&height=auto&aspect=true",
        tamaño: "100ml", 
        aroma: "Floral",
        genero: "Mujer",
        precio: "$60.100"
    },
    {
        id: 18,
        nombre: "Givenchy (L'Interdit)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/170563-800-auto?v=637786453341670000&width=800&height=auto&aspect=true",
        tamaño: "35ml",
        aroma: "Floral",
        genero: "Mujer",
        precio: "$39.300"
    },
    {
        id: 19,
        nombre: "Carven (Le Parfum)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/166914-800-auto?v=637783044204500000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Floral",
        genero: "Mujer",
        precio: "$35.200"
    },
    {
        id: 20,
        nombre: "Mugler (Alien)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/168773-800-auto?v=637783066375100000&width=800&height=auto&aspect=true",
        tamaño: "30ml",
        aroma: "Amaderada",
        genero: "Mujer",
        precio: "$49.010"
    },
    {
        id: 21,
        nombre: "Versace (Eros)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/168486-800-auto?v=637783062828900000&width=800&height=auto&aspect=true",
        tamaño: "200ml",
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$73.470"
    },
    {
        id: 22,
        nombre: "Paco Rabanne (One million)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/184278-800-auto?v=637832156532070000&width=800&height=auto&aspect=true",
        tamaño: "50ml",
        aroma: "Cuero",
        genero: "Hombre",
        precio: "$44.550"
    },
    {
        id: 23,
        nombre: "Bvlgari (Man Wood Essence)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164844-800-auto?v=637782984705730000&width=800&height=auto&aspect=true",
        tamaño: "100ml",
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$61.900"
    },
    {
        id: 24,
        nombre: "Carolina Herrera (Bad Boy Le Parfum)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164290-800-auto?v=637782938762030000&width=800&height=auto&aspect=true",
        tamaño: "50ml",
        aroma: "Cuero",
        genero: "Hombre",
        precio: "$49.400"
    },
    {
        id: 25,
        nombre: "Dior (Sauvage)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/184223-800-auto?v=637831395350400000&width=800&height=auto&aspect=true",
        tamaño: "60ml", 
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$71.500"
    },
    {
        id: 26,
        nombre: "Jean Paul Gaultier (Scandal Pour Homme)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/179359-800-auto?v=637813056069700000&width=800&height=auto&aspect=true",
        tamaño: "50ml", 
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$53.500"
    },
    {
        id: 27,
        nombre: "Carolina Herrera (212 Heroes)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164282-800-auto?v=637782938728370000&width=800&height=auto&aspect=true",
        tamaño: "50ml", 
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$40.900"
    },
    {
        id: 28,
        nombre: "Versace (Eros Flame)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/184657-800-auto?v=637847831294670000&width=800&height=auto&aspect=true",
        tamaño: "30ml", 
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$34.200"
    },
    {
        id: 29,
        nombre: "Issey Miyake (Wood & Wood)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/188961-800-auto?v=637940994027800000&width=800&height=auto&aspect=true",
        tamaño: "50ml", 
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$55.800"
    },
    {
        id: 30,
        nombre: "Jean Paul Gaultier (Le Male Le Parfum)",
        imagen: "https://rougeb2car.vtexassets.com/arquivos/ids/164786-800-auto?v=637782984504970000&width=800&height=auto&aspect=true",
        tamaño: "75ml", 
        aroma: "Amaderada",
        genero: "Hombre",
        precio: "$47.500"
    } 
];

pintarLista();

function pintarLista() {
    let lista = document.getElementById("ListaGenerada");
    lista.innerHTML = '';

    productos.forEach((producto) => {
        lista.innerHTML += `
        <li class="producto">
            <div class="contenedor-checkbox">
                <input type="checkbox" value="${producto.id}">
            </div>
            <div class="contenedor-imagen">
                <img src="${producto.imagen}" alt="${producto.nombre}">
            </div>
            <div class="informacion-producto">
                <p><span class="etiqueta">Nombre:</span> ${producto.nombre}</p>
                <p><span class="etiqueta">Tamaño:</span> ${producto.tamaño}</p>
                <p><span class="etiqueta">Aroma:</span> ${producto.aroma}</p>
                <p><span class="etiqueta">Género:</span> ${producto.genero}</p>
                <p><span class="etiqueta">Precio:</span> ${producto.precio}</p>
            </div>
            <button id="${producto.id}" class="btnEliminar" onclick="eliminar(${producto.id})">Eliminar</button>
            <button id="${producto.id}" class="btnModificar" onclick="modificar(${producto.id})">Modificar</button>
        </li>
        `;
    })
    localStorage.setItem('productos', JSON.stringify(productos));
};

pintarLista();

function agregar(nombre, imagen, tamaño, aroma, genero, precio) {
    let nuevoProducto = {
        id: productos.length,
        nombre: nombre,
        imagen: imagen,
        tamaño: tamaño,
        aroma: aroma,
        genero: genero,
        precio: precio
    };
    productos.push(nuevoProducto);
    pintarLista();
  
    document.getElementById('nombre').value = '';
    document.getElementById('imagen').value = '';
    document.getElementById('tamaño').value = '';
    document.getElementById('aroma').value = '';
    document.getElementById('genero').value = '';
    document.getElementById('precio').value = '';

    localStorage.setItem('productos', JSON.stringify(productos));
};
  
let formulario = document.getElementById('formulario');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    
    let nombre = document.getElementById('nombre').value;
    let imagen = document.getElementById('imagen').value;
    let tamaño = document.getElementById('tamaño').value;
    let aroma = document.getElementById('aroma').value;
    let genero = document.getElementById('genero').value;
    let precio = document.getElementById('precio').value;
   
    agregar(nombre, imagen, tamaño, aroma, genero, precio);
});

function modificar(idAModificar) {
    let producto = productos.find((producto) => producto.id === idAModificar);

    if (!producto) {
        console.log("No se encontró el producto con el ID especificado.");
        return;
    }

    let opcion = prompt(
        "Seleccione la opción que desea modificar:\n" +
        "1. Nombre\n" +
        "2. Imagen\n" +
        "3. Tamaño\n" +
        "4. Aroma\n" +
        "5. Género\n" +
        "6. Precio\n" +
        "7. Todo"
    );

    switch (opcion) {
        case "1":
            let nuevoNombre = prompt("Ingrese el nuevo nombre");
            if (nuevoNombre) {
                producto.nombre = nuevoNombre;
            }
            break;
        case "2":
            let nuevaImagen = prompt("Ingrese la nueva imagen URL");
            if (nuevaImagen) {
                producto.imagen = nuevaImagen;
            }
            break;
        case "3":
            let nuevoTamaño = prompt("Ingrese el nuevo tamaño");
            if (nuevoTamaño) {
                producto.tamaño = nuevoTamaño;
            }
            break;
        case "4":
            let nuevoAroma = prompt("Ingrese el nuevo aroma");
            if (nuevoAroma) {
                producto.aroma = nuevoAroma;
            }
            break;
        case "5":
            let nuevoGenero = prompt("Ingrese el nuevo género");
            if (nuevoGenero) {
                producto.genero = nuevoGenero;
            }
            break;
        case "6":
            let nuevoPrecio = prompt("Ingrese el nuevo precio");
            if (nuevoPrecio) {
                producto.precio = nuevoPrecio;
            }
            break;
        case "7":
            let nuevoNombreCompleto = prompt("Ingrese el nuevo nombre");
            let nuevaImagenCompleta = prompt("Ingrese la nueva imagen URL");
            let nuevoTamañoCompleto = prompt("Ingrese el nuevo tamaño");
            let nuevoAromaCompleto = prompt("Ingrese el nuevo aroma");
            let nuevoGeneroCompleto = prompt("Ingrese el nuevo género");
            let nuevoPrecioCompleto = prompt("Ingrese el nuevo precio");

            if (
                nuevoNombreCompleto &&
                nuevaImagenCompleta &&
                nuevoTamañoCompleto &&
                nuevoAromaCompleto &&
                nuevoGeneroCompleto &&
                nuevoPrecioCompleto
            ) {
                producto.nombre = nuevoNombreCompleto;
                producto.imagen = nuevaImagenCompleta;
                producto.tamaño = nuevoTamañoCompleto;
                producto.aroma = nuevoAromaCompleto;
                producto.genero = nuevoGeneroCompleto;
                producto.precio = nuevoPrecioCompleto;
            }
            break;
        default:
            console.log("Opción inválida.");
            return;
    }
    pintarLista();
    localStorage.setItem('productos', JSON.stringify(productos));
};

function eliminar(id) {
    productos = productos.filter((producto) => producto.id !== id);
    pintarLista();
    localStorage.setItem('productos', JSON.stringify(productos));
};

function eliminarSeleccionados() {
    let checkboxes = document.querySelectorAll("#ListaGenerada input[type='checkbox']:checked");
    let ids = Array.from(checkboxes).map(checkbox => parseInt(checkbox.value));
    productos = productos.filter(producto => !ids.includes(producto.id));
    pintarLista();
    localStorage.setItem('productos', JSON.stringify(productos));
};

let btnEliminarSeleccionados = document.getElementById("btnEliminarSeleccionados");
btnEliminarSeleccionados.addEventListener("click", eliminarSeleccionados);