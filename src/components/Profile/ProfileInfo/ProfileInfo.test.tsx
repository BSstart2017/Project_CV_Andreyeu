import React from "react"
import {renderWithRedux} from "../../../utils/test/test-utils";
import ProfileInfo from "./ProfileInfo";
import {screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const profile = {
  aboutMe: "React",
  userId: 1,
  lookingForAJob: true,
  lookingForAJobDescription: 'string',
  fullName: 'Missio',
  contacts: {
    github: '',
    vk: '',
    facebook: 'https://www.facebook.com/MyName',
    instagram: '',
    twitter: '',
    website: '',
    youtube: '',
    mainLink: ''
  },
  photos: {
    small:  `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`,
    large:  `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
  }
}
const file = new File(['hello.png'], 'hello.png', {type: 'image/png'})

describe('ProfileInfo', ()=>{
  it('ProfileInfo render', ()=>{
    renderWithRedux(<ProfileInfo profile={profile} status={'TestStatus'} isOwner={true}/>)
    expect(screen.getByRole('img', {name:"noPhoto"})).toHaveAttribute('src', "/assets/images/LoandingHome/S01-1-1024x724.png")
    expect(screen.getByRole('img', {name:"upload"})).toBeInTheDocument()
    expect(screen.getByLabelText('uploadPicture')).toBeInTheDocument()
    expect(screen.getByText('Missio')).toBeInTheDocument()
    expect(screen.getByText('https://www.facebook.com/MyName')).toBeInTheDocument()
    expect(screen.getByText('TestStatus')).toBeInTheDocument()
  })
  it('ProfileInfo profile null', ()=>{
    renderWithRedux(<ProfileInfo profile={null} status={'TestStatus'} isOwner={true}/>)
    expect(screen.queryByRole('img', {name:"upload"})).not.toBeInTheDocument()
  })
  it('ProfileInfo isOwner false', ()=>{
    renderWithRedux(<ProfileInfo profile={profile} status={'TestStatus'} isOwner={false}/>)
    expect(screen.queryByRole('img', {name:"upload"})).not.toBeInTheDocument()
    userEvent.click(screen.getByLabelText('changeStatus'))
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
  it('ProfileInfo click upload', async ()=>{
    renderWithRedux(<ProfileInfo profile={profile} status={'TestStatus'} isOwner={true}/>)
   // userEvent.upload(screen.getByRole('img', {name:"upload"}), file)
    //expect(await screen.findByRole('img', {name:"noPhoto"})).toHaveAttribute('src', "chucknorris.png")
    screen.debug()
  })
})