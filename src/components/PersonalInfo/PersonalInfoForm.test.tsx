import React from 'react'
import {renderWithRedux} from "../../utils/test/test-utils";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PersonalInfoForm from "./PersonalInfoForm";

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

describe('PersonalInfoForm', () => {

    it('PersonalInfoForm render and click Onsubmit', async () => {

        const handleSubmit = jest.fn()
        const setEditPersonalInfo = jest.fn()

        renderWithRedux(<PersonalInfoForm onSubmit={handleSubmit} setEditPersonalInfo={setEditPersonalInfo} profile={profile}/>)

        const inputGithubText = screen.getByPlaceholderText(/github/i)
        const submitButton = screen.getByRole('button', {name: /Save/i})

        userEvent.type(inputGithubText, 'https://github.com/BSstart2017/Project_CV_Andreyeu')
        userEvent.click(submitButton)

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                contacts: {
                    facebook: '',
                    github: 'https://github.com/BSstart2017/Project_CV_Andreyeu',
                    vk: '',
                    instagram: '',
                    twitter: '',
                    mainLink: '',
                    website: '',
                    youtube: ''
                }
            })
        )

    })

    it('PersonalInfoForm profile null',  () => {
        const handleSubmit = jest.fn()
        const setEditPersonalInfo = jest.fn()
        renderWithRedux(<PersonalInfoForm onSubmit={handleSubmit} setEditPersonalInfo={setEditPersonalInfo} profile={null}/>)
        expect(screen.queryByPlaceholderText(/github/i)).not.toBeInTheDocument()
    })
})