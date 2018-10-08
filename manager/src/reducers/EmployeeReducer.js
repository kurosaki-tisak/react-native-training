import {
    EMPLOYEE_FETCH_SUCCESS,
    EMPLOYEE_SAVE_SUCCESS
} from '../actions/types';

const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCH_SUCCESS:
            return action.payload;
        case EMPLOYEE_SAVE_SUCCESS:
            return INITIAL_STATE;
        default:
            return state;
    }
};