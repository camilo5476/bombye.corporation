
const datos1 = localStorage.getItem("pagos")
const datos = JSON.parse(datos1)

const root = document.querySelector(".root_double")

root.innerHTML =    `
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
                    <div class="campo">
                        <p class="men"></p>
                        <input id="env" type="submit" value="Enviar">
                    </div>
                </form>
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
    
                let res = await fetch("https://accused-linda-jhoa4564.koyeb.app/guardarDatos", options);
    
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
if (!handler) {
    console.error("Error: El token no está configurado correctamente. Verifica la configuración del token.");
} else {
    var data = {
        // Parámetros de la compra (obligatorios)
        name: datos.id,
        description: datos.info,
        currency: "cop",
        amount: datos.precio,
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



const epayw = document.querySelectorAll("#epayuu")
epayw.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        handler.open(data)
        console.log("111111111111111111111")
    })
})

