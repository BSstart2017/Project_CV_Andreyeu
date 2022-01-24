import React from 'react'
import {screen} from "@testing-library/react"
import * as reactRedux from 'react-redux'
import {renderWithRedux} from "../../utils/test/test-utils";
import {AuthPage} from "./AuthPage";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe('AuthPage',()=>{
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
  const history =createMemoryHistory()
  it('AuthPage render onLogin true',  ()=>{
    useSelectorMock.mockReturnValueOnce(true)
    const setOnLogin = jest.fn()
    renderWithRedux(<Router history={history}><AuthPage onLogin={true} setOnLogin={setOnLogin}/></Router>)
    expect(screen.queryByText('VIKINGER')).not.toBeInTheDocument()
  })
  it('AuthPage render onLogin false',  ()=>{
    useSelectorMock.mockReturnValueOnce(true)
    const setOnLogin = jest.fn()
    renderWithRedux(<Router history={history}><AuthPage onLogin={false} setOnLogin={setOnLogin}/></Router>)
    expect(screen.getByText('VIKINGER')).toBeInTheDocument()
    screen.debug()
  })
})