import React from 'react'
import {renderWithRedux} from "../../../utils/test/test-utils"
import {screen} from "@testing-library/react"
import TimeLinePage from "./TimeLinePage"
import * as reactRedux from 'react-redux'

const iconsBadges = [
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
const iconsQuests =  [
    {
        id: 1,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Gold-Quest-Medal.png`,
        name: 'Quest Conqueror',
        exercise: 'Complete 100% of all quests at least once',
        requirements: [
            {quests: 'Unlock all quests 1 time'}
        ]
    },
    {
        id: 2,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Red-Quest-Medal.png`,
        name: 'Hear Me Out',
        exercise: 'Posted more than 10 profile activities in one day',
        requirements: [
            {quests: 'Write an activity stream message 10 times (limited to 1 per day)'}
        ]
    },
    {
        id: 3,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Purple-Quest-Medal.png`,
        name: 'Posting Machine',
        exercise: 'Posted more than 20 profile activities in one day',
        requirements: [
            {quests: 'Write an activity stream message 20 times (limited to 1 per day)'}
        ]
    },
    {
        id: 4,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Cyan-Quest-Medal.png`,
        name: 'Let’s Talk!',
        exercise: 'Successfully sent or replied to 5 private messages',
        requirements: [
            {quests: 'Send/Reply to a private message 5 times'}
        ]
    },
    {
        id: 5,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Blue-Quest-Medal.png`,
        name: 'Making Friends',
        exercise: 'Successfully sent 5 friend request',
        requirements: [
            {quests: 'Send a friendship request 5 times'}
        ]
    },
    {
        id: 6,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Pink-Quest-Medal.png`,
        name: 'BestSeller Post',
        exercise: 'Received more than 100 total visits on any post',
        requirements: [
            {quests: 'Get visits on any post 100 times'}
        ]
    },
    {
        id: 7,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Green-Quest-Medal.png`,
        name: 'Friendly User',
        exercise: 'Successfully got 10 friend request accepted',
        requirements: [
            {quests: 'Get a friendship request accepted 10 times'}
        ]
    },
    {
        id: 8,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Orange-Quest-Medal.png`,
        name: 'For The Community',
        exercise: 'Posted more than 40 group activities',
        requirements: [
            {quests: 'Write a group activity stream message 40 times'}
        ]
    },
    {
        id: 9,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/quest-open.png`,
        name: 'VIP Pass',
        exercise: 'Got successfully accepted in a private group',
        requirements: [
            {quests: 'Get accepted on a private group 1 time'}
        ]
    },
    {
        id: 10,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/quests-icon.png`,
        name: 'I Have The Power',
        exercise: 'Was promoted to group moderator or admin',
        requirements: [
            {quests: 'Promoted to group moderator/administrator 1 time'}
        ]
    },
    {
        id: 11,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Silver-Quest-Medal.png`,
        name: 'The Publisher',
        exercise: 'Successfully published a new blog post',
        requirements: [
            {quests: 'Publish a new post 1 time'}
        ]
    },
    {
        id: 12,
        img: `${process.env.PUBLIC_URL}/assets/images/Quests/Light-Blue-Quest-Medal.png`,
        name: 'Popular Writer',
        exercise: 'Received more than 50 daily visits on any post',
        requirements: [
            {quests: 'Daily visit any post 50 times'}
        ]
    }
]
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
    }
]


describe('TimeLinePage',()=>{
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')
    it('TimeLinePage render',  ()=>{
        useSelectorMock.mockImplementationOnce(() => iconsBadges)
            .mockImplementationOnce(() => iconsQuests)
            .mockImplementationOnce(() => friendsTen)
            .mockReturnValueOnce(2)
            .mockReturnValueOnce(2)
        renderWithRedux(<TimeLinePage/>)
     screen.debug()
    })
})