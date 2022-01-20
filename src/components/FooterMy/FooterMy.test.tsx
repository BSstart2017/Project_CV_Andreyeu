import React from "react"
import {render, screen} from "@testing-library/react";
import FooterMy from "./FooterMy";

describe('FooterMy', ()=>{
    it('FooterMy render', ()=>{
        render(<FooterMy/>)
        expect(screen.getByRole('img')).toBeInTheDocument()
        expect(screen.getByText(/VIKINGER/i)).toBeInTheDocument()
    })
})