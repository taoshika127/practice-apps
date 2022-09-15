import React from 'react';

class F3 extends React.Component {
  constructor (props) {
    super(props)
  }

  handleSubmit() {
    this.props.form.creditCard = document.getElementById('creditCard').value;
    this.props.form.expirationDate = document.getElementById('expirationDate').value;
    this.props.form.cvv = document.getElementById('cvv').value;
    this.props.form.billingZipcode = document.getElementById('billingZipcode').value;
    this.props.handleClick();
    console.log(this.props.form);
  }

  render() {
    return (
      <div>
        <div><label htmlFor="creditCard" name="creditCard">Credit Card Number: </label></div>
        <div><input name="creditCard" id="creditCard" placeholder="Credit card number" required/></div>
        <div><label htmlFor="expirationDate" name="expirationDate">Expiration Date: </label></div>
        <div><input name="expirationDate" id="expirationDate" placeholder="MM/YY" required/></div>
        <div><label htmlFor="cvv" name="cvv">CVV: </label></div>
        <div><input name="cvv" id="cvv" placeholder="CVV" required/></div>
        <div><label htmlFor="billingZipcode" name="billingZipcode">Billing Zipcode: </label></div>
        <div><input name="billingZipcode" id="billingZipcode" placeholder="Zipcode" required/></div>
        <div><button onClick={this.handleSubmit.bind(this)}>Next</button></div>
      </div>


    )
  }
}

export default F3;