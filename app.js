const bombas = [
    {
        serial: "71005423152",
        id: "852a22s1d54841d1a51245ad152",
        modelo: "V3340F362G-2",
        descricao: "Bomba Perkins",
        imagem: "img/bombas/bomba-perkins.png"
    }
];

const campoSerial = document.getElementById("serial");
const botaoFinalizar = document.getElementById("btn-finalizar");
const areaImagem = document.getElementById("imagem-bomba");
const campoModelo = document.getElementById("modelo");
const campoId = document.getElementById("bomba-id");
const campoDescricao = document.getElementById("descricao");
const fotoBomba = document.getElementById("foto-bomba");
const mensagemImagem = document.getElementById("mensagem-imagem");
const tabelaPassos = document.getElementById("tabela-passos");


botaoFinalizar.addEventListener("click", function () {

    const serialDigitado = campoSerial.value.trim();

    if (serialDigitado === "") {

        fotoBomba.hidden = true;
        mensagemImagem.hidden = false;

        mensagemImagem.textContent = "Digite ou leia um serial.";

        areaImagem.classList.remove("status-normal", "status-erro");
        areaImagem.classList.add("status-aviso");

        campoSerial.focus();
        return;

}

    const bombaEncontrada = bombas.find(function (bomba) {
        return bomba.serial === serialDigitado;
    });

    if (bombaEncontrada) {

    campoModelo.value = bombaEncontrada.modelo;
    campoId.value = bombaEncontrada.id;
    campoDescricao.value = bombaEncontrada.descricao;

    fotoBomba.src = bombaEncontrada.imagem;
    fotoBomba.hidden = false;
    mensagemImagem.hidden = true;

    areaImagem.classList.remove("status-erro", "status-aviso");
    areaImagem.classList.add("status-normal");

    }else {

    campoModelo.value = "";
    campoId.value = "";
    campoDescricao.value = "";

    fotoBomba.src = "";
    fotoBomba.hidden = true;

    mensagemImagem.hidden = false;
    mensagemImagem.textContent = "Serial não encontrado!";

    areaImagem.classList.remove("status-normal", "status-aviso");
    areaImagem.classList.add("status-erro");
}
const passos = [
    {
        numero: 10,
        descricao: "Montagem da bomba no dispositivo",
        especificacao: "Montar bomba corretamente",
        metodo: "Manual",
        imagem: "img/passos/passo-10.png"
    },
    {
        numero: 20,
        descricao: "Montagem da conexão de retorno",
        especificacao: "Montar conjunto corretamente",
        metodo: "Manual",
        imagem: "img/passos/passo-20.png"
    },
    {
        numero: 30,
        descricao: "Torquear conexão de retorno",
        especificacao: "Especificação de teste",
        metodo: "Apertadeira Eletrônica",
        imagem: "img/passos/passo-30.png"
    },
    {
        numero: 40,
        descricao: "Montar janela de inspeção",
        especificacao: "Montagem correta",
        metodo: "Manual",
        imagem: "img/passos/passo-40.png"
    }
];
let passoAtual = 0;
let temporizadorPassos;
function mostrarPasso(indice) {

    const passo = passos[indice];

    fotoBomba.src = passo.imagem;
    fotoBomba.hidden = false;

    mensagemImagem.hidden = true;
}
function iniciarPassosAutomaticos() {

    // Evita criar dois temporizadores ao ler outro serial
    clearInterval(temporizadorPassos);

    passoAtual = 0;

    // Mostra imediatamente o passo 10
    mostrarPasso(passoAtual);

    temporizadorPassos = setInterval(function () {

        passoAtual++;

        if (passoAtual < passos.length) {

            mostrarPasso(passoAtual);

        } else {

            clearInterval(temporizadorPassos);

            console.log("Todos os passos foram concluídos.");
        }

    }, 10000);
}
function carregarTabelaPassos() {

    const linhas = tabelaPassos.querySelectorAll("tr");

    linhas.forEach(function (linha, indice) {

        const passo = passos[indice];
        const colunas = linha.querySelectorAll("td");

        colunas[0].textContent = passo.numero;
        colunas[1].textContent = passo.descricao;
        colunas[2].textContent = passo.especificacao;
        colunas[3].textContent = passo.metodo;
    });
}
if (bombaEncontrada) {

    campoModelo.value = bombaEncontrada.modelo;
    campoId.value = bombaEncontrada.id;
    campoDescricao.value = bombaEncontrada.descricao;

   carregarTabelaPassos();
iniciarPassosAutomaticos();

    areaImagem.classList.remove("status-erro", "status-aviso");
    areaImagem.classList.add("status-normal");
}

});