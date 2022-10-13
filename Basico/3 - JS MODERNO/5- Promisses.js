//O que é Promisse?

//r: Retorna uma função que eu criei caso esteja certo ou ela será rejeitada


//Mude erro para 'false' para ver outra resposta
let teste = ()=>{
    return new Promise(function(resolve, rejeita){

        const erro = true;

        if(erro){
            rejeita("Errow...");
        }else{
            resolve("Pode ser retornado um obj nesse caso");
        }


    });
        
};


teste().then(function(res){
    console.log(res);
}).catch(function(err){
    console.log(err);
});