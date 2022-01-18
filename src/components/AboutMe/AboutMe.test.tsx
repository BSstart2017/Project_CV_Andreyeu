import React from 'react'
import {screen} from '@testing-library/react'
import AboutMe from "./AboutMe";
import {renderWithRedux} from "../../utils/test/test-utils";
import * as reactRedux from 'react-redux'

const profile = {
    fullName: 'dsf',
    aboutMe: 'react'
}


describe('AboutMe', () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    it('AboutMe render',  async () => {
        useSelectorMock.mockImplementationOnce(() => profile)
        useSelectorMock.mockImplementationOnce(() => 'React good')
        renderWithRedux(<AboutMe/>)
        expect(screen.getByRole('separator')).toBeInTheDocument()
        expect(screen.getByRole("img")).toBeInTheDocument()
        expect(screen.getByText(/Full name:/i)).toBeInTheDocument()
        expect(screen.getByText(/About Me:/i)).toBeInTheDocument()
        expect(screen.getByText(/Status:/i)).toBeInTheDocument()
        expect(await screen.findByText(/dsf/i)).toBeInTheDocument()
        screen.debug()
    })
})