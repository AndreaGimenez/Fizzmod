/*hacer una etiqueta <a> en HTML
agarrarla con jsasignarle un evento click
el callback del click....

*/

var a = document.getElementById("ancora");

a.addEventListener("click", e => {
    e.stopPropagation()
    var nuevo_div = document.createElement("div")
    var parr = document.createElement("p");
    parr.innerHTML = "esta seguro que quiere abandonar la pagina?"
    nuevo_div.appendChild(parr)
    var btn_aceptar = document.createElement("button")
    btn_aceptar.innerText = "ACEPTAR"
    var btn_cancelar = document.createAttribute("button")
    btn_cancelar.innerText = "CANCELAR"
    nuevo_div.appendChild(btn_aceptar)
    nuevo_div.appendChild(btn_cancelar)
    document.body.appendChild(nuevo_div)
})



