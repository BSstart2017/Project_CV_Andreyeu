import React from "react"
import {renderWithRedux} from "../../utils/test/test-utils";
import User from "./User";
import {screen} from "@testing-library/react";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";

const user = {
  id: 2,
  name: 'Alex',
  status: 'Good',
  photos: {
    small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
    large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
  },
  followed: true
}
const userTwo = {
  id: 2,
  name: 'Alex',
  status: 'Good',
  photos: {
    small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
    large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
  },
  followed: false
}

describe('User', ()=>{
  it('User render', ()=>{
    const toggleUnFollow = jest.fn()
    const toggleFollow = jest.fn()
    const history = createMemoryHistory()
    renderWithRedux(<Router history={history} ><User user={user} isToggleFollow={[2]}
                          toggleUnFollow={toggleUnFollow} toggleFollow={toggleFollow}/></Router>)
    expect(screen.getByRole('img')).toBeInTheDocument()
    expect(screen.getByRole('button',{name:'Unfollow'})).toBeInTheDocument()
    expect(screen.getByText(/My name is /i)).toBeInTheDocument()
    expect(screen.getByText(/Alex/i)).toBeInTheDocument()
    expect(screen.getByText(/Status:/i)).toBeInTheDocument()
    expect(screen.getByText(/Good/i)).toBeInTheDocument()
    expect(screen.getByText(/I am from user.location.country/i)).toBeInTheDocument()
    expect(screen.getByText(/My love city is user.location.city/i)).toBeInTheDocument()
  })

  it('User unfollow',  ()=>{
    const toggleUnFollow = jest.fn().mockReturnValueOnce(2)
    const toggleFollow = jest.fn().mockReturnValueOnce(2)
    const history = createMemoryHistory()
    renderWithRedux(<Router history={history} ><User user={user} isToggleFollow={[2]}
                                                     toggleUnFollow={toggleUnFollow} toggleFollow={toggleFollow}/></Router>)
    expect(screen.getByRole('button',{name:'Unfollow'})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button',{name:'Unfollow'}))
  })

  it('User follow',  ()=>{
    const toggleUnFollow = jest.fn().mockReturnValueOnce(2)
    const toggleFollow = jest.fn().mockReturnValueOnce(2)
    const history = createMemoryHistory()
    renderWithRedux(<Router history={history} ><User user={userTwo} isToggleFollow={[2]}
                                                     toggleUnFollow={toggleUnFollow} toggleFollow={toggleFollow}/></Router>)
    expect(screen.getByRole('button',{name:'Follow'})).toBeInTheDocument()
    userEvent.click(screen.getByRole('button',{name:'Follow'}))
  })
})