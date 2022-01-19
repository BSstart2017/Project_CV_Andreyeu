import React from "react"
import {render, screen} from "@testing-library/react";
import CustomerCards from "./CustomerCards";

const cards = [
    {
        id: 1,
        img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/01-1.png`,
        headerText: 'BuddyPress Powered',
        footerText: 'We took advantage and expanded the Buddypress plugin with reactions, shares, media, and much more!'
    },
    {
        id: 2,
        img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/02-1.png`,
        headerText: 'Super Gamification!',
        footerText: 'We created a full gamification experience with badges, quests, credits and ranks to create an awesome experience!'
    }]

describe('CustomerCards', ()=>{
    it('CustomerCards render', ()=>{
        render(<CustomerCards cards={cards}/>)
        expect(screen.getByText(/BuddyPress Powered/i)).toBeInTheDocument()
        expect(screen.getByText(/We took advantage/i)).toBeInTheDocument()
        expect(screen.getByText(/Super Gamification!/i)).toBeInTheDocument()
        expect(screen.getByText(/We created a full gamification/i)).toBeInTheDocument()
    })
})