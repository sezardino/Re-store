import {ActionType} from '../action-type/';

const initialState = {
	cartItems: [],
	cartTotal: 0,
};

const updateOrder = (state, id, sign) => {
	const {
		shoppingCart: {cartItems},
		bookList: {books},
	} = state;
	const book = books.find((item) => item.id === id);
	const index = cartItems.findIndex((item) => item.id === id);
	const item = cartItems[index];

	const newItem = updateItem(book, item, sign);

	return {
		total: 0,
		cartItems: updateCart(cartItems, newItem, index),
	};
};

const updateItem = (book, item = {}, sign) => {
	const {id = book.id, title = book.title, count = 0, total = 0} = item;
	return {
		id,
		title,
		total: total + sign * book.price,
		count: count + sign * 1,
	};
};

const updateCart = (cartItems, item, index) => {
	if (item.count === 0) {
		return [...cartItems.slice(0, index), ...cartItems.slice(index + 1)];
	}

	if (index < 0) {
		return [...cartItems, item];
	} else {
		return [...cartItems.slice(0, index), item, ...cartItems.slice(index + 1)];
	}
};

const reducer = (state, action) => {
	if (state === undefined) {
		return initialState;
	}
	switch (action.type) {
		case ActionType.ADD_BOOK_TO_CART: {
			return updateOrder(state, action.payload, 1);
		}

		case ActionType.DECREASE_COUNT: {
			return updateOrder(state, action.payload, -1);
		}

		case ActionType.REMOVE_BOOK_FROM_CART: {
			console.log(action);
			const item = state.shoppingCart.cartItems.find((item) => item.id === action.payload);
			return updateOrder(state, action.payload, -item.count);
		}

		default:
			return state.shoppingCart;
	}
};

export default reducer;
