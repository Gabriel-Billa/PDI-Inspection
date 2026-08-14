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

});