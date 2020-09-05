import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withBookService} from '../hoc';
import {ActionCreator} from '../../actions/';

import BookListItem from '../book-list-item';
import Spinner from '../spinner';

import './book-list.css';

class BookList extends Component {
	componentDidMount() {
		const {bookstore, booksLoad} = this.props;
		const data = bookstore.getBooks();
		booksLoad(data);
	}

	render() {
		const {books, loading} = this.props;

		if (loading) {
			return <Spinner />;
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

const mapStateToProps = ({books, loading}) => ({books, loading});
const mapDispatchToProps = (dispatch) => ({
	booksLoad: (books) => dispatch(ActionCreator.booksLoad(books)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withBookService(BookList));
