import {ActionType} from '../action-type/';

const initialState = {
	books: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.booksLoaded:
			return {books: action.payload};

		default:
			return state;
	}
};

export default reducer;
