import React from "react";
import {render} from "@testing-library/react";
import StartLoginHeader from "./StartLoginHeader";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

describe('StartLoginHeader', ()=>{
    const history = createMemoryHistory()
    it('StartLoginHeader render', ()=>{
        const setOnLogin = jest.fn()
        render(<Router history={history}><StartLoginHeader setOnLogin={setOnLogin}/></Router>)
    });
})