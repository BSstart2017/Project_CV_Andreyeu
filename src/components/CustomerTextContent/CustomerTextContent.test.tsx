import React from "react"
import {render, screen} from "@testing-library/react";
import CustomerTextContent from "./CustomerTextContent";


describe('CustomerTextContent', ()=>{
    it('CustomerTextContent render', ()=>{
        render(<CustomerTextContent />)
        expect(screen.getByText(/VIKINGER COMMUNITY/i)).toBeInTheDocument()
        expect(screen.getByText(/The Best Way to Connect/i)).toBeInTheDocument()
        expect(screen.getByText(/With Your Friends!/i)).toBeInTheDocument()
        expect(screen.getByText(/We made sure that the theme/i)).toBeInTheDocument()
    })
})