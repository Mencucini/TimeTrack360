/*
Nome: Matheus Leandro Mencucini
Data: 29 de outubro de 2023
Descrição: Lógica para calcular o ano de
nascimento com base no nome, idade e mês de
nascimento.
*/
function calcularAnoDeNascimento() {
    let nome = document.getElementById("name").value;
    let idade = parseInt(document.getElementById("age").value);
    let mesDeNascimento = parseInt(document.getElementById("month").value);

    let dataAtual = new Date();
    let mesAtual = dataAtual.getMonth() + 1;
    let anoAtual = dataAtual.getFullYear();

    let anoCalculado;
    if (mesDeNascimento > mesAtual) {
        anoCalculado = anoAtual - idade - 1;
    } else {
        anoCalculado = anoAtual - idade;
    }

    let dataNascimento = new Date(anoCalculado, mesDeNascimento - 1, 1);
    let diffEmMilissegundos = dataAtual - dataNascimento;
    let diasVividos = Math.floor(diffEmMilissegundos / (1000 * 60 * 60 * 24));
    let horasVividas = Math.floor(diffEmMilissegundos / (1000 * 60 * 60));

    document.getElementById("resultado").innerHTML = `Olá ${nome}, você nasceu no ano ${anoCalculado}. Você viveu aproximadamente ${diasVividos} dias e ${horasVividas} horas.`;
}