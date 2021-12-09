import React from 'react'
import ReactDom from 'react-dom'
import {AppSocialProject} from './App'

it('renders without crashing AppSocialProject', () =>{
  const div = document.createElement('div')
  ReactDom.render(<AppSocialProject />, div)
  ReactDom.unmountComponentAtNode(div)
})