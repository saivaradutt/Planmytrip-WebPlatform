import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
//import "./index.css";
import App from "./App";
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from '../src/store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import fbConfig from '../src/config/fbConfig'
import firebase from 'firebase/app';

const store = createStore(rootReducer, 
    compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig),
    //reactReduxFirebase(fbConfig)
    )
    );

    const rrfProps = {
        firebase,
        config: fbConfig,
        dispatch: store.dispatch
        }
ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
        <App/>
        </ReactReduxFirebaseProvider>
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
