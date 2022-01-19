import React from "react"
import {render, screen} from "@testing-library/react";
import Preloader from "./Preloader";

describe('Preloader', ()=>{
  it('Preloader render', ()=>{
    render(<Preloader/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})