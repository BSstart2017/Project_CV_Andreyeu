import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import store from "./redux/store";
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

let renderElement = (state) => {
    ReactDOM.render(<React.StrictMode>
        <BrowserRouter>
        <App state={state} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
        </React.StrictMode>,
        document.getElementById('root'));
}

reportWebVitals();
renderElement(store.getState())
store.subscribe(()=>{
    let state = store.getState();
    renderElement(state)
});
