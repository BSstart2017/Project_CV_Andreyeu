import React from "react"
import {render, screen} from '@testing-library/react'
import ButtonLogin from "./ButtonLogin";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";

describe('ButtonLogin', () => {

  it('ButtonLogin render',    () => {
    const history = createMemoryHistory()
    render(
    <Router history={history}>
        <ButtonLogin/>
    </Router>)

    expect(screen.getByRole('button')).toBeInTheDocument()
    expect(screen.getByRole('link')).toHaveAttribute("href", "/login")

  })
})