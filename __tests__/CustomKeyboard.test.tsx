import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CustomKeyboard } from '../src/components';

describe('CustomKeyboard', () => {
    it('renders alphabet keys by default', () => {
        const { getByText } = render(<CustomKeyboard onKeyPress={() => { }} />);
        // Check 2 alphabet only for testing.
        expect(getByText('A')).toBeTruthy();
        expect(getByText('B')).toBeTruthy();
    });

    it('renders numeric keys when mode is toggled', () => {
        const { getByText } = render(<CustomKeyboard onKeyPress={() => { }} />);
        fireEvent.press(getByText('123'));
        // Check 2 number only for testing.
        expect(getByText('1')).toBeTruthy();
        expect(getByText('2')).toBeTruthy();
    });

    it('calls onKeyPress with the correct key label when a key is pressed', () => {
        const onKeyPressMock = jest.fn();
        const { getByText } = render(<CustomKeyboard onKeyPress={onKeyPressMock} />);
        const keyQ = getByText('Q');
        fireEvent.press(keyQ);
        expect(onKeyPressMock).toHaveBeenCalledWith('Q');
    });

    it('sends uppercase key label when caps lock is on', () => {
        const onKeyPressMock = jest.fn();
        const { getByText } = render(<CustomKeyboard onKeyPress={onKeyPressMock} />);
        const keyQ = getByText('Q');
        fireEvent.press(keyQ);
        expect(onKeyPressMock).toHaveBeenCalledWith('Q');
        fireEvent.press(getByText('CAPSLOCK'));
        expect(onKeyPressMock).toHaveBeenCalledWith('capslock');
        expect(getByText('a')).toBeTruthy(); //checks lower case alphabets visible
    });

    it('calls onKeyPress with "clear" when the CLEAR key is pressed', () => {
        const onKeyPressMock = jest.fn();
        const { getByText } = render(<CustomKeyboard onKeyPress={onKeyPressMock} />);
        fireEvent.press(getByText('CLEAR'));
        expect(onKeyPressMock).toHaveBeenCalledWith('clear');
    });

    it('calls onKeyPress with "delete" when the DEL key is pressed', () => {
        const onKeyPressMock = jest.fn();
        const { getByText } = render(<CustomKeyboard onKeyPress={onKeyPressMock} />);
        fireEvent.press(getByText('DEL'));
        expect(onKeyPressMock).toHaveBeenCalledWith('delete');
    });

    it('calls onKeyPress with "space" when the space key is pressed', () => {
        const onKeyPressMock = jest.fn();
        const { getByText } = render(<CustomKeyboard onKeyPress={onKeyPressMock} />);
        fireEvent.press(getByText('space'));
        expect(onKeyPressMock).toHaveBeenCalledWith('space');
    });

    it('calls onKeyPress with "return" when the return key is pressed', async () => {
        const onKeyPressMock = jest.fn();
        const { getByText } = render(<CustomKeyboard onKeyPress={onKeyPressMock} />);
        fireEvent.press(getByText('return'));
        expect(onKeyPressMock).toHaveBeenCalledWith('return');
    });
});