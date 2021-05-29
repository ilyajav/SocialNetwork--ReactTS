import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store}
from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";


export const renderTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appStore={store} />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree();

store.subscriber(renderTree);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();