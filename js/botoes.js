btnInicio.addEventListener('click', ()=> {
    telaInicial.style.display = "block";
    telaLogin.style.display = "none";
});

btnIniciar.addEventListener('click', ()=> {
    telaInicial.style.display = "none";
    telaLogin.style.display = "block";
});

btnAcessar.addEventListener('click', function permitirAcesso() {
    if(usuarios.value == "Bruno" && senha.value == 1010) {
        telaLogin.style.display = "none";
        telaMesas.style.display = "block"
    }

    else if(usuarios.value == "Mônica" && senha.value == 2020) {
        telaLogin.style.display = "none";
        telaMesas.style.display = "block"
    }

    else if(usuarios.value == "Lucas" && senha.value == 3030) {
        telaLogin.style.display = "none";
        telaMesas.style.display = "block"
    }

    else {
        alert("Usuário Não Reconhecido");
    }
});

btnSair.addEventListener('click', ()=> {
    telaLogin.style.display = "block";
    telaMesas.style.display = "none"
});

btnMapa.addEventListener('click', ()=> {
    telaMesas.style.display = "none";
    telaMapas.style.display = "flex";
});

btnVoltar.addEventListener('click', ()=> {
    telaMapas.style.display = "none";
    telaMesas.style.display = "block";
});

btnConfirmarMesa.addEventListener('click', ()=> {
    telaMesas.style.display = "none";
    telaMesaSelecionada.style.display = "block";
});

btnVoltarMesa.addEventListener('click', ()=> {
    telaMesas.style.display = "block";
    telaMesaSelecionada.style.display = "none";
});
