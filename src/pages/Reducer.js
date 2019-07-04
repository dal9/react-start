export default function reducer(state, action) {
    switch (action.type) {
        case 'gotoPage':
            return {
                ...state,
                pageNumber: action.pageNumber
            };
        default:
            throw new Error();
    }
}
