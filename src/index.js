import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// code splitting (Route-based code splitting)
import { BrowserRouter } from 'react-router-dom';
import { Suspense } from 'react';

// ReactDOM.render(<App />, document.getElementById('root'));

// code splitting (Route-based code splitting)
ReactDOM.render(
	<BrowserRouter>
		<Suspense fallback={<div className='App-header'>Loading...</div>}>
			<App />
		</Suspense>
	</BrowserRouter>,
	document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
