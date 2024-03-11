import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { HomeScreen } from '../src/screens';
import { TYPE_HERE } from '../src/utils/Constants';

describe('HomeScreen', () => {
    it('updates text state when a key is pressed', () => {
        const { getByTestId, getByDisplayValue, getByPlaceholderText } = render(<HomeScreen />);

        // focus textInput to visible keyboard
        fireEvent(getByPlaceholderText(TYPE_HERE), 'focus');

        const keyToPress = 'A';
        const keyButton = getByTestId(`key-${keyToPress}`);
        fireEvent.press(keyButton);
        expect(getByDisplayValue(keyToPress)).toBeTruthy();
    });

    it('toggles caps lock state when the capslock key is pressed', () => {
        const { getByTestId, getByPlaceholderText, getByText } = render(<HomeScreen />);

        // focus textInput to visible keyboard
        fireEvent(getByPlaceholderText(TYPE_HERE), 'focus'); const capsLockKey = getByTestId('key-CAPSLOCK');

        fireEvent.press(capsLockKey);
        expect(getByText('a')).toBeTruthy(); // checks lower case alphabets visible on toggle capslock
    });
});