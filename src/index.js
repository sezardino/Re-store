import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import {BookstoreServiceProvider} from './components/bookstore-service-context/';

import store from './store';
import BookstoreService from './services/bookstore-service';

import ErrorBoundary from './components//error-boundary';
import App from './components/app';

const bookstoreService = new BookstoreService();

ReactDOM.render(
	<Provider store={store}>
		<ErrorBoundary>
			<BookstoreServiceProvider value={bookstoreService}>
				<Router>
					<App />
				</Router>
			</BookstoreServiceProvider>
		</ErrorBoundary>
	</Provider>,
	document.querySelector('#root')
);
