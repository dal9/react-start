import React from 'react';
import classnames from 'classnames/bind'
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import configure from "./configure";
import {Provider} from "react-redux";
import './base.scss';

const cx = classnames.bind();

const store = configure();

export default function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    );
}