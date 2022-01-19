import React from "react"
import {render, screen} from "@testing-library/react";
import CustomerIcons from "./CustomerIcons";


const  iconsBadges = [
    {
        id: 1,
        img: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        name: 'Bronze User',
        exercise: 'Has posted more than 1 post on their profile',
        requirements: [
            {quests: 'Write an activity stream message 1 time'}
        ]
    }
]

describe('CustomerIcons', ()=>{
    it('CustomerIcons render', ()=>{
        render(<CustomerIcons icons={iconsBadges} title={'Badges'}/>)
        expect(screen.getByText(/Badges:/i)).toBeInTheDocument()
        expect(screen.getByRole('img')).toHaveAttribute("title","Bronze User")
    })
})