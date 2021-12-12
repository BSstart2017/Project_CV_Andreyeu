import React from 'react'
import ReactDom from 'react-dom'
import {CardType} from "../../redux/startLoginPage-reducer";
import CustomerCards from "./CustomerCards";

const cardsInfo:Array<CardType> = [
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
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/assets/images/LoandingHome/03-1.png`,
    headerText: 'Incredible Design',
    footerText: 'All pages are carefully crafted to fit all you may need! Also, we included lots of illustrations and elements PSD’s!'
  }
]

it('renders without crashing CustomerCards', () =>{
  const div = document.createElement('div')
  ReactDom.render(<CustomerCards spanNumber={5} cards={cardsInfo}/>, div)
  ReactDom.unmountComponentAtNode(div)
})