import React from 'react';
import {AppSocialProject} from './App';
import * as reactRedux from "react-redux";
import {render, screen} from "@testing-library/react";

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

describe('App', ()=>{

  const useSelectorMock = jest.spyOn(reactRedux, 'useSelector')

  it('AboutMe render initialized true',async ()=>{
    useSelectorMock.mockReturnValueOnce(true)
                    .mockImplementationOnce(()=> profile )
    render(<AppSocialProject/>)
  })

  it('AboutMe render initialized false',  ()=>{
    useSelectorMock.mockReturnValue(false)
    render(<AppSocialProject/>)
    expect(screen.getByRole('img')).toBeInTheDocument()
  })
})