import React from "react";
import { useState } from "react";
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';


export function Give() {
  // State for the form inputs
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [name, setName] = useState('');
  const [amount, setAmount] = useState(100); // Default amount set to 100

  // Configuration for the Flutterwave payment
  const fwConfig = {
    public_key: process.env.REACT_APP_PUBLIC_KEY,
    tx_ref: Date.now().toString(),
    amount: amount,
    currency: 'NGN',
    payment_options: 'card,mobilemoney,ussd',
    customer: {
      email: email,
      phone_number: phoneNumber,
      name: name,
    },
    customizations: {
      title: 'Mission',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
    text: 'Give',
    callback: (response) => {
      console.log(response);
      closePaymentModal();
    },
    onClose: () => {},
  };

  return (
    <div className="give">
      <div className="sec1">
        <img src="https://cdn.pixabay.com/photo/2019/10/24/14/26/hand-4574474_1280.jpg" alt="" />
        <h2>PARTNER WITH US</h2>
      </div>
      <div className="sec2">
        <h2>About Giving</h2>
        <p>
          Giving is a powerful way to make a significant difference in the world for Christ.
          By joining our monthly partner program, you can help us extend our reach, support vital projects, and bring hope to those in need.
          Learn more about how you can become a part of this transformative mission below.
        </p>
      </div>
      <div className="sec3">
        <h2>Become a Monthly Partner or Make a One-Time Donation</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            placeholder="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <FlutterWaveButton {...fwConfig} />
        </form>
      </div>
    </div>
  );
}