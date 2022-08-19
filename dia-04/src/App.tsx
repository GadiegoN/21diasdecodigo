import { useState } from "react";
import { CalculatorButton, CalculatorContainer, CalculatorContent } from "./styles/style";

export function App() {
  const [valorTela, setValorTela] = useState('');
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador1] = useState(0);
  const [operacao, setOperacao] = useState(false);

  const addDigitoTela = (d: any) => {
    if((d == '+' || d == '-' || d == '*' || d == '/') && operacao) {
      console.log("operador");
      setOperacao(false);
      setValorTela(resultado + d)
      return
    }

    if(operacao) {
      setValorTela(d);
      setOperacao(false);
      return
    }

    const valorDigitadoTela = valorTela + d;
    setValorTela(valorDigitadoTela);
  }

  const limparMemoria = () => {
    setOperacao(false);
    setValorTela('');
    setResultado(0);
    setAcumulador1(0);
  }

  const EscolherOperacao = (oper: string) => {
    if(oper == 'bs') {
      let vTela = valorTela;
      vTela = vTela.substring(0, (vTela.length - 1))
      setValorTela(vTela)
      setOperacao(false);
      return
    }

    try {
      const r = eval(valorTela);
      setAcumulador1(r);
      setResultado(r);
      setOperacao(true);
    } catch {
      setResultado(0)
    }
  }

  const Tela = (valor: string, res: number) => {
    return (
      <CalculatorContent>
        <span>{valor}</span>
        <span> = {res}</span>
      </CalculatorContent>
    )
  }

  const Button = (label: string, onClick: () => void) => {
    return(
      <button onClick={onClick}>{label}</button>
    )
  }

  return (
    <CalculatorContainer>
      <h3>Calculadora</h3>
      {Tela(valorTela, resultado)}
      <CalculatorButton>
        {Button('AC', limparMemoria)}
        {Button('(', () => addDigitoTela('('))}
        {Button(')', () => addDigitoTela(')'))}
        {Button('+', () => addDigitoTela('+'))}
      </CalculatorButton>
      <CalculatorButton>
        {Button('7', () => addDigitoTela('7'))}
        {Button('8', () => addDigitoTela('8'))}
        {Button('9', () => addDigitoTela('9'))}
        {Button('/', () => addDigitoTela('/'))}
      </CalculatorButton>
      <CalculatorButton>
        {Button('4', () => addDigitoTela('4'))}
        {Button('5', () => addDigitoTela('5'))}
        {Button('6', () => addDigitoTela('6'))}
        {Button('*', () => addDigitoTela('*'))}
      </CalculatorButton>
      <CalculatorButton>
        {Button('1', () => addDigitoTela('1'))}
        {Button('2', () => addDigitoTela('2'))}
        {Button('3', () => addDigitoTela('3'))}
        {Button('-', () => addDigitoTela('-'))}
      </CalculatorButton>
      <CalculatorButton>
        {Button('<-', () => EscolherOperacao('bs'))}
        {Button('0', () => addDigitoTela('0'))}
        {Button('.', () => addDigitoTela('.'))}
        {Button('=', () => EscolherOperacao('='))}
      </CalculatorButton>
    </CalculatorContainer>
  )
}
