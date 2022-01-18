import React from 'react';
import {AppSocialProject} from './App';
import '@testing-library/jest-dom';
import {renderWithRedux} from "./utils/test/test-utils";


describe('App', ()=>{
  it('AboutMe render',async ()=>{

    renderWithRedux(<AppSocialProject/>);

  })
})