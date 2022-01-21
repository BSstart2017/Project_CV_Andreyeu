import React from "react";
import SocialLink from "./SocialLink";
import {render, screen} from "@testing-library/react";

describe('SocialLink', ()=>{
    it('SocialLink render', ()=>{
        render(<SocialLink/>)
        expect(screen.getByText('hello all link Social')).toBeInTheDocument()
    });
})