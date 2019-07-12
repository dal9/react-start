import React from 'react';
import classnames from 'classnames/bind'
import Form from "./form/Form";
import FormGroup from "./form/FormGroup";
import {Card, CardBody} from "./card";


const cx = classnames.bind();

export default function CreateForm(props) {

    const {forms, className, data, onCancel} = props;

    return (
        <Card className={cx("col-6")}>
            <CardBody>
                <div className={cx(className)}>
                    <Form>
                        {forms.map(
                            (formGroup, index) => <FormGroup key={index} {...formGroup} inputData={data[formGroup.column]} row/>
                        )}
                        <div className={cx("form-group", "row")}>
                            <div className={cx("col-10", "offset-2", "mt-1")}>
                                <button type="button" className={cx("btn", "btn-sm", "btn-primary", "mr-1")}>Submit</button>
                                <button type="button" className={cx("btn", "btn-sm", "btn-secondary")} onClick={onCancel}>Cancel</button>
                            </div>
                        </div>

                    </Form>
                </div>
            </CardBody>
        </Card>
    );
}