import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './components/Reducer'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';


const initialState = {
  peopleList: [],
  filterBySpecie: '',
  peopleFilterBySpecie: [],
  characterFound: {},
  searchFilter: [],
  visibility: false,
  mediaId: null,
}



const store = createStore(reducer, initialState)


ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>,
  document.getElementById('root')
);


