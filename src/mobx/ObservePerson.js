import React from 'react';
import {Observer, useLocalStore} from 'mobx-react-lite';
import classnames from 'classnames/bind'


const cx = classnames.bind();

export default function ObservePerson() {
    const person = useLocalStore(() => ({ name: 'John' }))
    return (
        <div>
            {person.name} <i>I will never change my name</i>
            <div>
                <Observer>{() => <div>{person.name}</div>}</Observer>
                <button onClick={() => (person.name = 'Mike')}>
                    I want to be Mike
                </button>
            </div>
        </div>
    )
}