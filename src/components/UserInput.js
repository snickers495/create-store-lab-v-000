import React, { Component } from 'react';


class UserInput extends Component {
  constructor(){
    super()
    this.state = {
      username: '',
      hometown: ''
    }
  }
  handleUsernameChange(event){
    this.setState({username: event.target.value})

  }
  handleHometownChange(event){
    this.setState({hometown: event.target.value})
  }
  handleSubmit(event){
    event.preventDefault();
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        hometown: this.state.hometown,
        username: this.state.username
      }
    })
  }
  render() {
    return(
      <div>
        <form onSubmit={(event)=> this.handleSubmit(event)} >
          <input onChange={(event)=> this.handleUsernameChange(event)} type="text" name="username"/>
          <input onChange={(event)=> this.handleHometownChange(event)} type="text" name="hometown"/>
          <input type="submit"/>
        </form>
      </div>
    );
  }
};

export default UserInput;
