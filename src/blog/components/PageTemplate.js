import React from 'react';
import styles from './PageTemplate.modules.scss';
import classnames from 'classnames/bind'
import Header from "./common/Header";
import Footer from "./common/Footer";


const cx = classnames.bind(styles);

export default function PageTemplate({children}) {
    return (
        <div className={cx("page-template")}>
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </div>
    );
}