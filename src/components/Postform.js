import React, { Component } from 'react'

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


  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form>
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

export default Postform