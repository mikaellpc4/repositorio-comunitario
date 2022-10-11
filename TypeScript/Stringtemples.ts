const precoNovo = [10, 10 , 2, 30 , 30 ,30];

const acimaDeVinte = precoNovo
.filter(precoNovo => precoNovo > 20)
.map(preco => `R$ ${preco},00`);

console.log(acimaDeVinte);