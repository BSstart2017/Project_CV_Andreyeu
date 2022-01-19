import React from "react"
import {render, screen} from "@testing-library/react";
import CustomerCarousel from "./CustomerCarousel";

const carouselItems = [
    {id: 1 , img : `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`}
]

describe('CustomerCarousel', ()=>{
    it('CustomerCarousel render', ()=>{
        render(<CustomerCarousel carouselItems={carouselItems}/>)
        expect(screen.getByRole('img')).toHaveAttribute("src","/assets/images/LoandingHome/S01-1-1024x724.png")
    })
})