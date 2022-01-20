import React from "react";
import {render, screen} from "@testing-library/react";
import Logo from "./Logo";


describe('Logo', ()=>{

    it('Logo render', ()=>{
        render(<Logo spanNumberLogo={24} spanNumberText={24}  textPosition='center' textColor='white'/>)
        expect(screen.getByRole('img')).toHaveAttribute('src', "vkfooterlogo.png")
        expect(screen.getByText(/VIKINGER/i)).toBeInTheDocument()
        expect(screen.getByText(/VIKINGER/i)).toHaveStyle('text-align: center; color: white; font-weight: bolder')
        expect(screen.getByLabelText('spanNumberLogo')).toHaveClass("ant-col ant-col-24 logo")
        expect(screen.getByLabelText('spanNumberText')).toHaveClass("ant-col ant-col-24")
    })
    it('Logo render spanNumberLogo & spanNumberText === undefined', ()=>{
        render(<Logo spanNumberLogo={undefined} spanNumberText={undefined}  textPosition='center' textColor='white'/>)
        expect(screen.getByRole('img')).toHaveAttribute('src', "vkfooterlogo.png")
        expect(screen.getByText(/VIKINGER/i)).toBeInTheDocument()
        expect(screen.getByText(/VIKINGER/i)).toHaveStyle('text-align: center; color: white; font-weight: bolder')
        expect(screen.getByLabelText('spanNumberLogo')).toHaveClass("ant-col ant-col-1 logo")
        expect(screen.getByLabelText('spanNumberText')).toHaveClass("ant-col ant-col-1")
    })
})