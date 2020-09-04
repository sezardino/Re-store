import {ActionType} from '../action-type/';

const ActionCreator = {
	[ActionType.booksLoaded]: (books) => ({type: ActionType.booksLoaded, payload: books}),
};

export {ActionCreator};
