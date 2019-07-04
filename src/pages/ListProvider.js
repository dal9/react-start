import React, {useReducer} from 'react';
import reducer from './Reducer';

const pageInfo = {
    totalPages: 3,
    pageNumber: 1,
    pageSize: 20,
    first: false,
    last: false
};

const PageContext = React.createContext(pageInfo);

function ListProvider({children}) {

    const [state, dispatch] = useReducer(reducer, pageInfo);

    return (
        <PageContext.Provider value={{state, dispatch}}>
            {children}
        </PageContext.Provider>
    );
}

export { PageContext, ListProvider };