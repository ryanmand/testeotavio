function adicionarLinha() {
  // Captura dos valores do formulário
  var nome = document.getElementById("nome").value;
  var matricula = document.getElementById("matricula").value;
  var nota1 = parseFloat(document.getElementById("nota1").value);
  var nota2 = parseFloat(document.getElementById("nota2").value);
  var media = (nota1 + nota2) / 2;
  var situacao = media >= 5 ? "Aprovado" : "Reprovado";

  // Criação da nova linha na tabela
  var tabela = document.getElementById("tabela").getElementsByTagName('tbody')[0];
  var novaLinha = tabela.insertRow(tabela.rows.length);
  var celulaNome = novaLinha.insertCell(0);
  var celulaMatricula = novaLinha.insertCell(1);
  var celulaNota1 = novaLinha.insertCell(2);
  var celulaNota2 = novaLinha.insertCell(3);
  var celulaMedia = novaLinha.insertCell(4);
  var celulaSituacao = novaLinha.insertCell(5);

  // Preenchimento das células da nova linha
  celulaNome.innerHTML = nome;
  celulaMatricula.innerHTML = matricula;
  celulaNota1.innerHTML = nota1;
  celulaNota2.innerHTML = nota2;
  celulaMedia.innerHTML = media.toFixed(1);
  celulaSituacao.innerHTML = situacao;
}
