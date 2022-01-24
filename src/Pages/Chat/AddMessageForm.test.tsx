import React from "react";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../utils/test/test-utils";
import AddMessageForm from "./AddMessageForm";
import * as reactRedux from "react-redux"

describe('AddMessageForm', () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector' )

    it('AddMessageForm rendering and submitting a basic Formik form', async () => {

        const handleSubmit = jest.fn()
        useSelectorMock.mockReturnValueOnce('ready')

        renderWithRedux(<AddMessageForm onSubmit={handleSubmit}/>)

        const inputMessageName = screen.getByLabelText(/message/i)
        const submitButton = screen.getByRole('button', {name: 'Send'})

        userEvent.type(inputMessageName, 'Aliaksandr')
        userEvent.click(submitButton)
        expect(submitButton).not.toBeDisabled()

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                message: 'Aliaksandr'
            })
        )
    })
})