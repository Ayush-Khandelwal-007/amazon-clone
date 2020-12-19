import { Input } from '@material-ui/core';
// eslint-disable-next-line
import React, { useEffect, useState } from 'react'
import { useBasket } from '../contexts/Basket';
import '../components/PaymentComponents/Payment.css'
import BasketItem from '../components/CheckoutComponents/BasketItem';
import { getBasketTotal, getBasketTotalQuantity } from '../contexts/reducer';
import { Link, useHistory } from 'react-router-dom';
// eslint-disable-next-line
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
// import axios from '../components/PaymentComponents/axios';
import { db } from '../Firebase';
import firebase from 'firebase';

function Payment() {

    const [{ basket, user }, dispatch] = useBasket();

    // const stripe = useStripe();
    // const elements = useElements();

    const history = useHistory();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");

    // const [clientSecret, setClientSecret] = useState(true);

    // useEffect(() => {

    //     const getClientSecret = async () => {
    //         const response = await axios({
    //             method: 'post',
    //             url: `/payments/create?total=${getBasketTotal(basket) * 100}`
    //         });
    //         setClientSecret(response.data.clientSecret)
    //     }

    //     getClientSecret();
    // }, [basket])

    const submitFunction = async (e) => {
        e.preventDefault();
        setProcessing(true);

        // const payload = await stripe.confirmCardPayment(clientSecret, {
        //     payment_method: elements.getElement(CardElement)
        // }).then(({ paymentIntent }) => {

        //     db
        //       .collection('users')
        //       .doc(user?.uid)
        //       .collection('orders')
        //       .doc(paymentIntent.id)
        //       .set({
        //           basket: basket,
        //           amount: paymentIntent.amount,
        //           created: paymentIntent.created
        //       })

        //     setSucceeded(true);
        //     setError(null)
        //     setProcessing(false)

        //     dispatch({
        //         type: 'EMPTY_BASKET'
        //     })

        //     history.replace('/orders')
        // })
        db
            .collection('users')
            .doc(user?.uid)
            .collection('orders')
            .add({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                basket: basket,
                // amount: paymentIntent.amount,
                amount:getBasketTotal(basket)*100,
                // created: paymentIntent.created
                created:true,
            })
        setSucceeded(true);
        setError(null)
        setProcessing(false)

        dispatch({
            type: 'EMPTY_BASKET'
        })

        history.replace('/orders')
    }

    const handleChange = (e) => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
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
                        <form onSubmit={submitFunction}>
                            <CardElement onChange={handleChange} />

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
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                                {error && <div>{error}</div>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
