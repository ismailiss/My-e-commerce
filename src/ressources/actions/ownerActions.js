import {
    OWNERS_LIST_GET_LIST,
    OWNERS_LIST_GET_LIST_SUCCESS,
    OWNERS_LIST_GET_LIST_ERROR,

} from '../actions';


export const getOwnersList = () => ({
    type: OWNERS_LIST_GET_LIST
});

export const getOwnersListSuccess = (items) => ({
    type: OWNERS_LIST_GET_LIST_SUCCESS,
    payload: items
});

export const getOwnersListError = (error) => ({
    type: OWNERS_LIST_GET_LIST_ERROR,
    payload: error
});

