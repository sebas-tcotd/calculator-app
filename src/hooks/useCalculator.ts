import {useRef, useState} from 'react';
import {Operators} from '../enums';

export function useCalculator() {
  const [previousNumber, setPreviousNumber] = useState('0');
  const [number, setNumber] = useState('0');
  const lastOperation = useRef<Operators>();

  const clearNumber = () => {
    lastOperation.current = Operators.NONE;

    if (previousNumber !== '0' && number === '0') {
      setPreviousNumber('0');
      return;
    }

    setNumber('0');
  };

  const concatNumber = (digit: string) => {
    if (number.length > 12) {
      return;
    }

    if (digit === '.' && number.includes('.')) {
      return;
    }

    // Si el número no comienza con '0' o '-0', simplemente añade digit
    if (!number.startsWith('0') && !number.startsWith('-0')) {
      setNumber(number + digit);
      return;
    }

    // Punto decimal
    if (digit === '.') {
      setNumber(number + digit);
      return;
    }

    // Evaluar si es otro cero, y hay un punto
    if (digit === '0' && number.includes('.')) {
      setNumber(number + digit);
      return;
    }

    // Evaluar si es diferente de cero y no tiene un punto
    if (digit !== '0' && !number.includes('.')) {
      setNumber(digit);
      return;
    }

    // Evitar 0000.0
    if (digit === '0' && !number.includes('.')) {
      setNumber(number);
      return;
    }

    setNumber(number + digit);
  };

  const deleteDigit = () => {
    if (number.length === 1) {
      setNumber('0');
      return;
    }

    setNumber(number.slice(0, -1));
  };

  const toggleNumberSign = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const changeNumberByPrevious = () => {
    const newNumber = number.endsWith('.') ? number.slice(0, -1) : number;
    setPreviousNumber(newNumber);
    setNumber('0');
  };

  const divide = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.DIVIDE;
  };

  const multiply = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.MULTIPLY;
  };

  const substract = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.SUBTRACT;
  };

  const sum = () => {
    changeNumberByPrevious();
    lastOperation.current = Operators.SUM;
  };

  const calculate = () => {
    const number1 = Number(number);
    const number2 = Number(previousNumber);

    switch (lastOperation.current) {
      case Operators.SUM:
        setNumber(`${number1 + number2}`);
        break;
      case Operators.SUBTRACT:
        setNumber(`${number2 - number1}`);
        break;
      case Operators.MULTIPLY:
        setNumber(`${number1 * number2}`);
        break;
      case Operators.DIVIDE:
        setNumber(`${number2 / number1}`);
        break;
    }

    setPreviousNumber('0');
    lastOperation.current = Operators.NONE;
  };

  return {
    number,
    previousNumber,
    clearNumber,
    concatNumber,
    deleteDigit,
    toggleNumberSign,
    sum,
    substract,
    multiply,
    divide,
    calculate,
  };
}
