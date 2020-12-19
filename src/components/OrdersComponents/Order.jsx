import React from 'react'
import moment from "moment";
import CurrencyFormat from "react-currency-format";
import Rating from '@material-ui/lab/Rating';
import { Box } from '@material-ui/core';

function Order({ order }) {
    return (
        <div className='order'>
            <h2>Order</h2>
            <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
            <p className="order__id">
                <small>{order.id}</small>
            </p>
            {order.data.basket?.map(item => (
                <div className="basket_item">
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