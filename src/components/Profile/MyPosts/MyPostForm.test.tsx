import React from 'react'
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../../utils/test/test-utils";
import MyPostsForm from "./MyPostsForm";


describe('MyPostsForm', ()=>{

  it('LoginForm render and click Onsubmit', async ()=>{

    const handleSubmit = jest.fn()

    renderWithRedux(<MyPostsForm onSubmit={handleSubmit}/>)

    const inputNewTextBodyText = screen.getByLabelText(/newTextBody/i)
    const submitButton = screen.getByRole('button', {name: /Add new Post/i})

    userEvent.type(inputNewTextBodyText, 'Very good day.')
    userEvent.click(submitButton)

    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
            newTextBody: 'Very good day.'
        })
    )
  })
})