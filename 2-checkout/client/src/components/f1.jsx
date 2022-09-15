import React from 'react';

class F1 extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit() {
    this.props.form.name = document.getElementById('name').value;
    this.props.form.email = document.getElementById('email').value;
    this.props.form.password = document.getElementById('password').value;
    this.props.handleClick()
  }

  render() {
    return (
      <div>
        <div><label htmlFor="name" name="name">Name: </label></div>
        <div><input name="name" id="name" placeholder="Enter your name here" required/></div>
        <div><label htmlFor="email" name="email">Email Address: </label></div>
        <div><input name="email" id="email" placeholder="Enter your email address here" required/></div>
        <div><label htmlFor="password" name="password">Password: </label></div>
        <div><input name="password" id="password" placeholder="Enter your password here" required/></div>
        <div><button onClick={this.handleSubmit.bind(this)}>Next</button></div>
      </div>
    )
  }
}

export default F1;