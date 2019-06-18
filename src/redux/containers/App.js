import React from 'react';
import classnames from 'classnames/bind'
import CounterContainer from "../containers/CounterContainer";
import Buttons from "../components/Buttons";
import getRandomColor from "../lib/getRandomColor";
import {connect} from "react-redux";
import * as actions from '../actions';



const cx = classnames.bind();

function App(props) {

    const {onCreate, onRemove} = props;

    return (
        <div>
            <Buttons onCreate={onCreate} onRemove={onRemove}/>
            <CounterContainer/>
        </div>
    );
}

const mapToDispatch = (dispatch) => ({
   onCreate : () => dispatch(actions.create(getRandomColor())),
   onRemove : () => dispatch(actions.remove())
});

export default connect(null, mapToDispatch)(App);