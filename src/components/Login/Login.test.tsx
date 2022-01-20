import React from "react"
import {screen} from "@testing-library/react";
import {Login} from "./Login";
import {renderWithRedux} from "../../utils/test/test-utils";
import * as reactRedux from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";


describe('Login', ()=>{

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    it('Login render isLogin False', ()=>{

        useSelectorMock.mockReturnValue(false)

        const setOnLogin = jest.fn()

        renderWithRedux(<Login setOnLogin={setOnLogin}/> )

        const inputEmailText = screen.getByLabelText(/email/i)
        const inputPasswordText = screen.getByLabelText(/password/i)
        const inputRememberMeText = screen.getByLabelText(/rememberMe/i)
        const submitButton = screen.getByRole('button', {name: /Login/i})

        expect(screen.getByText(/WELCOME TO THE/i)).toBeInTheDocument()
        expect(screen.getByText(/VIKINGER COMMUNITY!/i)).toBeInTheDocument()
        expect(screen.getByText(/The next generation WordPress/i)).toBeInTheDocument()
        expect(screen.getByText('VIKINGER')).toBeInTheDocument()
        expect(screen.getByText('Welcome!')).toBeInTheDocument()
        expect(inputEmailText).toBeInTheDocument()
        expect(inputPasswordText).toBeInTheDocument()
        expect(inputRememberMeText).toBeInTheDocument()
        expect(submitButton).toBeInTheDocument()
        expect(setOnLogin).toHaveBeenCalledTimes(0)
    })

    it('Login render isLogin True', ()=>{
        useSelectorMock.mockReturnValue(true)
        const setOnLogin = jest.fn()
        const history = createMemoryHistory()
        renderWithRedux(<Router history={history}><Login setOnLogin={setOnLogin}/></Router> )
        expect(setOnLogin).toHaveBeenCalledTimes(0)
    })
})