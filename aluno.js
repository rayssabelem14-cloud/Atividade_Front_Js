const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para fazer perguntas
function perguntar(pergunta) {
    return new Promise((resolve) => {
        rl.question(pergunta, resolve);
    });
}

async function main() {

    // Entrada dos dados
    let nomeAluno = await perguntar("Digite o nome do aluno: ");

    let nota1 = parseFloat(
        await perguntar("Digite a nota da primeira avaliação: ")
    );

    let nota2 = parseFloat(
        await perguntar("Digite a nota da segunda avaliação: ")
    );

    // Constante da média mínima
    const mediaMinima = 7;

    // Cálculo da média
    let media = (nota1 + nota2) / 2;

    // Determinação da situação
    let situacao;
    let notaRecuperacao = null;

    if (media >= mediaMinima) {

        situacao = "APROVADO";

    } else if (media >= 5) {

        situacao = "RECUPERAÇÃO";

        notaRecuperacao = parseFloat(
            await perguntar("Digite a nota da recuperação: ")
        );

        if (notaRecuperacao >= 5) {
            situacao = "APROVADO";
        } else {
            situacao = "REPROVADO";
        }

    } else {

        situacao = "REPROVADO";
    }

    // Exibição dos resultados
    console.log("\n===== RELATÓRIO DO ALUNO =====");

    console.log("Nome do Aluno: " + nomeAluno);
    console.log("Nota 1: " + nota1);
    console.log("Nota 2: " + nota2);
    console.log("Média: " + media.toFixed(2));

    if (notaRecuperacao !== null) {
        console.log("Nota de Recuperação: " + notaRecuperacao);
    }

    console.log("Situação do Aluno: " + situacao);

    rl.close();
}

main();