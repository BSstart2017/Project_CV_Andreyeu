import React from "react";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../utils/test/test-utils";
import DialogsForm from "./DialogsForm";

describe('DialogsForm', () => {

    it('rendering and submitting a basic Formik form', async () => {
        const handleSubmit = jest.fn()
        renderWithRedux(<DialogsForm onSubmit={handleSubmit}/>)

        const inputNewMessageText = screen.getByLabelText(/newMessageText/i)
        const submitButton = screen.getByRole('button', {name: /Send message/i})

        userEvent.type(inputNewMessageText, 'John')
        userEvent.click(submitButton)

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                newMessageText: 'John'
            })
        )
    })
})