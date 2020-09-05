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
};

export {ActionCreator};
