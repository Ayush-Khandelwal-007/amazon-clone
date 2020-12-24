import React from 'react'
import './Product.css'
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import { useBasket } from '../../contexts/Basket';
import { Link } from 'react-router-dom';
import { auth, db } from '../../Firebase';

function Product({ id, title, imageurl, price, rating }) {
    const [state, dispatch] = useBasket();

    const addToBasket = () => {

        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === id
        );

        if (index === -1) {
            dispatch({
                type: 'ADD_TO_BASKET',
                item: {
                    id: id,
                    title: title,
                    imageurl: imageurl,
                    price: price,
                    rating: rating,
                    quantity: 1
                }
            });
            db
                .collection('users')
                .doc(auth.currentUser.uid)
                .set({
                    basket: [...(state.basket), {
                        id: id,
                        title: title,
                        imageurl: imageurl,
                        price: price,
                        rating: rating,
                        quantity: 1
                    }]
                });
        }
        else {
            dispatch({
                type: 'INCREASE_ITEM',
                id: id,
            });
            db
            .collection('users')
            .doc(auth.currentUser.uid)
            .set({
                basket: [...(state.basket).slice(0, index), { ...(state.basket[index]), quantity: (state.basket[index]).quantity + 1 }, ...(state.basket).slice(index + 1)]
            });
        }
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
            {
                state.user ? (
                    <button onClick={addToBasket}>Add to Cart</button>
                ) : (
                        <Link to='/signin'><button className="divert_button" >Add to Cart</button></Link>
                    )
            }

        </div>
    )
}

export default Product
