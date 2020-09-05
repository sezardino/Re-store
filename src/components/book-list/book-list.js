import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withBookService} from '../hoc';
import {ActionCreator} from '../../actions/';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';

import './book-list.css';

class BookList extends Component {
	componentDidMount() {
		const {bookstore, booksLoad, booksRequest, booksError} = this.props;
		booksRequest();
		bookstore
			.getBooks()
			.then((data) => booksLoad(data))
			.catch((error) => booksError(error));
	}

	render() {
		const {books, loading, error} = this.props;

		if (loading) {
			return <Spinner />;
		}

		if (error) {
			return <ErrorIndicator />;
		}

		return (
			<ul className="book-list">
				{books.map((book) => {
					return (
						<li key={book.id}>
							<BookListItem book={book} />
						</li>
					);
				})}
			</ul>
		);
	}
}

const mapStateToProps = ({books, loading, error}) => ({books, loading, error});
const mapDispatchToProps = (dispatch) => ({
	booksRequest: () => dispatch(ActionCreator.booksRequest()),
	booksLoad: (books) => dispatch(ActionCreator.booksLoad(books)),
	booksError: (error) => dispatch(ActionCreator.booksError(error)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withBookService(BookList));
