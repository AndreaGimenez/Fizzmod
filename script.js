/*hacer una etiqueta <a> en HTML
agarrarla con jsasignarle un evento click
el callback del click....

*/

let a = document.getElementById("ancora");
let url = a.href

let parr = document.createElement("p");
parr.innerHTML = "esta seguro que quiere abandonar la pagina?"
let nuevo_div = document.createElement("div")
let btn_aceptar = document.createElement("button")
btn_aceptar.innerText = "ACEPTAR"
let btn_cancelar = document.createElement("button")
btn_cancelar.innerText = "CANCELAR"
let frgt = document.createDocumentFragment();

a.addEventListener("click", e => {
    e.preventDefault()
    crear_nuevo_div()
})

btn_cancelar.addEventListener("click", e => {
  document.body.removeChild(nuevo_div)
})
btn_aceptar.addEventListener("click", e => {
  window.location.href=url
})

const crear_nuevo_div = () => {
  frgt.appendChild(parr)
  frgt.appendChild(btn_aceptar)
  frgt.appendChild(btn_cancelar)
  nuevo_div.appendChild(frgt)
  document.body.appendChild(nuevo_div)
}
