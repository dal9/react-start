import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import 'bootstrap/dist/css/bootstrap.min.css';
import './fonts.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import data from "./json/data.json";
import List from "./components/List";
import CreateForm from "./components/CreateForm";
import ScheduleApp from "./ScheduleApp";
import ScheduleAppWithRedux from "./ScheduleAppWithRedux";
import App from "./App";
import AppContainer from './redux/containers/App';

import {createStore} from 'redux';
import reducers from './redux/reducers';
import {Provider} from 'react-redux';

import scheduleReducers from './modules';
import Manufacturer from "./pages";

const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());
const scheduleStore = createStore(scheduleReducers, window.devToolsExtension && window.devToolsExtension());




function ManufacturerCreate() {
    return (
        <div className="container-fluid">
            <CreateForm isReadOnly/>
        </div>
    );
}


ReactDOM.render(<Manufacturer/>, document.getElementById('root'));
/*ReactDOM.render(
    <Provider store={store}>
        <AppContainer/>
    </Provider>, document.getElementById('root'));*/
/*ReactDOM.render(
    <Provider store={scheduleStore}>
        <ScheduleAppWithRedux/>
    </Provider>, document.getElementById('root'));*/



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
