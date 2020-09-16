var arr = [
    'Anna',
    'Andrea',
    'Mario',
    'Luigi',
    'Luca',
    'Maria',
    'Massimiliano',
    'Abbondio'
]

// approccio funzionale
arr.forEach((elemento) => console.log(elemento));

// approccio procedurale
for(i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// posso costruire una pipeline di funzioni in cui il risultato di ogni funzione è input della f() successiva
arr
    .filter((item) => item.indexOf('A') === 0)
    .sort()
    .forEach((item) => console.log(item));