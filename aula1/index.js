console.log('olá, mundo!')

var cliente = "jonatas"

console.log(`cliente: ${cliente}`)

var valProduto = 100
var valDesconto = 37

var calc = require("./modules/calcDesconto")

var fim = calc(valProduto, valDesconto)

console.log(`o valor final é de: ${fim} reais`)