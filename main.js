const header = document.querySelector('.header')

window.addEventListener("scroll", () => {
    
    header.classList.toggle('scroll', window.scrollY>7)
});

const menuHambuguer = document.querySelector("#menu-hamburguer")

menuHambuguer.addEventListener("click", () => {

    let nav = document.querySelector(".navMobile")
    menuHambuguer.classList.toggle("hamburguerActive")
    nav.classList.toggle('active')
})

function fecharNav(){
    let nav = document.querySelector(".navMobile")
    let input = document.querySelector("#menu-hamburguer")
    input.checked = false;
    nav.classList.toggle('active')
}

const fecharMobile = ()=>{
    let nav = document.querySelector(".navMobile")
    nav.classList.remove('active')
    removerFundo()
}

function scrollToContact() {
    var contatoSection = document.getElementById("contato");
    var offset = 175; // Ajuste este valor para definir a quantidade de deslocamento para cima
    var topPos = contatoSection.offsetTop - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
}