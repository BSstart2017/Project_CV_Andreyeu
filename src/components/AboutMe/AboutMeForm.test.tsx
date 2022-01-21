import React from "react";
import {screen, waitFor} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../utils/test/test-utils";
import AboutMeForm from "./AboutMeForm";

const profile = {
    aboutMe: "React",
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: 'string',
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
        small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
        large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
    }
}

describe('AboutMeForm', () => {

    it('AboutMeForm rendering and submitting a basic Formik form', async () => {
        const handleSubmit = jest.fn()
        const setEditAboutMe = jest.fn()

        renderWithRedux(<AboutMeForm status={'I am Big'} setEditAboutMe={setEditAboutMe}
                                     profile={profile} onSubmit={handleSubmit}/>)

        const inputFullName = screen.getByLabelText(/fullName/i)
        const inputAboutMe = screen.getByLabelText(/aboutMe/i)
        const inputStatus = screen.getByLabelText(/status/i)
        const submitButton = screen.getByRole('button', {name: /Save/i})

        userEvent.type(inputFullName, 'Aliaksandr')
        userEvent.type(inputAboutMe, 'Super React')
        userEvent.type(inputStatus, 'Big man')
        userEvent.click(submitButton)


        await waitFor(() =>
            expect(handleSubmit).toHaveBeenCalledWith({
                fullName: 'MissioAliaksandr',
                aboutMe: 'ReactSuper React',
                status: 'I am BigBig man'
            })
        )
    })

    it('AboutMeForm resetButton',  () => {
        const handleSubmit = jest.fn()
        const setEditAboutMe = jest.fn()

        renderWithRedux(<AboutMeForm status={'I am Big'} setEditAboutMe={setEditAboutMe}
                                     profile={profile} onSubmit={handleSubmit}/>)

        const inputFullName = screen.getByLabelText(/fullName/i)
        const inputAboutMe = screen.getByLabelText(/aboutMe/i)
        const inputStatus = screen.getByLabelText(/status/i)
        const resetButton = screen.getByRole('button', {name: /All clear field/i})

        userEvent.type(inputFullName, 'Aliaksandr')
        userEvent.type(inputAboutMe, 'Super React')
        userEvent.type(inputStatus, 'Big man')

        expect(inputFullName).toHaveValue('MissioAliaksandr')
        expect(inputAboutMe).toHaveValue('ReactSuper React')
        expect(inputStatus).toHaveValue('I am BigBig man')

        userEvent.click(resetButton)

        expect(inputFullName).toHaveValue('')
        expect(inputAboutMe).toHaveValue('')
        expect(inputStatus).toHaveValue('')

    })
})