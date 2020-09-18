// quando il documento è pronto (DOM interamente caricato)
$(() => {
  // var h1 = document.getElementsByTagName('h1')[0];
  // h1.innerText = 'Modificato';

  $("#secondoParagrafo").text("Modificato");

  $(".p1").css("color", "red");

  //$('h1:nth-of-type(3)').hide(1000);
  $("h1").hide(1000);

  setTimeout(() => $("h1:nth-of-type(3)").show(500), 3000);

  $("#btnTest").on("click", () => {
    console.log("test");
    $("h1").toggle("fast");
    ajax();
  });
});

var ajax = () => {
    $.ajax({
        method: 'get',
        url: 'dati.json'
    })
    .done((dati) => {
        console.log(dati);
        $('#exampleModal').modal('show');
    })
    .fail((err) => {
        console.error('errore', err);
    });
};
