/*hacer una etiqueta <a> en HTML
agarrarla con jsasignarle un evento click
el callback del click....

*/

var a = document.getElementById("ancora");
var parr = document.createElement("p");
var nuevo_div = document.createElement("div")
var btn_aceptar = document.createElement("button")
var btn_cancelar = document.createElement("button")

a.addEventListener("click", e => {
    e.preventDefault()
    parr.innerHTML = "esta seguro que quiere abandonar la pagina?"
    nuevo_div.appendChild(parr)
    btn_aceptar.innerText = "ACEPTAR"
    btn_cancelar.innerText = "CANCELAR"
    nuevo_div.appendChild(btn_aceptar)
    nuevo_div.appendChild(btn_cancelar)
    document.body.appendChild(nuevo_div)
    btn_aceptar.addEventListener("click", e => {
    })
})

btn_cancelar.addEventListener("click", e => {
  document.body.removeChild(nuevo_div)
})
btn_aceptar.addEventListener("click", e => {
  console.dir(a)
})
