import React from "react"
import {screen} from "@testing-library/react";
import {renderWithRedux} from "../../utils/test/test-utils";
import * as reactRedux from "react-redux";
import Interests from "./Interests";
import userEvent from "@testing-library/user-event";

const profileLookingTrue = {
    lookingForAJob: true,
    lookingForAJobDescription: 'React and JS',
}

const profileLookingFalse = {
    lookingForAJob: false,
    lookingForAJobDescription: '',
}

describe('Interests', ()=>{

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    it('Interests render profileLookingTrue', ()=>{
        useSelectorMock.mockImplementationOnce(() => profileLookingTrue)
        renderWithRedux(<Interests/>)
        expect(screen.getByText(/Interests/i)).toBeInTheDocument()
        expect(screen.getByText(/Yes/i)).toBeInTheDocument()
        expect(screen.getByText(/React and JS/i)).toBeInTheDocument()
    })
    it('Interests render profileLookingFalse', ()=>{
        useSelectorMock.mockImplementationOnce(() => profileLookingFalse)
        renderWithRedux(<Interests/>)
        expect(screen.getByText(/Interests/i)).toBeInTheDocument()
        expect(screen.getByText(/Looking for a job:/i)).toBeInTheDocument()
        expect(screen.getByText(/No/i)).toBeInTheDocument()
        expect(screen.getByText(/Skills:/i)).toBeInTheDocument()
        expect(screen.getByText(/I don’t have any skills!/i)).toBeInTheDocument()
    })
    it('Interests click onEditAboutMe', ()=>{
        useSelectorMock.mockImplementationOnce(() => profileLookingFalse)
        renderWithRedux(<Interests/>)
        expect(screen.getByRole('img')).toBeInTheDocument()
        userEvent.click(screen.getByRole('img'))
        expect(screen.getByLabelText("lookingForAJob")).toBeInTheDocument()
    })
})