class Fucionario {

    nome : string;
    salario : number;


    constructor(nome : string, salario : number) {
        this.nome = nome;
        this.salario = salario;
    }


    TaxaSalarial(taxa : number = 10) {
        let calculoTax = this.salario * taxa / 100;
        
        console.log(`taxa de salario: ${calculoTax} `)
    }
}

//Herança os atributos
class Secretario extends Fucionario {

}
let sarah = new Secretario('Sarah', 2000);
console.log(sarah.TaxaSalarial);


//SuperClass
class Executivo extends Fucionario {

    TaxaSalarial(taxa: number = 30) {
        let calculoTax = this.salario * taxa / 100;
        super.TaxaSalarial(taxa);
    }
}
