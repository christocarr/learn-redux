import React, { Component } from 'react'
import { createPost } from '../actions/postActions'
import { connect } from 'react-redux'

class Postform extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }
  

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault()
    
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    this.props.createPost(post)
  }


  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form onSubmit={this.onSubmit}>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} onChange={(e) => this.onChange(e)} />
          <label>Body: </label>
          <input type="text" name="body" value={this.state.body} onChange={(e) => this.onChange(e)} />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default connect(null, { createPost })(Postform)