import React from 'react';

class Confirmation extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit() {
    this.props.handleClick()
  }

  render() {
    var form = this.props.form;
    return (
      <div>
        <p>Please confirm the following information is correct:</p>
        <div className="f1">
          <div><p>{'Name: ' + form.name}</p></div>
          <div><p>{'Email Address: ' + form.email}</p></div>
        </div>
        <div className="f2">
          <div><p>{'Address: ' + form.address}</p></div>
          <div><p>{'City: ' + form.city}</p></div>
          <div><p>{'State: ' + form.state}</p></div>
          <div><p>{'Zipcode: ' + form.zipcode}</p></div>
        </div>
          <div className="f3">
          <div><p>{'Credit Card Number: ' + form.creditCard}</p></div>
          <div><p>{'Expiration Date: ' + form.expirationDate}</p></div>
          <div><p>{'CVV: ' + form.cvv}</p></div>
          <div><p>{'Billing Zipcode: ' + form.billingZipcode}</p></div>
        </div>
        <button onClick={this.handleSubmit.bind(this)}>Purchase</button>
      </div>
    )
  }
}

export default Confirmation;