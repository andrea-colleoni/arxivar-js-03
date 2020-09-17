$(() => {
    $('#btnLogin').on('click', () => {
        localStorage.removeItem('user');
        $.ajax({
            url: 'login.json',
            method: 'get',
        })
        .done((users) => {
            console.log('mi sono arrivati gli utenti');
            var user = users.find(
                u => u.username === $('#inputEmail').val() && u.password === $('#inputPassword').val()
            );
            if(user) {
                localStorage.setItem('user', JSON.stringify(user));
                $('#login-panel').hide('fast');
                $('#panel-welcome').show('fast');
                $.ajax({
                    url: 'dati.json',
                    method: 'get',
                })
                .done((dati) => {
                    dati.forEach((riga) => {
                        var str = `<li>${riga.via} (${riga.provincia})</li>`;
                        $('#lista').append(str);
                    });
                    $('#tblDati').DataTable({
                        data: dati,
                        columns: [
                            {
                                title: 'Via',
                                data: 'via'
                            },{
                                title: 'N° civico',
                                data: 'civico'
                            },{
                                title: 'CAP',
                                data: 'cap'
                            },{
                                title: 'Provincia',
                                data: 'provincia'
                            }
                        ]
                    });
                    console.log('finito di generare la tabella');
                });
                console.log('finito ajax dei dati');
            } else {
                //console.warn('accesso negato');
                $('.alert').alert();
            }
        });
        console.log('finito il click del login');
    });
    console.log('finito il caricamento')
});