var a = 10;
console.log(a);

console.log(window.document);
console.log(document);

document.write('ciao');
document.write('<h2>Titolo di grandezza 2</h2>');

// DOM: Document Object Model => window.document
// BOM: Browser Object Model => window, navigator, storage, location

var h1 = document.getElementsByTagName('h1')[0].innerText = 'Modificato!!!';

// setTimeout(() => document.getElementById('it3').className = 'grande', 2000);

var idInter = setInterval(() => {
    var it3 = document.getElementById('it3');
    if (it3.className === 'grande') {
        it3.className = '';
    } else {
        it3.className = 'grande';
    }
}, 2000);
