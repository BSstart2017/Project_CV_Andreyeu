import React from "react"
import {renderWithRedux} from "../../utils/test/test-utils";
import Profile from "./Profile";
import {screen} from "@testing-library/react";
import routeData from 'react-router';
import * as reactRedux from "react-redux";
import {Router} from "react-router-dom";
import {createMemoryHistory} from "history";

const mockLocation = {
    pathname: '/profile',
    hash: '',
    search: '',
    state: '',
    match:{
        params: {
            userId: '2'
        }
    }
}
const profile = {
    aboutMe: "React",
    userId: 1,
    lookingForAJob: true,
    lookingForAJobDescription: 'string',
    fullName: 'Missio',
    contacts: {
        github: '',
        vk: '',
        facebook: '',
        instagram: '',
        twitter: '',
        website: '',
        youtube: '',
        mainLink: ''
    },
    photos: {
        small: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
        large: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
    }
}


describe('Profile', ()=>{

    const useParams = jest.spyOn(routeData, 'useLocation')
    const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')


    it('Profile render',()=>{
        const history = createMemoryHistory()
        useParams.mockReturnValue(mockLocation)
        useSelectorMock.mockImplementationOnce(() => profile)
            .mockReturnValueOnce('2')
            .mockReturnValueOnce('Very good')
        renderWithRedux(<Router history={history}><Profile/></Router>)
    });
})