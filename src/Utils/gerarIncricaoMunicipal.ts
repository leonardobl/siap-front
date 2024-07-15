export function gerarInscricaoMunicipal(): string {
  const randomDigit = () => Math.floor(Math.random() * 10).toString();

  // Gerando os primeiros 10 dígitos aleatórios
  let inscricao = "";
  for (let i = 0; i < 10; i++) {
    inscricao += randomDigit();
  }

  // Cálculo do dígito verificador
  let soma = 0;
  let peso = 2;

  for (let i = 9; i >= 0; i--) {
    soma += parseInt(inscricao[i]) * peso;
    peso++;
    if (peso > 10) {
      peso = 2;
    }
  }

  const resto = soma % 11;
  let digitoVerificador = resto < 2 ? 0 : 11 - resto;

  return inscricao + digitoVerificador.toString();
}
