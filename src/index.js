import store from "./redux/redux-store"
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


let rerenderEntireTree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
        </BrowserRouter>,
        document.getElementById('root')
    );
}


rerenderEntireTree(store.getState());
store.subscribe(()=>{
    let state = store.getState();
    rerenderEntireTree(state);
})