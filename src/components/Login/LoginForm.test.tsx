import React from 'react'
import {renderWithRedux} from "../../utils/test/test-utils";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import * as reactRedux from "react-redux";

const captchaUrl = {
  url:"https://social-network.samuraijs.com/HelpApp/HelpApp/Captcha?w=200\u0026h=100\u0026c=7qBx8Nl0mJGvLPkBzCBNpg%3D%3D"
}
describe('LoginForm', ()=>{

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  it('LoginForm render and click Onsubmit', async ()=>{

    const handleSubmit = jest.fn()
    const setOnLogin = jest.fn().mockReturnValue(true)

    renderWithRedux(<LoginForm onSubmit={handleSubmit} setOnLogin={setOnLogin}/>)

    const inputEmailText = screen.getByLabelText(/email/i)
    const inputPasswordText = screen.getByLabelText(/password/i)
    const inputRememberMeText = screen.getByLabelText(/rememberMe/i)
    const submitButton = screen.getByRole('button', {name: /Login/i})
    userEvent.type(inputEmailText, 'Nicepk.by@gmail.com')
    userEvent.type(inputPasswordText, 'Missio1991')
    userEvent.click(inputRememberMeText)
    userEvent.click(submitButton)
    expect(screen.queryByLabelText(/captcha/i)).not.toBeInTheDocument()
    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
          email: 'Nicepk.by@gmail.com',
          password: 'Missio1991',
          rememberMe: true,
          captcha: ''
        })
    )
  })
  it('LoginForm render click captcha', async()=>{

    useSelectorMock.mockImplementationOnce(() => captchaUrl)

    const handleSubmit = jest.fn()
    const setOnLogin = jest.fn().mockReturnValue(false)

    renderWithRedux(<LoginForm onSubmit={handleSubmit} setOnLogin={setOnLogin}/>)

    const inputCaptchaText = screen.getByLabelText(/captcha/i)
    const submitButton = screen.getByRole('button', {name: /Login/i})

    userEvent.type(inputCaptchaText, 'JFGTP')
    userEvent.click(submitButton)

    await waitFor(() =>
        expect(handleSubmit).toHaveBeenCalledWith({
          email: '',
          password: '',
          rememberMe: false,
          captcha: 'JFGTP'
        })
    )
    expect(screen.queryByLabelText(/captcha/i)).toBeInTheDocument()

  })
})