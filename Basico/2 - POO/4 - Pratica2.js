function Pessoa(nome){
    this.nome = nome;
    this.printIdade = function(idade){
        console.log(idade);
    };
    this.returAnimal = (animal) =>{
        return animal;
    }
}


function Animal(){
    this.raca = "Cooker";
}

var pessoa = new Pessoa("Victor");

var animal = new Animal();

console.log(pessoa.nome);
console.log(pessoa.returAnimal(animal).raca);

animal.raca = "Bulldog";

console.log(pessoa.returAnimal(animal).raca);