import React, { Component } from 'react'

class Postform extends Component {
  state = {
    title: '',
    body: ''
  }
  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form>
          <label>Title: </label>
          <input type="text" name="title" value={this.state.title} />
          <label>Body: </label>
          <input type="text" name="body" value={this.state.body} />
          <button type="submit">submit</button>
        </form>
      </div>
    )
  }
}

export default Postform