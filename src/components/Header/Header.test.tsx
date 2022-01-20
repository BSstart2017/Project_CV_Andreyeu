import React from "react"
import {screen} from "@testing-library/react";
import {Headers} from "./Header"
import {renderWithRedux} from "../../utils/test/test-utils";
import * as reactRedux from "react-redux";
import userEvent from "@testing-library/user-event";

const profile = {
    photos : {
        small : `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
    }
}

describe('Headers', ()=>{

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    it('Headers render', ()=>{
        useSelectorMock.mockImplementationOnce(() => 'Missio')
        useSelectorMock.mockImplementationOnce(() => profile)
        useSelectorMock.mockImplementationOnce(() => true)
        renderWithRedux(<Headers/>)
        expect(screen.getByText(/VIKINGER/i)).toBeInTheDocument()
        expect(screen.getByLabelText('menu-unfold')).toBeInTheDocument()
        expect(screen.getByTitle('Missio')).toBeInTheDocument()
        expect(screen.getByText('Missio',)).toBeInTheDocument()
        expect(screen.getByRole('button',{name: 'log out'})).toBeInTheDocument()
    })

    it('Headers click menu', ()=>{
        useSelectorMock.mockImplementationOnce(() => 'Missio')
        useSelectorMock.mockImplementationOnce(() => profile)
        useSelectorMock.mockImplementationOnce(() => true)
        renderWithRedux(<Headers/>)
        expect(screen.getByLabelText('menu-unfold')).toBeInTheDocument()
        userEvent.click(screen.getByLabelText('menu-unfold'))
        screen.debug()
    })
})