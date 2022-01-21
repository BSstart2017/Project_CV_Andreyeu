import React from "react"
import {renderWithRedux} from "../../utils/test/test-utils";
import {SideBar} from "./SideBar";
import {screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import * as reactRedux from "react-redux";

describe('SideBar',()=>{

  const history = createMemoryHistory()
  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  it('Sidebar render collapse false', ()=>{
    useSelectorMock.mockReturnValueOnce(false)
    renderWithRedux(<Router history={history}><SideBar spanNumber={2}/></Router>)
    expect(screen.getByRole('menu')).toBeInTheDocument()
    expect(screen.getByRole('menuitem',{name:"home Profile"})).toBeInTheDocument()
    expect(screen.getByText('Profile')).toBeInTheDocument()
  })

  it('Sidebar render collapse true', ()=>{
    useSelectorMock.mockReturnValueOnce(true)
    renderWithRedux(<Router history={history}><SideBar spanNumber={2}/></Router>)
    expect(screen.getByRole('img', {name: 'home'})).toBeInTheDocument()
  })
})