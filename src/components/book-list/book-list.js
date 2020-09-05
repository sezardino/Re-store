import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withBookService} from '../hoc';
import {ActionCreator} from '../../actions/';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

const BookList = ({books, onButtonClick}) => {
	return (
		<ul className="book-list">
			{books.map((book) => {
				return (
					<li key={book.id}>
						<BookListItem book={book} onButtonClick={() => onButtonClick(book.id)} />
					</li>
				);
			})}
		</ul>
	);
};

class BookListContainer extends Component {
	componentDidMount() {
		const {fetchBooks} = this.props;
		fetchBooks();
	}

	render() {
		const {books, loading, error, toCartHandler} = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return <BookList books={books} onButtonClick={toCartHandler} />;
	}
}

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});
const mapDispatchToProps = (dispatch, ownProps) => ({
	fetchBooks: () => {
		const {bookstore} = ownProps;
		dispatch(ActionCreator.FETCH_BOOKS_REQUEST());
		bookstore
			.getBooks()
			.then((data) => dispatch(ActionCreator.FETCH_BOOKS_SUCCESS(data)))
			.catch((error) => dispatch(ActionCreator.FETCH_BOOKS_FAILURE(error)));
	},
	toCartHandler: (id) => dispatch(ActionCreator.ADD_BOOK_TO_CART(id)),
});

export default withBookService(connect(mapStateToProps, mapDispatchToProps)(BookListContainer));
