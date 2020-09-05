import {ActionType} from '../action-type/';

const ActionCreator = {
	booksLoad: (books) => ({type: ActionType.booksLoaded, payload: books}),
	booksRequest: () => ({type: ActionType.booksRequest}),
	booksError: (error) => ({type: ActionType.booksError, payload: error}),
};

export {ActionCreator};
