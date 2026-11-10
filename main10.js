// uma loja online oferece frete gratis se o valorComprafor maior que 100 reais ou se o cliente for membroVIP. no entanto, o frete gratis nao se aplica se a entrega for para zonaRural. crie o programa que retorne se o cliente tem direito ao frete gratis 

var valorCompra = 50 
var membroVIP = true
var zonaRural = true

if((valorCompra >= 100 || membroVIP == true) && zonaRural == false){
    console.log("tem direito ao FRETE GRÁTIS!!")
}else{
    console.log("não tem direito ao FRETE GRÁTIS!!")
}
console.log(!zonaRural == false )