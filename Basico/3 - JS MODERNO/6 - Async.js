//Pegando o código do Exercicio 5
let teste = ()=>{
    return new Promise(function(resolve, rejeita){

        setTimeout(()=>{
            const erro = true;

            if(erro){
                rejeita("Errow...");
            }else{
                resolve("Pode ser retornado um obj nesse caso");
            }
        },5000)
    }); 
};

async function teste2(){
    await teste().then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    });
    //Vai ter um delay de 5 segundos por causa do setTime
    console.log("Essa linha só será executada dps do teste");
}

teste2();