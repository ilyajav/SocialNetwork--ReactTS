import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {addDialogMessage, addProfilePost, changeDialogMessage, changeProfilePost, state} from "./redux/state";
import {BrowserRouter} from "react-router-dom";


export const renderTree = () =>{
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App appState={state} addProfilePost={addProfilePost} changeProfilePost={changeProfilePost}
                     addDialogMessage={addDialogMessage}
                     changeDialogMessage={changeDialogMessage}
                />
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}