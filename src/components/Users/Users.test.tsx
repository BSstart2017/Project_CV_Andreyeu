import React from "react"
import {renderWithRedux} from "../../utils/test/test-utils"
import {Users} from "./Users"
import {screen} from "@testing-library/react"
import * as reactRedux from "react-redux"
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";
import userEvent from "@testing-library/user-event";

const users = [{
    id: 1,
    name: 'Misha',
    status: 'Good',
    photos: {
        small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
        large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
    },
    followed: true
}, {
        id: 2,
        name: 'Alex',
        status: 'Good',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
        },
        followed: false}]
const filter = {
    term: 'Aliaksandr',
    friend: 'null'
}


describe('users',()=>{
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const history = createMemoryHistory()
    it('users render', ()=>{
        useSelectorMock.mockImplementationOnce(() => users)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(1)
            .mockReturnValueOnce(false)
            .mockReturnValueOnce([1,2])
            .mockImplementationOnce(()=>filter)
        renderWithRedux(<Router history={history}><Users/></Router>)
        userEvent.click(screen.getByRole('button',{name:'Follow'}))
        userEvent.click(screen.getByRole('button',{name:'Unfollow'}))
    })
})