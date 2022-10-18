const abas = document.querySelectorAll(".abas")

abas.forEach(aba => {
    aba.addEventListener("click", function () {

        if (aba.classList.contains("selecionado")) {
            return;
        }

        selecionarAba(aba)
        mostrarInformacoesDaAba(aba)
    })
})

function selecionarAba(aba) {
    const abaselecionada = document.querySelector(".aba.selecionado");
    abaselecionada.classList.remove("selecionado");

    aba.classList.add("selecionado");
}

function mostrarInformacoesDaAba(aba) {
    const informacaoselecionada = document.querySelector(".informacao.selecionado");
    informacaoselecionada.classList.remove("selecionado");
    
    const iddoelementodeinformacoesdaaba = `informacao-${aba.id}`

    const informacaoasermostrada = document.getElementById(iddoelementodeinformacoesdaaba)
    informacaoasermostrada.classList.add("selecionado");
}







