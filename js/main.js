import { renderHome } from "./home.js";
import { slider } from "./slider2.js";


let productos = [];
let productosEnCarrito;
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const contenedorProductos = document.createElement("div");
contenedorProductos.id = "contenedor-productos"
contenedorProductos.classList.add("contenedor-productos")
const tituloPrincipal = document.querySelector("#titulo-principal");
const numerito = document.querySelector("#numerito");
const main = document.querySelector("#bor");
localStorage.setItem("arreglo", "")

Promise
fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
        cargarProductos(data)
        localStorage.setItem("arreglo", JSON.stringify(productos))

    });



botonesCategorias.forEach(boton => {
    boton.addEventListener("click", () => {
        aside.classList.remove("aside-visible");
    });
});

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {
        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos") {
            console.log(e.currentTarget.id)
            const productosBoton = productos.filter((producto, i) => producto.categoria.id === e.currentTarget.id);
            cargarProductos(productosBoton);
            let productosfiltrados = [...productosBoton]
            localStorage.setItem("arreglo", JSON.stringify(productosfiltrados))
        }
        if(e.currentTarget.id === "home"){
            renderHome(main)
            slider()


        }
        if(e.currentTarget.id === "todos") {
            localStorage.setItem("arreglo", JSON.stringify(productos))
            cargarProductos(productos);
        }
    });
});

    // Agregar eventos a los botones después de que se hayan agregado al DOM



function cargarProductos(productosElegidos) {
    // Limpiar el contenedor de productos
    contenedorProductos.innerHTML = "";

    productosElegidos.forEach((producto, i) => {
        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div id="qw" data-index="${i}">
                <img class="producto-imagen" src="${producto.imagen[0]}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${producto.precio}</p>
                    <button class="producto-agregar" id="${producto.id}">Agregar</button>
                </div>
            </div>
        
        `


        ;
        main.innerHTML = ""
        contenedorProductos.appendChild(div);
        main.appendChild(contenedorProductos)
    });

    // Actualizar los botones de agregar
    actualizarBotonesAgregar();
}





function actualizarBotonesAgregar() {
    const botonesAgregar = document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });
    const qw = document.querySelectorAll("#qw");
    qw.forEach(bo => {
        bo.addEventListener("click", drawkp);
        
    });
}

function agregarAlCarrito(e) {
    e.stopPropagation();
    Toastify({
        text: "Producto agregado",
        duration: 3000,
        close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "linear-gradient(to right, #4b33a8, #785ce9)",
          borderRadius: "2rem",
          textTransform: "uppercase",
          fontSize: ".75rem"
        },
        offset: {
            x: '1.5rem', // horizontal axis - can be a number or a string indicating unity. eg: '2em'
            y: '1.5rem' // vertical axis - can be a number or a string indicating unity. eg: '2em'
        },
        onClick: function(){} // Callback after click
    }).showToast();

    const idBoton = e.currentTarget.id;
    const productoAgregado = productos.find(producto => producto.id === idBoton);
    if(productosEnCarrito.some(producto => producto.id === idBoton)) {
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
        productosEnCarrito[index].cantidad++;
    } else {
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }
    actualizarNumerito();
    localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
}



function actualizarNumerito() {
    let nuevoNumerito = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
    numerito.innerText = nuevoNumerito;
}

let productosEnCarritoLS = localStorage.getItem("productos-en-carrito");
if (productosEnCarritoLS) {
    productosEnCarrito = JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else {
    productosEnCarrito = [];
}


function drawkp(e) {
    let mas = 1;
    let aumento = 0;
    let get = localStorage.getItem("arreglo");
    let final = JSON.parse(get);
    const index = e.currentTarget.dataset.index;
    const pro = final[index];
    let imagenes = pro.imagen;
    let numero = pro.precio
    const numeroString = numero.toString();
    let resultado = "";
    let contador = 0;

    for (let i = numeroString.length - 1; i >= 0; i--) {
        resultado = numeroString[i] + resultado;
        contador++;
        if (contador % 3 === 0 && i !== 0) {
          resultado = "." + resultado;
        }
        console.log(resultado)
    }



    console.log("Índice del producto en el array productosEnCarrito:", index);
    main.innerHTML = `
    <div class="caja-individual">
        <div id="image">
            <img class="productos" src="${imagenes[aumento]}">
            <button class="adelante"><span class="material-symbols-outlined">arrow_forward_ios</span></button>
            <button class="atras"><span class="material-symbols-outlined">arrow_back_ios</span></button>
        </div>
        <div class="producto-detalles2">
           <div class="info">
                <div class="descripciones">
                    <h2 class="title" >${pro.titulo}- ${pro.id}</h2>
                    <hr>
                    <p class="uno-uno">PRECIO</p>
                    <p class="uno">${resultado}</p><p class="cop">COP</p>
                    <hr>
                    <p class="dos">${pro.info}</p>
                </div>
                
                <div class="cantidades">
                    <p>CANTIDAD:</p>
                    <button class="mas">+</button>
                    <p class="ca">${mas}</p>
                    <button class="menos">-</button>
                </div>
           </div>
           <div class="botones">
            
           </div>
        </div>
    </div>
    <div class="formulario">
        <h2>DATOS DE TRANSACCION</h2>
        <form id="form">
            <div class="campo">
                <label for="nombre">Nombre:</label>
                <input type="text" id="nombre" name="nombre" required>
            </div>
            <div class="campo">
                <label for="apellido">Apellido:</label>
                <input type="text" id="apellido" name="apellido" required>
            </div>
            <div class="campo">
                <label for="celular">Celular:</label>
                <input type="tel" id="celular" name="celular" required>
            </div>
            <div class="campo">
                <label for="correo">Correo:</label>
                <input type="email" id="correo" name="correo" required>
            </div>
            <div class="campo">
                <label for="direccion">Dirección:</label>
                <input type="text" id="direccion" name="direccion" required>
            </div>
            <div class="campo">
                <label for="ciudad">Ciudad:</label>
                <input type="text" id="ciudad" name="ciudad" required>
            </div>
            <div class="campo">
                <label for="pais">País:</label>
                <input type="text" id="pais" name="pais" required>
            </div>
            <div class="campo">
                <label for="pais">tallas: ${pro.tallaInicial}- ${pro.tallaFinal}</label>
                <input type="text" id="tallaform" name="tallaform" required>
            </div>
            <div class="campo">
            <label for="pais"  class="id">Productos: ID - ${pro.id} </label>
                <div class="des-imagenes"></div>
                <input type="text" id="colorForm" name="color" placeholder="Coloca el numero que le corresponda al producto que quieres junto con el ID" required>
            </div>
            <div class="campo">
                <p class="men"></p>
                <input id="env" type="submit" value="Enviar">
            </div>
        </form>
   </div>

   
  `;

    const botonmas = document.querySelectorAll(".mas");
    botonmas.forEach((btn) => {
        btn.addEventListener("click", e => {
            mas++;
            if (mas > pro.numerodecantidades) {
                mas = pro.numerodecantidades;
            }
            document.querySelector(".ca").textContent = mas;
            updatePrecio(); // Llamar a la función para actualizar el precio
        });
    });
    
    const botonmenos = document.querySelectorAll(".menos");
    botonmenos.forEach((btn) => {
        btn.addEventListener("click", e => {
            mas--;
            if (mas < 1) {
                mas = 1;
            }
            document.querySelector(".ca").textContent = mas;
            updatePrecio(); // Llamar a la función para actualizar el precio
        });
    });
    
    const adelante = document.querySelectorAll(".adelante");
    adelante.forEach((ade) => {
        ade.addEventListener("click", e => {
            aumento++;
            if (aumento >= imagenes.length) {
                aumento = 0;
            }
            document.querySelectorAll(".productos").forEach(r => {
                r.src = imagenes[aumento];
            });
            updatePrecio();
        });
    });

    const atras = document.querySelectorAll(".atras");
    atras.forEach((at) => {
        at.addEventListener("click", (e) => {
            aumento--;
            if (aumento < 0) {
                aumento = imagenes.length - 1;
            }
            document.querySelectorAll(".productos").forEach((pro) => {
                pro.src = imagenes[aumento];
            });
            updatePrecio();
        });
    });
    let preciopParams = pro.precio;

    function updatePrecio() {
        const precioUnitario = parseFloat(pro.precio);
        const cantidad = parseFloat(document.querySelector(".ca").textContent);
        const precioTotal = precioUnitario * cantidad;
        let numero1 = precioTotal
        const numeroString1 = numero1.toString();
        let resultado1 = "";
        let contador1 = 0;
    
        for (let i = numeroString1.length - 1; i >= 0; i--) {
            resultado1 = numeroString1[i] + resultado1;
            contador1++;
            if (contador1 % 3 === 0 && i !== 0) {
              resultado1 = "." + resultado1;
            }
            console.log(resultado)
        }
    
        
        document.querySelector(".uno").textContent = resultado1;
        data.amount = precioTotal; // Actualiza el precio en el objeto data
        
    }

   

 
    var handler = ePayco.checkout.configure({
        key: 'd9bb50a26f7e056ab82328afbe42c474',
        test: false // Cambiar a false en producción
    });
    
    // Verificar si el token está configurado correctamente
    if (!handler) {
        console.error("Error: El token no está configurado correctamente. Verifica la configuración del token.");
    } else {
        var data = {
            // Parámetros de la compra (obligatorios)
            name: pro.id,
            description: pro.info,
            currency: "cop",
            amount: pro.precio,
            tax_base: "4000",
            tax: "500",
            tax_ico: "500",
            country: "co",
            lang: "en",
            acepted : "/compra.html",
            rejected: "/comprafallida.html",

    
            external: "false",
            methodsDisable: [ "PSE","SP","CASH"]
            // Opciones de pago
        };
        // Token configurado correctamente, continuar con la lógica del programa
        // ...
    }
    
    // Agregar manejo de errores al enviar datos a la API



    

    
    // Llamar a la función enviarDatosAPI para enviar datos a la API
    document.querySelectorAll(".botones").forEach((contenedor) => {
        const botonPago = document.createElement("button");
        botonPago.classList.add("pagosepay")
        botonPago.textContent = "Pagar con ePayco";
        botonPago.addEventListener("click", function() {
           
            handler.open(data);
        });
        contenedor.appendChild(botonPago);
    });


    document.querySelectorAll("#form").forEach((form) => {
        form.addEventListener("submit", async e => {

     
            e.preventDefault();
            let nombre = document.querySelector("#nombre").value;
            let apellido = document.querySelector("#apellido").value;
            let celular = document.querySelector("#celular").value; // Corrección: Captura el valor del campo celular
            let correo = document.querySelector("#correo").value;
            let direccion = document.querySelector("#direccion").value;
            let ciudad = document.querySelector("#ciudad").value;
            let pais = document.querySelector("#pais").value;
            let colorFomr = document.querySelector("#colorForm").value
            let tallaform = document.querySelector("#tallaform").value
            




            console.log(nombre, apellido, celular, correo, direccion, ciudad, pais);
            try {
                if (nombre === "" || apellido === "" || celular === "" || correo === "" || direccion === "" || ciudad === "" || pais === "") { // Corrección: Validar todos los campos
                    document.querySelector(".men").textContent = "TIENES QUE LLENAR TODOS LOS CAMPOS";
                    setTimeout(() => {
                        document.querySelector(".men").textContent = ""; // Limpiar el mensaje de error después de 2 segundos
                    }, 2000);
                    document.querySelector("#env").style.backgroundColor = "red";
                    setTimeout(() => {
                        document.querySelector("#env").style.backgroundColor = ""; // Limpiar el color de fondo del botón después de 2 segundos
                    }, 2000);
                } else {
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-type": "application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombre: nombre,
                            apellido: apellido,
                            celular: celular,
                            direccion: direccion,
                            ciudad: ciudad,
                            pais: pais,
                            talla: tallaform,
                            color : colorFomr
                            
                        })
                    };
        
                    let res = await fetch("https://sheet.best/api/sheets/feb0395a-eaa2-4952-aa49-40ae089d8067", options);
        
                    if (res.status >= 200 && res.status < 300) {
                        document.querySelector("#env").style.backgroundColor = "blue";
                        setTimeout(() => {
                            document.querySelector("#env").style.backgroundColor = ""; // Limpiar el color de fondo después de 2 segundos
                        }, 2000);
                        // Limpiar los campos después de enviar el formulario
                        document.querySelector("#nombre").value = "";
                        document.querySelector("#apellido").value = "";
                        document.querySelector("#celular").value = "";
                        document.querySelector("#correo").value = "";
                        document.querySelector("#direccion").value = "";
                        document.querySelector("#ciudad").value = "";
                        document.querySelector("#pais").value = "";
                        document.querySelector("#colorForm").value = "";
                        document.querySelector("#tallaform").value = "";
            
                    } else {
                        throw { status: res.status, statusText: res.statusText };
                    }
                }
            } catch (err) {
                // Manejar errores durante la creación
                let message = err.statusText || "Ocurrió un error";
                document.querySelector(".men").insertAdjacentHTML("afterend", `<p><b>Error ${err.status}: ${message}</b></p>`);
            }
        

          
        
           
        })
    })

    const caja = document.querySelector(".des-imagenes")

        


    let jsonimagenes = pro.imagen 
    jsonimagenes.forEach((im ,i)=> {
        const div1 = document.createElement("div")
        div1.classList.add("caja-imagenes")
        div1.innerHTML =  ` 
            <img src="${im}">
            <p>${i}</p>
        
        `
        caja.appendChild(div1)
            
    })
    
    
    
        
 



    

    
    

   
   

}



