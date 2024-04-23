
let datos1 = localStorage.getItem("pagos")
let datos = JSON.parse(datos1)



let numero = datos.precio
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

const root = document.querySelector(".padre")

root.innerHTML =    `
<div class="root_double">
    <div class="formulario">
        <h2>DATOS DE TRANSACCIÓN</h2>
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
                <p class="men"></p>
                <input id="env" type="submit" value="Enviar">
            </div>
        </form>
    </div>
</div>
<div class="normal">
    <div class="info">
        <h2 class="precio-data">PRECIO: ${resultado} COP</h2> 
        <p class="info-data">${datos.info}</p>
        <div class="talla-info">
            <h4> TALLA ESCOGIDA : </h4>
            <p> ${datos.talla} </p>
        </div>
        <div class="talla-info">
            <h4>  COLOR ESCOGIDO : </h4>
            <p> ${datos.color} </p>
        </div>
        <div class="cajaimg">
            <div>
                <h3>MÉTODO DE TRANSACCIÓN DE PAGOS 100% SEGURA</h3>
            </div>
            <div>
                <p>Empresa reconocida en toda Latinoamérica y 100% segura y confiable</p> 
            </div>
            <div>
                <img class="imgpago" src="../images/pago/1.png">
            </div>
        </div>
    </div>
    <div class="pagosss">
        <img id="imgpagos" src="${datos.imagen}" alt="">
        <button id="epayuu">TERMINAR LA TRANSACCIÓN</button>
    </div>
</div>


`


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
                        correo : correo,
                        direccion: direccion,
                        ciudad: ciudad,
                        pais: pais,
                        talla: tallaform,
                        color : colorFomr
                        
                    })
                };
    
                let res = await fetch("https://serverpp-rwc9.onrender.com/guardarDatos", options);
    
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

    




var handler = ePayco.checkout.configure({
    key:  "d9bb50a26f7e056ab82328afbe42c474",
    test: true // Cambiar a false en producción
});

// Verificar si el token está configurado correctamente

    var data = {
        // Parámetros de la compra (obligatorios)
        name: datos.id,
        description: datos.info,
        currency: "cop",
        amount: datos.precio,
        country: "co",
        lang: "es",
        acepted : "/compra.html",
        rejected: "/comprafallida.html",


        external: "false",
        methodsDisable: [ "PSE","SP","CASH"]
        // Opciones de pago
    };
    document.querySelector("#epayuu").addEventListener("click", e => {
        console.log("Botón de ePayco clicado");
        handler.open(data);
    });
    


