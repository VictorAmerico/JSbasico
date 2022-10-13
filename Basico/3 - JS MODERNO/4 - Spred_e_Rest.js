//Spred

var nomes = [
    {
        nome:'João'
    },
    {
        nome:'Pipoca'
    }
]

const obj = [...nomes,{
  nome:'Victor'
}];

console.log(obj);


//Rest
//Permite interpretar um número infinito de argumentos
let func = (...numero)=>{
    console.log(numero);
}

func(1,2,3,4,5,6);