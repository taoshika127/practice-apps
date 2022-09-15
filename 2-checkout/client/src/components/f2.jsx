import React from 'react';

class F2 extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit() {
    this.props.form.address = document.getElementById('line1').value + document.getElementById('line2').value;
    this.props.form.city = document.getElementById('city').value;
    this.props.form.state = document.getElementById('state').value;
    this.props.form.zipcode = document.getElementById('zipcode').value;
    this.props.handleClick();
    console.log(this.props.form)
  }

  render() {
    return (
      <div>
        <div><label htmlFor="line1" name="line1">Address Line 1: </label></div>
        <div><input name="line1" id="line1" placeholder="Enter your address here" required/></div>
        <div><label htmlFor="line2" name="line2">Address Line 2: </label></div>
        <div><input name="line2" id="line2" placeholder="Enter your address here"/></div>
        <div><label htmlFor="city" name="city">City: </label></div>
        <div><input name="city" id="city" placeholder="City" required/></div>
        <div><label htmlFor="state" name="state">State: </label></div>
        <div><input name="state" id="state" placeholder="State" required/></div>
        <div><label htmlFor="zipcode" name="zipcode">Zipcode: </label></div>
        <div><input name="zipcode" id="zipcode" placeholder="Zipcode" required/></div>
        <div><button onClick={this.handleSubmit.bind(this)}>Next</button></div>
      </div>
    )
  }
}

export default F2;