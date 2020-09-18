// oggetti

var oggetto1 = new Object();
// Object è un prototipo

var oggetto2 = {}

console.log('ogg 1', oggetto1);
console.log('ogg 2', oggetto2);

oggetto2.nome = 'Andrea';
oggetto2.cognome = 'Colleoni';
console.log('ogg 2', oggetto2);

var oggetto3 = {
    via: 'Via Roma',
    civico: 1,
    cap: 24100,
    provincia: 'BG'
}

console.log('ogg 3', oggetto3);
oggetto2.indirizzo = oggetto3;
console.log('ogg 2', oggetto2);

// array
var array1 = new Array();
console.log("arr1", array1);

var array2 = [];
console.log("arr2", array1);

array1[0] = 'pippo';
array1[1] = 10;
array1[5] = true;
array1[7] = {}
array1[8] = oggetto2;
console.log("arr1", array1);
console.log(array1[8].indirizzo.cap);
console.log(array1[7].indirizzo.cap);
console.log('finito.');