import React from 'react';
import store from './store'
import { Provider } from 'react-redux'

import logo from './logo.svg';
import Post from './components/Posts'
import PostForm from './components/Postform'
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <PostForm />
        <hr />
        <Post />
      </div>
    </Provider>
  );
}

export default App;
