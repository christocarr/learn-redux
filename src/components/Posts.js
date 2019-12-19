import React, { Component, Fragment } from 'react'

class Posts extends Component {
  constructor(props) {
    super(props) 
      this.state = {
        posts: []
    }
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => this.setState({ posts: data }))
  }

  render() {
    const postItems = this.state.posts.map(post => 
      <li key={post.id}>
        <h3>{post.title}</h3>
        <div>{post.body}</div>
      </li>
    )
    return (
      <Fragment>
        <h2>Posts</h2>
        <ul>{postItems}</ul>
      </Fragment>
    )
  }
}

export default Posts