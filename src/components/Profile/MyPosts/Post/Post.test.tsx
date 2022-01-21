import React from "react";
import {render, screen} from "@testing-library/react";
import Post from "./Post";

describe('Post', ()=>{
    it('Post render', ()=>{
        render(<Post newText={'Hello'} likeCount={10}/>)
        expect(screen.getByText('Hello')).toBeInTheDocument()
        expect(screen.getByText('like 10')).toBeInTheDocument()
        expect(screen.getByRole('img')).toBeInTheDocument()
    })
})