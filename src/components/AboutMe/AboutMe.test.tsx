import React from 'react'
import {screen} from '@testing-library/react'
import AboutMe from "./AboutMe";
import {renderWithRedux} from "../../utils/test/test-utils";
import * as reactRedux from 'react-redux'
import userEvent from "@testing-library/user-event";

const profile = {
    fullName: 'Missio',
    aboutMe: 'react'
}

describe('AboutMe', () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    it('AboutMe render',   () => {
        useSelectorMock.mockImplementationOnce(() => profile)
                        .mockImplementationOnce(() => 'React good')
        renderWithRedux(<AboutMe/>)
        expect(screen.getByRole('separator')).toBeInTheDocument()
        expect(screen.getByRole("img")).toBeInTheDocument()
        expect(screen.getByText(/Full name:/i)).toBeInTheDocument()
        expect(screen.getByText(/About Me:/i)).toBeInTheDocument()
        expect(screen.getByText(/Status:/i)).toBeInTheDocument()
        expect(screen.getByText(/Missio/i)).toBeInTheDocument()
    })
    it('AboutMe click Edit',   () => {
        useSelectorMock.mockImplementationOnce(() => profile)
                        .mockImplementationOnce(() => 'React good')
        renderWithRedux(<AboutMe/>)
        userEvent.click(screen.getByRole("img"))
        expect(screen.getByLabelText(/fullName/i)).toBeInTheDocument()
        expect(screen.getByRole('button', {name: /All clear field/i})).toBeDisabled()
        expect(screen.getByRole('button', {name: /Save/i})).not.toBeDisabled()
    })
})