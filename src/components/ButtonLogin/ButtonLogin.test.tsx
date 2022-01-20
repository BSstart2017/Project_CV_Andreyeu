import React from "react"
import {render, screen} from '@testing-library/react'
import ButtonLogin from "./ButtonLogin";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe('ButtonLogin', () => {

  it('ButtonLogin render',    () => {
    const history = createMemoryHistory()
    const setOnLogin = jest.fn().mockReturnValue(true)
    render(
    <Router history={history}>
        <ButtonLogin setOnLogin={setOnLogin}/>
    </Router>)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute("href", "/login")
    expect(setOnLogin).toHaveBeenCalledTimes(0)
    userEvent.click(screen.getByRole('link'))
    expect(setOnLogin).toHaveBeenCalledTimes(1)
  })
})