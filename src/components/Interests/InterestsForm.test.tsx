import React from "react";
import {act, screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../utils/test/test-utils";
import InterestsForm from "./InterestsForm";


const profile = {
    aboutMe: "React",
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: '',
    fullName: 'Missio',
    contacts: {
        github: '',
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

describe('InterestsForm', () => {

    it('InterestsForm rendering and submitting a basic Formik form', async () => {
        const handleSubmit = jest.fn()
        const setEditAboutMe = jest.fn()
        act(()=> {
            renderWithRedux(<InterestsForm onSubmit={handleSubmit} profile={profile}
                                           setEditAboutMe={setEditAboutMe} status={'React good'}/>)
        })

        const inputLookingForAJobText = screen.getByLabelText("lookingForAJob")
        const inputLookingForAJobDescriptionText = screen.getByLabelText(/lookingForAJobDescription/i)
        const submitButton = screen.getByRole('button', {name: /Save/i})

        userEvent.click(inputLookingForAJobText)
        userEvent.type(inputLookingForAJobDescriptionText, "JS")
        userEvent.click(submitButton)

        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                lookingForAJobDescription: 'JS',
                lookingForAJob: false
            })
        )
    })
    it('InterestsForm rendering profile null',  () => {
        const handleSubmit = jest.fn()
        const setEditAboutMe = jest.fn()
        act(()=> {
            renderWithRedux(<InterestsForm onSubmit={handleSubmit} profile={null}
                                           setEditAboutMe={setEditAboutMe} status={'React good'}/>)
        })

        const inputLookingForAJobDescriptionText = screen.getByLabelText(/lookingForAJobDescription/i)
        const submitButton = screen.getByRole('button', {name: /Save/i})

        expect(inputLookingForAJobDescriptionText).toHaveValue('')
        userEvent.click(submitButton)

    })
})