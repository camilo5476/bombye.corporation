export function renderHome (main){
    main.innerHTML = ""
    const home =  ` 
            <section class="cuerpo">
                <div class="img-fondo">
                    <div class="eslogan">
                        <p>donde la moda se encuentra con la personalización en cada paso!</p>
                    </div>
                </div>
            </section>
            <section class="cuerpo-two">
                <div class="categorias-fg">
                    <div class="item">
                        <div class="parrafo">
                            <h2 class="fg">Zapatillas</h2>
                            <p class="fd">Las zapatillas personalizadas son una opción única y distintiva para aquellos que buscan expresar su estilo y personalidad a través del calzado. La zapatillas cuentan con diferentes estilos y temas para que abarquen los muchos gustos que tienen nuestros visitantes, unos posibles ejemplos son las zapatillas personalizadas con tematica de anime</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="img-anime"></div>
                        <div class="des-ani">
                            <p>Zapatillas</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="categorias2">
                <h2>Categorias</h2>
                <div class="caja">
                    <div class="mujeres"><h3>Zapatillas</h3></div>
                    <div class="btns">
                        <span class="material-symbols-outlined" id="at">chevron_left</span>
                        <span class="material-symbols-outlined" id="ade">navigate_next</span>
                </div>
                    <div class="categoria-g" id="men">
                        <div class="carruseles">
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                            <section class="slider-section">
                                <img class="img5" src="" alt="">
                            </section>
                    </div>  
                    </div>
                </div>
                
                <div class="caja2">
                    <div class="mujeres"><h3>Electronicos</h3></div>
                    <div class="lll">
                        <span class="material-symbols-outlined" id="A">chevron_left</span>
                        <span class="material-symbols-outlined" id="a">navigate_next</span>
                </div>
                    <div class="categoria-g" id="woman">
                        <div class="carruseles2">
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                            <section class="slider-section2">
                                <img class="muj" src="" alt="">
                            </section>
                    </div>
                    </div>
                </div>

            </section>
            <section class="ultimo">
                <footer>
                    <div class="container">
                        <div class="footer-content">
                            <div class="footer-section about">
                                <h2>Sobre Nosotros</h2>
                                <p>Somos una tienda en línea especializada en la venta de zapatillas personalizadas.</p>
                                <ul class="socials">
                                    <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                                    <li><a href="#"><i class="fab fa-twitter"></i></a></li>
                                    <li><a href="#"><i class="fab fa-instagram"></i></a></li>
                                </ul>
                            </div>
                            <div class="politicas">
                                <h2>Privacidad Del Usuario</h2>
                                <p> Nos comprometemos a proteger la privacidad de nuestros clientes. La información personal proporcionada durante el proceso de compra será utilizada únicamente para completar la transacción y no será compartida con terceros sin consentimiento previo.</p>
                            </div>
                            <div class="politicas">
                                <h2>Seguridad de Pagos</h2>
                                <p>Utilizamos la API de epayco para procesar los pagos de forma segura. La información de pago se transmite a través de conexiones cifradas y no almacenamos los detalles de la tarjeta de crédito en nuestros servidores.</p>
                            </div>
                            <div class="politicas">
                                <h2>Envío y Entrega</h2>
                                <p>Nos esforzamos por garantizar que los productos sean enviados en un plazo razonable y que lleguen en perfectas condiciones. Sin embargo, no nos hacemos responsables de los retrasos en la entrega debido a circunstancias fuera de nuestro control.</p>
                            </div>
                        </div>
                    </div>
                </footer>
                
            </section>




    `
    

    return main.innerHTML = home

}
    