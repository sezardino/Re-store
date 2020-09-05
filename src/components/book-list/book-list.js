import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withBookService} from '../hoc';
import BookListItem from '../book-list-item';
import {ActionCreator} from '../../actions/';

import './book-list.css';

class BookList extends Component {
	componentDidMount() {
		const {bookstore, booksLoad} = this.props;
		const data = bookstore.getBooks();
		booksLoad(data);
	}

	render() {
		const {books} = this.props;
		return (
			<ul>
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

const mapStateToProps = ({books}) => ({books});
const mapDispatchToProps = (dispatch) => ({
	booksLoad: dispatch(ActionCreator.booksLoad),
});

export default connect(mapStateToProps, mapDispatchToProps)(withBookService(BookList));
