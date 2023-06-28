import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./App"
import {Provider} from "react-redux"
import store from "./states/store"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //react.strictmode isliye use karte hai taki vo hume additional checks or warning deta rahe
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>

  </React.StrictMode>
);

//JSX -> Javascript XMl
//1) instead of use class use className
//Always use camel case
  //javascript bhi add kar shakta hoon

  //store define , Provider defibr
  //props 
  