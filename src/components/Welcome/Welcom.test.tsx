import React from "react";
import {render, screen} from "@testing-library/react";
import Welcome from "./Welcome";

describe('Welcome', ()=>{
    it('Welcome render', ()=>{
        render(<Welcome/>)
        expect(screen.getByText(/WELCOME TO THE/i)).toBeInTheDocument()
        expect(screen.getByText(/VIKINGER COMMUNITY!/i)).toBeInTheDocument()
        expect(screen.getByText(/The next generation WordPres/i)).toBeInTheDocument()
        expect(screen.getByRole('button')).toBeInTheDocument()
    });
})