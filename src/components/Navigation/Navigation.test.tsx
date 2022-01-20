import React from "react";
import {render, screen} from "@testing-library/react";
import Navigation from "./Navigation";

describe('Logo', ()=>{

    it('Logo render', ()=>{
        render(<Navigation />)
        expect(screen.getByRole('menu')).toBeInTheDocument()
        expect(screen.getByRole('menuitem',{name:'Home'})).toBeInTheDocument()
        expect(screen.getByRole('menuitem',{name:'Testimonials'})).toBeInTheDocument()
    })
})