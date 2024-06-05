const formNotas = document.getElementById('formNotas');
const tabelaResultados = document.getElementById('tabelaResultados').getElementsByTagName('tbody')[0];

formNotas.addEventListener('submit', (event) => {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value;
    const matricula = document.getElementById('matricula').value;
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);

    const media = (nota1 + nota2) / 2;
    const situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

    const novaLinha = tabelaResultados.insertRow();
    novaLinha.insertCell().textContent = nome;
    novaLinha.insertCell().textContent = matricula;
    novaLinha.insertCell().textContent = nota1;
    novaLinha.insertCell().textContent = nota2;
    novaLinha.insertCell().textContent = media.toFixed(2); // Formata a média com 2 casas decimais
    novaLinha.insertCell().textContent = situacao;

    formNotas.reset(); // Limpa o formulário após o envio
});
