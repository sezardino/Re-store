import React from 'react';
import {connect} from 'react-redux';

import './shopping-cart-table.css';
import {ActionCreator} from '../../actions';

const ShoppingCartTable = ({items, total, onDecrease, onDelete, onIncrease}) => {
	const renderRow = (item, index) => {
		const {id, title, total, count} = item;

		return (
			<tr key={id}>
				<td>{index + 1}</td>
				<td>{title}</td>
				<td>{count}</td>
				<td>${total}</td>
				<td>
					<button
						className="btn btn-outline-danger btn-sm float-right"
						onClick={() => onDelete(id)}>
						<i className="fa fa-trash-o" />
					</button>
					<button
						className="btn btn-outline-success btn-sm float-right"
						onClick={() => onIncrease(id)}>
						<i className="fa fa-plus-circle" />
					</button>
					<button
						className="btn btn-outline-warning btn-sm float-right"
						onClick={() => onDecrease(id)}>
						<i className="fa fa-minus-circle" />
					</button>
				</td>
			</tr>
		);
	};

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>{items.map(renderRow)}</tbody>
			</table>

			<div className="total">Total: ${total}</div>
		</div>
	);
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) => ({
	items: cartItems,
	total: orderTotal,
});

const mapDispatchToProps = (dispatch) => ({
	onIncrease: (id) => dispatch(ActionCreator.ADD_BOOK_TO_CART(id)),
	onDecrease: (id) => dispatch(ActionCreator.DECREASE_COUNT(id)),
	onDelete: (id) => dispatch(ActionCreator.REMOVE_BOOK_FROM_CART(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
