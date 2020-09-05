import React from 'react';

import './book-list-item.css';

const BookListItem = ({book, onButtonClick}) => {
	const {title, author, price, coverImage} = book;
	return (
		<div className="book-list-item">
			<div className="book-cover">
				<img src={coverImage} alt="cover" />
			</div>
			<div className="book-details">
				<h3 className="book-title">{title}</h3>
				<div className="book-author">{author}</div>
				<div className="book-price">${price}</div>
				<button className="btn btn-info add-to-cart" onClick={onButtonClick}>
					Add to cart
				</button>
			</div>
		</div>
	);
};

export default BookListItem;
