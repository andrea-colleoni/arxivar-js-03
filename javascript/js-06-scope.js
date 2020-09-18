'use strict';

var persona1 = {
    nome: 'Mario',
    cognome: 'Rossi',
    citta: 'Bergamo',
    nomeCompleto: function() {
        return `${this.nome} ${this.cognome}`;
    },
}
var persona2 = {
    nome: 'Anna',
    cognome: 'Verdi',
}

persona2.nomeCompleto = persona1.nomeCompleto;

// la variabile con dichiarazione implicita (senza var) viene dichiarata implicitamente 
// sempre nello scopo Global

var a = 10;
var b = 30;
// c = 50; // è impedita (va in errore) in modalità strict 
// => strict impedisce la dichiarazione implicita delle variabili

// backtick => ALT + 96
var nomeCompleto = function(nome, cognome) {
    var b = 20;
    console.log(window.a, b, window.b);
    return `${nome} ${cognome}`;
}

console.log(persona1, persona2);
console.log(nomeCompleto(persona1.nome, persona1.cognome));
console.log(persona1.nomeCompleto());
console.log(persona2.nomeCompleto());
