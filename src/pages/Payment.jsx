import { Input } from '@material-ui/core';
import React from 'react'
import { useBasket } from '../contexts/Basket';
import '../components/PaymentComponents/Payment.css'
import BasketItem from '../components/CheckoutComponents/BasketItem';
import { getBasketTotalQuantity } from '../contexts/reducer';
import { Link } from 'react-router-dom';

function Payment() {

    const [house, setHouse] = React.useState('');
    const [city, setCity] = React.useState('');

    const [{ basket, user }, dispatch] = useBasket();

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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
