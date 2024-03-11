import React from 'react';
import { TouchableOpacity, TextInput, GestureResponderEvent } from 'react-native';
import { TYPE_HERE } from '../../utils/Constants';
import Responsive from '../../utils/Responsive';
import styles from './TextInputFieldStyles';

export type TextInputFieldProps = {
  text: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  onChangeCaretPosition?: (position: number) => void;
  showSoftInputOnFocus?: boolean;
  inputRef?: React.RefObject<TextInput>;
  onBlur?: () => void;
  onFocus?: () => void;
};

const TextInputField: React.FC<TextInputFieldProps> = ({
  text,
  onChangeText,
  placeholder = TYPE_HERE,
  onChangeCaretPosition,
  showSoftInputOnFocus = true,
  inputRef = null,
  onBlur = () => null,
  onFocus = () => null,
}) => {

  const setCaretPositionHandler = (newPosition: number) : void => {
    onChangeCaretPosition && onChangeCaretPosition(newPosition);
    inputRef?.current?.setNativeProps({ selection: { start: newPosition, end: newPosition } }); // Set selection will place the caret at the desired position
  };

  const handleTextPress = (e: GestureResponderEvent) : void => {
    const charWidth = Responsive.font(11); // With repect to the text size
    const tapPosition = e.nativeEvent.locationX;
    const position = Math.floor(tapPosition / charWidth); // Calculate which character in the text was tapped
    const newPosition = Math.max(0, Math.min(position, text.length)); // Ensure the caret position is within the bounds of the text length
    setCaretPositionHandler(newPosition);
  };

  return (
    <TouchableOpacity style={styles.displayArea} activeOpacity={1}
      onPress={(e) => {
        // Only call handleTextPress if onChangeCaretPosition is provided
        if (onChangeCaretPosition)
          handleTextPress(e);
      }}>
      <TextInput
        style={styles.displayText}
        value={text}
        selectTextOnFocus
        ref={inputRef}
        onChangeText={onChangeText}
        placeholder={placeholder}
        editable
        onFocus={onFocus}
        onBlur={onBlur}
        showSoftInputOnFocus={showSoftInputOnFocus} />
    </TouchableOpacity>
  );
};

export default TextInputField;
