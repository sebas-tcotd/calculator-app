import React from 'react';
import {Text, View} from 'react-native';
import {ButtonCalc} from '../components';
import {ButtonColor} from '../enums';
import {useCalculator} from '../hooks';
import {styles} from '../theme';

export const CalculatorScreen = () => {
  const {
    number,
    previousNumber,
    calculate,
    clearNumber,
    concatNumber,
    deleteDigit,
    divide,
    multiply,
    substract,
    sum,
    toggleNumberSign,
  } = useCalculator();

  return (
    <View style={styles.calcContainer}>
      {previousNumber !== '0' && (
        <Text style={styles.previousResult}>{previousNumber}</Text>
      )}

      <Text numberOfLines={1} adjustsFontSizeToFit style={styles.calcResult}>
        {number}
      </Text>

      <View style={styles.calcButtons}>
        {/* FIla de botones */}
        <View style={styles.buttonsRow}>
          <ButtonCalc label="C" color={ButtonColor.GRAY} action={clearNumber} />
          <ButtonCalc
            label="+/−"
            color={ButtonColor.GRAY}
            action={toggleNumberSign}
          />
          <ButtonCalc
            label="del"
            color={ButtonColor.GRAY}
            action={deleteDigit}
          />
          <ButtonCalc label="÷" color={ButtonColor.ORANGE} action={divide} />
        </View>

        {/* FIla de botones */}
        <View style={styles.buttonsRow}>
          <ButtonCalc label="7" action={concatNumber} />
          <ButtonCalc label="8" action={concatNumber} />
          <ButtonCalc label="9" action={concatNumber} />
          <ButtonCalc label="×" color={ButtonColor.ORANGE} action={multiply} />
        </View>

        {/* FIla de botones */}
        <View style={styles.buttonsRow}>
          <ButtonCalc label="4" action={concatNumber} />
          <ButtonCalc label="5" action={concatNumber} />
          <ButtonCalc label="6" action={concatNumber} />
          <ButtonCalc label="-" color={ButtonColor.ORANGE} action={substract} />
        </View>

        {/* FIla de botones */}
        <View style={styles.buttonsRow}>
          <ButtonCalc label="1" action={concatNumber} />
          <ButtonCalc label="2" action={concatNumber} />
          <ButtonCalc label="3" action={concatNumber} />
          <ButtonCalc label="+" color={ButtonColor.ORANGE} action={sum} />
        </View>

        {/* FIla de botones */}
        <View style={styles.buttonsRow}>
          <ButtonCalc label="0" isWide action={concatNumber} />
          <ButtonCalc label="." action={concatNumber} />
          <ButtonCalc label="=" color={ButtonColor.ORANGE} action={calculate} />
        </View>
      </View>
    </View>
  );
};
