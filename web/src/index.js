import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import AppContainer from './modules/app/container/AppContainer.tsx';
import * as serviceWorker from './serviceWorker';
import ErrorBoundary from 'react-error-boundary';
import {Provider} from 'react-redux';
import {configureStore} from './configureStore';
import { SemanticToastContainer } from 'react-semantic-toasts';

ReactDOM.render(
  <React.StrictMode>
        <Provider store={configureStore()}>
            <SemanticToastContainer position="top-right" />
            <AppContainer />
        </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
