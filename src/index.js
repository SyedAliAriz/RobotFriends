import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'tachyons';

ReactDOM.render(<App/>/*This is passing robots as an arraywhich can be accessed inside props*/
	, document.getElementById('root'));
registerServiceWorker();
