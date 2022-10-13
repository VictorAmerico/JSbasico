//Mais recomendado
class Animal{
    constructor(nome){
        this.nome = nome
    }
    printNome(){
        return this.nome;
    }
}


//Herda todas as funções da classe animal
class Cachorro extends Animal{
    constructor(nome){
        //Invocando o construtor da classe pai
        super(nome);
        this.raca;
    }

    printRaca(raca){
        return this.raca = raca;
    }


}

//Assim pode ser usado a class "cachorro" e a class "animal"
Catioro = new Cachorro("Cooker");

console.log(Catioro.nome);
console.log(Catioro.printRaca("teste"));
 