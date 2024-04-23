import { renderHome } from "./home.js";
import { slider } from "./slider2.js";


let productos = [];

let productosEnCarrito = [];
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const contenedorProductos = document.createElement("div");
contenedorProductos.id = "contenedor-productos"
contenedorProductos.classList.add("contenedor-productos")
const numerito = document.querySelector("#numerito");
const main = document.querySelector("#bor");
localStorage.setItem("arreglo", "")


fetch("./js/productos.json")
    .then(response => response.json())
    .then(data => {
        productos = data;
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
        let numero1 = producto.precio
        const numeroString1 = numero1.toString();
        let resultado1 = "";
        let contador1 = 0;
    
        for (let i = numeroString1.length - 1; i >= 0; i--) {
            resultado1 = numeroString1[i] + resultado1;
            contador1++;
            if (contador1 % 3 === 0 && i !== 0) {
              resultado1 = "." + resultado1;
            }
    
        }

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
            <div id="qw" >
                <img class="producto-imagen" src="${producto.imagen[0]}" alt="${producto.titulo}">
                <div class="producto-detalles">
                    <h3 class="producto-titulo">${producto.titulo}</h3>
                    <p class="producto-precio">$${resultado1}</p>
                    <button class="producto-agregar" id="qw2"  data-index="${i}">Ver el producto</button>
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
   
    const qw = document.querySelectorAll("#qw2");
    qw.forEach(bo => {
        bo.addEventListener("click", drawkp);
        
    });
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

    }



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
                    <h2 class="title" >${pro.titulo}</h2>
                    <hr>
                    <div class ="precios12">
                        <p class="uno" id="pr">${resultado}</p>   
                        <p> COP</p>
                    </div>
                    <p class="dos">${pro.info}</p>
                    <div class="botones">
                        <p class="mensaje1"></p>

                        <button class="agregar2" id="${pro.id}">Agregar al carrito</button>
                    </div>
                </div>
                          
           </div>
           <div class="carac">
                <div class="cantidades">
                    <button class="mas">+</button>
                    <p class="ca">${mas}</p>
                    <button class="menos">-</button>
                    <div>
                        <select id="lista" name="lista"></select>   
                    </div>
                </div>
                <div class="colores-tipos">
                </div>
                <div id="colores_gl">
                </div>
     

        </div>
     
    </div>
    <div class="dds">
    </div>
 
  `;

    let imagentttttt = ""; 
    let colors = "";
    let colores = pro.tipos_colores;
    let contenedor = document.getElementById("colores_gl");
  
    colores.forEach((color, i) => {
        let div = document.createElement("div"); // Crea un nuevo elemento div
        div.classList.add("color-lo"); 
        div.dataset.co = color ;
        div.style.backgroundColor = color; 
        contenedor.appendChild(div);
    });
 
    document.querySelectorAll(".color-lo").forEach((es) => {
        es.addEventListener("click", e => {
            colors = e.target.dataset.co;
        });
    });
    
    


    const coloresTiposd = document.querySelector(".colores-tipos");
    let imagenestipos2 = pro.imagenes2;
    
    imagenestipos2.forEach(ele => {
        let ds = `
            <div class="imagen_tip" id="imagen_tip">
                <img class="imagen_tip45" data-info="${pro.id}" data-estilo="${ele.diseno}" src="${ele.imagen}">
            </div>
        `;
    
        coloresTiposd.innerHTML += ds; // Agregar el contenido HTML al contenedor
    });
    let img = ""
    document.querySelectorAll(".imagen_tip45").forEach(ele => {
        ele.addEventListener("click" , e => {
            img = e.target.src
            datosC[0].imagenelegida = e.target.src
            imagentttttt = e.target.dataset.estilo
        })
    })
    
    
    const select = document.getElementById('lista');

    let talla2222222 = pro.tallas
 

    // Itera sobre el array de opciones y crea un elemento <option> por cada una
    talla2222222.forEach(opcion => {
        const optionElement = document.createElement('option'); 

        if(talla2222222.length === 0){
            optionElement.textContent = "No Hay Tallas";
            optionElement.value = "No Hay tallas"

        }else{
            optionElement.value = opcion.value; // Establece el valor de la opción
            optionElement.textContent = opcion.text; // Establece el texto visible de la opción
            select.appendChild(optionElement); 
        }



    });
    let id = 0; // Declarar la variable id fuera del event listener





    const botonmas = document.querySelectorAll(".mas");
    botonmas.forEach((btn) => {
        btn.addEventListener("click", e => {
            mas++;
            if (mas > pro.numerodecantidades) {
                mas = pro.numerodecantidades;
            }
            document.querySelector(".ca").textContent = mas 
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
            document.querySelector(".ca").textContent = mas 
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

        }
    
        
        document.querySelector(".uno").textContent = resultado1;


        
    }
    

    const botonesAgregar = document.querySelectorAll(".agregar2");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    });

        

    
    async function agregarAlCarrito(e) {
        e.stopPropagation();
        if (colors === "" || img === "" || select.value === "") {
            document.querySelector(".mensaje1").textContent = "TIENES QUE LLENAR TODOS LOS REQUISITOS";
            setTimeout(() => {
                document.querySelector(".mensaje1").textContent = "";
            }, 3000);
        } else {
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
        
            let datos40 = {
                id: pro.id,
                title: pro.titulo,
                info: pro.info,
                precio: pro.precio,
                color: colors,
                talla: select.value,
                imagen: img ,
                cantidad: mas
                
            }
            productosEnCarrito.push(datos40)
            actualizarNumerito();
            localStorage.setItem("productos-en-carrito", JSON.stringify(productosEnCarrito));
         
            
        }
       
    }



   

 

    // Agregar manejo de errores al enviar datos a la API



    localStorage.setItem("pagos", "")
    
// Seleccionar todos los elementos con la clase "botones" y agregar un listener de eventos a cada uno
    document.querySelectorAll(".botones").forEach((contenedor) => {
        // Crear un botón de pago con ePayco
        const botonPago = document.createElement("button");
        botonPago.classList.add("pagosepay");
        botonPago.textContent = "Pagar con ePayco";

        // Agregar un listener de eventos al botón de pago
        botonPago.addEventListener("click", async function() {
            // Calcular el precio total del producto
            const precioUnitario = parseFloat(pro.precio);
            const cantidad = parseFloat(document.querySelector(".ca").textContent);
            const precioTotal = precioUnitario * cantidad;
            pro.precio = precioTotal;
            let datosd = {
                    id: pro.id,
                    title: pro.titulo,
                    info: pro.info,
                    precio: pro.precio,
                    color: colors,
                    talla: select.value,
                    imagen: img 
            }
            
            localStorage.setItem("pagos", JSON.stringify(datosd));


            // Verificar los requisitos antes de realizar la acción
            if ( colors === "" || img === "" || select.value === "") {
                document.querySelector(".mensaje1").textContent = "TIENES QUE LLENAR TODOS LOS REQUISITOS";
                setTimeout(() => {
                    document.querySelector(".mensaje1").textContent = "";
                }, 3000);
            } else {
                // Realizar una solicitud POST con los datos necesarios
                const options = {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json; charset=utf-8"
                    },
                    body: JSON.stringify({
                        id: pro.id === pro.id ? id++ : id,
                        id2: pro.id,
                        titulo : pro.titulo,
                        categoria: pro.categoria.nombre,
                        tallas: select.value,
                        cantidad: mas,
                        colores: colors,
                        disenos: imagentttttt,
                        elegido: img
                    })
                };
                
                try {
                    const res = await fetch("http://localhost:200/tallasydemas", options);
                    if (res.status === 200) {
                        window.location.href = "../pagos.html"
    

                    } else {
                        console.log("Algo falló en el post");
                    }
                    // Redirigir a la página de pagos

                } catch(err) {
                    console.log(err);
                }
            }
        });

        // Agregar el botón de pago al contenedor
        contenedor.appendChild(botonPago);
    });



}



