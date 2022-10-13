function Pessoa(){
    //This.nome é uma variavel
    this.nome = "Victor";
    
}

var pessoa = new Pessoa();

console.log(pessoa.nome)

//Para mudar o nome

pessoa.nome = "Outro nome";
console.log(pessoa.nome);