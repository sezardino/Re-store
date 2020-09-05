import React from 'react';
import {Switch, Route} from 'react-router-dom';

import ShopHeader from '../shop-header';
import {CartPage, HomePage} from '../pages';

const App = () => {
	return (
		<main role="main" className="container">
			<ShopHeader numItems={3} total={100} />
			<Switch>
				<Route path="/" exact component={HomePage} />
				<Route path="/cart" component={CartPage} />
			</Switch>
		</main>
	);
};

export default App;
