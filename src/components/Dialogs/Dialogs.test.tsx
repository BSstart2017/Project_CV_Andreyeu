import React from "react";
import {screen} from "@testing-library/react";
import Dialogs from "./Dialogs";
import {createMemoryHistory} from "history";
import {Router} from "react-router-dom";
import userEvent from "@testing-library/user-event";
import {renderWithRedux} from "../../utils/test/test-utils";
import * as reactRedux from "react-redux";

const dialogData = [
    { id: 1, name: "Dima" },
    { id: 2, name: "Serg" },
    { id: 3, name: "Alisa" }
]

const  messagesData = [
    { id: 1, message: "hi" },
    { id: 2, message: "world my name" }
    ]

describe('Dialogs', () => {

    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    const history = createMemoryHistory()

    it('Dialogs render', () => {
        useSelectorMock.mockImplementationOnce(() => dialogData )
        useSelectorMock.mockImplementationOnce(() => messagesData )
        renderWithRedux(
            <Router history={history}>
                <Dialogs/>
            </Router>)
        expect(screen.getByText(/Dima/i)).toBeInTheDocument()
        expect(screen.getByText(/Dima/i)).toHaveAttribute("href", "/dialogs/1")
        expect(screen.getByText(/world my name/i)).toBeInTheDocument()
        expect(screen.getByPlaceholderText(/Please write new message!/i)).toBeInTheDocument()
        expect(screen.getByRole("button")).toBeInTheDocument()
    })

    it('Dialogs click new message',  async () => {
        useSelectorMock.mockImplementationOnce(() => dialogData )
        useSelectorMock.mockImplementationOnce(() => messagesData )
        renderWithRedux(<Router history={history}>
                <Dialogs/>
            </Router>)
        expect(screen.queryByText(/React/i)).toBeNull()
        userEvent.type(screen.getByPlaceholderText(/Please write new message!/i), 'React' )
        userEvent.click(screen.getByRole("button"))
        expect(screen.getByPlaceholderText(/Please write new message!/i)).toHaveValue('React')
       // expect(await screen.findByAltText(/React/i)).toBeInTheDocument()
    })
})