import React from 'react';
import classnames from 'classnames/bind'
import Form from "./form/Form";


const cx = classnames.bind();

export default function CreateForm(props) {

    const {isReadOnly} = props;

    return (
        <div className={"col-lx-6"}>
            <Form>
                <div className={cx("form-group", "row")}>
                    <label htmlFor="inputCode" className={cx("col-2", "col-form-label")}>식별 코드</label>
                    <div className={cx("col-10")}>
                        <input type="text" className={cx("form-control", {"form-control-plaintext" : isReadOnly})} id="inputCode"/>
                    </div>
                </div>
                <div className={cx("form-group", "row")}>
                    <label htmlFor="inputName" className={cx("col-2","col-form-label")}>이름</label>
                    <div className={cx("col-10")}>
                        <input type="text" className={cx("form-control")} id="inputName" />
                    </div>
                </div>
                <div className={cx("form-group", "row")}>
                    <label htmlFor="inputAuthUrl" className={cx("col-2", "col-form-label")}>인증 URL</label>
                    <div className={cx("col-10")}>
                        <input type="text" className={cx("form-control")} id="inputAuthUrl" />
                    </div>
                </div>
                <div className={cx("form-group", "row")}>
                    <label htmlFor="inputAPIUrl" className={cx("col-2", "col-form-label")}>API URL</label>
                    <div className={cx("col-10")}>
                        <input type="text" className={cx("form-control")} id="inputAPIUrl" />
                    </div>
                </div>
            </Form>
        </div>
    );
}