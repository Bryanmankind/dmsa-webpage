import React from "react";
import { useFlutterwave } from 'flutterwave-react-v3';
import { FlutterWaveButton, closePaymentModal } from 'flutterwave-react-v3';

export function Give () { 

    const config = {
        public_key: process.env.REACT_APP_PUBLIC_KEY,
        tx_ref: Date.now(),
        amount: 100,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: 'user@gmail.com',
          phone_number: '070********',
          name: 'john doe',
        },
        customizations: {
          title: 'my Payment Title',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
      };

        useFlutterwave(config);

        const fwConfig = {
            ...config,
            text: 'Give',
            callback: (response) => {
               console.log(response);
              closePaymentModal() 
            },
            onClose: () => {},
          };

    return (
        <div clasName="give">
            <div className="sec1">
                <img src="https://cdn.pixabay.com/photo/2019/10/24/14/26/hand-4574474_1280.jpg" alt=""/>
                <h2>PARTNER WITH US</h2>
            </div>
            <div className="sec2">
                <h2>About Giving </h2>
                <p> Giving is a powerful way to make a significant difference in the world for Christ. 
                    By joining our monthly partner program, you can help us extend our reach, support vital projects, and bring hope to those in need. 
                    Learn more about how you can become a part of this transformative mission below.</p>
            </div>
            <div className="sec3">
                <h2>Become a Monthly Partner or Make a One-Time Donation</h2>
                
                <FlutterWaveButton {...fwConfig} />
            </div>
        </div>
    )
}