import React from 'react';
import logo from './logo.svg';
import Post from './components/Posts'
import PostForm from './components/Postform'
import './App.css';

function App() {
  return (
    <div className="App">
      <PostForm />
      <hr />
      <Post />
    </div>
  );
}

export default App;
