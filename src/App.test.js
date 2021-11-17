import React from 'react'
import ReactDom from 'react-dom'
import {act} from 'react-test-renderer';
import AppSocialProject from './App'

it('renders without crashing AppSocialProject', () =>{
  const div = document.createElement('div')
  act(() => {
    ReactDom.render(<AppSocialProject />, div)
  })
  ReactDom.unmountComponentAtNode(div)
})