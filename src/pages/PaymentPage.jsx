import React, { Component } from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";

class PaymentPage extends Component {
  pay = (e, data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <div className="App" style={{ marginBottom: "250px" }}>
          <VisaCard onSubmit={this.pay} />
        </div>
      </>
    );
  }
}

export default PaymentPage;
