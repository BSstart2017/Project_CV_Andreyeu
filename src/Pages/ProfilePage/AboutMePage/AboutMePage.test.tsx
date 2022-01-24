import React from 'react'
import {renderWithRedux} from "../../../utils/test/test-utils";
import AboutMePage from "./AboutMePage";
import {screen} from "@testing-library/react";

describe('AboutMePage',()=>{
    it('AboutMePage render',  ()=>{
        renderWithRedux(<AboutMePage/>)
        expect(screen.getByText('About Me')).toBeInTheDocument()
        expect(screen.getByText(/Full name:/i)).toBeInTheDocument()
        expect(screen.getByText(/Personal info:/i)).toBeInTheDocument()
    })
})