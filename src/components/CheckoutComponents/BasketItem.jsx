import { Box } from '@material-ui/core'
import Rating from '@material-ui/lab/Rating'
import React from 'react'
import { useBasket } from '../../contexts/Basket';
import DeleteIcon from '@material-ui/icons/Delete'
import { auth, db } from '../../Firebase';

function BasketItem({ index, id, title, imageurl, price, rating, quantity }) {

    // eslint-disable-next-line
    const [{ basket }, dispatch] = useBasket();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        });
        db
            .collection('users')
            .doc(auth.currentUser.uid)
            .set({
                basket: [...basket.slice(0, index), ...basket.slice(index + 1)]
            });
    }

    const increaseItem = () => {
        dispatch({
            type: 'INCREASE_ITEM',
            id: id,
        });
        db
            .collection('users')
            .doc(auth.currentUser.uid)
            .set({
                basket: [...basket.slice(0, index), { ...basket[index], quantity: basket[index].quantity + 1 }, ...basket.slice(index + 1)]
            });
    }

    const decreaseItem = () => {
        if (quantity === 1) {
            removeFromBasket();
        }
        else {
            dispatch({
                type: 'DECREASE_ITEM',
                id: id,
            });
            db
                .collection('users')
                .doc(auth.currentUser.uid)
                .set({
                    basket: [...basket.slice(0, index), { ...basket[index], quantity: basket[index].quantity - 1 }, ...basket.slice(index + 1)]
                });
        }
    }

    return (
        <div className="basket_item">
            <img
                src={imageurl}
                alt="loading..."
                className="basket_item_image"
            />
            <div className="basket_item_info">
                <p>{title}</p>
                <p className="item_info_price">
                    <small>₹</small>
                    <strong>{price}</strong>
                </p>
                <div className="quantity_handle">
                    <div onClick={decreaseItem}>-</div>
                    <p className="item_info_quantity">
                        {quantity}
                    </p>
                    <div onClick={increaseItem}>+</div>
                </div>
                <div className="item_info_rating">
                    <Box component="fieldset" mb={3} borderColor="transparent">
                        <Rating name="read-only" value={rating} readOnly />
                    </Box>
                </div>
                <button className="remove_button" onClick={removeFromBasket}>Remove <DeleteIcon fontSize="small" /></button>
            </div>
        </div>
    )
}

export default BasketItem
