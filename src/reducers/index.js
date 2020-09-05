import {ActionType} from '../action-type/';

const initialState = {
	books: [],
	loading: true,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.booksLoaded:
			return {books: action.payload, loading: false};

		default:
			return state;
	}
};

export default reducer;
