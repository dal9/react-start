import React from 'react';
import { useObserver, useLocalStore } from 'mobx-react-lite'
import classnames from 'classnames/bind'


const cx = classnames.bind();

export default function Person() {
    const person = useLocalStore(() => ({
        name: 'John',
        setName() {
            return person.name = 'Mike'
        }
    }));
    return useObserver(() => (
        <div>
            {person.name}
            <button onClick={person.setName}>No! I am Mike</button>
        </div>
    ))
}