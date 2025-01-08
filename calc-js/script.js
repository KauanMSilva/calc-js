
const visor = document.getElementById('visor');
const botoes = document.querySelectorAll('button');


let operacao = '';
let valor1 = '';
let valor2 = '';


function atualizarVisor(valor) {
  visor.value += valor;
}


function limparVisor() {
  visor.value = '';
  operacao = '';
  valor1 = '';
  valor2 = '';
}


function calcular() {
  if (operacao === '+') {
    return parseFloat(valor1) + parseFloat(valor2);
  } else if (operacao === '-') {
    return parseFloat(valor1) - parseFloat(valor2);
  } else if (operacao === '*') {
    return parseFloat(valor1) * parseFloat(valor2);
  } else if (operacao === '/') {
    return parseFloat(valor1) / parseFloat(valor2);
  }
}


botoes.forEach((botao) => {
  botao.addEventListener('click', () => {
    switch ((link unavailable)) {
      case 'limpar':
        limparVisor();
        break;
      case 'igual':
        valor2 = visor.value;
        const resultado = calcular();
        visor.value = resultado.toString();
        break;
      case 'zero':
      case 'um':
      case 'dois':
      case 'tres':
      case 'quatro':
      case 'cinco':
      case 'seis':
      case 'sete':
      case 'oito':
      case 'nove':
        atualizarVisor(botao.textContent);
        break;
      case 'ponto':
        atualizarVisor('.');
        break;
      case 'soma':
        operacao = '+';
        valor1 = visor.value;
        visor.value = '';
        break;
      case 'subtracao':
        operacao = '-';
        valor1 = visor.value;
        visor.value = '';
        break;
      case 'multiplicacao':
        operacao = '*';
        valor1 = visor.value;
        visor.value = '';
        break;
      case 'divisao':
        operacao = '/';
        valor1 = visor.value;
        visor.value = '';
        break;
    }
  });
});
