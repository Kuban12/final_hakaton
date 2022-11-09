import React, { Component } from "react";
import { VisaCreditCard as VisaCard } from "react-fancy-visa-card";
import Navbar from "../components/HomePage/Navbar";

class PaymentPage extends Component {
  pay = (e, data) => {
    console.log(data);
  };

  render() {
    return (
      <>
        <Navbar />
        <div className="App" style={{ marginBottom: "250px" }}>
          <VisaCard onSubmit={this.pay} />
        </div>
      </>
    );
  }
}

export default PaymentPage;
