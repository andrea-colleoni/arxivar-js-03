var http = new XMLHttpRequest();
http.onreadystatechange = () => {
    console.log(http.responseText);
    // deserializzo il testo JSON che arriva dal web server
    var o = JSON.parse(http.responseText);
    console.log(o);
}
http.open('GET', 'dati.json');
http.send();