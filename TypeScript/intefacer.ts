interface Pessoa {
    idade : number;
}


function imprimirIdade(pessoa: Pessoa ) {

    console.log(pessoa.idade)
}

let joaoMarcos = {nome : 'Joao marcos', idade : 22};

imprimirIdade(joaoMarcos);