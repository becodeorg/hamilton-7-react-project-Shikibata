import React from "react";
//import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Redux Setup
import {createStore, applyMiddleware, compose} from "redux";
import rootReducer from "./reducer";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import ReactDOM from "react-dom/client";
import {BrowserRouter} from "react-router-dom";

const composer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, composer(applyMiddleware(thunk)));

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
