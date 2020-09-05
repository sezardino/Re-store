import {ActionType} from '../action-type/';

const initialState = {
	books: [],
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.FETCH_BOOKS_REQUEST:
			return {books: [], loading: true, error: null};
		case ActionType.FETCH_BOOKS_SUCCESS:
			return {books: action.payload, loading: false, error: null};
		case ActionType.FETCH_BOOKS_FAILURE:
			return {books: [], loading: false, error: action.payload};
		default:
			return state;
	}
};

export default reducer;
