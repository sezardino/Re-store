import {ActionType} from '../action-type/';

const initialState = {
	books: [],
	loading: true,
	error: null,
	cartItems: [],
	cartTotal: 120,
};

const updateOrder = (state, id, sign) => {
	const {cartItems, books} = state;
	const book = books.find((item) => item.id === id);
	const index = cartItems.findIndex((item) => item.id === id);
	const item = cartItems[index];

	const newItem = updateItem(book, item, sign);

	return {
		...state,
		cartItems: updateCart(cartItems, newItem, index),
	};
};

const updateCartItem = (cartItems, id, sign) => {
	const item = cartItems.find((item) => item.id === id);
	return {...item, count: item.count + sign, total: item.total + sign * item.price};
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

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case ActionType.FETCH_BOOKS_REQUEST:
			return {...state, books: [], loading: true, error: null};

		case ActionType.FETCH_BOOKS_SUCCESS:
			return {...state, books: action.payload, loading: false, error: null};

		case ActionType.FETCH_BOOKS_FAILURE:
			return {...state, books: [], loading: false, error: action.payload};

		case ActionType.ADD_BOOK_TO_CART: {
			return updateOrder(state, action.payload, 1);
		}

		case ActionType.DECREASE_COUNT: {
			return updateOrder(state, action.payload, -1);
		}

		case ActionType.REMOVE_BOOK_FROM_CART: {
			const item = state.cartItems.find((item) => item.id === action.payload);
			return updateOrder(state, action.payload, -item.count);
		}

		default:
			return state;
	}
};

export default reducer;
