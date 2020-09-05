import {ActionType} from '../action-type/';

const ActionCreator = {
	booksLoad: (books) => ({type: ActionType.booksLoaded, payload: books}),
};

export {ActionCreator};
