import React from "react";
import MyPosts from "./MyPosts";
import {renderWithRedux} from "../../../utils/test/test-utils";
import {screen} from "@testing-library/react";
import * as reactRedux from "react-redux";

const postData = [
    {id: 1, newText: "My one post", likeCount: 3},
    {id: 2, newText: "Post number two", likeCount: 6},
    {id: 3, newText: "hi", likeCount: 33},
    {id: 4, newText: "lol", likeCount: 38},
    {id: 5, newText: "My one post", likeCount: 3},
    {id: 6, newText: "Post number two", likeCount: 6},
    {id: 7, newText: "hi", likeCount: 33},
    {id: 8, newText: "lol", likeCount: 38},
    {id: 9, newText: "My one post", likeCount: 3},
    {id: 10, newText: "Post number two", likeCount: 6},
    {id: 11, newText: "hi", likeCount: 33},
    {id: 12, newText: "lol", likeCount: 38},
    {id: 13, newText: "Post number two", likeCount: 6},
    {id: 14, newText: "hi", likeCount: 33},
    {id: 15, newText: "lol", likeCount: 38},
    {id: 16, newText: "Post number two", likeCount: 6},
    {id: 17, newText: "hi", likeCount: 33},
    {id: 18, newText: "lol", likeCount: 38},
    {id: 19, newText: "Post number two", likeCount: 6},
    {id: 20, newText: "hi", likeCount: 33},
    {id: 21, newText: "lol", likeCount: 38}
]

describe('MyPosts', ()=>{
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    it('MyPosts render', ()=>{
        useSelectorMock.mockImplementationOnce(()=> postData)
        renderWithRedux(<MyPosts/>)
        const textAreaPost = screen.getByRole('textbox')
        const textAreaButton = screen.getByRole('button')
        expect(screen.getByText(/My post/i)).toBeInTheDocument()
        expect(screen.getByText(/My post/i)).toBeInTheDocument()
        expect(textAreaPost).toBeInTheDocument()
        expect(textAreaButton).toBeInTheDocument()
    })
})