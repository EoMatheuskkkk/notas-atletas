let atletas = [
  {
    nome: "Cesar Abascal",
    notas: [10, 9.34, 8.42, 10, 7.88]
  },
  {
    nome: "Fernando Puntel",
    notas: [8, 10, 10, 7, 9.33]
  },
  {
    nome: "Daiane Jelinsky",
    notas: [7, 10, 9.5, 9.5, 8]
  },
  {
    nome: "Bruno Castro",
    notas: [10, 10, 10, 9, 9.5]
  }
];

function calcularMedia(atletas) {
  atletas.forEach(atleta => {
    // Ordena as notas em ordem crescente
    let notasOrdenadas = atleta.notas.sort((a, b) => a - b);
    
    // Remove a maior e a menor nota
    let notasValidas = notasOrdenadas.slice(1, -1);
    
    // Calcula a média
    let soma = notasValidas.reduce((acc, nota) => acc + nota, 0);
    let media = soma / notasValidas.length;
    
    // Exibe o resultado no console
    console.log(`Atleta: ${atleta.nome}`);
    console.log(`Notas Obtidas: ${atleta.notas.join(',')}`);
    console.log(`Média Válida: ${media.toFixed(9)}`);
    console.log(''); // Linha em branco entre os resultados
  });
}

calcularMedia(atletas);