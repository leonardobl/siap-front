export function gerarInscricaoEstadual(): string {
  const randomDigit = () => Math.floor(Math.random() * 10).toString();

  // Gerando os primeiros 8 dígitos aleatórios
  let inscricao = "";
  for (let i = 0; i < 8; i++) {
    inscricao += randomDigit();
  }

  // Cálculo do dígito verificador
  let peso = 1;
  let soma = 0;

  for (let i = 0; i < 8; i++) {
    soma += parseInt(inscricao[i]) * peso;
    peso++;
    if (peso === 2) {
      peso = 3;
    } else if (peso === 4) {
      peso = 5;
    } else if (peso === 6) {
      peso = 7;
    } else if (peso === 8) {
      peso = 10;
    } else if (peso === 11) {
      peso = 12;
    }
  }

  const resto = soma % 11;
  let digitoVerificador = resto < 2 ? 0 : 11 - resto;

  return inscricao + digitoVerificador.toString();
}
