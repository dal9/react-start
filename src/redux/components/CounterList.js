import React from 'react';
import Counter from './Counter';
import styles from './CounterList.modules.scss';
import classnames from 'classnames/bind';
import PropTypes from 'prop-types';


const cx = classnames.bind(styles);

export default function CounterList(props) {

    const {counters, onIncrement, onDecrement, onSetColor} = props;

    const counterList = counters.map((counter, i) => (
        <Counter key={i}
                 index={i}
                {...counter}
                 onIncrement={onIncrement}
                 onDecrement={onDecrement}
                 onSetColor={onSetColor}
                 />
    ));

    return (
        <div className={cx("counter-list")}>
            {counterList}
        </div>
    );
}

CounterList.propTypes = {
    counters: PropTypes.arrayOf(PropTypes.shape({color:PropTypes.string, number:PropTypes.number})),
    onIncrement : PropTypes.func,
    onDecrement : PropTypes.func,
    onSetColor : PropTypes.func
};

CounterList.defaultProps = {
    counters:[]
};