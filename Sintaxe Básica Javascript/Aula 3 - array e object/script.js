// o que são arrray ou vetores

// como declarar um array
/* 
let array = ["string", 1, true]
console.log(array); */

// pode guardar varios tipos de dados

let array = ["string", 1 , true, ["array1"], ["array2"], ["array3"], ["array4"]];
/* console.log(array[3]); */

// foreach

/* array.forEach(function (item, index) {console.log(item, index)
    
}); */

// adiciona um item ao final do array

/* array.push([]);
console.log(array);
 */


// remove um item no final do array
/* array.pop();
console.log(array); */


// remove um item no inicio do array
/* array.shift();
console.log(array); */


// adiciona um item ao inicio do array
/* array.unshift(`novo item no inicio`);
console.log(array); */

// retorna o indicie de um item dento do array
/* console.log(array.indexOf(true)); */

// remove ou substitui um item por um indice
/* array.splice(0, 3);
console.log(array); */

//retorna uma parte de uma array ja existente

/* let novoArray = array.slice(0, 3);
console.log(novoArray); */

// Obejtos e Desestruturação

let object = {string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: {
objectInterno: 'objeto interno'}};

/* console.log(object.objectInterno);

var string = object.string;
console.log(string);

var arrayInterno = object.array;
console.log(arrayInterno); */

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);