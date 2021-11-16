function paragrafo() {
  var paragrafo = document.createElement('p')
  document.querySelector('body').append(paragrafo)
}
paragrafo()
function abrir() {
  document.querySelector('p').innerText = 'Estamos abertos!'
}
function fechar() {
  document.querySelector('p').innerHTML = 'Estamos fechados!'
}
