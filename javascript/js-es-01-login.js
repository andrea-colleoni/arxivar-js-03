var btnTest = document.getElementById('btnTest');
btnTest.addEventListener('click', () => {
    show('welcome-panel');
    show('error-panel');
    hide('login-panel');
});

var btnLogin = document.getElementById('btnLogin');
btnLogin.addEventListener('click', () => {
    localStorage.removeItem('user');
    var http = new XMLHttpRequest();
    var txtUser = document.getElementById('txtUsername');
    var txtPass = document.getElementById('txtPassword');
    http.onreadystatechange = () => {
        if (http.readyState === 4 && http.status === 200) {
            var users = JSON.parse(http.responseText);
            var user = users.find(u => u.username === txtUser.value && u.password === txtPass.value);
            if (!user) {
                show('error-panel');
                txtUser.value = '';
                txtPass.value = '';
            } else {
                hide('login-panel');
                hide('error-panel');
                show('welcome-panel');
                localStorage.setItem('user', JSON.stringify(user));
            }
        }
    }    
    http.open('GET', 'login.json');
    http.send();
});


var show = (panelClass) => {
    var pnl = document.getElementsByClassName(panelClass);
    for(i = 0; i < pnl.length; i++) {
        var clsList = pnl[i].classList;
        if (clsList.contains('hidden')) {
            clsList.remove('hidden');
        }
    }
}

var hide = (panelClass) => {
    var pnl = document.getElementsByClassName(panelClass);
    for(i = 0; i < pnl.length; i++) {
        var clsList = pnl[i].classList;
        if (!clsList.contains('hidden')) {
            clsList.add('hidden');
        }
    }
}