import React from 'react';
import {BookstoreServiceConsumer} from '../bookstore-service-context/';

const withBookService = (Component) => {
	const WithBookService = (props) => {
		return (
			<BookstoreServiceConsumer>
				{(bookstore) => <Component {...props} bookstore={bookstore} />}
			</BookstoreServiceConsumer>
		);
	};

	return WithBookService;
};

export default withBookService;
