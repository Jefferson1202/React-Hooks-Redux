import { createStore } from 'redux';

const INITIAL_STATE ={
    data: [
        'REACET NACTIVE',
        'REACTJS',
        'NODEJS'

    ],
};

function course(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'ADD_COURSE':
            return{ ...state, data: [...state.data, action.title] };
            default:
                return state;
    }
}

const store = createStore(course);

export default store;