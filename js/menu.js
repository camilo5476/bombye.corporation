const openMenu = document.querySelector("#open-menu");
const closeMenu = document.querySelector("#close-menu");
const aside = document.querySelector("aside");

openMenu.addEventListener("click", () => {
    aside.classList.add("aside-visible");
})

closeMenu.addEventListener("click", () => {
    aside.classList.remove("aside-visible");
})

const menu2 = document.querySelector(".rop")
document.querySelector("#menu34").addEventListener("click", e => {
    menu2.classList.toggle("categorias32")
    menu2.classList.toggle("rop")
    
    
})


let carruselesWidth = document.body.offsetWidth

if(carruselesWidth < 1500){
    menu2.classList.remove("rop")
    menu2.classList.remove("categorias32")
    menu2.classList.add("ds")
    document.querySelector("#menu34").style.display = "none"
}