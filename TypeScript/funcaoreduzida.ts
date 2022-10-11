const preco = [10, 10 , 2, 30 , 30 ,30];

const precoEmReais = preco.map( function(preco) {
    return 'R$ ' + preco + ',00';
} );
console.log(precoEmReais);


const precoComArrowFunction = preco.map( (preco) => {
    return 'R$ ' + preco + ',00';
} );
console.log(precoComArrowFunction);


const precoComArrowFunctionReduzido = preco.map( preco => 'R$ ' + preco + ',00');
console.log(precoComArrowFunctionReduzido);

