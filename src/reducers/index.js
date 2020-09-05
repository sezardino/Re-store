import cartReducer from './cart';
import booksReducer from './books';

const reducer = (state, action) => {
	return {
		bookList: booksReducer(state, action),
		shoppingCart: cartReducer(state, action),
	};
};

export default reducer;
