import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {store} from './redux/redux-store'
import {BrowserRouter} from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import {StoreContext} from "./StoreContext";

export const renderTree = () => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store}>
            <React.StrictMode>
                <App />
            </React.StrictMode>
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}

renderTree();

store.subscribe( () =>{
    renderTree()
    }
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// <Provide store={store}> => redux
//     <App />
// </Provide>