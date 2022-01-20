import React from 'react';
import {renderWithRedux} from "../../utils/test/test-utils";
import PersonalInfo from "./PersonalInfo";
import {screen} from "@testing-library/react";
import * as reactRedux from "react-redux";
import userEvent from "@testing-library/user-event";

const profile = {
    aboutMe: "React",
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: 'string',
    fullName: 'Missio',
    contacts: {
        github: 'https://github.com/BSstart2017/Project_CV_Andreyeu',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    photos: {
        small: '',
        large: ''
    }
}

describe("PersonalInfo",()=>{

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

    it("PersonalInfo render",()=>{

        useSelectorMock.mockImplementationOnce(() => profile)

        renderWithRedux(<PersonalInfo/>)
        expect(screen.getByText(/Personal info:/i)).toBeInTheDocument()
        expect(screen.getByText(/github.com/i)).toBeInTheDocument()
        userEvent.click(screen.getByRole('img'))
        screen.debug()
    })
    it("PersonalInfo render profile === null",()=>{

        useSelectorMock.mockReturnValue(null)

        renderWithRedux(<PersonalInfo/>)
        expect(screen.getByText(/Personal info:/i)).toBeInTheDocument()
        expect(screen.queryByText(/github.com/i)).not.toBeInTheDocument()
        userEvent.click(screen.getByRole('img'))
        screen.debug()
    })
})