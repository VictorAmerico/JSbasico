//Função Básica

function teste (){
    //Algo a ser executado quando chamado

    console.log("Teste")
}

teste();

//Função com parâmetro

function teste2(nome,idade){
    console.log("Meu nome é "+nome+" e eu tenho " + idade + " anos");

}

teste2("Victor",20)

// Para retomar algo

function pegarNome(){
    return "Victor"
}

var nome = pegarNome();

console.log(nome);


// Com condição

function pegarNome2(par){
    if(par == 1){
        return "Victor";
    }else{
        return "Outro nome";
    }
}

var nome2 = pegarNome2(1);
var nome3 = pegarNome2(2);
console.log("par == 1: " + nome2 + "  ||  par == ?:" + nome3);


// Função na váriavel

let func = () => {
    console.log("Função na variavel")
}

func();

