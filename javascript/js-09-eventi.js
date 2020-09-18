var a = 10;
console.log(a);

var f = () => console.log('funzione!');

var btnAltro = document.getElementById('btnAltro');

btnAltro.addEventListener('click', (evento) => {
    console.log('button altro', this, evento);
});
btnAltro.addEventListener('mouseover', (evento) => {
    console.log('hey!', this, evento);
});
btnAltro.addEventListener('mouseout', (evento) => {
    console.log('bye!', this, evento);
});

var body = document.getElementsByTagName('body')[0];
body.addEventListener('keypress', (evento) => {
    console.log('tasto premuto', this, evento);
});
// btnAltro.style += 'display: none';