import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {ButtonColor} from '../enums';
import {styles} from '../theme';

interface ButtonCalcProps {
  label: string;
  color?: ButtonColor;
  isWide?: boolean;
  action: (digit: string) => void;
}

export const ButtonCalc = ({
  label,
  color = ButtonColor.DARK_GRAY,
  isWide = false,
  action,
}: ButtonCalcProps) => {
  return (
    <Pressable
      onPress={() => action(label)}
      style={({pressed}) => [{opacity: pressed ? 0.5 : 1}]}>
      <View
        style={[
          styles.button,
          {backgroundColor: color, width: isWide ? 180 : 80},
        ]}>
        <Text
          style={{
            ...styles.buttonText,
            color: color === ButtonColor.GRAY ? 'black' : 'white',
          }}>
          {label}
        </Text>
      </View>
    </Pressable>
  );
};
