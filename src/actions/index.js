import {ActionType} from '../action-type/';

const ActionCreator = {
	[ActionType.FETCH_BOOKS_REQUEST]: () => ({type: ActionType.FETCH_BOOKS_REQUEST}),
	[ActionType.FETCH_BOOKS_SUCCESS]: (books) => ({
		type: ActionType.FETCH_BOOKS_SUCCESS,
		payload: books,
	}),
	[ActionType.FETCH_BOOKS_FAILURE]: (error) => ({
		type: ActionType.FETCH_BOOKS_FAILURE,
		payload: error,
	}),
	[ActionType.ADD_BOOK_TO_CART]: (id) => ({
		type: ActionType.ADD_BOOK_TO_CART,
		payload: id,
	}),
	[ActionType.DECREASE_COUNT]: (id) => ({
		type: ActionType.DECREASE_COUNT,
		payload: id,
	}),
	[ActionType.REMOVE_BOOK_FROM_CART]: (id) => ({
		type: ActionType.REMOVE_BOOK_FROM_CART,
		payload: id,
	}),
};
export {ActionCreator};
