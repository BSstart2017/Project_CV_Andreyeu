import React from "react"
import {screen} from "@testing-library/react";
import ProfileStatus from "./ProfileStatus";
import {renderWithRedux} from "../../../../utils/test/test-utils";
import userEvent from "@testing-library/user-event";


describe('ProfileStatus', ()=>{
    it('ProfileStatus render',()=>{
        renderWithRedux(<ProfileStatus statusText='MyStatusTest' isOwner={false}/>)
        expect(screen.getByText('MyStatusTest')).toBeInTheDocument()
    })
    it('ProfileStatus click',()=>{
        renderWithRedux(<ProfileStatus statusText='MyStatusTest' isOwner={true}/>)
        userEvent.click(screen.getByText('MyStatusTest'))
        expect(screen.getByRole('textbox')).toHaveValue("MyStatusTest")
        userEvent.type(screen.getByRole('textbox'), 'TwoTest')
        expect(screen.getByRole('textbox')).toHaveValue("MyStatusTestTwoTest")
    })
})