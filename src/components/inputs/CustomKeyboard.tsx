import React, { useState } from 'react';
import { TouchableOpacity, Text, TouchableWithoutFeedback, View, StyleProp, TextStyle, ViewStyle } from 'react-native';
import styles from './CustomKeyboardStyles';

interface KeyProps {
  label: string;
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  keyStyle?: StyleProp<TextStyle>;
}

interface CustomKeyboardProps {
  capsLockState?: boolean;
  onKeyPress: (key: string) => void;
};

const CustomKeyboard: React.FC<CustomKeyboardProps> = ({
  onKeyPress,
  capsLockState = true,
}) => {

  const [mode, setMode] = useState<'ABC' | '123'>('ABC');
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(capsLockState);

  const onToggleMode = () => {
    setMode((prevMode) => (prevMode === 'ABC' ? '123' : 'ABC'));
  };

  const alphabets: KeyProps[] = [
    { label: 'Q' }, { label: 'W' }, { label: 'E' }, { label: 'R' }, { label: 'T' }, { label: 'Z' }, { label: 'U' },
    { label: 'I' }, { label: 'O' }, { label: 'Ü' }, { label: 'P' }, { label: 'A' }, { label: 'S' }, { label: 'D' },
    { label: 'F' }, { label: 'G' }, { label: 'H' }, { label: 'J' }, { label: 'Ö' }, { label: 'Ä' }, { label: 'L' },
    { label: 'K' }, { label: 'X' }, { label: 'C' }, { label: 'B' }, { label: 'N' }, { label: 'M' }];

  const numerics: KeyProps[] = [
    { label: '1' }, { label: '2' }, { label: '3' }, { label: '4' }, { label: '5' }, { label: '6' }, { label: '7' },
    { label: '8' }, { label: '9' }, { label: '0' }, { label: '/' }, { label: ':' }, { label: ';' }, { label: '(' },
    { label: ')' }, { label: '&' }, { label: '@' }, { label: '+' }, { label: '_' }, { label: '?' }, { label: '*' },
    { label: '{' }, { label: '}' }, { label: '=' }, { label: '%' }, { label: '"' }, { label: '$' }]

  const keys: KeyProps[] = mode === 'ABC' ? alphabets : numerics;
  const modeLabel: string = mode === 'ABC' ? '123' : 'ABC';

  const renderKey = (key: KeyProps) => {
    const label = key?.label.length === 1 ? (!isCapsLockOn ? key?.label.toLowerCase() : key?.label.toUpperCase()) : key?.label
    return (
      <TouchableOpacity testID={`key-${label}`} key={key?.label} style={[styles.key, key?.style]} onPress={() => key?.onPress ? key?.onPress() : onKeyPress(key.label)}>
        <Text style={[styles.keyText, key?.keyStyle]}>{label}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <TouchableWithoutFeedback >
      <View style={styles.container}>
        <View style={styles.keyboard}>
          {keys.map((key: KeyProps) => renderKey(key))}
        </View>
        <View style={styles.keyboard}>
          {renderKey({ label: "CAPSLOCK", style: styles.toggleKey, keyStyle: { textDecorationLine: isCapsLockOn ? 'underline' : 'none' }, onPress: () => { setIsCapsLockOn(!isCapsLockOn); onKeyPress('capslock') } })}
          {renderKey({ label: "CLEAR", style: styles.toggleKey, onPress: () =>  onKeyPress('clear') })}
          {renderKey({ label: "DEL", style: styles.toggleKey, onPress: () => onKeyPress('delete') })}
        </View>
        <View style={styles.keyboard}>
          {renderKey({ label: modeLabel, style: styles.toggleKey, onPress: onToggleMode })}
          {renderKey({ label: "space", style: [styles.toggleKey, { flexGrow: 1 }], onPress: () => onKeyPress('space') })}
          {renderKey({ label: "return", style: styles.toggleKey, onPress: () => onKeyPress('return') })}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomKeyboard;
