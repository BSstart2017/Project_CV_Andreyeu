import React from 'react'
import ReactDom from 'react-dom'
import CustomerCards from './CustomerCards'
const {transform} = require('@babel/core');

it('renders without crashing CustomerCards', () =>{
  const div = document.createElement('div')
  ReactDom.render(transform(<CustomerCards spanNumber={5}/>), div)
  ReactDom.unmountComponentAtNode(div)
})