import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { TYPE_HERE } from '../src/utils/Constants';
import { TextInputField } from '../src/components';

describe('TextInputField', () => {

    it('renders correctly with default placeholder', () => {
        const { getByPlaceholderText } = render(
            <TextInputField
                text=""
                onChangeText={() => { }}
            />
        );
        expect(getByPlaceholderText(TYPE_HERE)).toBeTruthy();
    });

    it('renders with custom placeholder', () => {
        const customPlaceholder = 'Custom Placeholder';
        const { getByPlaceholderText } = render(
            <TextInputField
                text=""
                onChangeText={() => { }}
                placeholder={customPlaceholder}
            />
        );
        expect(getByPlaceholderText(customPlaceholder)).toBeTruthy();
    });

    it('calls onChangeText when text changes', () => {
        const onChangeTextMock = jest.fn();
        const { getByPlaceholderText } = render(
            <TextInputField
                text=""
                onChangeText={onChangeTextMock}
            />
        );
        fireEvent.changeText(getByPlaceholderText(TYPE_HERE), 'New Text');
        expect(onChangeTextMock).toHaveBeenCalledWith('New Text');
    });

    it('calls onFocus when TextInput is focused', () => {
        const onFocusMock = jest.fn();
        const { getByPlaceholderText } = render(
            <TextInputField
                text=""
                onChangeText={() => { }}
                onFocus={onFocusMock}
            />
        );
        fireEvent(getByPlaceholderText(TYPE_HERE), 'focus');
        expect(onFocusMock).toHaveBeenCalled();
    });

    it('calls onBlur when TextInput loses focus', () => {
        const onBlurMock = jest.fn();
        const { getByPlaceholderText } = render(
            <TextInputField
                text=""
                onChangeText={() => { }}
                onBlur={onBlurMock}
            />
        );
        fireEvent(getByPlaceholderText(TYPE_HERE), 'blur');
        expect(onBlurMock).toHaveBeenCalled();
    });
});