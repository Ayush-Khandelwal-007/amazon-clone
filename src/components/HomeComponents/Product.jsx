import React from 'react'
import './Product.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useBasket } from '../../contexts/Basket';

function Product({ id, title, imageurl, price, rating }) {
    const [state, dispatch] = useBasket();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                imageurl: imageurl,
                price: price,
                rating: rating,
            }
        })
    }

    return (
        <div className="product">
            <div className="product_info">
                <p>{title}</p>
                <p className="product_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="product_rating">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </div>
            </div>
            <img
                src={imageurl}
                alt="product_image"
                className="product_image"
            />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product
