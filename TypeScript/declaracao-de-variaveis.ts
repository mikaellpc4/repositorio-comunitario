
/*
- var é variavel global
- let por escopo 
- const é uma constante
*/

function jogo( time : boolean) {
    var nome = 'ronaldo';

    let estado;
    if (time) {
        estado = 'bahia';
    }

    console.log(nome + ' vão jogar ' + estado);
}

jogo(false);