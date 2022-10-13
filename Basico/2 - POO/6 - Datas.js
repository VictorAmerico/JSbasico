
var data = new Date();
//Pega a data atual (mês)
console.log(data.getDate()) 

//Pega o dia que estamos na semana
console.log(data.getDay());

//Pega o ano
console.log(data.getFullYear());

//Agora vamos manipular miór
//Escrever no formato americano (m/d/a);
var date1 = new Date('10/20/2022');

var date2 = new Date('10/24/2022');

//Para ver a diferença das datas

var diferenca = date2.getDate() - date1.getDate();

console.log(diferenca);