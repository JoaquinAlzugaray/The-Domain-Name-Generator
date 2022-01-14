//console.log('hola');

let pronoun = ['the','our'];
let adj = ['great', 'big' ];
let noun = ['jogger','racoon'];


let aux = pronoun.flatMap(d => adj.map(v => d + v))
console.log(aux);

let aux2 = aux.flatMap(d => noun.map(v => d + v))
console.log(aux2);