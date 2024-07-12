import { h } from 'preact';
import { Route, Router } from 'preact-router';

import Header from './header';

// Code-splitting is automated for `routes` directory
import Home from '../routes/home';
import ImportData from '../routes/importData';
import AutoStressInv from '../routes/autoStressInv';

const App = () => (
	<div id="app">
		<Header />
		<main>
			<Router>
				<Route path="/" component={Home} />
				<ImportData path="/importData/" />
				<AutoStressInv path="/autoStressInv/" />
			</Router>
		</main>
	</div>
);

export default App;
