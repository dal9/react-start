import React from 'react';
import classnames from 'classnames/bind'
import Form from "./form/Form";
import FormGroup from "./form/FormGroup";


const cx = classnames.bind();

export default function CreateForm(props) {

    const {forms, className} = props;

    return (
        <div className={cx(className)}>
            <Form>
                {forms.map(
                    (formGroup, index) => <FormGroup key={index} {...formGroup} row />
                )}
            </Form>
        </div>
    );
}