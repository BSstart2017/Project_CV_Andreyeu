import React from "react";
import {render, screen} from "@testing-library/react";
import {UserAvatar} from "./UserAvatar";

const avatar = `${process.env.PUBLIC_URL}/assets/images/LoandingHome/S01-1-1024x724.png`
describe('UserAvatar', ()=>{
  it('UserAvatar render', ()=>{
    render(<UserAvatar title={'Missio'} avatar={avatar}/>)
    expect(screen.getByRole('img')).toHaveAttribute('title', 'Missio')
    expect(screen.getByRole('img')).toHaveAttribute('src', avatar)
  })
  it('UserAvatar title and avatar null', ()=>{
    render(<UserAvatar title={null} avatar={null}/>)
    expect(screen.getByRole('img')).toHaveAttribute('title', '')
    expect(screen.getByRole('img')).toHaveAttribute('src', "userDefault.jpg")
  })
  it('UserAvatar avatar undefined', ()=>{
    render(<UserAvatar title={null} avatar={undefined}/>)
    expect(screen.getByRole('img')).toHaveAttribute('title', '')
    expect(screen.getByRole('img')).toHaveAttribute('src', "userDefault.jpg")
  })
})