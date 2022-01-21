import React from "react";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../utils/test/test-utils";
import UserForm from "./UserForm";


describe('UserForm', () => {

  it('UserForm rendering and submitting a basic Formik form', async () => {
    const handleSubmit = jest.fn()
    const onFilterChange = jest.fn()

    renderWithRedux(<UserForm onSubmit={handleSubmit} onFilterChange={onFilterChange}/>)

    const inputTermName = screen.getByLabelText(/term/i)
    const submitButton = screen.getByRole('button', {name: /Find/i})

    userEvent.type(inputTermName, 'Aliaksandr')
    userEvent.click(submitButton)

    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
          term: 'Aliaksandr',
          friend: 'null'
        })
    )
  })
  it('UserForm rendering select', async () => {
    const handleSubmit = jest.fn()
    const onFilterChange = jest.fn()

    renderWithRedux(<UserForm onSubmit={handleSubmit} onFilterChange={onFilterChange}/>)

    const selectFriendName = screen.getByRole('combobox')
    const submitButton = screen.getByRole('button', {name: /Find/i})

    expect(selectFriendName).toHaveAttribute('aria-activedescendant','friend_list_0')
    userEvent.click(selectFriendName)
    userEvent.click(screen.getByText('Only followed'))
    expect(selectFriendName).toHaveAttribute('aria-activedescendant','friend_list_1')
    userEvent.click(submitButton)
    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
          term: '',
          friend: 'true'
        })
    )

    userEvent.click(selectFriendName)
    userEvent.click(screen.getByText('Only unfolowed'))
    expect(selectFriendName).toHaveAttribute('aria-activedescendant','friend_list_2')
    userEvent.click(submitButton)

    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
          term: '',
          friend: 'false'
        })
    )
  })
})