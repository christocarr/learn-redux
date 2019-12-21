import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { fetchPosts } from '../actions/postActions'

class Posts extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    const postItems = this.props.posts.map(post => 
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

const mapStateToProps = state => ({
  posts: state.posts.items
})

export default connect(mapStateToProps, { fetchPosts })(Posts)