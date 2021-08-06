import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const SimpleCardForm = ({ newService }) => {
    console.log(newService)
    const stripe = useStripe();
    const elements = useElements();

    const handleOrder = (paymentId) => {
        const order = { ...newService, paymentId }
        fetch('https://desolate-peak-20423.herokuapp.com/bookOrder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(order)
        })
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            handleOrder(paymentMethod.id);
            alert("Payment Done Successfully")
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <CardElement 
            options={{
                style: {
                  base: {
                    fontSize: '16px',
                    color: '#424770',
                    '::placeholder': {
                      color: '#aab7c4',
                    },
                  },
                  invalid: {
                    color: '#9e2146',
                  },
                },
              }}/>
            <button className="w-48 bg-gray-500 px-5 py-2"  type="submit" disabled={!stripe}>
                Pay
      </button>
        </form>
    );
};

export default SimpleCardForm;