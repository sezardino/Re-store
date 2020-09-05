import {ActionType} from '../action-type/';

const initialState = {
	books: [],
	loading: true,
	error: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.booksRequest:
			return {books: [], loading: true, error: null};
		case ActionType.booksLoaded:
			return {books: action.payload, loading: false, error: null};
		case ActionType.booksError:
			return {books: [], loading: false, error: action.payload};
		default:
			return state;
	}
};

export default reducer;
