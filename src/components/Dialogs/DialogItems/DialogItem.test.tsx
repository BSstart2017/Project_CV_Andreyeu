import React from 'react';
import {screen} from '@testing-library/react';
import DialogItems from "./DialogItem";
import {renderWithRedux} from "../../../utils/test/test-utils";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import dialogsReducer from "../../../redux/dialogs-reducer";

describe('DialogItems', () => {
    it('DialogItems render', () => {
        const history = createMemoryHistory()
        renderWithRedux(
            <Router history={history}>
                <DialogItems id={1} name={'Missio'}/>
            </Router>, dialogsReducer);
        expect(screen.getByText('Missio')).toBeInTheDocument()
        expect(screen.getByText('Missio')).toHaveAttribute("href", "/dialogs/1")
    })
})