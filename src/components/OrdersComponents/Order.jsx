import React from 'react'
import CurrencyFormat from "react-currency-format";
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';

function Order({ order }) {
    console.log(order);
    return (
        <div className='order'>
            <h2>Order</h2>
            <div className="order_info">
                <p>{String(order.data.timestamp.toDate())}</p>
                <p className="order__id">
                    <small>{order.id}</small>
                </p>
            </div>
            {order.data.basket?.map(item => (
                <div className="basket_item" key={item.id}>
                    <img
                        src={item.imageurl}
                        alt="loading..."
                        className="basket_item_image"
                    />
                    <div className="basket_item_info">
                        <p>{item.title}</p>
                        <p className="item_info_price">
                            <small>₹</small>
                            <strong>{item.price}</strong>
                        </p>
                        <div className="quantity_handle">
                            <p style={{ marginBottom: '1vh' }}>
                                <strong>Quantity:</strong>{item.quantity}
                            </p>
                        </div>
                        <div className="item_info_rating">
                            <Box component="fieldset" mb={3} borderColor="transparent">
                                <Rating name="read-only" value={item.rating} readOnly />
                            </Box>
                        </div>
                    </div>
                </div>
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <h3 className="order__total">Order Total: {value}</h3>
                )}
                decimalScale={2}
                value={order.data.amount / 100}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
        </div>
    )
}

export default Order