import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, compose, createStore} from "redux";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import App from './App';
import {rootReducer} from "./Redux/rootReducer";

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);

// const store = createStore(
//     rootReducer,
//     applyMiddleware(thunk)
// );

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(
    <BrowserRouter>
      {app}
    </BrowserRouter>,
    document.getElementById('root')
);

