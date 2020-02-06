import {
    OWNERS_LIST_GET_LIST,
    OWNERS_LIST_GET_LIST_SUCCESS,
    OWNERS_LIST_GET_LIST_ERROR,

} from '../../actions';


const INIT_STATE = {
	ownersItems: null,
	error: '',
	loading: false
};



export default (state = INIT_STATE, action) => {
	switch (action.type) {

		case OWNERS_LIST_GET_LIST:
			console.log('OWNERS_LIST_GET_LIST reducer')

			return { ...state, loading: false };

		case OWNERS_LIST_GET_LIST_SUCCESS:
			return { ...state, loading: true, ownersItems: action.payload };

		case OWNERS_LIST_GET_LIST_ERROR:
			return { ...state, loading: true, error: action.payload };

		default: return { ...state };
	}
}
