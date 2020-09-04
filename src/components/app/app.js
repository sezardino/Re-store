import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {CartPage, HomePage} from '../pages';

const App = (props) => {
	return (
		<Switch>
			<Route path="/" exact component={HomePage} />
			<Route path="/cart" component={CartPage} />
		</Switch>
	);
};

export default App;
