// if

var a = 4;

if (a > 5) {
    console.log('a è maggiore di 5!');
} else if (a < 20) {
    console.log('a è minore di 20!');
} else {
    console.log('a NON è maggiore di 5!');
}

console.log('finito if.')

// switch

var voto = 6;

switch (voto) {
    default:
        console.log('voto non valido');
        break;    
    case 1:
        console.log('scarso');
        break;
    case 2:
        console.log('insufficiente');
        break;
    case 3:
        console.log('sufficiente');
        break;
    case 4:
        console.log('buono');
        break;
    case 5:
        console.log('ottimo');
        break;
}

console.log('finito switch.');

// for

for (i = 0; i < 10; i++) {
    console.log(i);
}

// while 

k = 0;
while (k < 10) {
    console.log(k);
    k++;
}