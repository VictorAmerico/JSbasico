function Pessoa(){
    this.nome = "Victor";
    this.idade = 20;
    
    this.printNome = ()=>{
        console.log(this.nome);
    }
}

var p = new Pessoa();

p.printNome();

//Teste com parâmetro

function Pessoa2(){
    this.printNome = (nome)=>{
        this.nome = nome;
        console.log(this.nome);
    }
}

var p2 = new Pessoa2();

p2.printNome("Outro nome");


//Mais Clean 

function Animal(nome){
    this.nome = nome;
}

let animal = new Animal("Cachorro");

let animal2 = new Animal("Gato");

console.log(animal.nome);
console.log(animal2.nome);

