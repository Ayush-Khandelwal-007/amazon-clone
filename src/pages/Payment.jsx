import { Input } from '@material-ui/core';
// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useBasket } from '../contexts/Basket';
import '../components/PaymentComponents/Payment.css'
import BasketItem from '../components/CheckoutComponents/BasketItem';
import { getBasketTotal, getBasketTotalQuantity } from '../contexts/reducer';
import { Link, useHistory } from 'react-router-dom';
import CurrencyFormat from 'react-currency-format';
import StripeCheckout from "react-stripe-checkout";
import axios from '../components/PaymentComponents/axios';
import { auth, db } from '../Firebase';
import firebase from 'firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useBasket();

    const history = useHistory();

    async function handleToken(token, addresses) {
        const response = await axios.post(
            "https://5l5il.sse.codesandbox.io/checkout",
            { token, price: getBasketTotal(basket) }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            console.log("Payment Succesfull");
        } else {
            console.log("Payment Failed");
        }

        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                basket: basket,
                amount: getBasketTotal(basket) * 100,
            })

        dispatch({
            type: 'EMPTY_BASKET'
        })

        db
            .collection('users')
            .doc(auth.currentUser.uid)
            .set({
                basket: []
            });

        history.replace('/orders')
    }

    const [house, setHouse] = useState('');
    const [city, setCity] = useState('');

    return (
        <div className="payment">
            <h1>CheckOut(<Link to="/checkout">{getBasketTotalQuantity(basket)} items</Link>)</h1>
            <div className="payment_container">
                <div className="payment_section">
                    <div className="payment_title">
                        <h4>Delivery Address</h4>
                    </div>
                    <div className="payment_address">
                        <div>
                            <p><strong>Email: </strong>{user?.email}</p>
                            <p><strong>House/Flat number,locality: </strong>{house}</p>
                            <p><strong>City,State: </strong>{city}</p>
                        </div>
                        <div className="input_address">
                            <Input
                                className='input_field'
                                type="text"
                                placeholder="House/Flat number,locality"
                                value={house}
                                onChange={e => setHouse(e.target.value)}
                            />
                            <Input
                                className='input_field'
                                type="text"
                                placeholder="City,State"
                                value={city}
                                onChange={e => setCity(e.target.value)}
                            />
                        </div>
                    </div>

                </div>
                <hr></hr>
                <div className="payment_section">
                    <div className="payment_title">
                        <h4>Review Items and delivery</h4>
                    </div>
                    <div className="payment_items">
                        {
                            basket?.map((item) => {
                                return (
                                    <div key={item.id}>
                                        <BasketItem
                                            id={item.id}
                                            title={item.title}
                                            imageurl={item.imageurl}
                                            price={item.price}
                                            rating={item.rating}
                                            quantity={item.quantity}
                                        />
                                        <hr></hr>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <hr></hr>
                <div className="payment_section">
                    <div className="payment_title">
                        <h4>Payment Methods</h4>
                    </div>
                    <div className="payment_details">
                        <div className="payment_pricecontainer">
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"₹"}
                            />
                            <StripeCheckout
                                stripeKey="pk_test_51I00hXLRBbz610XMtuksd3VcGKq0Mn2PPF3W0GicgtgaeSxxHKBFZmJ3aSsGbC5iEuFxpYqyhwsHzCtcLKxO5gxz00GfxNFgzJ"
                                token={handleToken}
                                amount={getBasketTotal(basket) * 100}
                                currency='inr'
                                billingAddress
                                shippingAddress
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
