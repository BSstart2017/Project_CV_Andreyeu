import React from 'react';
import {screen} from '@testing-library/react';
import {renderWithRedux} from "../../../utils/test/test-utils";
import Message from "./Message";
import dialogsReducer from "../../../redux/dialogs-reducer";

describe('Message', () => {
    it('Message render', () => {
        renderWithRedux(<Message message={'Hello'}/>)
        expect(screen.getByText('Hello')).toBeInTheDocument()
    })
})