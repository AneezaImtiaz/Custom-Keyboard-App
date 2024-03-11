import React, { useState, useRef } from 'react';
import { SafeAreaView, TextInput, TouchableWithoutFeedback } from 'react-native';
import { CustomKeyboard, TextInputField } from '../components';
import styles from './HomeScreenScreenStyles';

const HomeScreen: React.FC = () => {
  const [text, setText] = useState<string>('');
  const [caretPosition, setCaretPosition] = useState<number>(0);
  const [isCapsLockOn, setIsCapsLockOn] = useState<boolean>(true);
  const [isKeyboardVisible, setKeyboardVisible] = useState<boolean>(false);
  const inputRef: React.RefObject<TextInput> = useRef<TextInput>(null);

  const handleKeyPress = (key: string): void => {
    let newText = text;
    let newCaretPosition = caretPosition;

    if (key === 'capslock')
      return setIsCapsLockOn(!isCapsLockOn);
    else if (key === 'return')
      return inputRef?.current?.blur();
    else if (key === 'clear')
      return setText('');
    // Delete the character before the caret position, considering the caret is not at the beginning 
    else if (key === 'delete') {
      if (newText?.length > 0 && caretPosition > 0) {
        newText = newText?.slice(0, newCaretPosition - 1) + newText?.slice(newCaretPosition);
        newCaretPosition -= 1;
      } else return;
    } else if (key === 'space') {
      newText = newText?.slice(0, newCaretPosition) + ' ' + newText?.slice(newCaretPosition);
      newCaretPosition += 1;
    } else {
      // Insert the character at the caret position, considering the Caps Lock state
      const charToInsert = isCapsLockOn ? key?.toUpperCase() : key?.toLowerCase();
      newText = newText?.slice(0, newCaretPosition) + charToInsert + newText?.slice(newCaretPosition);
      newCaretPosition += 1;
    }

    setText(newText);
    setCaretPosition(newCaretPosition);
  };

  const handleFocus = (): void => setKeyboardVisible(true);
  const handleBlur = (): void => setKeyboardVisible(false);

  return (
    <TouchableWithoutFeedback onPress={() => inputRef?.current?.blur()}>
      <SafeAreaView style={styles.container}>
        <TextInputField
          showSoftInputOnFocus={false} // Prevent the soft keyboard from showing
          inputRef={inputRef}
          onChangeCaretPosition={setCaretPosition}
          text={text}
          onChangeText={setText}
          onFocus={handleFocus}
          onBlur={handleBlur} />
        {isKeyboardVisible && <CustomKeyboard onKeyPress={handleKeyPress} capsLockState={isCapsLockOn} />}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default HomeScreen;
