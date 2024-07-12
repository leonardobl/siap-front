export function geraValorMonetario() {
  // Gera um valor aleatório entre 300 e 2000 e converte para número com duas casas decimais
  let valorAleatorio = parseFloat(
    (Math.random() * (2000 - 300) + 300).toFixed(2)
  );

  let valorFormatado = new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(valorAleatorio);

  return valorFormatado;
}
