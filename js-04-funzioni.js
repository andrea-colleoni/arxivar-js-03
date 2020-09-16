funzione();

// definizione di una funzione
function funzione() {
    console.log('sono una funzione!');
}

// chiamata di funzione
funzione();

// guardo la funzione, senza chiamarla (non ci sono le parentesi tonde)
console.log(funzione);

// f1();

var f1 = function() {
    console.log('sono in f1');
}

console.log(f1);
f1();

var f2 = function(a, b) {
    console.log('f2', a, b);
}
f2(10, 'ciao');
f2(true);
f2();
f2(10, 20, 30, 40, 50);
// non esiste overload delle funzioni

var a = 10;
var f3 = function(arg) {
    console.log(arg, typeof arg);
    if (typeof arg === 'function') {
        arg();
    }
}
f3(a);
f3(undefined);
f3(f2);
var obj = {}
f3(obj);
// passo direttamente l'oggetto alla funzione
f3({});
f3([]);
f3({ prop: 'valore'});
// posso passare una funzione anonima a una funzione senza doverla definire prima
f3(function() {
    console.log('funzione anonima passata come argomento');
});
// ho definito una closure
// esiste una notazione sintattica che permette di esprimere una funzione in modo più sintetico => lambda
f3(() => console.log('funzione anonima passata come argomento'));
// lambda permette di scrivere funzioni anonime più velocemente
var f4 = () => console.log('f4');
var f5 = (a) => {
    console.log('f5...', a);
    console.log('f5...');
}
f5(10);