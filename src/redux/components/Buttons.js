import React from 'react';
import PropTypes from 'prop-types';
import styles from './Buttons.modules.scss';
import classnames from 'classnames/bind'


const cx = classnames.bind(styles);

export default function Buttons({onCreate, onRemove}) {
    return (
        <div className={cx("buttons")}>
            <div className={cx("btn add")} onClick={onCreate}>생성</div>
            <div className={cx("btn remove")} onClick={onRemove}>제거</div>
        </div>
    );
}

Buttons.propTypes = {
    onCreate: PropTypes.func,
    onRemove: PropTypes.func
};

Buttons.defaultProps = {
  onCreate: () => console.warn('onCreate not defined'),
  onRemove: () => console.warn('onRemove not defined')
};