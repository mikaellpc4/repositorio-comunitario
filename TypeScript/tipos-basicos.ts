//Boolean
let estaPago: boolean = true;

//Number
let idade : number = 20;
let valor : number = 29.00;

//String
let nome : string = 'helio';

//template String
console.log(`Olá meu nome é ${nome} e tenho ${idade} anos`);

//Formator Tradicional 
let formatoTradidcional = 'Olá, meu nome' + nome; //etc...

//Arrays
let notas: number[] = [1,2,3,4,5];

//tuple
let alunosNota: [string, number] = ['joao', 10];
console.log(alunosNota[0]);
console.log(alunosNota[1]);

let alunosNotaAndIdade: [string, number, number] = ['joao', 10, 16];
console.log(alunosNotaAndIdade[0]);
console.log(alunosNotaAndIdade[1]);
console.log(alunosNotaAndIdade[2]);

//enum
enum Cor {Verde, Amarelo, Azul, Branco};
let corFundo : Cor = Cor.Verde;

//Any
let qualqValor: any = 4;
qualqValor = 'agora é um string';
qualqValor = true;
//Biblioteca de terceiros / não racebemos oq recebemos. assim ir testando oq vem.


// void
function alerta(): void {
    //alert('operaçao não permitida)
}

// null e undefind -> declrar variaves nao faz muito sentido
let u : undefined = undefined;
let n : null = null;
//null e undefind são subtipos das outros tipos