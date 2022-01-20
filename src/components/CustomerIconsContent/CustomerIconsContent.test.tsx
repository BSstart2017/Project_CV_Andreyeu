import React from "react"
import {render, screen} from "@testing-library/react";
import CustomerIconsContent from "./CustomerIconsContent";
import userEvent from "@testing-library/user-event";

const friendsTen = [
    {
    id: 1,
    name: 'Dima',
    status: 'Big man',
    photos: {
        small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
    },
    followed: true
},
    {
        id: 2,
        name: 'Masha',
        status: '',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: false
    },
    {
        id: 3,
        name: 'Dima',
        status: 'Big man',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: true
    },
    {
        id: 4,
        name: 'Masha',
        status: '',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: false
    },
    {
        id: 5,
        name: 'Dima',
        status: 'Big man',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: true
    },
    {
        id: 6,
        name: 'Masha',
        status: '',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: false
    },
    {
        id: 7,
        name: 'Dima',
        status: 'Big man',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: true
    },
    {
        id: 8,
        name: 'Masha',
        status: '',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: false
    },
    {
        id: 9,
        name: 'Dima',
        status: 'Big man',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: true
    },
    {
        id: 10,
        name: 'Masha',
        status: '',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: false
    }
]
const friendsTwo = [
    {
        id: 1,
        name: 'Dima',
        status: 'Big man',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: true
    },
    {
        id: 2,
        name: 'Masha',
        status: '',
        photos: {
            small: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
            large: `${process.env.PUBLIC_URL}/assets/images/Badges/Bronze-User.png`,
        },
        followed: false
    }
]

describe('CustomerIconsContent', ()=>{
    it('CustomerIconsContent render and total < 10', ()=>{
        const next = jest.fn()
        render(<CustomerIconsContent icons={friendsTwo} title={'Friends'} next={next} total={5}/>)
        expect(screen.getByText(/Friends/i)).toBeInTheDocument()
        expect(screen.getByText(/5/i)).toBeInTheDocument()
        expect(screen.getByText(/Dima/i)).toBeInTheDocument()
        expect(screen.getByText(/Big man/i)).toBeInTheDocument()
        expect(screen.getByText(/Masha/i)).toBeInTheDocument()
        expect(screen.getByText(/Masha/i)).toBeInTheDocument()
        expect(screen.getByTitle(/Dima/i)).toBeInTheDocument()
        expect(screen.queryByRole('button')).toBeNull()
    })
    it('CustomerIconsContent total > 10 and click "show more"', async ()=>{
        const next = jest.fn().mockImplementationOnce(() => friendsTwo)
        render(<CustomerIconsContent icons={friendsTen} title={'Friends'} next={next} total={12}/>)
        expect(screen.queryByRole('button')).not.toBeNull()
        expect(next).toHaveBeenCalledTimes(0)
        userEvent.click(screen.getByRole('button'))
        expect(await next).toHaveBeenCalledTimes(1)
        screen.debug()
       // todo: expect(screen.queryByRole('button')).toBeNull()
    })
})