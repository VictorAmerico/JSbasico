const arr = ['Victor','Douglas','Pedro'];

console.log(arr[0]);

//Caso queira armazenar cada item desse ar

const[a,b,c] = arr;

console.log(a);
//ISSO É O DESTRUCT MISQUECE


//AGORA DE UMA MANEIRA MAIS DIFICIL

const arr2 = ['Victor','Douglas','Pedro','Camaleão','Gangnam Styke'];

const[d,e,...f] = arr2;

//Ele imprime tudo o que vem dps MISQUECE

console.log(f);

//Para imprimir só um dos items
console.log(f[0]); 