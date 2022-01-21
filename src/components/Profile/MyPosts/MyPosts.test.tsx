import React from "react";
import MyPosts from "./MyPosts";
import {renderWithRedux} from "../../../utils/test/test-utils";
import {screen} from "@testing-library/react";

describe('MyPosts', ()=>{
    it('MyPosts render', ()=>{
        renderWithRedux(<MyPosts/>)
        const textAreaPost = screen.getByRole('textbox')
        const textAreaButton = screen.getByRole('button')
        expect(screen.getByText(/My post/i)).toBeInTheDocument()
        expect(screen.getByText(/My post/i)).toBeInTheDocument()
        expect(textAreaPost).toBeInTheDocument()
        expect(textAreaButton).toBeInTheDocument()
    })
})