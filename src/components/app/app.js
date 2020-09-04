import React from 'react';
import ErrorBoundary from '../error-boundary';

const App = () => {
	return (
		<ErrorBoundary>
			<p>Hello World</p>
		</ErrorBoundary>
	);
};

export default App;
