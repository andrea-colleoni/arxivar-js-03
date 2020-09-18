localStorage.setItem('test', 'ciao io sono Andrea');

var http = new XMLHttpRequest();
http.onreadystatechange = () => {
    console.log(http.responseText);
    // deserializzo il testo JSON che arriva dal web server
    var o = JSON.parse(http.responseText);
    localStorage.setItem('risposta', JSON.stringify(o));
}
http.open('GET', 'dati.json');
var a = {
    nome: 'Mario'
}
http.send(JSON.stringify(a));


var btn = document.getElementById('btnStorage');
btn.addEventListener('click', () => {
    console.log(localStorage.getItem('risposta'));
    console.log(JSON.parse(localStorage.getItem('risposta')));
});

var btn = document.getElementById('btnCookie');
btn.addEventListener('click', () => {
    console.log(document.cookie);
    document.cookie = 'test=cookie; expires=Thu, 17 Sep 2020 23:59:59 UTC';
});

